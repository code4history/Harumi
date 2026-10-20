# Changelog

このプロジェクトの主な変更を記録します。版数は [Semantic Versioning](https://semver.org/) に従います。

## [Unreleased]

### Changed
- **パッケージ名の変更**: `harumi` から `@c4h/harumi` へ変更しました。インストールは `pnpm add @c4h/harumi` に書き換えてください。API は同じです（import するパッケージ名だけが変わります）。
- **README の説明を主眼に合わせて書き直しました**: README.md と README.ja.md の冒頭を、Harumi の主眼（現地で読み取れた数文字から元号・年・干支の候補を返す道具であること）に沿って書き直しました。あわせて、`ambiguousSearch` が受け付ける入力の約束を API の節に足しました。
- **README rewritten around the purpose of Harumi**: The openings of README.md and README.ja.md now explain what Harumi is for — returning era name, year and sexagenary cycle candidates from the few characters legible on site. The API section now documents what `ambiguousSearch` accepts.
- **記号を含む入力で例外にならなくなりました**: 記号（`?`・括弧など）はその字として照合されるため、記号を含む検索は例外ではなく 0 件を返します（#14 項目 1）。
- **Input containing symbols no longer raises an exception**: Symbols such as `?` or parentheses are matched as the characters they are, so a search containing them returns 0 results instead of raising an exception (#14 item 1).

## [1.0.1] - 2026-10-05

1.0.1-rc.2 と同じ内容の正式版です（版番号のみ変更）。変更点は 1.0.1-rc.2 までの各項を参照してください。

## [1.0.1-rc.2] - 2026-10-01

### Fixed
- デモの Service Worker が、存在しない unpkg の `harumi.min.js` を事前キャッシュしようとして登録に失敗していた（オフラインで使えなかった）不具合を修正
- デモに `<meta name="mobile-web-app-capable">` を追加

## [1.0.1-rc.1] - 2026-09-28

### Changed
- 依存関係を更新
