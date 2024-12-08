# Harumi
Harumi (春海): Japanese-Western calendar open data and web converter.  
Project name is named from [渋川春海(Harumi Shibukawa)](https://ja.wikipedia.org/wiki/%E6%B8%8B%E5%B7%9D%E6%98%A5%E6%B5%B7), who was known as Japanese Astronomer in 17th-18th century.

# Harumi (春海)

日本の和暦西暦変換データおよび Web コンバーター

Harumi (春海): Japanese-Western calendar open data and web converter.  
Project name is named from [渋川春海(Harumi Shibukawa)](https://ja.wikipedia.org/wiki/%E6%B8%8B%E5%B7%9D%E6%98%A5%E6%B5%B7), who was known as Japanese Astronomer in 17th-18th century.

## 使い方

### インストール

```bash
npm install harumi
```

### 基本的な使用方法

```javascript
import { ambiguousSearch } from 'harumi';

// 基本的な検索
const results = ambiguousSearch('寛永');
console.log(results);
// [
//   { year: 1624, nengo: '寛永1', eto: '甲子' },
//   { year: 1625, nengo: '寛永2', eto: '乙丑' },
//   ...
// ]

// オプション付きの検索
const options = {
  range: '1600-1700',              // 西暦年の範囲指定
  enable_over_match: true,         // 延長マッチを有効化
  tsuchinoe_inu_flag: true,       // 「戊」と「戌」を同一視
  tsuchinoto_mi_flag: true        // 「己」と「巳」を同一視
};

const results2 = ambiguousSearch('寛永', options);
```

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

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## 開発者

- [Kohei Otsuka](https://github.com/kochizufan)
- [Code for History](https://github.com/code4history)

あなたの貢献をお待ちしています！イシューやプルリクエストは大歓迎です。