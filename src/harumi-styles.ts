/**
 * HarumiIME 専用の style。
 *
 * 見た目は兄弟プロダクト Nagarjuna の NagaIME（Nagarjuna/src/lib/ime/naga-styles.ts）に合わせる。
 * - selector はすべて `.harumi-` で始め、NagaIME と同じページに置いても衝突させない。
 * - global `:root` へ custom property を足さない。`--harumi-*` は popup / trigger の要素上だけに置く。
 * - NagaIME との差分は、タブ帯の代わりの見出し・条件欄・候補行の表示内容だけ。
 */
export const HARUMI_STYLE_TEXT = `
.harumi-popup,
.harumi-trigger {
  --harumi-accent: #5b4a8a;
}

.harumi-popup[hidden],
.harumi-trigger[hidden] {
  display: none !important;
}

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
.harumi-close {
  flex: none;
  border: none;
  background: none;
  font-size: 18px;
  line-height: 1;
  padding: 0 12px;
  cursor: pointer;
  color: #999;
  border-left: 1px solid #eee;
}
.harumi-close:hover {
  color: #333;
  background: #f5f5f5;
}

.harumi-search-row {
  display: contents;
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
  flex: none;
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
  width: 4.5em;
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
  min-width: 4.5em;
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

/* モバイル dock（NagaIME と同じ割り付け）。ここから下は .harumi-is-docked スコープに閉じる。 */
.harumi-popup.harumi-is-docked {
  border-radius: 12px 12px 0 0;
  max-height: var(--harumi-dock-max, 260px);
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
  background: #fafafa;
  border-bottom: 1px solid #e2e2e2;
}
.harumi-popup.harumi-is-docked .harumi-title {
  padding: 9px 12px;
  font-size: 15px;
}
.harumi-popup.harumi-is-docked .harumi-close {
  padding: 0 14px;
}
.harumi-popup.harumi-is-docked .harumi-search-row {
  display: flex;
  align-items: stretch;
  flex: none;
  margin: 6px 8px 4px;
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
  flex: 1 1 auto;
  min-width: 0;
  margin: 0;
  border: none;
  border-radius: 0;
  font-size: 16px; /* iOS の focus 時自動ズームを避ける下限 */
  padding: 7px 10px;
}
.harumi-popup.harumi-is-docked .harumi-item {
  box-sizing: border-box;
  min-height: 44px;
  padding: 5px 10px;
}
`;

const STYLE_ATTRIBUTE = 'data-harumi-style';

/** 文書に HarumiIME の style が無ければ 1 つだけ入れる（複数インスタンスで共有する）。 */
export function ensureHarumiStyle(doc: Document = document): void {
  if (doc.head.querySelector(`style[${STYLE_ATTRIBUTE}]`)) return;
  const style = doc.createElement('style');
  style.setAttribute(STYLE_ATTRIBUTE, '');
  style.textContent = HARUMI_STYLE_TEXT;
  doc.head.appendChild(style);
}
