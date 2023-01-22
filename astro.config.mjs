import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import robotsTxt from 'astro-robots-txt';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  site: 'http://yama-sitter.me',
  integrations: [sitemap(), robotsTxt()],
  // output: 'server',
  // adapter: cloudflare({ mode: 'directory' }),
});
