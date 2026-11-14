// @vitest-environment jsdom
/**
 * HarumiIME の単体テスト。
 * 起動ボタン・検索・条件欄・組の欄への入力・選んだら閉じる・取り外しを確かめる。
 */
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { HarumiIME } from './harumi-ime';
import { ambiguousSearch } from './index';

function key(init: KeyboardEventInit): KeyboardEvent {
  return new KeyboardEvent('keydown', { bubbles: true, cancelable: true, ...init });
}

const popupOf = () => document.body.querySelector('.harumi-popup') as HTMLElement;
const triggerOf = () => document.body.querySelector('.harumi-trigger') as HTMLButtonElement;
const searchOf = () => popupOf().querySelector('.harumi-search') as HTMLInputElement;
const itemsOf = () => Array.from(popupOf().querySelectorAll('.harumi-item')) as HTMLElement[];
const cond = (name: string) => popupOf().querySelector(`input[name="${name}"]`) as HTMLInputElement;

function typeSearch(value: string): void {
  const search = searchOf();
  search.value = value;
  search.dispatchEvent(new Event('input', { bubbles: true }));
}

describe('HarumiIME', () => {
  let nengo: HTMLInputElement;
  let year: HTMLInputElement;
  let ime: HarumiIME;

  beforeEach(() => {
    nengo = document.createElement('input');
    nengo.id = 'nengo';
    year = document.createElement('input');
    year.id = 'year';
    document.body.append(nengo, year);
    ime = new HarumiIME();
  });

  afterEach(() => {
    ime.destroy();
    document.body.replaceChildren();
    document.head.replaceChildren();
  });

  it('取り付けるまでは DOM を作らず、取り付けると style を 1 つだけ入れる', () => {
    expect(popupOf()).toBeNull();
    ime.attach({ nengo: '#nengo', year: '#year' });
    const other = new HarumiIME();
    other.attach({ nengo });
    expect(document.head.querySelectorAll('style[data-harumi-style]')).toHaveLength(1);
    other.destroy();
  });

  it('解決できる欄が無ければ null を返し、DOM を作らない', () => {
    expect(ime.attach({ nengo: '#nothing' })).toBeNull();
    expect(popupOf()).toBeNull();
  });

  it('組のどの欄にフォーカスしても起動ボタンが出て、外れると消える', () => {
    ime.attach({ nengo, year });
    expect(triggerOf().hidden).toBe(true);
    year.focus();
    expect(triggerOf().hidden).toBe(false);
    const outside = document.createElement('input');
    document.body.append(outside);
    outside.focus();
    expect(triggerOf().hidden).toBe(true);
  });

  it('起動ボタンで開き、字を入れると元号の候補が並ぶ', () => {
    ime.attach({ nengo, year });
    nengo.focus();
    triggerOf().dispatchEvent(new MouseEvent('mousedown', { bubbles: true, cancelable: true }));
    expect(ime.isOpen).toBe(true);
    expect(document.activeElement).toBe(searchOf());

    typeSearch('寛永甲子');
    const items = itemsOf();
    expect(items.length).toBe(ambiguousSearch('寛永甲子').length);
    expect(items[0].querySelector('.harumi-nengo')!.textContent).toBe('寛永1年');
    expect(items[0].querySelector('.harumi-year')!.textContent).toBe('西暦 1624年・甲子');
  });

  it('候補を選ぶと、和暦と西暦がそれぞれの欄に入り、ポップアップは閉じる', () => {
    const onInput = vi.fn();
    const onChange = vi.fn();
    year.addEventListener('input', onInput);
    year.addEventListener('change', onChange);
    const onSelect = vi.fn();
    ime = new HarumiIME({ onSelect });
    nengo.value = '古い値';
    ime.attach({ nengo, year });
    ime.open(year);
    typeSearch('寛永甲子');
    searchOf().dispatchEvent(key({ key: 'Enter' }));

    expect(nengo.value).toBe('寛永1');
    expect(year.value).toBe('1624');
    expect(onInput).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(ime.isOpen).toBe(false);
    expect(popupOf().hidden).toBe(true);
    expect(document.activeElement).toBe(year);
    expect(onSelect).toHaveBeenCalledWith(
      expect.objectContaining({ nengo: '寛永1', year: 1624 }),
      expect.objectContaining({ nengo, year, eto: null }),
    );
  });

  it('干支の欄を指定すれば干支も入る。片方だけの組でも動く', () => {
    const eto = document.createElement('input');
    document.body.append(eto);
    ime.attach({ year, eto });
    ime.open(year);
    typeSearch('寛永甲子');
    itemsOf()[0].click();
    expect(year.value).toBe('1624');
    expect(eto.value).toBe('甲子');
    expect(nengo.value).toBe('');
  });

  it('組ごとに別の欄へ入る（表の行ごとに取り付けた場合）', () => {
    const nengo2 = document.createElement('input');
    const year2 = document.createElement('input');
    document.body.append(nengo2, year2);
    ime.attach({ nengo, year });
    ime.attach({ nengo: nengo2, year: year2 });
    ime.open(nengo2);
    typeSearch('寛永甲子');
    searchOf().dispatchEvent(key({ key: '1' }));
    expect(nengo2.value).toBe('寛永1');
    expect(year2.value).toBe('1624');
    expect(nengo.value).toBe('');
    expect(year.value).toBe('');
  });

  it('矢印キーで選択を動かし、Esc で何も入れずに閉じる', () => {
    ime.attach({ nengo, year });
    ime.open(nengo);
    typeSearch('永');
    searchOf().dispatchEvent(key({ key: 'ArrowDown' }));
    expect(itemsOf()[1].classList.contains('harumi-is-selected')).toBe(true);
    searchOf().dispatchEvent(key({ key: 'Escape' }));
    expect(ime.isOpen).toBe(false);
    expect(nengo.value).toBe('');
    expect(document.activeElement).toBe(nengo);
  });

  it('変換中（composition）のキーでは確定しない', () => {
    ime.attach({ nengo, year });
    ime.open(nengo);
    typeSearch('寛永甲子');
    searchOf().dispatchEvent(new CompositionEvent('compositionstart'));
    searchOf().dispatchEvent(key({ key: 'Enter' }));
    expect(nengo.value).toBe('');
    expect(ime.isOpen).toBe(true);
  });

  it('Ctrl+J で開閉できる。shortcut: false なら反応しない', () => {
    ime.attach({ nengo, year });
    nengo.dispatchEvent(key({ key: 'j', ctrlKey: true }));
    expect(ime.isOpen).toBe(true);
    ime.close();
    ime.destroy();

    ime = new HarumiIME({ shortcut: false });
    ime.attach({ nengo, year });
    nengo.dispatchEvent(key({ key: 'j', ctrlKey: true }));
    expect(ime.isOpen).toBe(false);
  });

  it('条件欄の西暦の範囲で絞り込み、条件は閉じても次に開くまで残る', () => {
    ime.attach({ nengo, year });
    ime.open(nengo);
    typeSearch('永');
    const all = itemsOf().length + 0;
    cond('since').value = '1600';
    cond('till').value = '1700';
    cond('till').dispatchEvent(new Event('input', { bubbles: true }));
    const expected = ambiguousSearch('永', { range: '1600-1700' });
    expect(itemsOf().length).toBe(Math.min(expected.length, 100));
    expect(itemsOf().length).toBeLessThan(all);
    expect(ime.searchOptions.range).toBe('1600-1700');

    ime.close();
    ime.open(year);
    expect(cond('since').value).toBe('1600');
    expect(cond('till').value).toBe('1700');
  });

  it('searchOptions の初期値が条件欄に入り、検索に効く', () => {
    ime = new HarumiIME({ searchOptions: { tsuchinoe_inu_flag: true } });
    ime.attach({ nengo, year });
    ime.open(nengo);
    expect(cond('tsuchinoe_inu_flag').checked).toBe(true);
    typeSearch('戊');
    expect(itemsOf().length).toBe(Math.min(ambiguousSearch('戊', { tsuchinoe_inu_flag: true }).length, 100));
  });

  it('showConditions: false なら条件欄を出さない', () => {
    ime = new HarumiIME({ showConditions: false });
    ime.attach({ nengo, year });
    expect(popupOf().querySelector('.harumi-conditions')).toBeNull();
  });

  it('候補が上限を超えたら残りの件数を出す', () => {
    ime = new HarumiIME({ maxCandidates: 3 });
    ime.attach({ nengo, year });
    ime.open(nengo);
    typeSearch('永');
    const total = ambiguousSearch('永').length;
    expect(itemsOf()).toHaveLength(3);
    expect(popupOf().querySelector('.harumi-more')!.textContent).toContain(`ほか ${total - 3} 件`);
  });

  it('入力の無いときと候補の無いときに案内を出す', () => {
    ime.attach({ nengo, year });
    ime.open(nengo);
    expect(popupOf().querySelector('.harumi-empty')!.textContent).toBe('読み取れた字を入力してください');
    typeSearch('骨');
    expect(popupOf().querySelector('.harumi-empty')!.textContent).toBe('候補なし');
  });

  it('外した欄には値を入れず、すべて外すと DOM を片付ける', () => {
    ime.attach({ nengo, year });
    ime.detach(year);
    ime.open(nengo);
    typeSearch('寛永甲子');
    searchOf().dispatchEvent(key({ key: 'Enter' }));
    expect(nengo.value).toBe('寛永1');
    expect(year.value).toBe('');

    ime.detach();
    expect(popupOf()).toBeNull();
    expect(triggerOf()).toBeNull();
  });

  it('ポップアップの外を押すと閉じる', () => {
    ime.attach({ nengo, year });
    ime.open(nengo);
    document.body.dispatchEvent(new MouseEvent('mousedown', { bubbles: true }));
    expect(ime.isOpen).toBe(false);
  });
});
