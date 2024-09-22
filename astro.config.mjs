import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import pagefind from "astro-pagefind";
import vue from '@astrojs/vue';
import icon from "astro-icon";
import vercel from '@astrojs/vercel/serverless';

import sentry from "@sentry/astro";
import spotlightjs from "@spotlightjs/astro";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  output: 'hybrid', // Changed from 'static' to 'server'
  adapter: vercel({
    imageService: true,
    imagesConfig: {
      sizes: [640, 750, 828, 1080, 1200, 1920],
      domains: [],
      minimumCacheTTL: 60,
    },
  }),
  site: "https://sourceaura.vercel.app",
  integrations: [
    tailwind(),
    icon(),
    sitemap(),
    mdx(),
    pagefind({
      indexing: {
        verbose: true,
      },
    }),
    vue(),
    sentry(),
    spotlightjs(),
    react(),
  ],
  markdown: {
    shikiConfig: {
      theme: "css-variables"
    }
  },
  image: {
    service: {
      entrypoint: 'astro/assets/services/vercel'
    },
    remotePatterns: [{ protocol: "https" }],
  },
  content: {
    collections: [
      'petals',
      // other collections if any
    ],
  }
});