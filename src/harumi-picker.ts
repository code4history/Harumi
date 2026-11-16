/**
 * HarumiPicker（`<harumi-picker>`）— 読み取れた字から元号の候補を出し、選んだ候補を入力欄へ入れる。
 *
 * 操作・見た目・要素の形は兄弟プロダクト Nagarjuna の `<naga-ime>`（Nagarjuna/src/lib/ime/naga-ime.ts）に合わせる。
 *  - 常駐しない。取り付けた欄にフォーカスすると、欄の右上に小さな起動ボタンが出るだけ。
 *  - 起動はボタン押下または Ctrl/Cmd+J の明示操作のみ。
 *  - 起動中もシステム IME の変換（composition）には介入しない。
 *  - 確定は Enter / Tab / クリック / 数字キー、取消は Esc。
 *  - 広幅は欄の下（入らなければ上）、狭幅は欄のすぐ下に可視幅いっぱいの板として出す（文書の座標）。
 *
 * `<naga-ime>` との違い:
 *  - 連続入力はしない。候補を選ぶと閉じる。
 *  - 1 要素が 1 組の欄（和暦・西暦・干支）を受け持つ。どの欄から開いても、選んだ候補の
 *    和暦（例「寛永1」）・西暦（例「1624」）・干支（例「甲子」）を、組のそれぞれの欄へ入れる。
 *    値はキャレット位置への挿入ではなく、まるごと置き換える（∴ 挿入位置の縦棒は無い）。
 *  - 検索の条件（西暦の範囲・延長マッチ・戊と戌／己と巳の同一視）をポップアップ内で変えられる。
 *
 * 要素の形:
 *  - `new HarumiPicker(options)` でも `<harumi-picker>` でも同じものができる。モジュールの評価で
 *    `harumi-picker` を登録する。別の実装が登録済みなら上書きしない（そのときこのクラスの `new` は TypeError）。
 *  - trigger・popup・スタイルは影の中に置く。document.head に `<style>` を入れない。
 *  - 属性 → プロパティの一方向。プロパティへの代入は属性を変えない。不正な値は黙って既定値にする。
 *  - DOM の無い環境（Node のサーバー側）で import しても落ちない（登録もしない）。
 */
import { ambiguousSearch } from './search';
import { HARUMI_STYLE_ATTRIBUTE, HARUMI_STYLE_TEXT } from './harumi-picker-styles';
import type { SearchOptions, SearchResult } from './types';

type HarumiField = HTMLInputElement | HTMLTextAreaElement;
type Role = 'nengo' | 'year' | 'eto';
type FieldRef = string | Element | null | undefined;
type DetachTarget = string | Element | ArrayLike<Element> | Iterable<Element>;

const ROLES: readonly Role[] = ['nengo', 'year', 'eto'];
const TAG_NAME = 'harumi-picker';
const PACKAGE_NAME = '@c4h/harumi';
const DEFAULT_TRIGGER_LABEL = '元';
const DEFAULT_MAX_CANDIDATES = 100;
const DEFAULT_DOCK_BREAKPOINT = 560;
const SEARCH_PLACEHOLDER = '読み取れた字（例: 應廿寅）';
const SEARCH_LABEL = '字';
const TRIGGER_SIZE_PX = 26;
const TRIGGER_GAP_PX = 4;
const TRIGGER_MARGIN_PX = 4;
const POPUP_GAP_PX = 4;

/* 狭幅（dock）の割り付け。harumi-picker-styles.ts の dock 時の高さと一致させる。 */
/** タイトル行（見出し・畳むボタン・閉じるボタン）。 */
const DOCK_TITLE_PX = 34;
/** 字の欄の行（外余白 3px×2 を含む）。 */
const DOCK_SEARCH_PX = 36;
/** 畳んだ「条件」の行。 */
const DOCK_CONDITIONS_PX = 24;
/** 候補 1 行の高さ（タップの的の大きさ）。 */
const DOCK_ROW_PX = 44;
/** dock 時に同時に見せる候補の上限。 */
const DOCK_ROWS = 3;
/** popup の上端のアクセントの線。 */
const DOCK_BORDER_PX = 2;
/** キーボード上端（可視領域の下端）との間隔。 */
const DOCK_GAP_PX = 8;
/** 畳んだ高さ（タイトル行＋枠）。 */
const DOCK_FOLDED_PX = DOCK_TITLE_PX + DOCK_BORDER_PX;

/** 属性名 → プロパティ名（大文字の前で区切り `-` でつなぐ機械変換）。 */
const ATTRIBUTE_TO_PROPERTY = {
  nengo: 'nengo',
  year: 'year',
  eto: 'eto',
  'trigger-label': 'triggerLabel',
  shortcut: 'shortcut',
  'max-candidates': 'maxCandidates',
  'dock-breakpoint': 'dockBreakpoint',
  'show-conditions': 'showConditions',
  range: 'range',
  'over-match': 'overMatch',
  'tsuchinoe-inu': 'tsuchinoeInu',
  'tsuchinoto-mi': 'tsuchinotoMi',
} as const;

type ObservedAttribute = keyof typeof ATTRIBUTE_TO_PROPERTY;

/** 昇格前に代入されうるプロパティ（upgrade property）。 */
const UPGRADE_PROPERTIES = [...Object.values(ATTRIBUTE_TO_PROPERTY), 'searchOptions'] as const;

/** 1 組の欄。`attach()` に渡す。セレクタは `document.querySelector` の最初の一致を使う。 */
export interface HarumiPickerTargets {
  /** 和暦（元号＋年数。例「寛永1」）を入れる欄 */
  nengo?: FieldRef;
  /** 西暦（例「1624」）を入れる欄 */
  year?: FieldRef;
  /** 干支（例「甲子」）を入れる欄 */
  eto?: FieldRef;
}

/** 解決済みの 1 組（取り付けていない役は null）。 */
export interface HarumiPickerFields {
  nengo: HarumiField | null;
  year: HarumiField | null;
  eto: HarumiField | null;
}

/** `new HarumiPicker(options)` のオプション。すべて省略可能。属性と同じ意味。 */
export interface HarumiPickerOptions {
  /** 起動ボタンに表示する文字。既定は '元'。 */
  triggerLabel?: string;
  /** Ctrl+J / Cmd+J で開くか。既定は true。 */
  shortcut?: boolean;
  /** 一度に表示する候補の最大件数。既定は 100。 */
  maxCandidates?: number;
  /** この幅（CSS px）未満の viewport では、欄のすぐ下に可視幅いっぱいの板として出す。既定は 560。 */
  dockBreakpoint?: number;
  /** 条件欄（西暦の範囲・延長マッチ・同一視）を出すか。既定は true。 */
  showConditions?: boolean;
  /** 検索条件の初期値（`ambiguousSearch` のオプションと同じ）。 */
  searchOptions?: SearchOptions;
}

/** `<harumi-picker>` のイベント（bubbles・composed: false・cancelable: false）。 */
export interface HarumiPickerEventMap {
  /** popup が開いた後 */
  harumiOpen: CustomEvent<{ field: HarumiField }>;
  /** popup が閉じた後 */
  harumiClose: CustomEvent<{ field: HarumiField | null }>;
  /** 候補を組の欄へ入れ、それぞれの欄の input / change を出した後（result は複製） */
  harumiCommit: CustomEvent<{ field: HarumiField; result: SearchResult; fields: HarumiPickerFields }>;
}

