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

### Input helper for form fields (`<harumi-picker>`)

`<harumi-picker>` adds a popup to your page's form fields that lets users pick an era from the characters they could read. Its look and keyboard handling match `<naga-ime>` in the sibling project [Nagarjuna](https://github.com/code4history/Nagarjuna). Available from `1.2.0`.

- When an attached field has focus, a small "元" button appears at its top right. Open the popup with the button or Ctrl+J (⌘J on Mac); press Ctrl+J or Esc again to close it.
- Type the characters you could read to list candidate eras. Open "条件" (conditions) to change the search conditions (see "Conditions" below).
- Picking a candidate (click, Enter, or a number key) writes the Japanese era (e.g. `寛永1`), the Western year (`1624`) and the sexagenary cycle (`甲子`) into their fields, replacing the old values, closes the popup and returns focus to the field it was opened from.

One element serves one group of fields. Give the ids of the era (`nengo`), year (`year`) and cycle (`eto`) fields as attributes. Any one of them is enough. Use one element per group (for example, per table row).

#### Loading

With npm and a bundler (Vite, webpack, etc.), importing the package registers `<harumi-picker>`.

```javascript
// pnpm add @c4h/harumi
import '@c4h/harumi';
```

```html
<input id="nengo"> <input id="seireki"> <input id="eto">
<!-- The era field gets "寛永1", the year field "1624" and the cycle field "甲子" -->
<harumi-picker nengo="nengo" year="seireki" eto="eto"></harumi-picker>
```

Without a bundler, load it from a CDN with a pinned version. The ESM build works from either unpkg or jsDelivr.

```html
<script type="module" src="https://cdn.jsdelivr.net/npm/@c4h/harumi@1.2.0/dist/harumi.js"></script>
<!-- or https://unpkg.com/@c4h/harumi@1.2.0/dist/harumi.js -->
```

Load the UMD build (global name `harumi`) from unpkg. jsDelivr serves `.cjs` files with a type browsers refuse to run, so it does not work for the UMD build.

```html
<script src="https://unpkg.com/@c4h/harumi@1.2.0/dist/harumi.umd.cjs"></script>
<script>
  // <harumi-picker> is registered on load; the search function is harumi.ambiguousSearch
  console.log(harumi.ambiguousSearch('寛永甲子'));
</script>
```

You can also create it from script:

```javascript
import { HarumiPicker } from '@c4h/harumi';

const picker = new HarumiPicker({ searchOptions: { range: '1600-1868' } });
picker.attach({ nengo: '#nengo', year: document.querySelector('#seireki') });
picker.addEventListener('harumiCommit', (e) => console.log(e.detail.result));
```

#### Attributes and properties

Attribute values are reflected to properties (property names in parentheses). Reflection is one-way, from attribute to property: assigning a property does not change the attribute. Invalid values silently fall back to the default instead of raising an error.

| Attribute (property) | Default | Meaning |
| --- | --- | --- |
| `nengo`, `year`, `eto` | none | Ids of the fields that receive the era, the Western year and the cycle. A leading `#` is optional |
| `trigger-label` (`triggerLabel`) | `元` | Text of the trigger button |
| `shortcut` | `true` | Whether Ctrl+J / ⌘J opens and closes the popup |
| `max-candidates` (`maxCandidates`) | `100` | How many candidates to list at once (1 or more). Only the count of the rest is shown |
| `dock-breakpoint` (`dockBreakpoint`) | `560` | Below this viewport width (px), the popup appears right under the field at full width |
| `show-conditions` (`showConditions`) | `true` | Whether to show the conditions panel |
| `range` | none (no range) | Initial search condition: Western year range |
| `over-match` (`overMatch`) | `false` | Initial search condition: extended matching |
| `tsuchinoe-inu` (`tsuchinoeInu`) | `false` | Initial search condition: treat 戊 and 戌 as the same |
| `tsuchinoto-mi` (`tsuchinotoMi`) | `false` | Initial search condition: treat 己 and 巳 as the same |

Unlike standard HTML boolean attributes, the string `"false"` makes a boolean attribute false. A missing attribute means the default; an empty value, `"true"`, or the attribute's own name means true.

The `searchOptions` property (same shape as the `ambiguousSearch` options) reads or sets all search conditions at once. Reading it returns the current conditions, including changes the user made in the conditions panel. Whichever of attribute, property or panel changed last wins.

#### Conditions

- **Year range**: Both ends are inclusive. Either end may be omitted ("1600〜", "〜1700"). Full-width digits are accepted. As an attribute, write `1600-1700`, `1600-` or `-1700`.
- **Extended matching** (延長マッチ): After an era change, the old era's years are still listed for two more years (for example, an inscription dated in the old era the year after the change). Such candidates are labeled 延長マッチ.
- **Treat 戊 and 戌 / 己 and 巳 as the same**: These pairs look alike and are hard to tell apart, so they are matched as the same character.

#### Methods and read-only properties

- `fields`: The fields currently served (`{ nengo, year, eto }`; `null` for a missing role).
- `isOpen`: Whether the popup is open.
- `open(field)`, `close()`, `toggle(field)`: Open, close or toggle from a served field. `close({ refocus: true })` returns focus to the field.
- `attach({ nengo, year, eto })`: Set fields by element or selector. Selectors are looked up with `document.querySelector` (pass the element for fields inside a shadow root). Only the roles you pass are replaced; the others stay. If the element is not in the page, it is appended to the end of `document.body`. Only the roles that resolve to an `<input>` or `<textarea>` element are replaced: a missing value (`null` or `undefined`), a selector that matches nothing, or an element that is neither `<input>` nor `<textarea>` leaves that role as it is. When not a single role is replaced, `attach()` returns without doing anything — the element is not added to the page and no listeners are changed. Passing the same field again leaves that role on the same field (only the listeners are re-synced).
- `detach(field)`: Detach a field, or all fields when omitted.
- `destroy()`: Detach everything and remove the element from the page.

#### When fields are looked up

Fields named by id attributes are looked up only:

- when the element is added to the page,
- at DOMContentLoaded, if it was added while the page was still loading, and
- when the `nengo`, `year` or `eto` attribute (or property) changes.

Fields rendered later are not found. Set the attribute again, or attach them with `attach()`.

Removing the element from the page detaches its fields. When it is added back, fields named by id attributes are looked up and attached again, but fields attached with `attach()` are not. Call `attach()` again.

#### Events

Dispatched on the element (they bubble).

- `harumiOpen`: After the popup opens (`detail.field` is the field it was opened from).
- `harumiClose`: After the popup closes (`detail.field` is the field it was opened from). It fires only when the popup was open, in these cases:
  - when a candidate is picked (after `harumiCommit`),
  - on Esc (from the character field or the conditions panel),
  - on the × button,
  - when the trigger button closes it,
  - on a mouse press outside the popup, the trigger button and the field it was opened from,
  - when the user puts focus back into an attached field,
  - when `close()` is called from script,
  - when a detach — `detach()`, `destroy()`, replacing a field with another one through `attach()`, changing the `nengo`, `year` or `eto` attribute or property, or removing the element from the page — takes away the field it was opened from, or the last field it serves.
- `harumiCommit`: After the values are written and before the popup closes (`detail.result` is the picked candidate, `detail.fields` the group's fields).

Each filled field fires `input` and `change` like normal typing. Values are written through the element's original `value` setter, so controlled React fields (`value` with `onChange`) see the change.

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
