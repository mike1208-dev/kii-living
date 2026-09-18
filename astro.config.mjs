// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  // 本番の公開URLに合わせて変更してください（OGP / sitemap / canonical に使用）
  site: 'https://kii-living.pages.dev',
  integrations: [sitemap(), icon()],
  // localhost が ::1 に解決されると IPv4 側で接続できないため、明示的に 127.0.0.1 で待ち受ける
  server: { host: '127.0.0.1', port: 4321 },
  vite: {
    plugins: [tailwindcss()],
  },
});