/** 検索条件の実効値（範囲は '' で「範囲なし」）。 */
interface Conditions {
  range: string;
  enable_over_match: boolean;
  tsuchinoe_inu_flag: boolean;
  tsuchinoto_mi_flag: boolean;
}

interface RoleState {
  /** 属性で指定した id（無ければ ''） */
  id: string;
  /** いま受け持っている欄 */
  field: HarumiField | null;
  /** `attach()` で付けたか（属性の引き直しでは外さない） */
  viaAttach: boolean;
}

/* ------------------------------------------------------------ *
 * 値の解釈（属性の経路と代入の経路の両方から呼ぶ。不正な値は undefined＝既定値）
 * ------------------------------------------------------------ */

function boolFromAttribute(value: string | null, name: string): boolean | undefined {
  if (value === null) return undefined;
  if (value === '' || value === 'true' || value === name) return true;
  if (value === 'false') return false;
  return undefined;
}

function boolFromProperty(value: unknown): boolean | undefined {
  return typeof value === 'boolean' ? value : undefined;
}

function intFromNumber(value: number, min: number): number | undefined {
  if (!Number.isFinite(value)) return undefined;
  const n = Math.floor(value);
  return n >= min ? n : undefined;
}

function intFromAttribute(value: string | null, min: number): number | undefined {
  if (value === null || value.trim() === '') return undefined;
  return intFromNumber(Number(value), min);
}

function intFromProperty(value: unknown, min: number): number | undefined {
  return typeof value === 'number' ? intFromNumber(value, min) : undefined;
}

function stringFromValue(value: unknown): string | undefined {
  return typeof value === 'string' && value !== '' ? value : undefined;
}

/** 範囲は「開始-終了」（どちらか省略可）だけを受け付ける。不正なら ''（範囲なし）。 */
function rangeFromValue(value: unknown): string {
  if (typeof value !== 'string') return '';
  const v = toHalfWidthDigits(value).trim().replace(/[－ー〜～]/g, '-');
  return /^\d*-\d*$/.test(v) && v !== '-' ? v : '';
}

