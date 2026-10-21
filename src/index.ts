import type { SearchOptions, SearchResult, AmbiguosEntry } from './types';
import ambiguosTable from './data/ambiguos_table.json';
import { JSONPath } from 'jsonpath-plus';

// 曖昧検索が受け付ける文字数の上限（空白除去・重複除去の後で数える）。
// 照合の費用は「候補の数 × 入力の文字数」で伸びるため、サーバー側で呼ばれた場合の
// DoS を防ぐ目的で設ける（SR-NOV26-A1-1）。
const MAX_AMBIGUOUS_CHARS = 64;

export function ambiguousSearch(text: string, options: SearchOptions = {}): SearchResult[] {
  // 空文字列や空白のみの場合は早期リターン
  if (!text || text.trim() === '') return [];

  // 照合結果は入力の「字の集合」だけに依存し、順序・重複回数には依存しない
  // （下の chars.every が 1 文字ずつの述語の論理積になっているため）。
  // よって照合の前に重複を除去してよい。費用は入力の長さではなく字種の数に比例する。
  const chars = [...new Set(text.replace(/\s+/g,"").split(""))];
  if (chars.length === 0) return [];
  // 重複除去後の字数が上限を超える入力は、例外にせず空の結果を返す。
  // 候補の列挙（JSONPath）より前に判定し、長大入力で照合費用を発生させない。
  if (chars.length > MAX_AMBIGUOUS_CHARS) return [];

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

    const result: Omit<AmbiguosEntry, 'year' | 'ambiguos'> & { year: string | number; ambiguos?: string } = Object.assign({}, candidate);
    delete result.ambiguos;
    result.year = year;
    prev.push(result as SearchResult);
    return prev;
  }, [] as SearchResult[]);
}

export type { SearchOptions, SearchResult };