# Harumi (春海)

**[英語版はこちら / Read this document in English](README.md)**

Harumi は、現地で使うことを考えて作った道具です。石造物の刻銘を現地で判読しながらデータを入力する人が、読み取れた数文字（例: 「◯応 拾▢年 丙△」のうち「応」と「丙」）を入れると、それを満たす元号・年・干支の候補を返します。

「◯応 拾▢年」だけでは何年か確定できません。でも、干支の一部でも分かれば候補は格段に絞られます。「慶」「二」「寅」を入れると、候補は「慶応2 丙寅（1866年）」の 1 件だけになります。

```javascript
import { ambiguousSearch } from '@c4h/harumi';

ambiguousSearch('慶二寅');
// [ { year: 1866, nengo: '慶応2', eto: '丙寅' } ]
```

全部の元号と干支を暗記している研究者には Harumi は要りません。ただ、暗記は大変です。一覧表を都度引くのも大変です。読み取れた数文字から候補を探すのが Harumi の役割です。曖昧な照合は、オプションで指定した字形の似た干支の 2 組（戊と戌、己と巳）の間でだけ働きます。似た字を一般に探すわけではありません。Harumi は元号の表記を正規化する道具でも、和暦を西暦に変換する道具でもありません。それが必要なら、別の関数として Issue で提案してください。

