import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import pagefind from "astro-pagefind";
import vue from '@astrojs/vue';
import icon from "astro-icon";
import preact from '@astrojs/preact';
import sentry from "@sentry/astro";
import spotlightjs from "@spotlightjs/astro";
import react from "@astrojs/react";
import vercel from '@astrojs/vercel/static';


// https://astro.build/config
export default defineConfig({
  output: 'static',
 adapter: vercel(),
 site: "https://sourceaura.vercel.app",
  integrations: [
    tailwind(),
    icon(),
    sitemap(),
    mdx(),
    preact(),
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
