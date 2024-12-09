import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { resolve } from 'path';
import { readFileSync } from 'fs';

// package.json を読み込む
const packageJson = JSON.parse(
  readFileSync('./package.json', 'utf-8')
);

// npm package用のビルドの時のみ単一エントリーポイント
const isPackageBuild = process.env.BUILD_MODE === 'package';

export default defineConfig({
  build: {
    lib: isPackageBuild
      ? {
          entry: resolve(__dirname, 'src/index.ts'),
          name: 'Harumi',
          fileName: 'harumi'
        }
      : {
          entry: {
            'harumi': resolve(__dirname, 'src/index.ts'),
            'harumi.demo': resolve(__dirname, 'src/demo.ts')
          },
          formats: ['es']
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