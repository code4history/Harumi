import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { resolve } from 'path';
import { readFileSync } from 'fs';

// package.json を読み込む
const packageJson = JSON.parse(
  readFileSync('./package.json', 'utf-8')
);

// デモページ用のエントリーポイント
const demo = resolve(__dirname, 'src/demo.ts');
// ライブラリ用のエントリーポイント
const lib = resolve(__dirname, 'src/index.ts');

export default defineConfig({
  build: {
    lib: {
      entry: process.env.NODE_ENV === 'production' ? lib : demo,
      name: 'Harumi',
      fileName: 'harumi'
    },
    rollupOptions: {
      external: [], // 外部依存がある場合はここに追加
    }
  },
  plugins: [dts()],
  json: {
    stringify: true // JSONをstringifyして含める
  },
  server: {
    port: 8888,  // 既存のwebpack devServerと同じポート
    open: true   // 起動時にブラウザを開く
  },
  publicDir: 'public',
  appType: 'spa',  // SPAとして扱う
  define: {
    'import.meta.env.APP_VERSION': JSON.stringify(packageJson.version)
  }
});