プロジェクト名は、17〜18世紀の日本の天文学者として知られる[渋川春海(Harumi Shibukawa)](https://ja.wikipedia.org/wiki/%E6%B8%8B%E5%B7%9D%E6%98%A5%E6%B5%B7)より名付けています。

## 使い方

### インストール

```bash
pnpm add @c4h/harumi
```

### スコープなしの旧名からの移行

1.0.1 までは、スコープなしの harumi という名前で公開していました。2026-11 のリリースから `@c4h/harumi` の名前で公開します。API は同じで、変わるのはパッケージ名だけです。

```bash
pnpm remove harumi
pnpm add @c4h/harumi
```

import の指定子を harumi から `@c4h/harumi` に書き換えてください。

### 基本的な使用方法

```javascript
import { ambiguousSearch } from '@c4h/harumi';

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

### `ambiguousSearch` が受け付ける入力

- 読み取れた文字をそのまま入れてください。元号の字・漢数字・干支を照合します。元号の字は新旧の字体（応／應）、年は異体字の漢数字（一／壱／壹、二／弐／貳、十／拾）も照合します。
- 「年」は受け付けません（どの元号にも入るので手掛かりになりません）。算用数字と「元年」「年間」も受け付けません。
- `?` や括弧などの記号は例外にはなりません。その字として照合されるので、記号を含む検索は 0 件になります。記号は刻銘に使われる字ではないため、記号を含む検索には対応しません。
- 元号の正規化や和暦西暦変換のための API ではありません。必要なら別の関数として Issue で提案してください。

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

### 入力欄の補助（`<harumi-picker>`）

ページの入力欄に、読み取れた字から元号を選んで入れる補助を付けられます。見た目と操作は、兄弟プロダクト [Nagarjuna](https://github.com/code4history/Nagarjuna) の `<naga-ime>` と同じです。`1.2.0` から使えます。

- 取り付けた欄にフォーカスすると、欄の右上に「元」のボタンが出ます。ボタンか Ctrl+J（Mac は ⌘J）で開きます。
- 読み取れた字を入れると元号の候補が並びます。「条件」を開くと検索の条件を変えられます（下の「条件欄」）。
- 候補を選ぶと（クリック・Enter・数字キー）、和暦・西暦・干支をそれぞれの欄に入れて閉じ、開いた欄へ戻ります。欄の値は置き換わります。

1 つの要素が 1 組の欄を受け持ちます。和暦（`nengo`）・西暦（`year`）・干支（`eto`）の欄の id を属性で指定します。少なくとも 1 つあれば動きます。表の行ごとなど、組が複数あるときは組ごとに要素を置きます。

#### 読み込み方

npm とバンドラ（Vite・webpack など）で使う場合は、パッケージを import すると `<harumi-picker>` が登録されます。

```javascript
// pnpm add @c4h/harumi
import '@c4h/harumi';
```

```html
<input id="nengo"> <input id="seireki"> <input id="eto">
<!-- 和暦の欄に「寛永1」、西暦の欄に「1624」、干支の欄に「甲子」が入る -->
<harumi-picker nengo="nengo" year="seireki" eto="eto"></harumi-picker>
```

バンドラを使わない場合は CDN から読みます。版は固定してください。ESM 版は unpkg・jsDelivr のどちらからでも読めます。

```html
<script type="module" src="https://cdn.jsdelivr.net/npm/@c4h/harumi@1.2.0/dist/harumi.js"></script>
<!-- または https://unpkg.com/@c4h/harumi@1.2.0/dist/harumi.js -->
```

UMD 版（グローバル名は `harumi`）は unpkg から読みます。jsDelivr は `.cjs` のファイルをブラウザが実行しない形式で返すため、UMD 版には使えません。

```html
<script src="https://unpkg.com/@c4h/harumi@1.2.0/dist/harumi.umd.cjs"></script>
<script>
  // <harumi-picker> は読み込んだ時点で登録済み。検索関数は harumi.ambiguousSearch
  console.log(harumi.ambiguousSearch('寛永甲子'));
</script>
```

スクリプトから作ることもできます。

```javascript
import { HarumiPicker } from '@c4h/harumi';

const picker = new HarumiPicker({ searchOptions: { range: '1600-1868' } });
picker.attach({ nengo: '#nengo', year: document.querySelector('#seireki') });
picker.addEventListener('harumiCommit', (e) => console.log(e.detail.result));
```

#### 属性とプロパティ

属性の値はプロパティに反映されます（括弧内がプロパティ名）。向きは属性からプロパティへの一方向で、プロパティに代入しても属性は変わりません。不正な値は、エラーにせず黙って既定値になります。

| 属性（プロパティ） | 既定値 | 意味 |
| --- | --- | --- |
| `nengo`・`year`・`eto` | なし | 和暦・西暦・干支を入れる欄の id。先頭の `#` は付けても付けなくてもよい |
| `trigger-label`（`triggerLabel`） | `元` | 起動ボタンの文字 |
| `shortcut` | `true` | Ctrl+J / ⌘J で開閉するか |
| `max-candidates`（`maxCandidates`） | `100` | 一度に並べる候補の数（1 以上）。超えた分は件数だけ出す |
| `dock-breakpoint`（`dockBreakpoint`） | `560` | 画面の幅（px）がこれ未満なら、欄のすぐ下に画面幅いっぱいで出す |
| `show-conditions`（`showConditions`） | `true` | 条件欄を出すか |
| `range` | なし（範囲なし） | 検索条件の初期値: 西暦の範囲 |
| `over-match`（`overMatch`） | `false` | 検索条件の初期値: 延長マッチ |
| `tsuchinoe-inu`（`tsuchinoeInu`） | `false` | 検索条件の初期値: 戊と戌を見分けない |
| `tsuchinoto-mi`（`tsuchinotoMi`） | `false` | 検索条件の初期値: 己と巳を見分けない |

真偽値の属性は、ふつうの HTML の真偽属性と違い、文字列 `"false"` で偽になります。属性が無いときは既定値、値が空・`"true"`・属性名と同じなら真です。

検索条件は `searchOptions` プロパティ（`ambiguousSearch` のオプションと同じ形）でまとめて読み書きできます。読み出すと、利用者が条件欄で変えた値を含む、いまの条件が返ります。属性・プロパティ・条件欄のうち、最後に変えたものが効きます。

#### 条件欄

- **西暦の範囲**: 開始と終了の両端を含みます。片側だけでも書けます（「1600〜」「〜1700」）。全角の数字も読みます。属性では `1600-1700`・`1600-`・`-1700` と書きます。
- **延長マッチ**: 改元の後も、旧元号の年数を 2 年先まで候補に出します（例: 改元の翌年に、まだ旧元号で刻んだ年）。延長分の候補には「延長マッチ」と出ます。
- **戊と戌を見分けない**・**己と巳を見分けない**: 字形が似ていて読み分けにくい字を、同じ字として照合します。

#### メソッドと読み出し専用のプロパティ

- `fields`: いま受け持っている欄（`{ nengo, year, eto }`。無い役は `null`）。
- `isOpen`: ポップアップが開いているか。
- `open(欄)`・`close()`・`toggle(欄)`: 受け持つ欄を起点に開く・閉じる・開閉する。`close({ refocus: true })` で欄へ戻る。
- `attach({ nengo, year, eto })`: 欄を要素かセレクタで指定します。セレクタは `document.querySelector` で探します（影の中の欄は要素を渡してください）。渡した役だけを置き換え、ほかの役はそのままです。要素がページに入っていなければ `document.body` の末尾へ入れます。
- `detach(欄)`: 欄を外します。省略するとすべて外します。
- `destroy()`: すべて外し、要素もページから取り除きます。

#### 欄を探す時期

属性の id で欄を探すのは、次の 3 つのときだけです。

- 要素がページに入ったとき
- ページの読み込み中に入った場合は、DOMContentLoaded のとき
- `nengo`・`year`・`eto` の属性（またはプロパティ）を変えたとき

これより後に描画された欄は見つけられません。属性を設定し直すか、`attach()` で付けてください。

要素をページから外すと、受け持っていた欄からも外れます。ページに戻すと、属性の id の欄は探し直して付け直しますが、`attach()` で付けた欄は付け直しません。もう一度 `attach()` を呼んでください。

#### イベント

要素で受け取ります（bubbles あり）。

- `harumiOpen`: ポップアップが開いた後（`detail.field` は開いた欄）。
- `harumiClose`: ポップアップが閉じた後（`detail.field`）。候補を選んだとき・Esc・×・外側のクリック・利用者が欄へ戻ったときに起きます。
- `harumiCommit`: 欄へ値を入れた後、閉じる前（`detail.result` は選んだ候補、`detail.fields` は組の欄）。

それぞれの欄では、ふつうの入力と同じく `input` と `change` が起きます。値は要素の元の `value` の setter で入れるので、React の制御された欄（`value` と `onChange`）にも変化が届きます。

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
