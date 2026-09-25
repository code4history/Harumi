# Harumi (春海)

**[英語版はこちら / Read this document in English](README.md)**

日本の和暦西暦変換データおよび Web コンバーター

Harumi (春海): Japanese-Western calendar open data and web converter.  
プロジェクト名は、17〜18世紀の日本の天文学者として知られる[渋川春海(Harumi Shibukawa)](https://ja.wikipedia.org/wiki/%E6%B8%8B%E5%B7%9D%E6%98%A5%E6%B5%B7)より名付けています。

## 使い方

### インストール

```bash
pnpm add harumi
```

### 基本的な使用方法

```javascript
import { ambiguousSearch, nengoNames } from 'harumi';

// 基本的な検索
const results = ambiguousSearch('寛永');
console.log(results);
// [
//   { year: 1624, nengo: '寛永1', eto: '甲子' },
//   { year: 1625, nengo: '寛永2', eto: '乙丑' },
//   ...
// ]

// 年号名だけを取得
const names = nengoNames('寛永');
console.log(names);
// [ '寛永' ]

// オプション付きの検索
const options = {
  range: '1600-1700',              // 西暦年の範囲指定
  enable_over_match: true,         // 延長マッチを有効化
  tsuchinoe_inu_flag: true,       // 「戊」と「戌」を同一視
  tsuchinoto_mi_flag: true        // 「己」と「巳」を同一視
};

const results2 = ambiguousSearch('寛永', options);
```

### 受け付ける入力の形

`ambiguousSearch` は検索前に入力を正規化するため、同じ元号の年に対して次の形を受け付けます。

- 末尾の「年」は除去します（例: `'昭和六十一年'` は `'昭和六十一'` と同じ結果）。
- 半角・全角の算用数字を既存の漢数字と同じに扱います（例: `'昭和61'`・`'昭和６１'`・`'昭和61年'` はすべて `'昭和六十一'` と同じ結果）。
- 「元年」は 1 年として扱います（例: `'昭和元年'` は `'昭和1'` に一致）。元データ上「元」は 1 年を表す文字であり、そのまま残すことで元号の初年のみに照合します。
- 末尾の「年間」「年中」は年号名だけで照合し、その年号の全期間（全エントリ）を通常の検索経路で返します。専用の全期間展開は行いません（例: `'応永年間'`・`'応永年中'` は `'応永'` と同じ結果）。
- 途中の文字や記号は削除しません。

### 年号名だけを取得する（`nengoNames`）

`nengoNames(text, options?)` は、`ambiguousSearch` が照合する年号名（年の数字を除いたもの）を、最初の出現順（データ順）で重複を除いて返します。入力の形と `options` は `ambiguousSearch` と同じで、候補集合・正規化・literal 照合・`range`・`enable_over_match`・両 flag・通常時の over_match 除外はいずれも `ambiguousSearch` と同一です。

```javascript
import { nengoNames } from 'harumi';

nengoNames('寛永'); // [ '寛永' ]
nengoNames('寛永', { range: '1624-1630' }); // [ '寛永' ]

// ambiguousSearch と同じ入力の形が使えます:
nengoNames('昭和61年'); // [ '昭和' ]
nengoNames('応永年間'); // [ '応永' ]

// 複数の年号名に含まれる 1 文字は、各年号名を一度ずつデータ順で返します:
nengoNames('寛'); // [ '寛平', '寛和', ... ]

nengoNames('');       // []（空入力）
nengoNames('XXXXX');  // []（非該当）
```

返る `string[]` は年号名だけ（例: `'昭和'`）で、`SearchResult.nengo` に含まれる末尾の年の数字（例: `'1'`・`'10'`）を除いたものです。

### オプション

- `range`: 検索対象とする西暦年の範囲を指定（例: '1600-1700'）
- `enable_over_match`: 元号の延長期間も検索対象に含める（デフォルト: false）
- `tsuchinoe_inu_flag`: 「戊」と「戌」を同一の文字として扱う（デフォルト: false）
- `tsuchinoto_mi_flag`: 「己」と「巳」を同一の文字として扱う（デフォルト: false）

### 戻り値の型

```typescript
interface SearchResult {
  year: number;          // 西暦年
  nengo: string;         // 年号
  eto?: string;          // 干支
  condition?: string;    // 条件（例: "南朝"）
  over_match?: boolean;  // 延長マッチかどうか
}
```

### ユースケース例

石碑の年号が部分的にしか判読できない場合の年代推定：

```javascript
// 「慶」の文字だけが判読できる場合
const results = ambiguousSearch('慶');

// 「応」の文字と1860年代という情報がある場合
const results = ambiguousSearch('応', { range: '1860-1869' });

// 「戊」か「戌」かはっきりしない場合
const results = ambiguousSearch('戊', { tsuchinoe_inu_flag: true });
```

## ライセンス

MIT License

Copyright (c) 2024 Code for History

## 開発者

- [Kohei Otsuka](https://github.com/kochizufan)
- [Code for History](https://github.com/code4history)

あなたの貢献をお待ちしています！イシューやプルリクエストは大歓迎です。
