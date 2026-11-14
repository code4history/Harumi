// @vitest-environment jsdom
/**
 * `<harumi-picker>` の単体テスト。
 * 要素の形（登録・影・属性とプロパティ・イベント）と、起動・検索・条件欄・組の欄への入力・
 * 選んだら閉じる・取り外しを確かめる。
 */
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { HarumiPicker } from './harumi-picker';
import { ambiguousSearch } from './search';

function key(init: KeyboardEventInit): KeyboardEvent {
  return new KeyboardEvent('keydown', { bubbles: true, cancelable: true, ...init });
}

function parts(picker: HarumiPicker) {
  const root = picker.shadowRoot!;
  const popup = root.querySelector('.harumi-popup') as HTMLElement;
  return {
    popup,
    trigger: root.querySelector('.harumi-trigger') as HTMLButtonElement,
    search: root.querySelector('.harumi-search') as HTMLInputElement,
    items: () => Array.from(root.querySelectorAll('.harumi-item')) as HTMLElement[],
    cond: (name: string) => root.querySelector(`input[name="${name}"]`) as HTMLInputElement,
    empty: () => root.querySelector('.harumi-empty')?.textContent,
  };
}

function typeSearch(picker: HarumiPicker, value: string): void {
  const search = parts(picker).search;
  search.value = value;
  search.dispatchEvent(new Event('input', { bubbles: true }));
}

async function flush(): Promise<void> {
  await Promise.resolve();
  await Promise.resolve();
}

