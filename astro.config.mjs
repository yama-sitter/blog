import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import robotsTxt from 'astro-robots-txt';
import cloudflare from '@astrojs/cloudflare';

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: 'http://yama-sitter.me',
  integrations: [sitemap(), robotsTxt(), react()],
  output: 'server',
  adapter: cloudflare({
    mode: 'directory'
  })
});