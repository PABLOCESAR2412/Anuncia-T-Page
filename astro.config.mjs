// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  devToolbar: {
      enabled: false
    },
    site: 'https://anuncia-t.com', // Cambia esto al dominio de tu sitio
  vite: {
    ssr: {
      external: ['@11ty/eleventy-img', 'svgo']
    }
  },
  integrations: [tailwind()]
});