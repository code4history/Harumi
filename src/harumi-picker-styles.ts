/**
 * `<harumi-picker>` の style。影の中に `<style data-harumi-style>` を 1 つ置く（document.head には入れない）。
 *
 * 見た目は兄弟プロダクト Nagarjuna の `<naga-ime>`（Nagarjuna/src/lib/ime/naga-styles.ts）に合わせる。
 * - selector は `.harumi-` か `:host` で始める。
 * - 影の中の最上位 `.harumi-root` に `all: initial` を当て、ページの継承性質を断つ。
 * - 寸法は px で書く（ページの `html { font-size }` に引きずられないため）。
 * - NagaIME との差分は、タブ帯の代わりの見出し・条件欄・候補行の表示内容と、挿入位置の縦棒が無いこと
 *   （欄の値をまるごと置き換えるので、挿入位置が無い）。
 * - dock 時の各行の高さは harumi-picker.ts の DOCK_*_PX と一致させる。
 */
export const HARUMI_STYLE_TEXT = `
:host {
  display: contents;
}
:host([hidden]) {
  display: none;
}
.harumi-root {
  all: initial;
  display: contents;
  direction: ltr;
}

.harumi-popup,
.harumi-trigger {
  --harumi-accent: #5b4a8a;
}

.harumi-popup[hidden],
.harumi-trigger[hidden],
.harumi-search-row[hidden],
.harumi-conditions[hidden],
.harumi-list[hidden] {
  display: none !important;
}

/* 起動ボタンと popup は文書の座標で置く（top/left に文書座標を書く。NagaIME と同じ）。 */
.harumi-trigger {
  position: absolute;
  z-index: 9998;
  width: 26px;
  height: 26px;
  border-radius: 6px;
  border: 1px solid #ccc;
  background: #fff;
  color: var(--harumi-accent);
  font-family: system-ui, -apple-system, sans-serif;
  font-size: 14px;
  line-height: 1;
  cursor: pointer;
  opacity: 0.55;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);
  transition: opacity 0.15s;
  padding: 0;
}
.harumi-trigger:hover,
.harumi-trigger:focus-visible {
  opacity: 1;
}

.harumi-popup {
  position: absolute;
  z-index: 9999;
  box-sizing: border-box;
  background: #fff;
  color: #333;
  border: 1px solid #d0d0d0;
  border-radius: 10px;
  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.18);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  font-family: system-ui, -apple-system, sans-serif;
  font-size: 13px;
  text-align: left;
}

.harumi-titlebar {
  display: flex;
  align-items: stretch;
  border-bottom: 1px solid #eee;
  flex: none;
}
.harumi-title {
  flex: 1;
  min-width: 0;
  padding: 8px 10px;
  font-size: 13px;
  font-weight: 600;
  color: var(--harumi-accent);
  border-bottom: 2px solid var(--harumi-accent);
  white-space: nowrap;
}
.harumi-close,
.harumi-fold {
  flex: none;
  border: none;
  background: none;
  line-height: 1;
  padding: 0 12px;
  cursor: pointer;
  border-left: 1px solid #eee;
}
.harumi-close {
  font-size: 18px;
  color: #999;
}
.harumi-close:hover {
  color: #333;
  background: #f5f5f5;
}
.harumi-fold {
  display: none;
  font-size: 16px;
  color: #666;
}

.harumi-search-row {
  display: flex;
  flex: none;
}
.harumi-search-label {
  display: none;
}
.harumi-search {
  margin: 8px 8px 4px;
  padding: 8px 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 6px;
  flex: 1 1 auto;
  min-width: 0;
}
.harumi-search:focus {
  outline: 2px solid var(--harumi-accent);
  outline-offset: -1px;
}

.harumi-conditions {
  flex: none;
  margin: 0 8px 6px;
  font-size: 12px;
  color: #555;
}
.harumi-conditions > summary {
  cursor: pointer;
  color: var(--harumi-accent);
  padding: 2px 0;
  line-height: 18px;
}
.harumi-conditions-body {
  display: flex;
  flex-wrap: wrap;
  gap: 4px 12px;
  padding: 4px 0 2px;
}
.harumi-range {
  display: flex;
  align-items: center;
  gap: 4px;
}
.harumi-range input {
  width: 56px;
  padding: 2px 4px;
  font-size: 13px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
.harumi-check {
  display: flex;
  align-items: center;
  gap: 3px;
  white-space: nowrap;
  cursor: pointer;
}

.harumi-list {
  overflow-y: auto;
  max-height: 260px;
  min-height: 60px;
  border-top: 1px solid #eee;
}

.harumi-item {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 10px;
  cursor: pointer;
}
.harumi-item.harumi-is-selected {
  background: #efeafa;
}
.harumi-item:hover {
  background: #f5f5f5;
}
.harumi-item.harumi-is-selected:hover {
  background: #efeafa;
}

.harumi-num {
  width: 14px;
  font-size: 11px;
  color: #aaa;
  text-align: right;
  flex: none;
}
.harumi-nengo {
  font-size: 20px;
  line-height: 1.2;
  min-width: 90px;
  flex: none;
}
.harumi-meta {
  display: flex;
  flex-direction: column;
  min-width: 0;
}
.harumi-year {
  font-size: 13px;
  color: #333;
}
.harumi-desc {
  font-size: 11px;
  color: #888;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.harumi-empty,
.harumi-more {
  padding: 12px;
  text-align: center;
  color: #999;
  font-size: 12px;
}
.harumi-more {
  padding: 6px 12px;
  border-top: 1px dashed #eee;
}

.harumi-hint {
  flex: none;
  padding: 5px 10px;
  font-size: 10px;
  color: #aaa;
  border-top: 1px solid #eee;
  background: #fafafa;
}

/*
 * 狭幅（dock）。ここから下は .harumi-popup.harumi-is-docked スコープに閉じる（PC 非影響）。
 * 欄のすぐ下に、文書の可視幅いっぱいの板として出す（NagaIME と同じ）。
 * --harumi-dock-max は positionPopup() が visualViewport の実測から毎回設定する。
 */
.harumi-popup.harumi-is-docked {
  border: none;
  border-top: 2px solid var(--harumi-accent);
  border-radius: 0;
  box-shadow: 0 -4px 16px rgba(0, 0, 0, 0.18);
  max-height: var(--harumi-dock-max, 226px);
}
.harumi-popup.harumi-is-docked .harumi-list {
  flex: 1 1 auto;
  min-height: 0;
  max-height: none;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
}
.harumi-popup.harumi-is-docked .harumi-hint {
  display: none;
}
.harumi-popup.harumi-is-docked .harumi-titlebar {
  box-sizing: border-box;
  height: 34px;
  background: #fafafa;
  border-bottom: 1px solid #e2e2e2;
}
.harumi-popup.harumi-is-docked .harumi-title {
  padding: 0 10px;
  font-size: 15px;
  line-height: 31px;
}
.harumi-popup.harumi-is-docked .harumi-close,
.harumi-popup.harumi-is-docked .harumi-fold {
  padding: 0 14px;
}
.harumi-popup.harumi-is-docked .harumi-fold {
  display: block;
}
.harumi-popup.harumi-is-docked .harumi-search-row {
  box-sizing: border-box;
  height: 30px;
  align-items: stretch;
  margin: 3px 8px;
  border: 1px solid #ccc;
  border-left: 3px solid var(--harumi-accent);
  border-radius: 6px;
  overflow: hidden;
  background: #fff;
}
.harumi-popup.harumi-is-docked .harumi-search-label {
  display: flex;
  align-items: center;
  flex: none;
  padding: 0 8px;
  font-size: 12px;
  line-height: 1;
  color: var(--harumi-accent);
  background: #f3f0fa;
  border-right: 1px solid #e4dff2;
}
.harumi-popup.harumi-is-docked .harumi-search {
  box-sizing: border-box;
  margin: 0;
  border: none;
  border-radius: 0;
  font-size: 16px; /* iOS の focus 時自動ズームを避ける下限 */
  line-height: 20px;
  padding: 4px 10px;
}
.harumi-popup.harumi-is-docked .harumi-search:focus {
  outline-offset: -2px;
}
.harumi-popup.harumi-is-docked .harumi-conditions {
  margin: 0 8px 2px;
}
.harumi-popup.harumi-is-docked .harumi-item {
  box-sizing: border-box;
  height: 44px;
  padding: 5px 10px;
}
`;

/** 影の中の `<style>` に付ける印（テストが引く）。 */
export const HARUMI_STYLE_ATTRIBUTE = 'data-harumi-style';
