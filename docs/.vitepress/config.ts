import { defineConfig } from 'vitepress';
import UnoCSS from 'unocss/vite';

export default defineConfig({
  title: 'trpc-electron',
  description: 'Just playing around.',
  themeConfig: {
    repo: 'mat-sz/trpc-electron',
    nav: [{ text: 'Guide', link: '/getting-started' }],
    sidebar: [
      {
        text: 'Guide',
        items: [{ text: 'Getting Started', link: '/getting-started' }],
      },
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present Jason Nall',
    },
  },
  vite: {
    plugins: [UnoCSS({})],
  },
});
