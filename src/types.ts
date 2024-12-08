export interface SearchOptions {
  enable_over_match?: boolean;
  tsuchinoe_inu_flag?: boolean;
  tsuchinoto_mi_flag?: boolean;
  range?: string;
}
  
// 元データの型
export interface AmbiguosEntry {
  year: string;
  eto?: string;
  nengo: string;
  ambiguos: string;
  condition?: string;
  over_match?: boolean;
}
  
// 変換後のデータの型
export interface SearchResult {
  year: number;
  eto?: string;
  nengo: string;
  condition?: string;
  over_match?: boolean;
}

export type AmbiguosData = AmbiguosEntry[];