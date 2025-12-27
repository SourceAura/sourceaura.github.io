import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import pagefind from "astro-pagefind";
import sitemap from "@astrojs/sitemap";

import vue from '@astrojs/vue';
import icon from "astro-icon";
import preact from '@astrojs/preact';
import sentry from "@sentry/astro";
import spotlightjs from "@spotlightjs/astro";
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  output: 'static',
 adapter: vercel(),
 site: "https://sourceaura.vercel.app",
 devToolbar: {
     enabled: false,
   },
  integrations: [
    tailwind(),
    icon(),
    sitemap(),
    mdx(),
     preact(),
    pagefind({
      search: {
        index: true,
        search: true,
      },
      indexing: {
        verbose: true,
        rootSelector: "main",
      },
    }),
    vue(),
    sentry(),
    spotlightjs(),

  ],
  markdown: {
    shikiConfig: {
      theme: "css-variables"
    }
  },
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp'
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
