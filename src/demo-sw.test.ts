/// <reference types="node" />
// デモの Service Worker が第三者の配信元に依存しないことを確かめる。
import { existsSync, mkdtempSync, readFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';

const COPY_TIMEOUT_MS = 30_000;
const SCRIPT_URL = new URL('../scripts/vite-plugin-copy-workbox.mjs', import.meta.url).href;

const sw = readFileSync(new URL('../public/sw.js', import.meta.url), 'utf-8');

describe('デモの Service Worker', () => {
  it('第三者の URL を含まない', () => {
    expect(sw).not.toMatch(/https?:\/\//);
  });

  it('同じ場所の workbox を読む', () => {
    expect(sw).toContain("importScripts('./workbox/workbox-sw.js');");
    expect(sw).toContain("modulePathPrefix: './workbox/'");
  });

  it('copyWorkbox は使う module を workbox/ の下に置く', async () => {
    // 文字列を直接書くと tsc が script を取り込み、emit の出力先と衝突する
    const { copyWorkbox } = await import(SCRIPT_URL);
    const dir = mkdtempSync(join(tmpdir(), 'harumi-workbox-'));
    try {
      await copyWorkbox(dir);
      await copyWorkbox(dir); // 二度目も失敗しない（前の一式を置き換える）
      for (const file of ['workbox-sw.js', 'workbox-precaching.prod.js', 'workbox-navigation-preload.prod.js']) {
        expect(existsSync(join(dir, 'workbox', file))).toBe(true);
      }
    } finally {
      rmSync(dir, { recursive: true, force: true });
    }
  }, COPY_TIMEOUT_MS);
});
