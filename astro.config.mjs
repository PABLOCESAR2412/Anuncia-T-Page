// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
    devToolbar: {
        enabled: false
    },
    vite: {
        ssr: {
            external: ['@11ty/eleventy-img', 'svgo']
        }
    },
    output: 'server',
    adapter: vercel({
        webAnalytics: { enabled: true }
    }),
    integrations: [tailwind()]
});