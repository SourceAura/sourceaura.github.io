import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import pagefind from "astro-pagefind";
import sitemap from "@astrojs/sitemap";

import icon from "astro-icon";
import vue from '@astrojs/vue';
import preact from '@astrojs/preact';
import sentry from "@sentry/astro";
import spotlightjs from "@spotlightjs/astro";
import vercel from '@astrojs/vercel';

const i18nConfig = {
  defaultLocale: "en",
  locales: {
    en: "en",
    es: "es", 
    fr: "fr",
    de: "de",
    it: "it",
    pt: "pt",
    ru: "ru",
    ja: "ja",
    ko: "ko",
    zh: "zh-CN",
    "zh-CN": "zh-CN",
    "zh-TW": "zh-TW",
    ar: "ar",
    hi: "hi",
    th: "th",
    vi: "vi",
    nl: "nl",
    pl: "pl",
    tr: "tr",
    sv: "sv",
    da: "da",
    no: "no",
    fi: "fi",
    he: "he"
  },
  routing: {
    prefixDefaultLocale: false,
    redirectToDefaultLocale: true
  },
  fallback: {
    locale: "en"
  }
};

// https://astro.build/config
export default defineConfig({
  output: 'static',
 adapter: vercel(),
 site: "https://sourceaura.vercel.app",
 devToolbar: {
     enabled: false,
  },
  vite: {
    server: {
      watch: {
        ignored: ['**/ml/**']
      }
    }
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
