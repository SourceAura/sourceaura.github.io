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

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: vercel(),
  site: "https://sourceaura.vercel.app",
  integrations: [tailwind(), icon(), sitemap(), mdx(), pagefind(), vue(), sentry(), spotlightjs()],
  markdown: {
    shikiConfig: {
      theme: "css-variables"
    }
  },
  
  // site: 'https://sourceaura.github.io',
  // base: 'sourceaura.github.io',
});