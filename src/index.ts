import type { SearchOptions, SearchResult, AmbiguosEntry } from './types';
import ambiguosTable from './data/ambiguos_table.json';
import { JSONPath } from 'jsonpath-plus';

export function ambiguousSearch(text: string, options: SearchOptions = {}): SearchResult[] {
  // 空文字列や空白のみの場合は早期リターン
  if (!text || text.trim() === '') return [];

  const chars = text.replace(/\s+/g,"").split("");
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