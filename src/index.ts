import type { SearchOptions, SearchResult, AmbiguosEntry } from './types';
import ambiguosTable from './data/ambiguos_table.json';
import { JSONPath } from 'jsonpath-plus';

// 半角・全角の算用数字列を、既存の漢数字相当へ変換する（t2 / AC6）。
// 元データの ambiguos が漢数字（一壱壹・二弐貳・十拾 等）で構成されるのに合わせ、
// 標準的な漢数字表記（61 → 六十一、10 → 十）へ写す。照合は文字ごとの
// includes なので、この表記が既存の漢数字入力と同一の結果をもたらす。
function arabicToKanji(seq: string): string {
  // 全角数字（U+FF10〜FF19）を半角へ正規化
  const half = seq.replace(/[０-９]/g, c => String.fromCharCode(c.charCodeAt(0) - 0xfee0));
  const kanji = ['', '一', '二', '三', '四', '五', '六', '七', '八', '九'];
  const units = ['', '十', '百', '千'];
  const digits = half.replace(/^0+/, '');
  if (digits === '') return ''; // "0" 等は該当文字を持たない（元データに 0 の表現が無い）
  let result = '';
  const len = digits.length;
  for (let i = 0; i < len; i++) {
    const d = digits.charCodeAt(i) - 0x30;
    if (d === 0) continue;
    const place = len - 1 - i; // 0=一の位,1=十の位,2=百の位,3=千の位
    if (place === 0) {
      result += kanji[d];
    } else if (place === 1 && d === 1) {
      result += '十';
    } else {
      result += kanji[d] + units[place];
    }
  }
  return result;
}

// t2（項目2）の入力前処理。末尾の「年間」「年中」「年」を除去し、
// 半角・全角算用数字を漢数字へ変換する。「元」は元データ上 1 年を表す文字
// として既に格納されており、そのまま残すことで「元年」が 1 年のみに照合する
// （元を「一」へ変換すると 11 年・21 年…まで過剰照合するため変換しない）。
function normalizeInput(text: string): string {
  let t = text.replace(/\s+/g, '');
  t = t.replace(/(年間|年中)$/, '');
  t = t.replace(/年$/, '');
  t = t.replace(/[0-9０-９]+/g, arabicToKanji);
  return t;
}

export function ambiguousSearch(text: string, options: SearchOptions = {}): SearchResult[] {
  // 空文字列や空白のみの場合は早期リターン
  if (!text || text.trim() === '') return [];

  const normalized = normalizeInput(text);
  if (normalized === '') return [];

  const chars = normalized.split("");
  if (chars.length === 0) return [];

  const enable_over_match = options.enable_over_match || false;
  const tsuchinoe_inu_flag = options.tsuchinoe_inu_flag || false;
  const tsuchinoto_mi_flag = options.tsuchinoto_mi_flag || false;
  const range = options.range || '';
  const range_match = range.match(/^(\d*)-(\d*)$/);
  const since = range_match ? range_match[1] : '';
  const till = range_match ? range_match[2] : '';

  // 候補集合を得る固定の JSONPath 式。入力文字列を式へ連結しない（AC2）。
  // 照合は入力を 1 文字ずつ TypeScript 側で文字どおり行うため、正規表現の
  // 特殊文字（? ( [ ] { } * + . ^ $ | \ / など）が式へ混入して例外になることがない。
  const candidates = JSONPath({
    path: '$.*[?(@property === "ambiguos")]^',
    json: ambiguosTable,
  }) as AmbiguosEntry[];

  return candidates.reduce((prev: SearchResult[], candidate: AmbiguosEntry) => {
    // TypeScript 側で文字どおりに照合する。照合対象は ambiguos 文字列。
    const matched = chars.every(char => {
      // 戊/戌・己/巳の同一視（後方互換）
      if (tsuchinoe_inu_flag && (char === '戊' || char === '戌')) {
        return candidate.ambiguos.includes('戊') || candidate.ambiguos.includes('戌');
      }
      if (tsuchinoto_mi_flag && (char === '己' || char === '巳')) {
        return candidate.ambiguos.includes('己') || candidate.ambiguos.includes('巳');
      }
      return candidate.ambiguos.includes(char);
    });
    if (!matched) return prev;

    const year = parseInt(candidate.year);
    if ((since && parseInt(since) > year) || (till && parseInt(till) < year)) return prev;
    if (!enable_over_match && candidate.over_match) return prev;

    const result = Object.assign({}, candidate) as any;
    delete result.ambiguos;
    result.year = year;
    prev.push(result as SearchResult);
    return prev;
  }, [] as SearchResult[]);
}

export type { SearchOptions, SearchResult };