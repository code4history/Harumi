/// <reference types="node" />
// デモはサブパス（https://code4history.dev/Harumi/）に置かれる。
// 本体 JS を絶対パスで出すとサイト直下を指して 404 になるので、実際にビルドして確かめる。
import { copyFileSync, existsSync, mkdtempSync, readFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { describe, expect, it } from 'vitest';
import { build } from 'vite';

const BUILD_TIMEOUT_MS = 60_000;
const ROOT = resolve(import.meta.dirname, '..');
const MODULE_SCRIPT = /<script\b[^>]*\btype="module"[^>]*\bsrc="([^"]+)"/g;

describe('デモのビルド', () => {
  it('本体 JS を index.html からの相対パスで読む', async () => {
    const entry = join(ROOT, 'index.html');
    const createdEntry = !existsSync(entry);
    const outDir = mkdtempSync(join(tmpdir(), 'harumi-demo-'));
    try {
      if (createdEntry) copyFileSync(join(ROOT, 'public', 'index.html'), entry);
      await build({
        root: ROOT,
        configFile: join(ROOT, 'vite.config.ts'),
        logLevel: 'silent',
        build: { outDir },
      });
      const html = readFileSync(join(outDir, 'index.html'), 'utf-8');
      const scripts = Array.from(html.matchAll(MODULE_SCRIPT), (match) => match[1]);
      expect(scripts).toHaveLength(1);
      expect(scripts[0]).toMatch(/^\.\/assets\//);
      expect(existsSync(join(outDir, scripts[0]))).toBe(true);
    } finally {
      if (createdEntry) rmSync(entry, { force: true });
      rmSync(outDir, { recursive: true, force: true });
    }
  }, BUILD_TIMEOUT_MS);
});
