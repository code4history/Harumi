# Harumi (春海)

**[Read this document in Japanese / 日本語で読む](README.ja.md)**

Japanese-Western calendar open data and a web converter.

The project name comes from [Harumi Shibukawa (渋川春海)](https://en.wikipedia.org/wiki/Shibukawa_Shunkai), a Japanese astronomer of the 17th–18th century.

## Usage

### Installation

```bash
pnpm add harumi
```

### Basic usage

```javascript
import { ambiguousSearch } from 'harumi';

// Basic search
const results = ambiguousSearch('寛永');
console.log(results);
// [
//   { year: 1624, nengo: '寛永1', eto: '甲子' },
//   { year: 1625, nengo: '寛永2', eto: '乙丑' },
//   ...
// ]

// Search with options
const options = {
  range: '1600-1700',              // Restrict the Gregorian year range
  enable_over_match: true,         // Include extended (over-match) periods
  tsuchinoe_inu_flag: true,        // Treat 戊 and 戌 as the same character
  tsuchinoto_mi_flag: true         // Treat 己 and 巳 as the same character
};

const results2 = ambiguousSearch('寛永', options);
```

### Accepted input forms

`ambiguousSearch` normalizes the input before matching, so the following forms are accepted for the same era year:

- A trailing `年` (year) is stripped (e.g. `'昭和六十一年'` matches `'昭和六十一'`).
- Half-width and full-width Arabic numerals are treated the same as their kanji equivalents (e.g. `'昭和61'`, `'昭和６１'`, `'昭和61年'` all match `'昭和六十一'`).
- `元年` (the first year of an era) is treated as year 1 (e.g. `'昭和元年'` matches `'昭和1'`). The character `元` itself represents year 1 in the data, so it is kept as-is and matches only the first year of the era.
- A trailing `年間` or `年中` (the year is unknown) matches by the era name only and returns every year of that era via the normal search path — no special full-period expansion is performed (e.g. `'応永年間'` and `'応永年中'` return the same results as `'応永'`).
- Characters and symbols in the middle of the input are not stripped.

### Options

- `range`: Gregorian year range to search in (e.g. `'1600-1700'`)
- `enable_over_match`: Include the extended period of an era name (default: `false`)
- `tsuchinoe_inu_flag`: Treat 戊 and 戌 as the same character (default: `false`)
- `tsuchinoto_mi_flag`: Treat 己 and 巳 as the same character (default: `false`)

### Return type

```typescript
interface SearchResult {
  year: number;          // Gregorian year
  nengo: string;         // Era name (nengo)
  eto?: string;          // Sexagenary cycle sign (eto)
  condition?: string;    // Condition (e.g. "南朝", the Southern Court)
  over_match?: boolean;  // Whether this is an over-match result
}
```

### Example use cases

Estimating a date when the era name on a stone monument is only partially legible:

```javascript
// Only the character 慶 is legible
const results = ambiguousSearch('慶');

// The character 応 is legible and the monument is known to be from the 1860s
const results = ambiguousSearch('応', { range: '1860-1869' });

// It is unclear whether the character is 戊 or 戌
const results = ambiguousSearch('戊', { tsuchinoe_inu_flag: true });
```

## License

MIT License

Copyright (c) 2024 Code for History

## Developers

- [Kohei Otsuka](https://github.com/kochizufan)
- [Code for History](https://github.com/code4history)

Contributions are welcome. Issues and pull requests are very much appreciated.
