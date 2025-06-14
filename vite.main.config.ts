/// <reference types="vitest" />
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  base: './',
  build: {
    minify: false,
    lib: {
      entry: resolve(__dirname, 'src', 'main', 'index.ts'),
      name: 'trpc-electron',
      formats: ['es'],
      fileName: 'renderer',
    },
    outDir: resolve(__dirname, 'dist'),
    rollupOptions: {
      external: ['electron', '@trpc/client', '@trpc/server'],
    },
  },
});
