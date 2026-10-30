import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { resolve } from 'path';
import { readFileSync } from 'fs';
import { copyWorkboxPlugin } from './scripts/vite-plugin-copy-workbox.mjs';

// package.json を読み込む
const packageJson = JSON.parse(
  readFileSync('./package.json', 'utf-8')
);

// npm package用のビルドの時のみ単一エントリーポイント
const isPackageBuild = process.env.BUILD_MODE === 'package';

export default defineConfig({
  build: isPackageBuild
    ? {
        lib: {
          entry: {
            'harumi': resolve(__dirname, 'src/index.ts'),
          },
          formats: ['es','cjs','umd'],
          name: 'harumi'
        }
      }
    : {
        outDir: 'dist',
        emptyOutDir: true,
        rollupOptions: {
          input: {
            main: resolve(__dirname, 'index.html')
          },
          output: {
            entryFileNames: 'assets/[name].[hash].js',
            chunkFileNames: 'assets/[name].[hash].js',
            assetFileNames: 'assets/[name].[hash][extname]'
          }
        }
      },
  // デモの Service Worker が読む workbox を public/workbox/ に写す。package ビルドには public/ を使わない
  plugins: [dts(), ...(isPackageBuild ? [] : [copyWorkboxPlugin()])],
  json: {
    stringify: true // JSONをstringifyして含める
  },
  server: {
    port: 5174,
    open: true,
    strictPort: true
  },
  // publicDir は Pages（SPA）ビルドのための機構。package ビルドの成果物（npm の tarball）へ
  // デモの public/ を混ぜない（m12 SR-NOV26-D-05）。
  publicDir: isPackageBuild ? false : 'public',
  appType: 'spa',
  define: {
    'import.meta.env.APP_VERSION': JSON.stringify(packageJson.version)
  }
});