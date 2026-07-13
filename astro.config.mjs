// @ts-check
import { defineConfig } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: 'https://spotoncalculator.com',
  output: 'static',

  build: {
    format: 'directory',
  },

  compressHTML: true,
  adapter: cloudflare(),
});