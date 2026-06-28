// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// 本番URL（独自ドメイン取得後にそのドメインへ差し替える）
export default defineConfig({
  site: 'https://ai-tools-hikaku.pages.dev',
  integrations: [sitemap()],
});
