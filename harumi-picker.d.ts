/// <reference lib="dom" />
import { SearchOptions, SearchResult } from './types';
type HarumiField = HTMLInputElement | HTMLTextAreaElement;
type FieldRef = string | Element | null | undefined;
type DetachTarget = string | Element | ArrayLike<Element> | Iterable<Element>;
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
    /** Ctrl+J / Cmd+J で開閉するか。既定は true。 */
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
    harumiOpen: CustomEvent<{
        field: HarumiField;
    }>;
    /** popup が閉じた後 */
    harumiClose: CustomEvent<{
        field: HarumiField | null;
    }>;
    /** 候補を組の欄へ入れ、それぞれの欄の input / change を出した後（result は複製） */
    harumiCommit: CustomEvent<{
        field: HarumiField;
        result: SearchResult;
        fields: HarumiPickerFields;
    }>;
}
/** DOM の無い環境（Node）でも class 宣言が評価できるよう、HTMLElement が無ければ空の基底にする。 */
declare const BaseElement: typeof HTMLElement;
export declare class HarumiPicker extends BaseElement {
    static get observedAttributes(): string[];
    private cfgTriggerLabel;
    private cfgShortcut;
    private cfgMaxCandidates;
    private cfgDockBreakpoint;
    private cfgShowConditions;
    /** 検索条件の実効値。属性・プロパティ・条件欄のうち最後に変えたものが効く */
    private conditions;
    private readonly uid;
    private readonly root;
    private readonly roles;
    private readonly bindings;
    private target;
    private candidates;
    private selectedIndex;
    private composing;
    private openState;
    private docked;
    /** 畳んでいるか（人間の操作でだけ変わる。閉じても保つ） */
    private folded;
    /** いま自分で欄へ focus を戻している最中か（利用者が欄へ戻ったときだけ閉じるため） */
    private selfFocus;
    /** この open で「可視域に収めるための 1 回のスクロール」を済ませたか */
    private dockScrollDone;
    private initialized;
    private pendingIdLookup;
    private trigger;
    private popup;
    private searchEl;
    private searchRowEl;
    private conditionsEl;
    private listEl;
    private foldEl;
    private globalCleanup;
    private triggerCleanup;
    private triggerRaf;
    private popupCleanup;
    private popupRaf;
    constructor(options?: HarumiPickerOptions);
    connectedCallback(): void;
    disconnectedCallback(): void;
    attributeChangedCallback(name: string, _old: string | null, value: string | null): void;
    /** 和暦を入れる欄の id。要素の root（`getRootNode()`）で引く。 */
    get nengo(): string;
    set nengo(value: string);
    /** 西暦を入れる欄の id。 */
    get year(): string;
    set year(value: string);
    /** 干支を入れる欄の id。 */
    get eto(): string;
    set eto(value: string);
    /** いま受け持っている欄（読み出し専用・複製）。 */
    get fields(): HarumiPickerFields;
    /** 起動ボタンに表示する文字。既定は '元'。 */
    get triggerLabel(): string;
    set triggerLabel(value: string);
    /** Ctrl+J / Cmd+J で開閉するか。既定は true。 */
    get shortcut(): boolean;
    set shortcut(value: boolean);
    /** 一度に表示する候補の最大件数。既定は 100。 */
    get maxCandidates(): number;
    set maxCandidates(value: number);
    /** この幅（CSS px）未満の viewport では狭幅の板として出す。既定は 560。 */
    get dockBreakpoint(): number;
    set dockBreakpoint(value: number);
    /** 条件欄を出すか。既定は true。 */
    get showConditions(): boolean;
    set showConditions(value: boolean);
    /** 西暦の範囲（「1600-1700」「1600-」「-1700」）。既定は ''（範囲なし）。 */
    get range(): string;
    set range(value: string);
    /** 延長マッチ（改元後の 2 年も旧元号として出す）。既定は false。 */
    get overMatch(): boolean;
    set overMatch(value: boolean);
    /** 戊と戌を見分けない。既定は false。 */
    get tsuchinoeInu(): boolean;
    set tsuchinoeInu(value: boolean);
    /** 己と巳を見分けない。既定は false。 */
    get tsuchinotoMi(): boolean;
    set tsuchinotoMi(value: boolean);
    /** 検索条件の実効値（条件欄で利用者が変えた値を含む）。代入はすべての条件をまとめて置き換える。 */
    get searchOptions(): SearchOptions;
    set searchOptions(value: SearchOptions);
    /** ポップアップが開いているか。 */
    get isOpen(): boolean;
    private setRoleId;
    private setTriggerLabel;
    private setShowConditions;
    private setCondition;
    /** 開いていれば候補を出し直す（設定の変更を即座に見せる）。 */
    private rerender;
    /**
     * 組の欄を要素かセレクタで指定する（渡した役だけを置き換える）。
     * セレクタは `document.querySelector` で引く。影の中の欄は Element を渡すか、同じ影の中に
     * `<harumi-picker nengo="id">` を置く。要素が未接続なら `document.body` の末尾へ入れる。
     */
    attach(targets: HarumiPickerTargets): void;
    /** 指定した欄（省略時はすべて）から取り外す。受け持つ欄が無くなれば DOM と listener も片付ける。 */
    detach(target?: DetachTarget): void;
    /** すべての取り付けを外し、DOM と listener を片付け、要素を DOM から外す。 */
    destroy(): void;
    /** 属性の id を要素の root で引き直す。attach() で付けた役はそのまま。 */
    private resolveIds;
    /** 役の欄と listener の取り付けを揃える。 */
    private syncBindings;
    private unbindField;
    toggle(field: HarumiField): void;
    /** 受け持つ欄を起点に開く。字の欄は空から始め、条件は前回の値を残す。 */
    open(field: HarumiField): void;
    close({ refocus }?: {
        refocus?: boolean;
    }): void;
    /** 自分の都合で欄へ focus を戻す（利用者の操作と区別する印を立てる）。 */
    private focusFieldSelf;
    private emit;
    private ensureDom;
    /** 条件欄（西暦の範囲・延長マッチ・同一視）。値を変えると即座に候補を出し直す。 */
    private buildConditions;
    private conditionInput;
    /** 条件欄の値から検索条件を作る。範囲は数字以外を捨てる。 */
    private readConditionInputs;
    /** 検索条件を条件欄へ書き戻す。 */
    private syncConditionInputs;
    private teardownDom;
    private bindField;
    private showTrigger;
    private hideTrigger;
    /** 文書の座標を、要素の包含ブロックの padding box を原点とする座標へ直す量（文書が基準なら 0）。 */
    private containingBlockOffset;
    private placeInDocument;
    private documentWidth;
    /** 起動ボタンを欄の右上に置く。欄が文書の先頭にあれば欄のすぐ下へ回す。 */
    private positionTrigger;
    /** 起動ボタンが見えている間だけ、resize とスクロールコンテナ要素の scroll で置き直す。 */
    private syncTriggerTracking;
    private requestTriggerPosition;
    private stopTriggerTracking;
    private refresh;
    /** 狭幅の遷移を 1 か所で扱う。 */
    private setDocked;
    /** 畳む／開く（人間の操作でだけ呼ぶ）。開くときは字の欄へ戻す。 */
    private toggleFold;
    /** 畳んだ状態を見た目へ出す。広幅では出さない（状態は保つ）。 */
    private applyFold;
    private renderList;
    /** 選んだ候補が一覧の見える範囲に入るよう、一覧の scrollTop だけを動かす（ページは動かさない）。 */
    private revealInList;
    private onSearchKeydown;
    private commit;
    /**
     * popup を文書の座標で置く（NagaIME と同じ方式。ページのスクロールでは置き直さない）。
     * - 狭幅: 欄のすぐ下、横は文書の可視幅いっぱい。高さの上限は「欄の下からキーボードの上まで」。
     *   候補 1 行も見えないときだけ、開いた直後に 1 回ページを寄せる。
     * - 広幅: 欄の下。可視域の下端に入らず、上に入るなら上に出す。
     */
    private positionPopup;
    /** popup を開いている間だけ、スクロールコンテナ要素の scroll で置き直す（ページのスクロールでは置き直さない）。 */
    private syncPopupTracking;
    private requestPopupPosition;
    private stopPopupTracking;
}
/** `<harumi-picker>` のイベントの型（`addEventListener('harumiCommit', e => e.detail…)`）。 */
export interface HarumiPicker {
    addEventListener<K extends keyof HarumiPickerEventMap>(type: K, listener: (this: HarumiPicker, ev: HarumiPickerEventMap[K]) => unknown, options?: boolean | AddEventListenerOptions): void;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HarumiPicker, ev: HTMLElementEventMap[K]) => unknown, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HarumiPickerEventMap>(type: K, listener: (this: HarumiPicker, ev: HarumiPickerEventMap[K]) => unknown, options?: boolean | EventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HarumiPicker, ev: HTMLElementEventMap[K]) => unknown, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'harumi-picker': HarumiPicker;
    }
}
export {};
