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
  build: isPackageBuild
    ? {
        // nov26-m9-t6 S3: base（vite 7）の解決値を明示して保つ（t6 §3.3）
        target: ['chrome107', 'edge107', 'firefox104', 'safari16'],
        cssTarget: ['chrome107', 'edge107', 'firefox104', 'safari16'],
        minify: 'esbuild',
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
  plugins: [dts()],
  json: {
    stringify: true // JSONをstringifyして含める
  },
  server: {
    port: 5174,
    open: true,
    strictPort: true
  },
  publicDir: 'public',
  appType: 'spa',
  define: {
    'import.meta.env.APP_VERSION': JSON.stringify(packageJson.version)
  }
});