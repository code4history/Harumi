# Changelog

このプロジェクトの主な変更を記録します。版数は [Semantic Versioning](https://semver.org/) に従います。

## [Unreleased]

### Added
- **入力欄の補助 `<harumi-picker>` を追加しました**: 読み取れた字から元号の候補を出し、選んだ候補の和暦・西暦・干支を、ページの指定した欄へそれぞれ入れるカスタム要素です。見た目と操作は Nagarjuna の `<naga-ime>` に合わせています。使い方は README の「入力欄の補助」を参照してください。
- **Added the `<harumi-picker>` input helper**: A custom element that lists candidate eras from the characters you could read and writes the picked candidate's era, Western year and sexagenary cycle into the fields the page specifies. Its look and keyboard handling match `<naga-ime>` in Nagarjuna. See "Input helper for form fields" in the README.

### Changed
- **`index.ts` を分けました**: `ambiguousSearch` の本体を `src/search.ts` へ移しました。`index.ts` は `ambiguousSearch` と `HarumiPicker` を公開する入口だけになります。公開している名前と動作は変わりません。
- **Split `index.ts`**: The body of `ambiguousSearch` moved to `src/search.ts`, and `index.ts` now only re-exports `ambiguousSearch` and `HarumiPicker`. The exported names and behavior are unchanged.
- **開発用の依存に jsdom を追加しました**: `<harumi-picker>` のテストのためです。利用者がインストールするものは変わりません。
- **Added jsdom as a devDependency**: It is used by the `<harumi-picker>` tests. Nothing changes for what users install.
- **型定義の出力に `/// <reference lib="dom" />` を入れるようになりました**: `harumi-picker.d.ts` の先頭で DOM の型を引くので、tsconfig の lib に DOM を入れていない利用者でも型エラーになりません。その代わり、この型定義を読み込むと DOM の型（`window` など）がプログラム全体で見えるようになります。
- **Type declarations now start with `/// <reference lib="dom" />`**: `harumi-picker.d.ts` pulls in the DOM types itself, so projects without DOM in their tsconfig `lib` no longer get type errors. As a side effect, the DOM types (such as `window`) become visible to the whole program that loads these declarations.

## [1.1.0] - 2026-11-02

1.1.0-rc.1 と同じ内容の正式版です（版番号のみ変更）。変更点は 1.1.0-rc.1 までの各項を参照してください。

## [1.1.0-rc.1] - 2026-10-25

### Changed
- **パッケージ名の変更**: `harumi` から `@c4h/harumi` へ変更しました。インストールは `pnpm add @c4h/harumi` に書き換えてください。API は同じです（import するパッケージ名だけが変わります）。
- **README の説明を主眼に合わせて書き直しました**: README.md と README.ja.md の冒頭を、Harumi の主眼（現地で読み取れた数文字から元号・年・干支の候補を返す道具であること）に沿って書き直しました。あわせて、`ambiguousSearch` が受け付ける入力の約束を API の節に足しました。
- **README rewritten around the purpose of Harumi**: The openings of README.md and README.ja.md now explain what Harumi is for — returning era name, year and sexagenary cycle candidates from the few characters legible on site. The API section now documents what `ambiguousSearch` accepts.
- **記号を含む入力で例外にならなくなりました**: 記号（`?`・括弧など）はその字として照合されるため、記号を含む検索は例外ではなく 0 件を返します（#14 項目 1）。
- **Input containing symbols no longer raises an exception**: Symbols such as `?` or parentheses are matched as the characters they are, so a search containing them returns 0 results instead of raising an exception (#14 item 1).
- **デモの Service Worker が第三者の配信元から読まなくなりました**: workbox を CDN から読むのをやめてデモと一緒に配り、事前キャッシュから bootstrap の CDN の URL を外しました。デモをオフラインで開くと bootstrap の見た目は当たりません。
- **公開デモの本体 JS が読めるようになりました**: デモの本体 JS をサイト直下の絶対パスで指していたため、`/Harumi/` の下では 404 になり、デモが動いていませんでした。ページからの相対パスで読みます。
- **The public demo loads its script again**: The demo pointed at its script with a path from the site root, which returned 404 under `/Harumi/`, so the demo did not run. It now uses a path relative to the page.
- **The demo service worker no longer loads from third-party hosts**: Workbox is now served with the demo instead of being imported from a CDN, and the bootstrap CDN URLs are gone from the precache. When the demo is opened offline, the bootstrap styles do not apply.

## [1.0.1] - 2026-10-05

1.0.1-rc.2 と同じ内容の正式版です（版番号のみ変更）。変更点は 1.0.1-rc.2 までの各項を参照してください。

## [1.0.1-rc.2] - 2026-10-01

### Fixed
- デモの Service Worker が、存在しない unpkg の `harumi.min.js` を事前キャッシュしようとして登録に失敗していた（オフラインで使えなかった）不具合を修正
- デモに `<meta name="mobile-web-app-capable">` を追加

## [1.0.1-rc.1] - 2026-09-28

### Changed
- 依存関係を更新
