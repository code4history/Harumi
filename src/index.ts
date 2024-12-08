import type { SearchOptions, SearchResult, AmbiguosEntry } from './types';
import rawAmbiguosTable from './data/ambiguos_table.json';

// 配列データをオブジェクトに変換
const ambiguosTable = rawAmbiguosTable.reduce<Record<string, AmbiguosEntry>>((acc, entry) => {
  acc[entry.year] = entry;
  return acc;
}, {});

function evaluateJSONPath(path: string, data: Record<string, AmbiguosEntry>): AmbiguosEntry[] {
  const matches = path.match(/\$\.\*\[\?\(@property === "ambiguos" &&(.*?)\)\]\^/);
  if (!matches) return [];
  
  const conditions = matches[1].split('&&').map(cond => {
    const matchResult = cond.trim().match(/@\.match\(\/(.*?)\\/);
    return matchResult ? matchResult[1] : '';
  });

  return Object.entries(data)
    .filter(([_, value]) => {
      if (!value.ambiguos) return false;
      return conditions.every(pattern => {
        const regex = new RegExp(pattern);
        return regex.test(value.ambiguos);
      });
    })
    .map(([_, value]) => value);
}

export function ambiguousSearch(text: string, options: SearchOptions = {}): SearchResult[] {
  const chars = text.replace(/\s+/g,"").split("");
  const enable_over_match = options.enable_over_match || false;
  const tsuchinoe_inu_flag = options.tsuchinoe_inu_flag || false;
  const tsuchinoto_mi_flag = options.tsuchinoto_mi_flag || false;
  const range = options.range || '';
  const range_match = range.match(/^(\d*)-(\d*)$/);
  const since = range_match ? range_match[1] : '';
  const till = range_match ? range_match[2] : '';

  let regexes = chars.map(char => {
    if (tsuchinoe_inu_flag && ((char === '戊') || (char === '戌'))) {
      return '(@.match(/戊/) || @.match(/戌/))';
    } else if (tsuchinoto_mi_flag && ((char === '己') || (char === '巳'))) {
      return '(@.match(/己/) || @.match(/巳/))';
    } else return `@.match(/${char}/)`;
  }).join(" && ");
  regexes = `$.*[?(@property === "ambiguos" &&${regexes})]^`;

  return evaluateJSONPath(regexes, ambiguosTable).reduce<SearchResult[]>((prev, candidate) => {
    console.log(regexes);
    console.log(ambiguosTable);
    const year = parseInt(candidate.year);
    if ((since && parseInt(since) > year) || (till && parseInt(till) < year)) return prev;
    if (!enable_over_match && candidate.over_match) return prev;

    // 新しいオブジェクトを作成し、必要なプロパティのみを含める
    const result: SearchResult = {
      year,  // number型として設定
      nengo: candidate.nengo,
      ...(candidate.eto && { eto: candidate.eto }),
      ...(candidate.condition && { condition: candidate.condition }),
      ...(candidate.over_match && { over_match: candidate.over_match })
    };

    prev.push(result);
    return prev;
  }, []);
}

export type { SearchOptions, SearchResult };