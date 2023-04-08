import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";
import cloudflare from "@astrojs/cloudflare";
import react from "@astrojs/react";
import rome from "astro-rome";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "http://yama-sitter.me",
  integrations: [sitemap(), robotsTxt(), react(), rome(), tailwind()],
  output: "server",
  adapter: cloudflare({
    mode: "directory"
  })
});