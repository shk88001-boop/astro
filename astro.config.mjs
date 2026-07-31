import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://example.netlify.app',
  output: 'static',
  compressHTML: true,
});