describe('<harumi-picker>', () => {
  let nengo: HTMLInputElement;
  let year: HTMLInputElement;
  let eto: HTMLInputElement;

  beforeEach(() => {
    nengo = Object.assign(document.createElement('input'), { id: 'nengo' });
    year = Object.assign(document.createElement('input'), { id: 'year' });
    eto = Object.assign(document.createElement('input'), { id: 'eto' });
    document.body.append(nengo, year, eto);
  });

  afterEach(() => {
    document.body.replaceChildren();
  });

  function mount(attrs: Record<string, string> = { nengo: 'nengo', year: 'year' }): HarumiPicker {
    const el = document.createElement('harumi-picker');
    for (const [k, v] of Object.entries(attrs)) el.setAttribute(k, v);
    document.body.append(el);
    return el;
  }

  describe('要素の形', () => {
    it('harumi-picker として登録され、new でも同じものができる', () => {
      expect(customElements.get('harumi-picker')).toBe(HarumiPicker);
      expect(new HarumiPicker()).toBeInstanceOf(HarumiPicker);
    });

    it('部品とスタイルは影の中に置き、document.head には何も入れない', () => {
      const picker = mount();
      expect(picker.shadowRoot!.querySelector('style[data-harumi-style]')).not.toBeNull();
      expect(parts(picker).popup).not.toBeNull();
      expect(document.head.querySelector('style')).toBeNull();
      expect(document.body.querySelector('.harumi-popup')).toBeNull();
    });

    it('属性の id で欄を引く（先頭の # も許す）', () => {
      const picker = mount({ nengo: '#nengo', year: 'year', eto: 'eto' });
      expect(picker.fields).toEqual({ nengo, year, eto });
      expect(picker.nengo).toBe('nengo');
    });

    it('欄が 1 つも無ければ部品を作らない', () => {
      const picker = mount({ nengo: 'nothing' });
      expect(parts(picker).popup).toBeNull();
    });

    it('属性を変えると欄を付け替える', () => {
      const picker = mount({ nengo: 'nengo' });
      picker.setAttribute('nengo', 'year');
      expect(picker.fields.nengo).toBe(year);
    });

    it('属性 → プロパティの一方向。代入は属性を変えず、不正な値は既定値にする', () => {
      const picker = mount({ nengo: 'nengo', 'max-candidates': '5', shortcut: 'false', range: '1600-1700' });
      expect(picker.maxCandidates).toBe(5);
      expect(picker.shortcut).toBe(false);
      expect(picker.range).toBe('1600-1700');
      picker.maxCandidates = 7;
      expect(picker.getAttribute('max-candidates')).toBe('5');
      picker.setAttribute('max-candidates', 'abc');
      expect(picker.maxCandidates).toBe(100);
      picker.range = 'あいう';
      expect(picker.range).toBe('');
      picker.setAttribute('trigger-label', '');
      expect(picker.triggerLabel).toBe('元');
    });

    it('条件の属性は searchOptions に反映される', () => {
      const picker = mount({ nengo: 'nengo', 'over-match': '', 'tsuchinoe-inu': 'true', range: '1600-' });
      expect(picker.searchOptions).toEqual({
        range: '1600-',
        enable_over_match: true,
        tsuchinoe_inu_flag: true,
        tsuchinoto_mi_flag: false,
      });
    });

    it('DOM から外すと欄から外れ、戻すと付け直す', async () => {
      const picker = mount();
      picker.remove();
      await flush();
      expect(parts(picker).popup).toBeNull();
      document.body.append(picker);
      expect(picker.fields.nengo).toBe(nengo);
    });

    it('new で作って attach すると body の末尾に入る', () => {
      const picker = new HarumiPicker({ triggerLabel: '暦', searchOptions: { range: '1600-1700' } });
      picker.attach({ nengo: '#nengo', year });
      expect(picker.isConnected).toBe(true);
      expect(picker.fields).toEqual({ nengo, year, eto: null });
      expect(parts(picker).trigger.textContent).toBe('暦');
      expect(picker.range).toBe('1600-1700');
    });
  });

  describe('操作', () => {
    it('組のどの欄にフォーカスしても起動ボタンが出て、外れると消える', () => {
      const picker = mount();
      const { trigger } = parts(picker);
      expect(trigger.hidden).toBe(true);
      year.focus();
      expect(trigger.hidden).toBe(false);
      eto.focus();
      expect(trigger.hidden).toBe(true);
    });

    it('起動ボタンで開き、字を入れると元号の候補が並ぶ', () => {
      const picker = mount();
      const onOpen = vi.fn();
      picker.addEventListener('harumiOpen', onOpen);
      nengo.focus();
      parts(picker).trigger.dispatchEvent(new MouseEvent('mousedown', { bubbles: true, cancelable: true }));
      expect(picker.isOpen).toBe(true);
      expect(onOpen).toHaveBeenCalledTimes(1);
      expect(picker.shadowRoot!.activeElement).toBe(parts(picker).search);
      expect(parts(picker).empty()).toBe('読み取れた字を入力してください');

      typeSearch(picker, '寛永甲子');
      const items = parts(picker).items();
      expect(items).toHaveLength(ambiguousSearch('寛永甲子').length);
      expect(items[0].querySelector('.harumi-nengo')!.textContent).toBe('寛永1年');
      expect(items[0].querySelector('.harumi-year')!.textContent).toBe('西暦 1624年・甲子');
    });

    it('候補を選ぶと組のそれぞれの欄に入り、閉じて開いた欄へ戻る', () => {
      const picker = mount({ nengo: 'nengo', year: 'year', eto: 'eto' });
      const onInput = vi.fn();
      const onChange = vi.fn();
      const onCommit = vi.fn();
      const onClose = vi.fn();
      year.addEventListener('input', onInput);
      year.addEventListener('change', onChange);
      picker.addEventListener('harumiCommit', onCommit);
      picker.addEventListener('harumiClose', onClose);
      nengo.value = '古い値';

      picker.open(year);
      typeSearch(picker, '寛永甲子');
      parts(picker).search.dispatchEvent(key({ key: 'Enter' }));

      expect(nengo.value).toBe('寛永1');
      expect(year.value).toBe('1624');
      expect(eto.value).toBe('甲子');
      expect(onInput).toHaveBeenCalledTimes(1);
      expect((onInput.mock.calls[0][0] as InputEvent).inputType).toBe('insertReplacementText');
      expect(onChange).toHaveBeenCalledTimes(1);
      expect(picker.isOpen).toBe(false);
      expect(parts(picker).popup.hidden).toBe(true);
      expect(document.activeElement).toBe(year);
      expect(onClose).toHaveBeenCalledTimes(1);
      const detail = (onCommit.mock.calls[0][0] as CustomEvent).detail;
      expect(detail.field).toBe(year);
      expect(detail.result).toMatchObject({ nengo: '寛永1', year: 1624, eto: '甲子' });
      expect(detail.fields).toEqual({ nengo, year, eto });
    });

    it('片方だけの組でも動き、指定の無い欄には入れない', () => {
      const picker = mount({ year: 'year' });
      picker.open(year);
      typeSearch(picker, '寛永甲子');
      parts(picker).items()[0].click();
      expect(year.value).toBe('1624');
      expect(nengo.value).toBe('');
    });

    it('要素ごとに別の組へ入る（表の行ごとに置いた場合）', () => {
      const n2 = Object.assign(document.createElement('input'), { id: 'n2' });
      const y2 = Object.assign(document.createElement('input'), { id: 'y2' });
      document.body.append(n2, y2);
      mount();
      const second = mount({ nengo: 'n2', year: 'y2' });
      second.open(n2);
      typeSearch(second, '寛永甲子');
      parts(second).search.dispatchEvent(key({ key: '1' }));
      expect(n2.value).toBe('寛永1');
      expect(y2.value).toBe('1624');
      expect(nengo.value).toBe('');
    });

    it('矢印キーで選択を動かし、Esc で何も入れずに閉じる', () => {
      const picker = mount();
      picker.open(nengo);
      typeSearch(picker, '永');
      parts(picker).search.dispatchEvent(key({ key: 'ArrowDown' }));
      expect(parts(picker).items()[1].classList.contains('harumi-is-selected')).toBe(true);
      parts(picker).search.dispatchEvent(key({ key: 'Escape' }));
      expect(picker.isOpen).toBe(false);
      expect(nengo.value).toBe('');
      expect(document.activeElement).toBe(nengo);
    });

    it('変換中（composition）のキーでは確定しない', () => {
      const picker = mount();
      picker.open(nengo);
      typeSearch(picker, '寛永甲子');
      parts(picker).search.dispatchEvent(new CompositionEvent('compositionstart'));
      parts(picker).search.dispatchEvent(key({ key: 'Enter' }));
      expect(nengo.value).toBe('');
      expect(picker.isOpen).toBe(true);
    });

    it('Ctrl+J で開閉できる。shortcut を切れば反応しない', () => {
      const picker = mount();
      nengo.dispatchEvent(key({ key: 'j', ctrlKey: true }));
      expect(picker.isOpen).toBe(true);
      picker.close();
      picker.setAttribute('shortcut', 'false');
      nengo.dispatchEvent(key({ key: 'j', ctrlKey: true }));
      expect(picker.isOpen).toBe(false);
    });

    it('利用者が欄へフォーカスを戻すと閉じる', () => {
      const picker = mount();
      picker.open(nengo);
      year.focus();
      expect(picker.isOpen).toBe(false);
    });

    it('ポップアップの外を押すと閉じる', () => {
      const picker = mount();
      picker.open(nengo);
      document.body.dispatchEvent(new MouseEvent('mousedown', { bubbles: true }));
      expect(picker.isOpen).toBe(false);
    });
  });

  describe('条件と候補の数', () => {
    it('条件欄の西暦の範囲で絞り込み、条件は閉じても次に開くまで残る', () => {
      const picker = mount();
      picker.open(nengo);
      typeSearch(picker, '永');
      const all = parts(picker).items().length;
      parts(picker).cond('since').value = '1600';
      parts(picker).cond('till').value = '1700';
      parts(picker).cond('till').dispatchEvent(new Event('input', { bubbles: true }));
      expect(parts(picker).items()).toHaveLength(ambiguousSearch('永', { range: '1600-1700' }).length);
      expect(parts(picker).items().length).toBeLessThan(all);
      expect(picker.range).toBe('1600-1700');

      picker.close();
      picker.open(year);
      expect(parts(picker).cond('since').value).toBe('1600');
      expect(parts(picker).cond('till').value).toBe('1700');
    });

    it('条件の属性の初期値が条件欄に入り、検索に効く', () => {
      const picker = mount({ nengo: 'nengo', 'tsuchinoe-inu': '' });
      picker.open(nengo);
      expect(parts(picker).cond('tsuchinoe_inu_flag').checked).toBe(true);
      typeSearch(picker, '戊');
      expect(parts(picker).items()).toHaveLength(
        Math.min(ambiguousSearch('戊', { tsuchinoe_inu_flag: true }).length, 100),
      );
    });

    it('show-conditions="false" なら条件欄を出さない', () => {
      const picker = mount({ nengo: 'nengo', 'show-conditions': 'false' });
      expect((picker.shadowRoot!.querySelector('.harumi-conditions') as HTMLElement).hidden).toBe(true);
    });

    it('候補が上限を超えたら残りの件数を出す', () => {
      const picker = mount({ nengo: 'nengo', 'max-candidates': '3' });
      picker.open(nengo);
      typeSearch(picker, '永');
      const total = ambiguousSearch('永').length;
      expect(parts(picker).items()).toHaveLength(3);
      expect(picker.shadowRoot!.querySelector('.harumi-more')!.textContent).toContain(`ほか ${total - 3} 件`);
    });

    it('候補が無いときは案内を出す', () => {
      const picker = mount();
      picker.open(nengo);
      typeSearch(picker, '骨');
      expect(parts(picker).empty()).toBe('候補なし');
    });
  });

  describe('取り外し', () => {
    it('外した欄には値を入れず、すべて外すと部品を片付ける', () => {
      const picker = mount();
      picker.detach(year);
      picker.open(nengo);
      typeSearch(picker, '寛永甲子');
      parts(picker).search.dispatchEvent(key({ key: 'Enter' }));
      expect(nengo.value).toBe('寛永1');
      expect(year.value).toBe('');

      picker.detach();
      expect(parts(picker).popup).toBeNull();
    });

    it('destroy で要素も DOM から外す', () => {
      const picker = mount();
      picker.destroy();
      expect(picker.isConnected).toBe(false);
    });
  });
});
