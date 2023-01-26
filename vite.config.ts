import { defineConfig } from 'vite';

export default defineConfig({
  define: {
    MICROCMS_SERVICE_DOMAIN: JSON.stringify(
      process.env.MICROCMS_SERVICE_DOMAIN
    ),
    MICROCMS_API_KEY: JSON.stringify(process.env.MICROCMS_API_KEY),
  },
});
