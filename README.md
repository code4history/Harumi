# Harumi (春海)

**[Read this document in Japanese / 日本語で読む](README.ja.md)**

Harumi is a tool built with use in the field in mind. People who record stone monuments read the inscription on site, and often only a few characters of the date are legible. Give Harumi the characters you could make out — say `応` and `丙` from `◯応 拾▢年 丙△` — and it returns the era names, years and sexagenary cycle signs (eto) that satisfy them.

A fragment like `◯応 拾▢年` rarely settles the year by itself, but a fragment of the sexagenary cycle narrows the candidates sharply. With `慶`, `二` and `寅` it is down to a single candidate:

```javascript
import { ambiguousSearch } from '@c4h/harumi';

ambiguousSearch('慶二寅');
// [ { year: 1866, nengo: '慶応2', eto: '丙寅' } ]
```

Researchers who have every era name and every sexagenary sign memorised do not need Harumi; memorising them is hard work, and pulling out a reference table each time is slow too. Searching the candidates from the few characters you could read is what Harumi is for. The ambiguous matching works only between the pairs of similar-looking sexagenary signs named in the options, 戊/戌 and 己/巳; it does not look for similar characters in general. Harumi is not a tool for normalising how era names are written, nor for converting Japanese to Western years — if you need that, please propose it as a separate function in an issue.

The project name comes from [Harumi Shibukawa (渋川春海)](https://en.wikipedia.org/wiki/Shibukawa_Shunkai), a Japanese astronomer of the 17th–18th century.

## Usage

### Installation

```bash
pnpm add @c4h/harumi
```

### Migrating from the unscoped package name

Up to version 1.0.1 this package was published under the unscoped name harumi. From the 2026-11 release it is published as `@c4h/harumi`. The API is unchanged; only the package name differs.

```bash
pnpm remove harumi
pnpm add @c4h/harumi
```

Then change the module specifier in your imports from harumi to `@c4h/harumi`.

### Basic usage

```javascript
import { ambiguousSearch } from '@c4h/harumi';

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

### What `ambiguousSearch` accepts

- Input the characters you could read. Era-name characters, kanji numerals and sexagenary signs are matched. Old and new forms of an era-name character (応/應) and variant numerals (一/壱/壹, 二/弐/貳, 十/拾) are matched as well.
- It does not accept `年` (it appears in every era name, so it is no clue), Arabic numerals, or `元年` / `年間`.
- Symbols such as `?` or parentheses are not an exception: they are matched as the characters they are, so a query containing one returns 0 results. Symbols are not used in inscriptions, so searches containing symbols are not supported.
- This is not an API for normalising era names or for converting between Japanese and Western years. Please propose such a function separately in an issue.

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
