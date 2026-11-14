/**
 * HarumiIME — 読み取れた字から元号の候補を出し、選んだ候補を入力欄へ入れるポップアップ。
 *
 * 操作と見た目は兄弟プロダクト Nagarjuna の NagaIME に合わせる。
 *  - 常駐しない。対象にフォーカスすると入力欄の右上に小さな起動ボタンが出るだけ。
 *  - 起動はボタン押下または Ctrl/Cmd+J の明示操作のみ。
 *  - 起動中もシステム IME の変換（composition）には介入しない。
 *  - 確定は Enter / Tab / クリック / 数字キー、取消は Esc。
 *  - PC は入力欄の下、狭い viewport では画面下部へドッキングする。
 *
 * NagaIME との違い:
 *  - 連続入力はしない。候補を選ぶとポップアップを閉じる。
 *  - 入力欄を 1 組（和暦・西暦・干支）として取り付ける。どの欄から開いても、選んだ候補の
 *    和暦（例「寛永1」）・西暦（例「1624」）・干支（例「甲子」）を、組のそれぞれの欄へ入れる。
 *    欄の値はキャレット位置への挿入ではなく、まるごと置き換える。
 *  - 検索の条件（西暦の範囲・延長マッチ・戊と戌／己と巳の同一視）をポップアップ内で変えられる。
 */
import { ambiguousSearch } from './index';
import { ensureHarumiStyle } from './harumi-styles';
import type { SearchOptions, SearchResult } from './types';

export type HarumiField = HTMLInputElement | HTMLTextAreaElement;
type FieldRef = string | Element | null | undefined;

/** 1 組の入力欄。少なくとも 1 つを指定する。セレクタは最初に一致した要素を使う。 */
export interface HarumiIMETargets {
  /** 和暦（元号＋年数。例「寛永1」）を入れる欄 */
  nengo?: FieldRef;
  /** 西暦（例「1624」）を入れる欄 */
  year?: FieldRef;
  /** 干支（例「甲子」）を入れる欄 */
  eto?: FieldRef;
}

/** 解決済みの 1 組。`onSelect` に渡す。 */
export interface HarumiIMEGroup {
  nengo: HarumiField | null;
  year: HarumiField | null;
  eto: HarumiField | null;
}

/** `new HarumiIME(options)` のオプション。すべて省略可能。 */
export interface HarumiIMEOptions {
  /** 起動ボタンに表示する文字。既定は '元'。 */
  triggerLabel?: string;
  /** Ctrl+J / Cmd+J で開閉するか。既定は true。 */
  shortcut?: boolean;
  /** 検索条件の初期値。利用者がポップアップ内で変えた値は、閉じても次に開くまで残る。 */
  searchOptions?: SearchOptions;
  /** 条件欄（西暦の範囲・延長マッチ・同一視）を表示するか。既定は true。 */
  showConditions?: boolean;
  /** 一度に表示する候補の最大件数。既定は 100。 */
  maxCandidates?: number;
  /** この幅（CSS px）未満の viewport ではポップアップを画面下部へドッキングする。既定は 560。 */
  dockBreakpoint?: number;
  /** 候補を選んで欄へ入れた直後に呼ばれる。 */
  onSelect?: (result: SearchResult, group: HarumiIMEGroup) => void;
}

const SEARCH_PLACEHOLDER = '読み取れた字（例: 應廿寅）';
const SEARCH_LABEL = '字';
const DOCK_GAP_PX = 8;
const DOCK_CONTEXT_MIN_PX = 48;
const DOCK_POPUP_MAX_PX = 300;
const DOCK_MIN_PX = 120;

let instanceSeq = 0;

function isField(el: unknown): el is HarumiField {
  return (
    typeof HTMLInputElement !== 'undefined' &&
    (el instanceof HTMLInputElement || el instanceof HTMLTextAreaElement)
  );
}

function resolveField(ref: FieldRef): HarumiField | null {
  if (ref == null) return null;
  const el = typeof ref === 'string' ? document.querySelector(ref) : ref;
  return isField(el) ? el : null;
}