/** id の先頭の `#` は許して外す（`nengo="#era"` と書いても動くように）。 */
function idFromValue(value: unknown): string {
  return typeof value === 'string' ? value.trim().replace(/^#/, '') : '';
}

/* ------------------------------------------------------------ */

let instanceSeq = 0;

function isField(el: unknown): el is HarumiField {
  return (
    typeof HTMLInputElement !== 'undefined' &&
    (el instanceof HTMLInputElement || el instanceof HTMLTextAreaElement)
  );
}

function resolveRef(ref: FieldRef): HarumiField | null {
  if (ref == null) return null;
  const el = typeof ref === 'string' ? document.querySelector(ref) : ref;
  return isField(el) ? el : null;
}

function toElements(target: DetachTarget): Element[] {
  if (typeof target === 'string') return Array.from(document.querySelectorAll(target));
  if (target instanceof Element) return [target];
  return Array.from(target as ArrayLike<Element>);
}

/** 影を辿った最も深い activeElement。 */
/** 開閉のショートカット（Ctrl+J / ⌘J）か。 */
function isToggleShortcut(e: KeyboardEvent): boolean {
  return (e.ctrlKey || e.metaKey) && !e.altKey && e.key.toLowerCase() === 'j';
}

function deepActiveElement(): Element | null {
  let ae: Element | null = document.activeElement;
  while (ae && ae.shadowRoot && ae.shadowRoot.activeElement) ae = ae.shadowRoot.activeElement;
  return ae;
}

/**
 * 欄の値を、要素の型（HTMLInputElement / HTMLTextAreaElement）の元の value の setter で入れる。
 * React は制御された欄の value をインスタンスの上で書き換えて値の変化を見張る ∴ `el.value = v` と書くと
 * React の記録も同時に新しい値になり、続く input で「変化なし」と見なされて onChange が呼ばれない
 * （次の再描画で元の値に戻る）。元の setter を通せば React の記録は古いままなので、input で変化を拾う。
 * `setRangeText` は type="number" の欄で例外になるので使わない。
 */
function setNativeValue(el: HarumiField, value: string): void {
  const proto = el instanceof HTMLTextAreaElement ? HTMLTextAreaElement.prototype : HTMLInputElement.prototype;
  const setter = Object.getOwnPropertyDescriptor(proto, 'value')?.set;
  if (setter) setter.call(el, value);
  else el.value = value;
}

/** 全角の数字を半角にする（「１６００」も範囲として読む）。 */
function toHalfWidthDigits(value: string): string {
  return value.replace(/[０-９]/g, (c) => String.fromCharCode(c.charCodeAt(0) - 0xfee0));
}

function copyResult(r: SearchResult): SearchResult {
  return { ...r };
}

/** 候補行の補足（西暦・干支）。 */
function yearLine(r: SearchResult): string {
  return r.eto ? `西暦 ${r.year}年・${r.eto}` : `西暦 ${r.year}年`;
}

/** 候補行の注記（並立した政権・延長マッチ）。 */
function noteLine(r: SearchResult): string {
  const parts: string[] = [];
  if (r.condition) parts.push(`${r.condition}の年号`);
  if (r.over_match) parts.push('延長マッチ');
  return parts.join('・');
}

function constructionError(): TypeError {
  return new TypeError(
    `[${PACKAGE_NAME}] cannot construct HarumiPicker: <harumi-picker> is defined by another implementation. ` +
      `Load a single copy of ${PACKAGE_NAME}, or use document.createElement('harumi-picker').`,
  );
}

/** DOM の無い環境（Node）でも class 宣言が評価できるよう、HTMLElement が無ければ空の基底にする。 */
const BaseElement: typeof HTMLElement =
  typeof HTMLElement === 'undefined' ? (class {} as unknown as typeof HTMLElement) : HTMLElement;

export class HarumiPicker extends BaseElement {
  static get observedAttributes(): string[] {
    return Object.keys(ATTRIBUTE_TO_PROPERTY);
  }

  /* 設定の実効値。公開プロパティは prototype の getter / setter（upgrade property のため） */
  private cfgTriggerLabel = DEFAULT_TRIGGER_LABEL;
  private cfgShortcut = true;
  private cfgMaxCandidates = DEFAULT_MAX_CANDIDATES;
  private cfgDockBreakpoint = DEFAULT_DOCK_BREAKPOINT;
  private cfgShowConditions = true;
  /** 検索条件の実効値。属性・プロパティ・条件欄のうち最後に変えたものが効く */
  private conditions: Conditions = { range: '', enable_over_match: false, tsuchinoe_inu_flag: false, tsuchinoto_mi_flag: false };

  private readonly uid: string;
  private readonly root: HTMLDivElement;
  private readonly roles: Record<Role, RoleState> = {
    nengo: { id: '', field: null, viaAttach: false },
    year: { id: '', field: null, viaAttach: false },
    eto: { id: '', field: null, viaAttach: false },
  };
  private readonly bindings = new Map<HarumiField, () => void>();

  private target: HarumiField | null = null;
  private candidates: SearchResult[] = [];
  private selectedIndex = 0;
  private composing = false;
  private openState = false;
  private docked = false;
  /** 畳んでいるか（人間の操作でだけ変わる。閉じても保つ） */
  private folded = false;
  /** いま自分で欄へ focus を戻している最中か（利用者が欄へ戻ったときだけ閉じるため） */
  private selfFocus = false;
  /** この open で「可視域に収めるための 1 回のスクロール」を済ませたか */
  private dockScrollDone = false;
  private initialized = false;
  private pendingIdLookup: (() => void) | null = null;

  private trigger: HTMLButtonElement | null = null;
  private popup: HTMLDivElement | null = null;
  private searchEl: HTMLInputElement | null = null;
  private searchRowEl: HTMLDivElement | null = null;
  private conditionsEl: HTMLDetailsElement | null = null;
  private listEl: HTMLDivElement | null = null;
  private foldEl: HTMLButtonElement | null = null;
  private globalCleanup: (() => void) | null = null;
  private triggerCleanup: (() => void) | null = null;
  private triggerRaf = 0;
  private popupCleanup: (() => void) | null = null;
  private popupRaf = 0;

  constructor(options: HarumiPickerOptions = {}) {
    if (new.target === HarumiPicker && customElements.get(TAG_NAME) !== HarumiPicker) throw constructionError();
    super();
    this.uid = `harumi-${++instanceSeq}`;
    // custom element の構築の規則: 属性と light DOM の子は作らない（影の中だけを作る）
    const shadow = this.attachShadow({ mode: 'open' });
    const style = document.createElement('style');
    style.setAttribute(HARUMI_STYLE_ATTRIBUTE, '');
    style.textContent = HARUMI_STYLE_TEXT;
    const root = document.createElement('div');
    root.className = 'harumi-root';
    shadow.append(style, root);
    this.root = root;

    if (options.triggerLabel !== undefined) this.triggerLabel = options.triggerLabel;
    if (options.shortcut !== undefined) this.shortcut = options.shortcut;
    if (options.maxCandidates !== undefined) this.maxCandidates = options.maxCandidates;
    if (options.dockBreakpoint !== undefined) this.dockBreakpoint = options.dockBreakpoint;
    if (options.showConditions !== undefined) this.showConditions = options.showConditions;
    if (options.searchOptions !== undefined) this.searchOptions = options.searchOptions;
  }

  /* ------------------------------------------------------------ *
   * custom element のライフサイクル
   * ------------------------------------------------------------ */

  connectedCallback(): void {
    // 昇格前に代入された own property を取り込み直す（prototype の setter を通す）
    for (const name of UPGRADE_PROPERTIES) {
      if (Object.prototype.hasOwnProperty.call(this, name)) {
        const value = (this as unknown as Record<string, unknown>)[name];
        delete (this as unknown as Record<string, unknown>)[name];
        (this as unknown as Record<string, unknown>)[name] = value;
      }
    }
    this.initialized = true;
    this.resolveIds();
    if (document.readyState === 'loading' && !this.pendingIdLookup) {
      const onReady = () => {
        this.pendingIdLookup = null;
        if (this.isConnected) this.resolveIds();
      };
      this.pendingIdLookup = () => document.removeEventListener('DOMContentLoaded', onReady);
      document.addEventListener('DOMContentLoaded', onReady, { once: true });
    }
  }

  disconnectedCallback(): void {
    // 同じタスク内の付け替え（appendChild での移動）では作り直さない
    queueMicrotask(() => {
      if (this.isConnected) return;
      this.pendingIdLookup?.();
      this.pendingIdLookup = null;
      this.detach();
    });
  }

  attributeChangedCallback(name: string, _old: string | null, value: string | null): void {
    switch (name as ObservedAttribute) {
      case 'nengo':
      case 'year':
      case 'eto':
        this.setRoleId(name as Role, idFromValue(value));
        break;
      case 'trigger-label':
        this.setTriggerLabel(stringFromValue(value) ?? DEFAULT_TRIGGER_LABEL);
        break;
      case 'shortcut':
        this.cfgShortcut = boolFromAttribute(value, name) ?? true;
        break;
      case 'max-candidates':
        this.cfgMaxCandidates = intFromAttribute(value, 1) ?? DEFAULT_MAX_CANDIDATES;
        this.rerender();
        break;
      case 'dock-breakpoint':
        this.cfgDockBreakpoint = intFromAttribute(value, 0) ?? DEFAULT_DOCK_BREAKPOINT;
        break;
      case 'show-conditions':
        this.setShowConditions(boolFromAttribute(value, name) ?? true);
        break;
      case 'range':
        this.setCondition('range', rangeFromValue(value));
        break;
      case 'over-match':
        this.setCondition('enable_over_match', boolFromAttribute(value, name) ?? false);
        break;
      case 'tsuchinoe-inu':
        this.setCondition('tsuchinoe_inu_flag', boolFromAttribute(value, name) ?? false);
        break;
      case 'tsuchinoto-mi':
        this.setCondition('tsuchinoto_mi_flag', boolFromAttribute(value, name) ?? false);
        break;
    }
  }

  /* ------------------------------------------------------------ *
   * プロパティ（読み出しは実効値。代入は属性を変えない）
   * ------------------------------------------------------------ */

  /** 和暦を入れる欄の id。要素の root（`getRootNode()`）で引く。 */
  get nengo(): string {
    return this.roles.nengo.id;
  }
  set nengo(value: string) {
    this.setRoleId('nengo', idFromValue(value));
  }

  /** 西暦を入れる欄の id。 */
  get year(): string {
    return this.roles.year.id;
  }
  set year(value: string) {
    this.setRoleId('year', idFromValue(value));
  }

  /** 干支を入れる欄の id。 */
  get eto(): string {
    return this.roles.eto.id;
  }
  set eto(value: string) {
    this.setRoleId('eto', idFromValue(value));
  }

  /** いま受け持っている欄（読み出し専用・複製）。 */
  get fields(): HarumiPickerFields {
    return { nengo: this.roles.nengo.field, year: this.roles.year.field, eto: this.roles.eto.field };
  }

  /** 起動ボタンに表示する文字。既定は '元'。 */
  get triggerLabel(): string {
    return this.cfgTriggerLabel;
  }
  set triggerLabel(value: string) {
    this.setTriggerLabel(stringFromValue(value) ?? DEFAULT_TRIGGER_LABEL);
  }

  /** Ctrl+J / Cmd+J で開くか。既定は true。 */
  get shortcut(): boolean {
    return this.cfgShortcut;
  }
  set shortcut(value: boolean) {
    this.cfgShortcut = boolFromProperty(value) ?? true;
  }

  /** 一度に表示する候補の最大件数。既定は 100。 */
  get maxCandidates(): number {
    return this.cfgMaxCandidates;
  }
  set maxCandidates(value: number) {
    this.cfgMaxCandidates = intFromProperty(value, 1) ?? DEFAULT_MAX_CANDIDATES;
    this.rerender();
  }

  /** この幅（CSS px）未満の viewport では狭幅の板として出す。既定は 560。 */
  get dockBreakpoint(): number {
    return this.cfgDockBreakpoint;
  }
  set dockBreakpoint(value: number) {
    this.cfgDockBreakpoint = intFromProperty(value, 0) ?? DEFAULT_DOCK_BREAKPOINT;
  }

  /** 条件欄を出すか。既定は true。 */
  get showConditions(): boolean {
    return this.cfgShowConditions;
  }
  set showConditions(value: boolean) {
    this.setShowConditions(boolFromProperty(value) ?? true);
  }

  /** 西暦の範囲（「1600-1700」「1600-」「-1700」）。既定は ''（範囲なし）。 */
  get range(): string {
    return this.conditions.range;
  }
  set range(value: string) {
    this.setCondition('range', rangeFromValue(value));
  }

  /** 延長マッチ（改元後の 2 年も旧元号として出す）。既定は false。 */
  get overMatch(): boolean {
    return this.conditions.enable_over_match;
  }
  set overMatch(value: boolean) {
    this.setCondition('enable_over_match', boolFromProperty(value) ?? false);
  }

  /** 戊と戌を見分けない。既定は false。 */
  get tsuchinoeInu(): boolean {
    return this.conditions.tsuchinoe_inu_flag;
  }
  set tsuchinoeInu(value: boolean) {
    this.setCondition('tsuchinoe_inu_flag', boolFromProperty(value) ?? false);
  }

  /** 己と巳を見分けない。既定は false。 */
  get tsuchinotoMi(): boolean {
    return this.conditions.tsuchinoto_mi_flag;
  }
  set tsuchinotoMi(value: boolean) {
    this.setCondition('tsuchinoto_mi_flag', boolFromProperty(value) ?? false);
  }

  /** 検索条件の実効値（条件欄で利用者が変えた値を含む）。代入はすべての条件をまとめて置き換える。 */
  get searchOptions(): SearchOptions {
    const { range, ...flags } = this.conditions;
    return range ? { ...flags, range } : { ...flags };
  }
  set searchOptions(value: SearchOptions) {
    const v = value && typeof value === 'object' ? value : {};
    this.conditions = {
      range: rangeFromValue(v.range),
      enable_over_match: boolFromProperty(v.enable_over_match) ?? false,
      tsuchinoe_inu_flag: boolFromProperty(v.tsuchinoe_inu_flag) ?? false,
      tsuchinoto_mi_flag: boolFromProperty(v.tsuchinoto_mi_flag) ?? false,
    };
    this.syncConditionInputs();
    this.rerender();
  }

  /** ポップアップが開いているか。 */
  get isOpen(): boolean {
    return this.openState;
  }

  private setRoleId(role: Role, id: string): void {
    const state = this.roles[role];
    state.id = id;
    // 属性・プロパティでの指定は、attach() での指定より後なら勝つ（最後に変えた方が効く）
    state.viaAttach = false;
    if (this.initialized && this.isConnected) this.resolveIds();
  }

  private setTriggerLabel(next: string): void {
    this.cfgTriggerLabel = next;
    if (this.trigger) this.trigger.textContent = next;
  }

  private setShowConditions(next: boolean): void {
    this.cfgShowConditions = next;
    this.applyFold();
  }

  private setCondition<K extends keyof Conditions>(key: K, value: Conditions[K]): void {
    this.conditions = { ...this.conditions, [key]: value };
    this.syncConditionInputs();
    this.rerender();
  }

  /** 開いていれば候補を出し直す（設定の変更を即座に見せる）。 */
  private rerender(): void {
    if (this.openState) this.refresh();
  }

  /* ------------------------------------------------------------ *
   * 取り付け / 取り外し
   * ------------------------------------------------------------ */

  /**
   * 組の欄を要素かセレクタで指定する（渡した役だけを置き換える）。
   * セレクタは `document.querySelector` で引く。影の中の欄は Element を渡すか、同じ影の中に
   * `<harumi-picker nengo="id">` を置く。要素が未接続なら `document.body` の末尾へ入れる。
   */
  attach(targets: HarumiPickerTargets): void {
    let changed = false;
    for (const role of ROLES) {
      if (!(role in targets)) continue;
      const field = resolveRef(targets[role]);
      if (!field) continue;
      this.roles[role].field = field;
      this.roles[role].viaAttach = true;
      changed = true;
    }
    if (!changed) return;
    if (!this.isConnected) document.body.append(this);
    this.syncBindings();
  }

  /** 指定した欄（省略時はすべて）から取り外す。受け持つ欄が無くなれば DOM と listener も片付ける。 */
  detach(target?: DetachTarget): void {
    const elements = target === undefined ? null : toElements(target);
    for (const role of ROLES) {
      const state = this.roles[role];
      if (!state.field) continue;
      if (elements && !elements.includes(state.field)) continue;
      state.field = null;
      state.viaAttach = false;
    }
    this.syncBindings();
  }

  /** すべての取り付けを外し、DOM と listener を片付け、要素を DOM から外す。 */
  destroy(): void {
    this.detach();
    this.teardownDom();
    this.remove();
  }

  /** 属性の id を要素の root で引き直す。attach() で付けた役はそのまま。 */
  private resolveIds(): void {
    const root = this.getRootNode() as Document | ShadowRoot;
    for (const role of ROLES) {
      const state = this.roles[role];
      if (state.viaAttach) continue;
      const el = state.id && typeof root.getElementById === 'function' ? root.getElementById(state.id) : null;
      state.field = isField(el) ? el : null;
    }
    this.syncBindings();
  }

  /** 役の欄と listener の取り付けを揃える。 */
  private syncBindings(): void {
    const wanted = new Set<HarumiField>();
    for (const role of ROLES) {
      const f = this.roles[role].field;
      if (f) wanted.add(f);
    }
    for (const field of Array.from(this.bindings.keys())) {
      if (!wanted.has(field)) this.unbindField(field);
    }
    if (wanted.size === 0) {
      this.teardownDom();
      return;
    }
    this.ensureDom();
    for (const field of wanted) {
      if (!this.bindings.has(field)) this.bindField(field);
    }
  }

  private unbindField(field: HarumiField): void {
    this.bindings.get(field)?.();
    this.bindings.delete(field);
    if (this.target === field) {
      this.close();
      this.target = null;
      this.hideTrigger();
    }
  }

  /* ------------------------------------------------------------ *
   * 開閉
   * ------------------------------------------------------------ */

  toggle(field: HarumiField): void {
    if (this.openState && this.target === field) {
      this.close({ refocus: true });
      return;
    }
    this.open(field);
  }

  /** 受け持つ欄を起点に開く。字の欄は空から始め、条件は前回の値を残す。 */
  open(field: HarumiField): void {
    if (!this.bindings.has(field) || !this.popup || !this.searchEl) return;
    this.target = field;
    this.openState = true;
    this.popup.hidden = false;
    this.trigger?.setAttribute('aria-expanded', 'true');
    this.syncConditionInputs();
    this.searchEl.value = '';
    this.selectedIndex = 0;
    this.dockScrollDone = false;
    this.refresh();
    this.syncPopupTracking();
    this.searchEl.focus({ preventScroll: true });
    this.emit('harumiOpen', { field });
  }

  close({ refocus = false }: { refocus?: boolean } = {}): void {
    const wasOpen = this.openState;
    this.openState = false;
    this.composing = false;
    if (this.popup) this.popup.hidden = true;
    this.trigger?.setAttribute('aria-expanded', 'false');
    if (refocus && this.target) this.focusFieldSelf(this.target);
    this.stopPopupTracking();
    this.stopTriggerTracking();
    this.syncTriggerTracking();
    if (wasOpen) this.emit('harumiClose', { field: this.target });
  }

  /** 自分の都合で欄へ focus を戻す（利用者の操作と区別する印を立てる）。 */
  private focusFieldSelf(field: HarumiField): void {
    this.selfFocus = true;
    try {
      field.focus({ preventScroll: true });
    } finally {
      this.selfFocus = false;
    }
  }

  private emit<K extends keyof HarumiPickerEventMap>(type: K, detail: HarumiPickerEventMap[K]['detail']): void {
    this.dispatchEvent(new CustomEvent(type, { bubbles: true, composed: false, cancelable: false, detail }));
  }

  /* ------------------------------------------------------------ *
   * DOM の構築と片付け
   * ------------------------------------------------------------ */

  private ensureDom(): void {
    if (this.popup) return;
    const popupId = `${this.uid}-popup`;
    const listId = `${this.uid}-list`;

    const trigger = document.createElement('button');
    trigger.type = 'button';
    trigger.className = 'harumi-trigger';
    trigger.id = `${this.uid}-trigger`;
    trigger.textContent = this.cfgTriggerLabel;
    trigger.title = '元号の候補を出す (Ctrl+J / ⌘J)';
    trigger.setAttribute('aria-label', '元号の候補を出す');
    trigger.setAttribute('aria-haspopup', 'dialog');
    trigger.setAttribute('aria-controls', popupId);
    trigger.setAttribute('aria-expanded', 'false');
    trigger.hidden = true;
    // 対象の blur より先に処理し、対象のフォーカスを奪わないため mousedown で開く
    trigger.addEventListener('mousedown', (e) => {
      e.preventDefault();
      if (this.target) this.toggle(this.target);
    });
    // キーボードでボタンを押した場合（mousedown が来ない）
    trigger.addEventListener('click', (e) => {
      if (e.detail === 0 && this.target) this.toggle(this.target);
    });

    const popup = document.createElement('div');
    popup.className = 'harumi-popup';
    popup.id = popupId;
    popup.setAttribute('role', 'dialog');
    popup.setAttribute('aria-label', '元号の候補');
    popup.hidden = true;

    const titlebar = document.createElement('div');
    titlebar.className = 'harumi-titlebar';
    const title = document.createElement('div');
    title.className = 'harumi-title';
    title.textContent = '元号の候補';
    const closeBtn = document.createElement('button');
    closeBtn.type = 'button';
    closeBtn.className = 'harumi-close';
    closeBtn.title = '閉じる (Esc)';
    closeBtn.setAttribute('aria-label', '閉じる');
    closeBtn.textContent = '×';
    closeBtn.addEventListener('mousedown', (e) => e.preventDefault());
    closeBtn.addEventListener('click', () => this.close({ refocus: true }));
    // 畳むボタン（狭幅のときだけ見える）。押しても字の欄のフォーカスを奪わない
    const foldBtn = document.createElement('button');
    foldBtn.type = 'button';
    foldBtn.className = 'harumi-fold';
    foldBtn.addEventListener('mousedown', (e) => e.preventDefault());
    foldBtn.addEventListener('click', () => this.toggleFold());
    titlebar.append(title, foldBtn, closeBtn);

    const search = document.createElement('input');
    search.type = 'text';
    search.className = 'harumi-search';
    search.placeholder = SEARCH_PLACEHOLDER;
    search.autocomplete = 'off';
    search.setAttribute('autocapitalize', 'off');
    search.spellcheck = false;
    search.setAttribute('role', 'combobox');
    search.setAttribute('aria-expanded', 'true');
    search.setAttribute('aria-controls', listId);
    search.setAttribute('aria-label', '読み取れた字を入力');

    const searchRow = document.createElement('div');
    searchRow.className = 'harumi-search-row';
    const searchLabel = document.createElement('span');
    searchLabel.className = 'harumi-search-label';
    searchLabel.textContent = SEARCH_LABEL;
    searchLabel.setAttribute('aria-hidden', 'true');
    searchRow.append(searchLabel, search);

    const conditions = this.buildConditions();
    conditions.hidden = !this.cfgShowConditions;

    const list = document.createElement('div');
    list.className = 'harumi-list';
    list.id = listId;
    list.setAttribute('role', 'listbox');

    const hint = document.createElement('div');
    hint.className = 'harumi-hint';
    hint.textContent = '↑↓:選択 Enter:確定 1-9:直接選択 Esc:閉じる';

    popup.append(titlebar, searchRow, conditions, list, hint);

    // 字の欄: システム IME の変換中は介入しない
    search.addEventListener('compositionstart', () => {
      this.composing = true;
    });
    search.addEventListener('compositionend', () => {
      this.composing = false;
      this.refresh();
    });
    search.addEventListener('input', () => {
      if (!this.composing) this.refresh();
    });
    search.addEventListener('keydown', (e) => this.onSearchKeydown(e));

    list.addEventListener('mousedown', (e) => e.preventDefault());
    list.addEventListener('click', (e) => {
      const item = (e.target as Element | null)?.closest?.('.harumi-item') as HTMLElement | null;
      if (item) this.commit(this.candidates[Number(item.dataset.index)]);
    });

    // 部品は影の中。document.body には何も入れない
    this.root.append(trigger, popup);
    this.trigger = trigger;
    this.popup = popup;
    this.searchEl = search;
    this.searchRowEl = searchRow;
    this.conditionsEl = conditions;
    this.listEl = list;
    this.foldEl = foldBtn;
    this.syncConditionInputs();
    this.applyFold();

    const onDocMouseDown = (e: MouseEvent) => {
      if (!this.openState || !this.popup) return;
      // 影の中の部品は document から見ると e.target が host に付け替えられる ∴ composedPath で判定する
      const path = typeof e.composedPath === 'function' ? e.composedPath() : [e.target];
      if (path.some((n) => n === this.popup || n === this.trigger || (this.target !== null && n === this.target))) return;
      this.close();
    };
    const onResize = () => {
      if (this.openState) this.positionPopup();
    };
    const vv = window.visualViewport;
    document.addEventListener('mousedown', onDocMouseDown);
    window.addEventListener('resize', onResize);
    vv?.addEventListener('resize', onResize);
    this.globalCleanup = () => {
      document.removeEventListener('mousedown', onDocMouseDown);
      window.removeEventListener('resize', onResize);
      vv?.removeEventListener('resize', onResize);
    };
  }

  /** 条件欄（西暦の範囲・延長マッチ・同一視）。値を変えると即座に候補を出し直す。 */
  private buildConditions(): HTMLDetailsElement {
    const details = document.createElement('details');
    details.className = 'harumi-conditions';
    const summary = document.createElement('summary');
    summary.textContent = '条件';
    const body = document.createElement('div');
    body.className = 'harumi-conditions-body';

    const range = document.createElement('label');
    range.className = 'harumi-range';
    const since = document.createElement('input');
    since.type = 'text';
    since.inputMode = 'numeric';
    since.name = 'since';
    since.placeholder = '開始';
    since.setAttribute('aria-label', '西暦の範囲（開始）');
    const till = document.createElement('input');
    till.type = 'text';
    till.inputMode = 'numeric';
    till.name = 'till';
    till.placeholder = '終了';
    till.setAttribute('aria-label', '西暦の範囲（終了）');
    range.append('西暦', since, '〜', till);
    body.append(range);

    const checks: Array<[keyof SearchOptions, string]> = [
      ['enable_over_match', '延長マッチ'],
      ['tsuchinoe_inu_flag', '戊と戌を見分けない'],
      ['tsuchinoto_mi_flag', '己と巳を見分けない'],
    ];
    for (const [name, text] of checks) {
      const label = document.createElement('label');
      label.className = 'harumi-check';
      const box = document.createElement('input');
      box.type = 'checkbox';
      box.name = name;
      label.append(box, text);
      body.append(label);
    }

    details.append(summary, body);
    const onChange = () => {
      this.readConditionInputs();
      this.refresh();
    };
    details.addEventListener('input', onChange);
    details.addEventListener('change', onChange);
    details.addEventListener('toggle', () => {
      if (this.openState) this.positionPopup();
    });
    // 条件欄でも Esc・Ctrl+J（⌘J）で閉じられるようにする
    details.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' || (this.cfgShortcut && isToggleShortcut(e))) {
        e.preventDefault();
        this.close({ refocus: true });
      }
    });
    return details;
  }

  private conditionInput(name: string): HTMLInputElement | null {
    return this.conditionsEl?.querySelector<HTMLInputElement>(`input[name="${name}"]`) ?? null;
  }

  /** 条件欄の値から検索条件を作る。範囲は数字以外を捨てる。 */
  private readConditionInputs(): void {
    const digits = (name: string) => toHalfWidthDigits(this.conditionInput(name)?.value ?? '').replace(/[^\d]/g, '');
    const since = digits('since');
    const till = digits('till');
    this.conditions = {
      range: since || till ? `${since}-${till}` : '',
      enable_over_match: this.conditionInput('enable_over_match')?.checked ?? false,
      tsuchinoe_inu_flag: this.conditionInput('tsuchinoe_inu_flag')?.checked ?? false,
      tsuchinoto_mi_flag: this.conditionInput('tsuchinoto_mi_flag')?.checked ?? false,
    };
  }

  /** 検索条件を条件欄へ書き戻す。 */
  private syncConditionInputs(): void {
    if (!this.conditionsEl) return;
    const m = this.conditions.range.match(/^(\d*)-(\d*)$/);
    const since = this.conditionInput('since');
    const till = this.conditionInput('till');
    if (since) since.value = m ? m[1] : '';
    if (till) till.value = m ? m[2] : '';
    for (const name of ['enable_over_match', 'tsuchinoe_inu_flag', 'tsuchinoto_mi_flag'] as const) {
      const box = this.conditionInput(name);
      if (box) box.checked = this.conditions[name];
    }
  }

  private teardownDom(): void {
    this.close();
    this.stopTriggerTracking();
    this.globalCleanup?.();
    this.globalCleanup = null;
    this.trigger?.remove();
    this.popup?.remove();
    this.trigger = null;
    this.popup = null;
    this.searchEl = null;
    this.searchRowEl = null;
    this.conditionsEl = null;
    this.listEl = null;
    this.foldEl = null;
    this.target = null;
    this.docked = false;
  }

  private bindField(field: HarumiField): void {
    // 利用者が欄へ focus を戻したら popup を閉じる。自分の focus 戻し（focusFieldSelf）では閉じない
    const onFocus = () => {
      if (this.openState && !this.selfFocus) this.close();
      this.showTrigger(field);
    };
    const onBlur = () => {
      if (this.openState) return;
      const ae = deepActiveElement();
      if (ae !== this.trigger && !(isField(ae) && this.bindings.has(ae))) this.hideTrigger();
    };
    const onKeydown = (e: KeyboardEvent) => {
      if (this.cfgShortcut && isToggleShortcut(e)) {
        e.preventDefault();
        this.toggle(field);
        return;
      }
      if (e.key === 'Escape' && this.openState && this.target === field) this.close();
    };
    const el: HTMLElement = field;
    el.addEventListener('focus', onFocus);
    el.addEventListener('blur', onBlur);
    el.addEventListener('keydown', onKeydown);
    this.bindings.set(field, () => {
      el.removeEventListener('focus', onFocus);
      el.removeEventListener('blur', onBlur);
      el.removeEventListener('keydown', onKeydown);
    });
    if (deepActiveElement() === field) this.showTrigger(field);
  }

  /* ------------------------------------------------------------ *
   * 起動ボタン（文書の座標。NagaIME と同じ）
   * ------------------------------------------------------------ */

  private showTrigger(field: HarumiField): void {
    this.target = field;
    if (!this.trigger) return;
    this.positionTrigger(field);
    this.trigger.hidden = false;
    this.syncTriggerTracking();
  }

  private hideTrigger(): void {
    if (this.trigger) this.trigger.hidden = true;
    this.syncTriggerTracking();
  }

  /** 文書の座標を、要素の包含ブロックの padding box を原点とする座標へ直す量（文書が基準なら 0）。 */
  private containingBlockOffset(el: HTMLElement): { top: number; left: number } {
    const op = el.offsetParent as HTMLElement | null;
    if (!op || op === document.body || op === document.documentElement) return { top: 0, left: 0 };
    const cs = getComputedStyle(op);
    const borderTop = Number.parseFloat(cs.borderTopWidth) || 0;
    const borderLeft = Number.parseFloat(cs.borderLeftWidth) || 0;
    const o = op.getBoundingClientRect();
    return {
      top: o.top + window.scrollY + borderTop - (op.scrollTop || 0),
      left: o.left + window.scrollX + borderLeft - (op.scrollLeft || 0),
    };
  }

  private placeInDocument(el: HTMLElement, top: number, left: number): void {
    const origin = this.containingBlockOffset(el);
    el.style.top = `${top - origin.top}px`;
    el.style.left = `${left - origin.left}px`;
  }

  private documentWidth(): number {
    return document.documentElement.clientWidth || window.innerWidth;
  }

  /** 起動ボタンを欄の右上に置く。欄が文書の先頭にあれば欄のすぐ下へ回す。 */
  private positionTrigger(field: HarumiField): void {
    const trigger = this.trigger;
    if (!trigger) return;
    const r = field.getBoundingClientRect();
    const scrollX = window.scrollX;
    const scrollY = window.scrollY;
    let top = r.top + scrollY - TRIGGER_SIZE_PX - TRIGGER_GAP_PX;
    if (top < 0) top = r.bottom + scrollY + TRIGGER_GAP_PX;
    let left = r.right + scrollX - TRIGGER_SIZE_PX;
    if (left < scrollX) left = scrollX + TRIGGER_MARGIN_PX;
    this.placeInDocument(trigger, top, left);
  }

  /** 起動ボタンが見えている間だけ、resize とスクロールコンテナ要素の scroll で置き直す。 */
  private syncTriggerTracking(): void {
    const visible = Boolean(this.trigger && !this.trigger.hidden && this.target);
    if (!visible) {
      this.stopTriggerTracking();
      return;
    }
    if (this.triggerCleanup) {
      this.requestTriggerPosition();
      return;
    }
    const request = () => this.requestTriggerPosition();
    const onElementScroll = (e: Event) => {
      const t = e.target;
      if (t === document || t === window || t === document.documentElement || t === document.body) return;
      request();
    };
    const vv = window.visualViewport;
    window.addEventListener('resize', request, { passive: true });
    vv?.addEventListener('resize', request, { passive: true });
    document.addEventListener('scroll', onElementScroll, { capture: true, passive: true });
    this.triggerCleanup = () => {
      window.removeEventListener('resize', request);
      vv?.removeEventListener('resize', request);
      document.removeEventListener('scroll', onElementScroll, { capture: true });
      if (this.triggerRaf) cancelAnimationFrame(this.triggerRaf);
      this.triggerRaf = 0;
    };
    this.requestTriggerPosition();
  }

  private requestTriggerPosition(): void {
    if (this.triggerRaf) return;
    this.triggerRaf = requestAnimationFrame(() => {
      this.triggerRaf = 0;
      if (!this.trigger || this.trigger.hidden || !this.target) return;
      this.positionTrigger(this.target);
    });
  }

  private stopTriggerTracking(): void {
    this.triggerCleanup?.();
    this.triggerCleanup = null;
  }

  /* ------------------------------------------------------------ *
   * 検索・描画
   * ------------------------------------------------------------ */

  private refresh(): void {
    if (!this.searchEl) return;
    const query = this.searchEl.value.trim();
    this.candidates = query ? ambiguousSearch(query, this.searchOptions) : [];
    this.selectedIndex = 0;
    this.renderList();
    // 候補の数でポップアップの高さが変わるので、上下どちらに出すかを決め直す
    if (this.openState) this.positionPopup();
  }

  /** 狭幅の遷移を 1 か所で扱う。 */
  private setDocked(next: boolean): void {
    if (this.docked === next) return;
    this.docked = next;
    // 狭幅に入ったら条件欄は畳んで始める（候補の行を優先する）
    if (next && this.conditionsEl) this.conditionsEl.open = false;
    this.applyFold();
  }

  /** 畳む／開く（人間の操作でだけ呼ぶ）。開くときは字の欄へ戻す。 */
  private toggleFold(): void {
    this.folded = !this.folded;
    this.applyFold();
    if (this.openState) this.positionPopup();
    if (!this.folded) this.searchEl?.focus({ preventScroll: true });
  }

  /** 畳んだ状態を見た目へ出す。広幅では出さない（状態は保つ）。 */
  private applyFold(): void {
    const show = this.folded && this.docked;
    this.popup?.classList.toggle('harumi-is-folded', show);
    if (this.searchRowEl) this.searchRowEl.hidden = show;
    if (this.conditionsEl) this.conditionsEl.hidden = show || !this.cfgShowConditions;
    if (this.listEl) this.listEl.hidden = show;
    const fold = this.foldEl;
    if (fold) {
      fold.setAttribute('aria-expanded', String(!this.folded));
      fold.setAttribute('aria-label', this.folded ? 'ひらく' : 'たたむ');
      fold.title = this.folded ? 'ひらく' : 'たたむ';
      fold.textContent = this.folded ? '▴' : '▾';
    }
  }

  private renderList(): void {
    const list = this.listEl;
    if (!list) return;
    list.replaceChildren();
    if (!this.candidates.length) {
      const empty = document.createElement('div');
      empty.className = 'harumi-empty';
      empty.textContent = this.searchEl?.value.trim() ? '候補なし' : '読み取れた字を入力してください';
      list.appendChild(empty);
      this.searchEl?.removeAttribute('aria-activedescendant');
      return;
    }
    const shown = this.candidates.slice(0, this.cfgMaxCandidates);
    let selectedItem: HTMLElement | null = null;
    shown.forEach((c, i) => {
      const selected = i === this.selectedIndex;
      const item = document.createElement('div');
      item.className = selected ? 'harumi-item harumi-is-selected' : 'harumi-item';
      item.id = `${this.uid}-option-${i}`;
      item.setAttribute('role', 'option');
      item.setAttribute('aria-selected', String(selected));
      item.dataset.index = String(i);

      const num = document.createElement('span');
      num.className = 'harumi-num';
      num.textContent = i < 9 ? String(i + 1) : '';
      const nengo = document.createElement('span');
      nengo.className = 'harumi-nengo';
      nengo.textContent = `${c.nengo}年`;
      const meta = document.createElement('span');
      meta.className = 'harumi-meta';
      const year = document.createElement('span');
      year.className = 'harumi-year';
      year.textContent = yearLine(c);
      meta.append(year);
      const note = noteLine(c);
      if (note) {
        const desc = document.createElement('span');
        desc.className = 'harumi-desc';
        desc.textContent = note;
        meta.append(desc);
      }
      item.append(num, nengo, meta);
      list.appendChild(item);
      if (selected) {
        this.searchEl?.setAttribute('aria-activedescendant', item.id);
        selectedItem = item;
      }
    });
    const rest = this.candidates.length - shown.length;
    if (rest > 0) {
      const more = document.createElement('div');
      more.className = 'harumi-more';
      more.textContent = `ほか ${rest} 件。字を足すか条件で絞ってください`;
      list.appendChild(more);
    }
    if (selectedItem) this.revealInList(selectedItem);
  }

  /** 選んだ候補が一覧の見える範囲に入るよう、一覧の scrollTop だけを動かす（ページは動かさない）。 */
  private revealInList(item: HTMLElement): void {
    const list = this.listEl;
    if (!list) return;
    const top = item.offsetTop - (item.offsetParent === list ? 0 : list.offsetTop);
    const bottom = top + item.offsetHeight;
    if (top < list.scrollTop) list.scrollTop = top;
    else if (bottom > list.scrollTop + list.clientHeight) list.scrollTop = bottom - list.clientHeight;
  }

  private onSearchKeydown(e: KeyboardEvent): void {
    const n = Math.min(this.candidates.length, this.cfgMaxCandidates);
    // 変換中（composition）のキーは一切消費しない
    if (this.composing || e.isComposing || e.keyCode === 229) return;
    // 開いたときと同じ Ctrl+J（⌘J）で閉じて元の欄へ戻る
    if (this.cfgShortcut && isToggleShortcut(e)) {
      e.preventDefault();
      this.close({ refocus: true });
      return;
    }
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      this.selectedIndex = (this.selectedIndex + 1) % Math.max(n, 1);
      this.renderList();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      this.selectedIndex = (this.selectedIndex - 1 + Math.max(n, 1)) % Math.max(n, 1);
      this.renderList();
    } else if (e.key === 'Enter' || (e.key === 'Tab' && !e.shiftKey && n > 0)) {
      e.preventDefault();
      this.commit(this.candidates[this.selectedIndex]);
    } else if (e.key === 'Escape') {
      e.preventDefault();
      this.close({ refocus: true });
    } else if (/^[1-9]$/.test(e.key)) {
      const c = this.candidates[Number(e.key) - 1];
      if (c && Number(e.key) <= n) {
        e.preventDefault();
        this.commit(c);
      }
    }
  }

  /* ------------------------------------------------------------ *
   * 確定（組のそれぞれの欄へ入れて閉じる）
   * ------------------------------------------------------------ */

  private commit(candidate: SearchResult | undefined): void {
    const field = this.target;
    if (!field || !candidate) return;
    const fields = this.fields;
    const values: Array<[HarumiField | null, string]> = [
      [fields.nengo, candidate.nengo],
      [fields.year, String(candidate.year)],
      [fields.eto, candidate.eto ?? ''],
    ];
    for (const [el, value] of values) {
      if (!el) continue;
      setNativeValue(el, value);
      // ネイティブの置き換えと同じ性質の InputEvent。composed なので影の外の React / Vue 等に届く
      el.dispatchEvent(
        new InputEvent('input', { bubbles: true, composed: true, inputType: 'insertReplacementText', data: value }),
      );
      el.dispatchEvent(new Event('change', { bubbles: true }));
    }
    this.emit('harumiCommit', { field, result: copyResult(candidate), fields });
    // 連続入力はしない: 選んだら閉じて、開いた欄へ戻る
    this.close({ refocus: true });
  }

  /* ------------------------------------------------------------ *
   * 位置（文書の座標・`position: absolute`）
   * ------------------------------------------------------------ */

  /**
   * popup を文書の座標で置く（NagaIME と同じ方式。ページのスクロールでは置き直さない）。
   * - 狭幅: 欄のすぐ下、横は文書の可視幅いっぱい。高さの上限は「欄の下からキーボードの上まで」。
   *   候補 1 行も見えないときだけ、開いた直後に 1 回ページを寄せる。
   * - 広幅: 欄の下。可視域の下端に入らず、上に入るなら上に出す。
   */
  private positionPopup(): void {
    const field = this.target;
    const pop = this.popup;
    if (!field || !pop) return;
    const r = field.getBoundingClientRect();
    const scrollX = window.scrollX;
    const scrollY = window.scrollY;
    const vv = window.visualViewport;
    const vw = vv ? vv.width : window.innerWidth;
    const style = pop.style;

    if (vw < this.cfgDockBreakpoint) {
      pop.classList.add('harumi-is-docked');
      this.setDocked(true);
      style.position = 'absolute';
      style.right = '';
      style.bottom = '';
      style.width = `${this.documentWidth()}px`;
      const topViewport = r.bottom + POPUP_GAP_PX;
      const visibleBottom = vv ? vv.offsetTop + vv.height : window.innerHeight;
      const fixed =
        DOCK_TITLE_PX + DOCK_SEARCH_PX + DOCK_BORDER_PX + (this.cfgShowConditions ? DOCK_CONDITIONS_PX : 0);
      const minPx = fixed + DOCK_ROW_PX;
      const maxPx = fixed + DOCK_ROW_PX * DOCK_ROWS;
      const room = visibleBottom - topViewport - DOCK_GAP_PX;
      let popupMax = Math.min(maxPx, Math.max(0, room));
      if (room < minPx) popupMax = minPx;
      // 条件欄を開いている間は、その分だけ上限を足す（候補の行を潰さない）
      if (this.conditionsEl?.open) {
        const body = this.conditionsEl.querySelector<HTMLElement>('.harumi-conditions-body');
        popupMax += body?.offsetHeight ?? 0;
      }
      if (this.folded) popupMax = Math.min(DOCK_FOLDED_PX, popupMax);
      style.maxHeight = `${popupMax}px`;
      style.setProperty('--harumi-dock-max', `${popupMax}px`);
      this.placeInDocument(pop, topViewport + scrollY, scrollX);
      if (room < minPx && !this.dockScrollDone) {
        const need = topViewport + popupMax - visibleBottom;
        if (need > 0) window.scrollBy(0, need);
      }
      this.dockScrollDone = true;
      return;
    }

    pop.classList.remove('harumi-is-docked');
    this.setDocked(false);
    if (style.maxHeight) style.maxHeight = '';
    style.removeProperty('--harumi-dock-max');
    style.position = 'absolute';
    style.width = `${Math.min(360, vw - 16)}px`;
    style.bottom = 'auto';
    style.right = 'auto';

    const h = pop.offsetHeight || 360;
    const w = pop.offsetWidth || 360;
    const vpBottom = scrollY + window.innerHeight;
    let top = r.bottom + scrollY + POPUP_GAP_PX;
    let left = r.left + scrollX;
    const above = r.top + scrollY - h - POPUP_GAP_PX;
    if (top + h > vpBottom && above >= scrollY) top = above;
    if (left + w > scrollX + vw) left = scrollX + vw - w - 8;
    if (left < scrollX + 4) left = scrollX + 4;
    this.placeInDocument(pop, top, left);
  }

  /** popup を開いている間だけ、スクロールコンテナ要素の scroll で置き直す（ページのスクロールでは置き直さない）。 */
  private syncPopupTracking(): void {
    if (!this.openState || !this.popup) {
      this.stopPopupTracking();
      return;
    }
    if (this.popupCleanup) {
      this.requestPopupPosition();
      return;
    }
    const onElementScroll = (e: Event) => {
      const t = e.target;
      if (t === document || t === window || t === document.documentElement || t === document.body) return;
      this.requestPopupPosition();
    };
    document.addEventListener('scroll', onElementScroll, { capture: true, passive: true });
    this.popupCleanup = () => {
      document.removeEventListener('scroll', onElementScroll, { capture: true });
      if (this.popupRaf) cancelAnimationFrame(this.popupRaf);
      this.popupRaf = 0;
    };
    // 開いた直後の 1 回（focus やレイアウトの確定を待つ）
    this.requestPopupPosition();
  }

  private requestPopupPosition(): void {
    if (this.popupRaf) return;
    this.popupRaf = requestAnimationFrame(() => {
      this.popupRaf = 0;
      if (!this.openState || !this.popup) return;
      this.positionPopup();
    });
  }

  private stopPopupTracking(): void {
    this.popupCleanup?.();
    this.popupCleanup = null;
  }
}

