/// <reference types="vitest" />
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  base: './',
  build: {
    minify: false,
    emptyOutDir: false,
    lib: {
      entry: resolve(__dirname, 'src', 'renderer', 'index.ts'),
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