function groupFields(group: HarumiIMEGroup): HarumiField[] {
  return [group.nengo, group.year, group.eto].filter((f): f is HarumiField => f !== null);
}

/** 候補行の補足（西暦・干支）。 */
function yearLine(r: SearchResult): string {
  const parts = [`西暦 ${r.year}年`];
  if (r.eto) parts.push(r.eto);
  return parts.join('・');
}

/** 候補行の注記（並立した政権・延長マッチ）。 */
function noteLine(r: SearchResult): string {
  const parts: string[] = [];
  if (r.condition) parts.push(`${r.condition}の年号`);
  if (r.over_match) parts.push('延長マッチ');
  return parts.join('・');
}

export class HarumiIME {
  private readonly options: Required<Omit<HarumiIMEOptions, 'onSelect'>> & Pick<HarumiIMEOptions, 'onSelect'>;
  private readonly uid: string;
  private readonly groups = new Map<HarumiField, HarumiIMEGroup>();
  private readonly bindings = new Map<HarumiField, () => void>();
  private conditions: SearchOptions;

  private target: HarumiField | null = null;
  private candidates: SearchResult[] = [];
  private selectedIndex = 0;
  private composing = false;
  private openState = false;

  private trigger: HTMLButtonElement | null = null;
  private popup: HTMLDivElement | null = null;
  private searchEl: HTMLInputElement | null = null;
  private listEl: HTMLDivElement | null = null;
  private conditionsEl: HTMLDetailsElement | null = null;
  private globalCleanup: (() => void) | null = null;

  constructor(options: HarumiIMEOptions = {}) {
    this.options = {
      triggerLabel: options.triggerLabel ?? '元',
      shortcut: options.shortcut ?? true,
      searchOptions: { ...(options.searchOptions ?? {}) },
      showConditions: options.showConditions ?? true,
      maxCandidates: Math.max(1, options.maxCandidates ?? 100),
      dockBreakpoint: options.dockBreakpoint ?? 560,
      onSelect: options.onSelect,
    };
    this.conditions = { ...this.options.searchOptions };
    this.uid = `harumi-${++instanceSeq}`;
  }

  /** ポップアップが開いているか。 */
  get isOpen(): boolean {
    return this.openState;
  }

  /** 現在の検索条件（条件欄で変えた値を含む）。 */
  get searchOptions(): SearchOptions {
    return { ...this.conditions };
  }

  /* ------------------------------------------------------------ *
   * 取り付け / 取り外し
   * ------------------------------------------------------------ */

  /**
   * 1 組の入力欄に取り付ける。組ごとに何度でも呼べる（表の行ごとに 1 組など）。
   * 既に別の組に取り付けた欄は、その組から外してから付け直す。
   * 解決できた欄が 1 つも無ければ null を返す。
   */
  attach(targets: HarumiIMETargets): HarumiIMEGroup | null {
    const group: HarumiIMEGroup = {
      nengo: resolveField(targets.nengo),
      year: resolveField(targets.year),
      eto: resolveField(targets.eto),
    };
    const fields = groupFields(group);
    if (fields.length === 0) return null;
    this.detach(fields);
    this.ensureDom();
    for (const field of fields) {
      this.groups.set(field, group);
      this.bindField(field);
    }
    return group;
  }

  /** 指定した欄（省略時はすべて）から取り外す。取り付け先が無くなれば DOM と listener も片付ける。 */
  detach(target?: string | Element | ArrayLike<Element> | Iterable<Element>): void {
    const elements: Element[] =
      target === undefined
        ? Array.from(this.groups.keys())
        : typeof target === 'string'
          ? Array.from(document.querySelectorAll(target))
          : target instanceof Element
            ? [target]
            : Array.from(target as ArrayLike<Element>);
    for (const el of elements) {
      if (!isField(el) || !this.groups.has(el)) continue;
      this.bindings.get(el)?.();
      this.bindings.delete(el);
      const group = this.groups.get(el)!;
      this.groups.delete(el);
      // 組の他の欄からも、この欄への参照を外す（選んだ値を外した欄へ入れない）
      if (group.nengo === el) group.nengo = null;
      if (group.year === el) group.year = null;
      if (group.eto === el) group.eto = null;
      if (this.target === el) {
        this.close();
        this.target = null;
        if (this.trigger) this.trigger.hidden = true;
      }
    }
    if (this.groups.size === 0) this.teardownDom();
  }