/** `<harumi-picker>` のイベントの型（`addEventListener('harumiCommit', e => e.detail…)`）。 */
// eslint-disable-next-line no-redeclare -- TS の class と interface の宣言の合併（実行時の再宣言ではない）
export interface HarumiPicker {
  addEventListener<K extends keyof HarumiPickerEventMap>(
    type: K,
    listener: (this: HarumiPicker, ev: HarumiPickerEventMap[K]) => unknown,
    options?: boolean | AddEventListenerOptions,
  ): void;
  addEventListener<K extends keyof HTMLElementEventMap>(
    type: K,
    listener: (this: HarumiPicker, ev: HTMLElementEventMap[K]) => unknown,
    options?: boolean | AddEventListenerOptions,
  ): void;
  addEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | AddEventListenerOptions,
  ): void;
  removeEventListener<K extends keyof HarumiPickerEventMap>(
    type: K,
    listener: (this: HarumiPicker, ev: HarumiPickerEventMap[K]) => unknown,
    options?: boolean | EventListenerOptions,
  ): void;
  removeEventListener<K extends keyof HTMLElementEventMap>(
    type: K,
    listener: (this: HarumiPicker, ev: HTMLElementEventMap[K]) => unknown,
    options?: boolean | EventListenerOptions,
  ): void;
  removeEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | EventListenerOptions,
  ): void;
}

declare global {
  interface HTMLElementTagNameMap {
    'harumi-picker': HarumiPicker;
  }
}

// 登録（モジュールの評価につき 1 回）。DOM の無い環境と、既に登録済みのときは何もしない
if (typeof customElements !== 'undefined' && !customElements.get(TAG_NAME)) {
  customElements.define(TAG_NAME, HarumiPicker);
}