  /** すべての取り付けを外し、DOM と listener を片付ける。 */
  destroy(): void {
    this.detach();
    this.teardownDom();
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

  /** 取り付けた欄を起点に開く。検索語は空から始め、条件は前回の値を残す。 */
  open(field: HarumiField): void {
    if (!this.groups.has(field) || !this.popup || !this.searchEl) return;
    this.target = field;
    this.openState = true;
    this.popup.hidden = false;
    this.trigger?.setAttribute('aria-expanded', 'true');
    this.syncConditionInputs();
    this.searchEl.value = '';
    this.selectedIndex = 0;
    this.refresh();
    this.positionPopup();
    this.searchEl.focus();
  }

  close({ refocus = false }: { refocus?: boolean } = {}): void {
    this.openState = false;
    this.composing = false;
    if (this.popup) this.popup.hidden = true;
    this.trigger?.setAttribute('aria-expanded', 'false');
    if (refocus && this.target) this.target.focus();
  }

  /* ------------------------------------------------------------ *
   * DOM の構築と片付け
   * ------------------------------------------------------------ */

  private ensureDom(): void {
    if (this.popup) return;
    ensureHarumiStyle(document);
    const popupId = `${this.uid}-popup`;
    const listId = `${this.uid}-list`;

    const trigger = document.createElement('button');
    trigger.type = 'button';
    trigger.className = 'harumi-trigger';
    trigger.id = `${this.uid}-trigger`;
    trigger.textContent = this.options.triggerLabel;
    trigger.title = this.options.shortcut ? '元号の候補を出す (Ctrl+J / ⌘J)' : '元号の候補を出す';
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
    titlebar.append(title, closeBtn);

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

    const list = document.createElement('div');
    list.className = 'harumi-list';
    list.id = listId;
    list.setAttribute('role', 'listbox');

    const hint = document.createElement('div');
    hint.className = 'harumi-hint';
    hint.textContent = '↑↓:選択 Enter:確定 1-9:直接選択 Esc:閉じる';

    popup.append(titlebar, searchRow);
    if (this.options.showConditions) {
      const conditions = this.buildConditions();
      popup.append(conditions);
      this.conditionsEl = conditions;
    }
    popup.append(list, hint);

    // 検索欄: システム IME の変換中は介入しない
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

    document.body.append(trigger, popup);
    this.trigger = trigger;
    this.popup = popup;
    this.searchEl = search;
    this.listEl = list;

    const onDocMouseDown = (e: MouseEvent) => {
      if (!this.openState || !this.popup) return;
      const t = e.target as Node | null;
      if (t && (this.popup.contains(t) || t === this.trigger || t === this.target)) return;
      this.close();
    };
    const onResize = () => {
      if (this.openState) this.positionPopup();
      if (this.target && this.trigger && !this.trigger.hidden) this.positionTrigger(this.target);
    };
    const onScroll = () => {
      if (this.openState && this.popup && !this.popup.classList.contains('harumi-is-docked')) this.positionPopup();
    };
    const vv = window.visualViewport;
    document.addEventListener('mousedown', onDocMouseDown);
    window.addEventListener('resize', onResize);
    window.addEventListener('scroll', onScroll, true);
    vv?.addEventListener('resize', onResize);
    this.globalCleanup = () => {
      document.removeEventListener('mousedown', onDocMouseDown);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('scroll', onScroll, true);
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
    details.addEventListener('toggle', () => {
      if (this.openState) this.positionPopup();
    });
    // ポップアップ外扱いで閉じないよう、条件欄の操作は popup 内で完結させる
    const onChange = () => {
      this.readConditionInputs();
      this.refresh();
    };
    details.addEventListener('input', onChange);
    details.addEventListener('change', onChange);
    // 条件欄でも Esc で閉じられるようにする
    details.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
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
    const digits = (name: string) => (this.conditionInput(name)?.value ?? '').replace(/[^\d]/g, '');
    const since = digits('since');
    const till = digits('till');
    const next: SearchOptions = {
      enable_over_match: this.conditionInput('enable_over_match')?.checked ?? false,
      tsuchinoe_inu_flag: this.conditionInput('tsuchinoe_inu_flag')?.checked ?? false,
      tsuchinoto_mi_flag: this.conditionInput('tsuchinoto_mi_flag')?.checked ?? false,
    };
    if (since || till) next.range = `${since}-${till}`;
    this.conditions = next;
  }

  /** 検索条件を条件欄へ書き戻す（開くたびに呼ぶ）。 */
  private syncConditionInputs(): void {
    if (!this.conditionsEl) return;
    const m = (this.conditions.range ?? '').match(/^(\d*)-(\d*)$/);
    const since = this.conditionInput('since');
    const till = this.conditionInput('till');
    if (since) since.value = m ? m[1] : '';
    if (till) till.value = m ? m[2] : '';
    for (const name of ['enable_over_match', 'tsuchinoe_inu_flag', 'tsuchinoto_mi_flag'] as const) {
      const box = this.conditionInput(name);
      if (box) box.checked = Boolean(this.conditions[name]);
    }
  }

  private teardownDom(): void {
    this.close();
    this.globalCleanup?.();
    this.globalCleanup = null;
    this.trigger?.remove();
    this.popup?.remove();
    this.trigger = null;
    this.popup = null;
    this.searchEl = null;
    this.listEl = null;
    this.conditionsEl = null;
    this.target = null;
  }

  private bindField(field: HarumiField): void {
    const onFocus = () => this.showTrigger(field);
    const onBlur = () => {
      if (this.openState) return;
      const ae = document.activeElement;
      if (ae !== this.trigger && !(isField(ae) && this.groups.has(ae))) {
        if (this.trigger) this.trigger.hidden = true;
      }
    };
    const onKeydown = (e: KeyboardEvent) => {
      if (this.options.shortcut && (e.ctrlKey || e.metaKey) && !e.altKey && e.key.toLowerCase() === 'j') {
        e.preventDefault();
        this.toggle(field);
        return;
      }
      if (e.key === 'Escape' && this.openState && this.target === field) {
        this.close();
      }
    };
    field.addEventListener('focus', onFocus);
    field.addEventListener('blur', onBlur);
    field.addEventListener('keydown', onKeydown as EventListener);
    this.bindings.set(field, () => {
      field.removeEventListener('focus', onFocus);
      field.removeEventListener('blur', onBlur);
      field.removeEventListener('keydown', onKeydown as EventListener);
    });
    if (document.activeElement === field) this.showTrigger(field);
  }

  /* ------------------------------------------------------------ *
   * 起動ボタン
   * ------------------------------------------------------------ */

  private showTrigger(field: HarumiField): void {
    if (this.openState && this.target !== field) this.close();
    this.target = field;
    if (!this.trigger) return;
    this.positionTrigger(field);
    this.trigger.hidden = false;
  }

  private positionTrigger(field: HarumiField): void {
    if (!this.trigger) return;
    const r = field.getBoundingClientRect();
    const size = 26;
    this.trigger.style.top = `${window.scrollY + r.top - size - 4}px`;
    this.trigger.style.left = `${window.scrollX + r.right - size}px`;
  }

  /* ------------------------------------------------------------ *
   * 検索・描画
   * ------------------------------------------------------------ */

  private refresh(): void {
    if (!this.searchEl) return;
    const query = this.searchEl.value.trim();
    this.candidates = query ? ambiguousSearch(query, this.conditions) : [];
    this.selectedIndex = 0;
    this.renderList();
    // 候補の数でポップアップの高さが変わるので、上下どちらに出すかを決め直す
    if (this.openState) this.positionPopup();
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
    const shown = this.candidates.slice(0, this.options.maxCandidates);
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
        if (typeof item.scrollIntoView === 'function') item.scrollIntoView({ block: 'nearest' });
      }
    });
    const rest = this.candidates.length - shown.length;
    if (rest > 0) {
      const more = document.createElement('div');
      more.className = 'harumi-more';
      more.textContent = `ほか ${rest} 件。字を足すか条件で絞ってください`;
      list.appendChild(more);
    }
  }

  private onSearchKeydown(e: KeyboardEvent): void {
    const n = Math.min(this.candidates.length, this.options.maxCandidates);
    // 変換中（composition）のキーは一切消費しない
    const composing = this.composing || e.isComposing || e.keyCode === 229;
    if (composing) return;
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
      if (c) {
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
    const group = this.groups.get(field);
    if (!group) return;

    const values: Array<[HarumiField | null, string]> = [
      [group.nengo, candidate.nengo],
      [group.year, String(candidate.year)],
      [group.eto, candidate.eto ?? ''],
    ];
    for (const [el, value] of values) {
      if (!el) continue;
      el.value = value;
      // React / Vue 等に変更を知らせるため bubbles な input / change を発火する
      el.dispatchEvent(new Event('input', { bubbles: true }));
      el.dispatchEvent(new Event('change', { bubbles: true }));
    }

    this.close({ refocus: true });
    this.options.onSelect?.(candidate, { ...group });
  }

  /* ------------------------------------------------------------ *
   * 位置
   * ------------------------------------------------------------ */

  private positionPopup(): void {
    const field = this.target;
    const pop = this.popup;
    if (!field || !pop) return;
    const vv = window.visualViewport;
    const vw = vv ? vv.width : window.innerWidth;
    const style = pop.style;

    // 狭幅（またはソフトキーボードで縮んだ viewport）は下部ドッキング
    if (vw < this.options.dockBreakpoint) {
      pop.classList.add('harumi-is-docked');
      if (this.conditionsEl) this.conditionsEl.open = false;
      style.position = 'fixed';
      style.left = '8px';
      style.right = '8px';
      style.width = 'auto';
      style.top = 'auto';
      const bottom = vv ? Math.max(0, window.innerHeight - (vv.height + vv.offsetTop)) + DOCK_GAP_PX : DOCK_GAP_PX;
      style.bottom = `${bottom}px`;
      const vvAvail = vv ? vv.height : window.innerHeight;
      const popupMax = Math.max(DOCK_MIN_PX, Math.min(DOCK_POPUP_MAX_PX, vvAvail - DOCK_CONTEXT_MIN_PX));
      style.maxHeight = `${popupMax}px`;
      style.setProperty('--harumi-dock-max', `${popupMax}px`);
      return;
    }

    pop.classList.remove('harumi-is-docked');
    if (style.maxHeight) style.maxHeight = '';
    style.removeProperty('--harumi-dock-max');
    style.position = 'absolute';
    style.width = `${Math.min(360, vw - 16)}px`;

    const r = field.getBoundingClientRect();
    const h = pop.offsetHeight || 360;
    const w = pop.offsetWidth || 360;
    const vpBottom = vv ? vv.height + vv.offsetTop : window.innerHeight;
    let top = window.scrollY + r.bottom + 4;
    let left = window.scrollX + r.left;
    if (r.bottom + 4 + h > vpBottom && r.top - h - 4 >= 0) top = window.scrollY + r.top - h - 4;
    if (left - window.scrollX + w > vw) left = window.scrollX + vw - w - 8;
    if (left < window.scrollX + 4) left = window.scrollX + 4;

    style.top = `${top}px`;
    style.left = `${left}px`;
    style.bottom = 'auto';
    style.right = 'auto';
  }
}
