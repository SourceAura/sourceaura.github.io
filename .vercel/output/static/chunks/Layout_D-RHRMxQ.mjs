;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="27bd0bfb-d248-4e7d-8105-b464cfb580cd",e._sentryDebugIdIdentifier="sentry-dbid-27bd0bfb-d248-4e7d-8105-b464cfb580cd")}catch(e){}}();/* empty css                         */
import * as Sentry from '@sentry/astro';
import './_sentry-release-injection-file_CLoV_fbS.mjs';
import { b as createAstro, c as createComponent, r as renderTemplate, d as addAttribute, a as renderComponent, m as maybeRenderHead, e as renderSlot, i as defineScriptVars, j as createTransitionScope, k as renderHead } from './astro/server_YRuezPoq.mjs';
import 'kleur/colors';
import { clsx } from 'clsx';
import { g as getNowPlaying } from './spotify_DKpWw9cv.mjs';
import { S as SITE } from './consts_C5FYsQMh.mjs';
import { jsx } from 'react/jsx-runtime';
import * as React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { DayPicker } from 'react-day-picker';
import { twMerge } from 'tailwind-merge';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';

Sentry.init({
  dsn: undefined                                 ,
  debug: false,
  environment: undefined                                 ,
  release: undefined                                            ,
  tracesSampleRate: 1
});

const $$Astro$4 = createAstro("https://sourceaura.vercel.app");
const $$ViewTransitions = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "/home/source/Documents/GitHub/sourceaura.github.io/node_modules/astro/components/ViewTransitions.astro", void 0);

var __freeze$2 = Object.freeze;
var __defProp$2 = Object.defineProperty;
var __template$2 = (cooked, raw) => __freeze$2(__defProp$2(cooked, "raw", { value: __freeze$2(raw || cooked.slice()) }));
var _a$2;
const $$Astro$3 = createAstro("https://sourceaura.vercel.app");
const $$Head = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Head;
  const canonicalURL = new URL(Astro2.url.pathname, Astro2.site);
  const { title, description, image = "/blog-placeholder-1.jpg" } = Astro2.props;
  return renderTemplate(_a$2 || (_a$2 = __template$2(['<!-- Global Metadata --><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>\u{1F339}</text></svg>"><meta name="generator"', '><!-- Font preloads --><link rel="preload" href="/fonts/geist.woff2" as="font" type="font/woff2" crossorigin><link rel="preload" href="/fonts/geist-mono.woff2" as="font" type="font/woff2" crossorigin><!-- Canonical URL --><link rel="canonical"', "><!-- Primary Meta Tags --><title>", '</title><meta name="title"', '><meta name="description"', '><!-- Open Graph / Facebook --><meta property="og:type" content="website"><meta property="og:url"', '><meta property="og:title"', '><meta property="og:description"', '><meta property="og:image"', '><!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"', '><meta property="twitter:title"', '><meta property="twitter:description"', '><meta property="twitter:image"', '><!-- PageFind --><!-- <link href="/pagefind/pagefind-ui.css" rel="stylesheet" /> --><!-- <script is:inline src="/pagefind/pagefind-ui.js"><\/script> -->', '<script>\n  function init() {\n    preloadTheme();\n    onScroll();\n    animate();\n    updateThemeButtons();\n    addCopyCodeButtons();\n    setGiscusTheme();\n\n    const backToTop = document.getElementById("back-to-top");\n    backToTop?.addEventListener("click", (event) => scrollToTop(event));\n\n    const backToPrev = document.getElementById("back-to-prev");\n    backToPrev?.addEventListener("click", () => window.history.back());\n\n    const lightThemeButton = document.getElementById("light-theme-button");\n    lightThemeButton?.addEventListener("click", () => {\n      localStorage.setItem("theme", "light");\n      toggleTheme(false);\n      updateThemeButtons();\n    });\n\n    const darkThemeButton = document.getElementById("dark-theme-button");\n    darkThemeButton?.addEventListener("click", () => {\n      localStorage.setItem("theme", "dark");\n      toggleTheme(true);\n      updateThemeButtons();\n    });\n\n    const systemThemeButton = document.getElementById("system-theme-button");\n    systemThemeButton?.addEventListener("click", () => {\n      localStorage.setItem("theme", "system");\n      toggleTheme(window.matchMedia("(prefers-color-scheme: dark)").matches);\n      updateThemeButtons();\n    });\n\n    window\n      .matchMedia("(prefers-color-scheme: dark)")\n      .addEventListener("change", (event) => {\n        if (localStorage.theme === "system") {\n          toggleTheme(event.matches);\n        }\n      });\n\n    document.addEventListener("scroll", onScroll);\n  }\n\n  function updateThemeButtons() {\n    const theme = localStorage.getItem("theme");\n    const lightThemeButton = document.getElementById("light-theme-button");\n    const darkThemeButton = document.getElementById("dark-theme-button");\n    const systemThemeButton = document.getElementById("system-theme-button");\n\n    function removeActiveButtonTheme(button) {\n      button?.classList.remove("bg-black/5");\n      button?.classList.remove("dark:bg-white/5");\n    }\n\n    function addActiveButtonTheme(button) {\n      button?.classList.add("bg-black/5");\n      button?.classList.add("dark:bg-white/5");\n    }\n\n    removeActiveButtonTheme(lightThemeButton);\n    removeActiveButtonTheme(darkThemeButton);\n    removeActiveButtonTheme(systemThemeButton);\n\n    if (theme === "light") {\n      addActiveButtonTheme(lightThemeButton);\n    } else if (theme === "dark") {\n      addActiveButtonTheme(darkThemeButton);\n    } else {\n      addActiveButtonTheme(systemThemeButton);\n    }\n  }\n\n  function animate() {\n    const animateElements = document.querySelectorAll(".animate");\n\n    animateElements.forEach((element, index) => {\n      setTimeout(() => {\n        element.classList.add("show");\n      }, index * 100);\n    });\n  }\n\n  function onScroll() {\n    if (window.scrollY > 0) {\n      document.documentElement.classList.add("scrolled");\n    } else {\n      document.documentElement.classList.remove("scrolled");\n    }\n  }\n\n  function scrollToTop(event) {\n    event.preventDefault();\n    window.scrollTo({\n      top: 0,\n      behavior: "smooth",\n    });\n  }\n\n  function toggleTheme(dark) {\n    const css = document.createElement("style");\n\n    css.appendChild(\n      document.createTextNode(\n        `* {\n             -webkit-transition: none !important;\n             -moz-transition: none !important;\n             -o-transition: none !important;\n             -ms-transition: none !important;\n             transition: none !important;\n          }\n        `,\n      ),\n    );\n\n    document.head.appendChild(css);\n\n    if (dark) {\n      document.documentElement.classList.add("dark");\n    } else {\n      document.documentElement.classList.remove("dark");\n    }\n\n    window.getComputedStyle(css).opacity;\n    document.head.removeChild(css);\n\n    setGiscusTheme();\n  }\n\n  function preloadTheme() {\n    const userTheme = localStorage.theme;\n\n    if (userTheme === "light" || userTheme === "dark") {\n      toggleTheme(userTheme === "dark");\n    } else {\n      toggleTheme(window.matchMedia("(prefers-color-scheme: dark)").matches);\n    }\n  }\n\n  function addCopyCodeButtons() {\n    let copyButtonLabel = "\u{1F4CB}";\n    let codeBlocks = Array.from(document.querySelectorAll("pre"));\n\n    async function copyCode(codeBlock, copyButton) {\n      const codeText = codeBlock.innerText;\n      const buttonText = copyButton.innerText;\n      const textToCopy = codeText.replace(buttonText, "");\n\n      await navigator.clipboard.writeText(textToCopy);\n      copyButton.innerText = "\u2705";\n\n      setTimeout(() => {\n        copyButton.innerText = copyButtonLabel;\n      }, 2000);\n    }\n\n    for (let codeBlock of codeBlocks) {\n      const wrapper = document.createElement("div");\n      wrapper.style.position = "relative";\n\n      const copyButton = document.createElement("button");\n      copyButton.innerText = copyButtonLabel;\n      copyButton.classList = "copy-code";\n\n      codeBlock.setAttribute("tabindex", "0");\n      codeBlock.appendChild(copyButton);\n\n      codeBlock.parentNode.insertBefore(wrapper, codeBlock);\n      wrapper.appendChild(codeBlock);\n\n      copyButton?.addEventListener("click", async () => {\n        await copyCode(codeBlock, copyButton);\n      });\n    }\n  }\n\n  const setGiscusTheme = () => {\n    const giscus = document.querySelector(".giscus-frame");\n\n    const isDark = document.documentElement.classList.contains("dark");\n\n    if (giscus) {\n      const url = new URL(giscus.src);\n      url.searchParams.set("theme", isDark ? "dark" : "light");\n      giscus.src = url.toString();\n    }\n  };\n\n  document.addEventListener("DOMContentLoaded", () => init());\n  document.addEventListener("astro:after-swap", () => init());\n  preloadTheme();\n<\/script>'], ['<!-- Global Metadata --><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>\u{1F339}</text></svg>"><meta name="generator"', '><!-- Font preloads --><link rel="preload" href="/fonts/geist.woff2" as="font" type="font/woff2" crossorigin><link rel="preload" href="/fonts/geist-mono.woff2" as="font" type="font/woff2" crossorigin><!-- Canonical URL --><link rel="canonical"', "><!-- Primary Meta Tags --><title>", '</title><meta name="title"', '><meta name="description"', '><!-- Open Graph / Facebook --><meta property="og:type" content="website"><meta property="og:url"', '><meta property="og:title"', '><meta property="og:description"', '><meta property="og:image"', '><!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"', '><meta property="twitter:title"', '><meta property="twitter:description"', '><meta property="twitter:image"', '><!-- PageFind --><!-- <link href="/pagefind/pagefind-ui.css" rel="stylesheet" /> --><!-- <script is:inline src="/pagefind/pagefind-ui.js"><\/script> -->', '<script>\n  function init() {\n    preloadTheme();\n    onScroll();\n    animate();\n    updateThemeButtons();\n    addCopyCodeButtons();\n    setGiscusTheme();\n\n    const backToTop = document.getElementById("back-to-top");\n    backToTop?.addEventListener("click", (event) => scrollToTop(event));\n\n    const backToPrev = document.getElementById("back-to-prev");\n    backToPrev?.addEventListener("click", () => window.history.back());\n\n    const lightThemeButton = document.getElementById("light-theme-button");\n    lightThemeButton?.addEventListener("click", () => {\n      localStorage.setItem("theme", "light");\n      toggleTheme(false);\n      updateThemeButtons();\n    });\n\n    const darkThemeButton = document.getElementById("dark-theme-button");\n    darkThemeButton?.addEventListener("click", () => {\n      localStorage.setItem("theme", "dark");\n      toggleTheme(true);\n      updateThemeButtons();\n    });\n\n    const systemThemeButton = document.getElementById("system-theme-button");\n    systemThemeButton?.addEventListener("click", () => {\n      localStorage.setItem("theme", "system");\n      toggleTheme(window.matchMedia("(prefers-color-scheme: dark)").matches);\n      updateThemeButtons();\n    });\n\n    window\n      .matchMedia("(prefers-color-scheme: dark)")\n      .addEventListener("change", (event) => {\n        if (localStorage.theme === "system") {\n          toggleTheme(event.matches);\n        }\n      });\n\n    document.addEventListener("scroll", onScroll);\n  }\n\n  function updateThemeButtons() {\n    const theme = localStorage.getItem("theme");\n    const lightThemeButton = document.getElementById("light-theme-button");\n    const darkThemeButton = document.getElementById("dark-theme-button");\n    const systemThemeButton = document.getElementById("system-theme-button");\n\n    function removeActiveButtonTheme(button) {\n      button?.classList.remove("bg-black/5");\n      button?.classList.remove("dark:bg-white/5");\n    }\n\n    function addActiveButtonTheme(button) {\n      button?.classList.add("bg-black/5");\n      button?.classList.add("dark:bg-white/5");\n    }\n\n    removeActiveButtonTheme(lightThemeButton);\n    removeActiveButtonTheme(darkThemeButton);\n    removeActiveButtonTheme(systemThemeButton);\n\n    if (theme === "light") {\n      addActiveButtonTheme(lightThemeButton);\n    } else if (theme === "dark") {\n      addActiveButtonTheme(darkThemeButton);\n    } else {\n      addActiveButtonTheme(systemThemeButton);\n    }\n  }\n\n  function animate() {\n    const animateElements = document.querySelectorAll(".animate");\n\n    animateElements.forEach((element, index) => {\n      setTimeout(() => {\n        element.classList.add("show");\n      }, index * 100);\n    });\n  }\n\n  function onScroll() {\n    if (window.scrollY > 0) {\n      document.documentElement.classList.add("scrolled");\n    } else {\n      document.documentElement.classList.remove("scrolled");\n    }\n  }\n\n  function scrollToTop(event) {\n    event.preventDefault();\n    window.scrollTo({\n      top: 0,\n      behavior: "smooth",\n    });\n  }\n\n  function toggleTheme(dark) {\n    const css = document.createElement("style");\n\n    css.appendChild(\n      document.createTextNode(\n        \\`* {\n             -webkit-transition: none !important;\n             -moz-transition: none !important;\n             -o-transition: none !important;\n             -ms-transition: none !important;\n             transition: none !important;\n          }\n        \\`,\n      ),\n    );\n\n    document.head.appendChild(css);\n\n    if (dark) {\n      document.documentElement.classList.add("dark");\n    } else {\n      document.documentElement.classList.remove("dark");\n    }\n\n    window.getComputedStyle(css).opacity;\n    document.head.removeChild(css);\n\n    setGiscusTheme();\n  }\n\n  function preloadTheme() {\n    const userTheme = localStorage.theme;\n\n    if (userTheme === "light" || userTheme === "dark") {\n      toggleTheme(userTheme === "dark");\n    } else {\n      toggleTheme(window.matchMedia("(prefers-color-scheme: dark)").matches);\n    }\n  }\n\n  function addCopyCodeButtons() {\n    let copyButtonLabel = "\u{1F4CB}";\n    let codeBlocks = Array.from(document.querySelectorAll("pre"));\n\n    async function copyCode(codeBlock, copyButton) {\n      const codeText = codeBlock.innerText;\n      const buttonText = copyButton.innerText;\n      const textToCopy = codeText.replace(buttonText, "");\n\n      await navigator.clipboard.writeText(textToCopy);\n      copyButton.innerText = "\u2705";\n\n      setTimeout(() => {\n        copyButton.innerText = copyButtonLabel;\n      }, 2000);\n    }\n\n    for (let codeBlock of codeBlocks) {\n      const wrapper = document.createElement("div");\n      wrapper.style.position = "relative";\n\n      const copyButton = document.createElement("button");\n      copyButton.innerText = copyButtonLabel;\n      copyButton.classList = "copy-code";\n\n      codeBlock.setAttribute("tabindex", "0");\n      codeBlock.appendChild(copyButton);\n\n      codeBlock.parentNode.insertBefore(wrapper, codeBlock);\n      wrapper.appendChild(codeBlock);\n\n      copyButton?.addEventListener("click", async () => {\n        await copyCode(codeBlock, copyButton);\n      });\n    }\n  }\n\n  const setGiscusTheme = () => {\n    const giscus = document.querySelector(".giscus-frame");\n\n    const isDark = document.documentElement.classList.contains("dark");\n\n    if (giscus) {\n      const url = new URL(giscus.src);\n      url.searchParams.set("theme", isDark ? "dark" : "light");\n      giscus.src = url.toString();\n    }\n  };\n\n  document.addEventListener("DOMContentLoaded", () => init());\n  document.addEventListener("astro:after-swap", () => init());\n  preloadTheme();\n<\/script>'])), addAttribute(Astro2.generator, "content"), addAttribute(canonicalURL, "href"), title, addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(Astro2.url, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(new URL(image, Astro2.url), "content"), addAttribute(Astro2.url, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(new URL(image, Astro2.url), "content"), renderComponent($$result, "ViewTransitions", $$ViewTransitions, {}));
}, "/home/source/Documents/GitHub/sourceaura.github.io/src/components/Head.astro", void 0);

const $$Container = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="mx-auto max-w-screen-sm px-3"> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "/home/source/Documents/GitHub/sourceaura.github.io/src/components/Container.astro", void 0);

const $$NowPlaying = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div id="now-playing" class="flex items-center space-x-4 opacity-0 transition-opacity duration-300 rounded" style="background-image: url(''); background-size: cover; background-position: center; background-color: rgba(255, 255, 255, 0.5);"> <!-- Added semi-transparent white background --> <img id="album-cover" src="" alt="Album Cover" class="w-16 h-16 rounded-md hidden"> <!-- Hidden since we use background --> <div class="text-white"> <!-- Added text color for visibility --> <h3 id="song-title" class="font-semibold text-lg"></h3> <!-- Added text size --> <p id="artist-name" class="text-sm text-gray-300"></p> <!-- Changed text color for better contrast --> </div> <a id="spotify-link" href="" target="_blank" rel="noopener noreferrer" class="ml-auto flex-shrink-0"> <!-- Added flex-shrink-0 to keep it on the right --> <svg class="w-6 h-6" viewBox="0 0 168 168"> <path fill="#1ED760" d="M83.996.277C37.747.277.253 37.77.253 84.019c0 46.251 37.494 83.741 83.743 83.741 46.254 0 83.744-37.49 83.744-83.741 0-46.246-37.49-83.738-83.745-83.738l.001-.004zm38.404 120.78a5.217 5.217 0 01-7.18 1.73c-19.662-12.01-44.414-14.73-73.564-8.07a5.222 5.222 0 01-6.249-3.93 5.213 5.213 0 013.926-6.25c31.9-7.291 59.263-4.15 81.337 9.34 2.46 1.51 3.24 4.72 1.73 7.18zm10.25-22.805c-1.89 3.075-5.91 4.045-8.98 2.155-22.51-13.839-56.823-17.846-83.448-9.764-3.453 1.043-7.1-.903-8.148-4.35a6.538 6.538 0 014.354-8.143c30.413-9.228 68.222-4.758 94.072 11.127 3.07 1.89 4.04 5.91 2.15 8.976v-.001zm.88-23.744c-26.99-16.031-71.52-17.505-97.289-9.684-4.138 1.255-8.514-1.081-9.768-5.219a7.835 7.835 0 015.221-9.771c29.581-8.98 78.756-7.245 109.83 11.202a7.823 7.823 0 012.74 10.733c-2.2 3.722-7.02 4.949-10.73 2.739z"></path> </svg> </a> </div> `;
}, "/home/source/Documents/GitHub/sourceaura.github.io/src/components/NowPlaying.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(raw || cooked.slice()) }));
var _a$1;
const $$SysInfo = createComponent(async ($$result, $$props, $$slots) => {
  let playbackState = "loading";
  let trackInfo = "Loading...";
  let coverArt = "";
  try {
    const response = await getNowPlaying();
    if (response.status === 204) {
      playbackState = "not_playing";
      trackInfo = "\u{1F634} afk \u{1F4A4}";
    } else if (response.status === 200) {
      const data = await response.json();
      playbackState = data.is_playing ? "playing" : "paused";
      trackInfo = data.item ? `${data.item.name} - ${data.item.artists[0].name}` : "No track information";
      coverArt = data.item?.album.images[0]?.url || "";
    }
  } catch (error) {
    console.error("Error fetching Spotify playback state:", error);
    playbackState = "error";
    trackInfo = "Error fetching data";
  }
  return renderTemplate`${renderComponent($$result, "Container", $$Container, { "style": "width: 210px; overflow: hidden; padding: 0 10px;", "data-astro-cid-w6xnny7c": true }, { "default": ($$result2) => renderTemplate(_a$1 || (_a$1 = __template$1([" ", '<button id="sys-info-btn" aria-label="System information" class="group relative flex w-full items-center justify-between overflow-hidden rounded-full border border-black/15 hover:bg-black/5 focus-visible:bg-black/5 dark:border-white/20 dark:hover:bg-white/5 dark:focus-visible:bg-white/5"', ' data-astro-cid-w6xnny7c> <span id="current-time" class="text-ghost-600 cursor-pointer text-sm" style="white-space: nowrap; padding-left: 11px;" data-astro-cid-w6xnny7c></span> <span id="track-info" class="text-ghost-600 marquee max-w-full cursor-pointer truncate text-sm" data-astro-cid-w6xnny7c>', '</span> <span id="online-indicator" class="glow-ring h-1 w-1 rounded-full"', ' title="Spotify status" style="padding-right: 11px;" data-astro-cid-w6xnny7c></span> </button> <div id="now-playing-popover" class="absolute left-1/2 z-50 mt-2 hidden w-[310px] -translate-x-1/2 transform rounded bg-white shadow-lg" data-astro-cid-w6xnny7c> <!-- NowPlaying component will be displayed here --> ', " </div> <script>(function(){", '\n    let playbackState = initialPlaybackState;\n    let trackInfo = initialTrackInfo;\n    let coverArt = initialCoverArt;\n\n    function updateIndicatorState() {\n      const indicator = document.getElementById("online-indicator");\n      const trackInfoElement = document.getElementById("track-info");\n      const sysInfoBtn = document.getElementById("sys-info-btn");\n\n      if (indicator && trackInfoElement && sysInfoBtn) {\n        switch (playbackState) {\n          case "playing":\n            indicator.className =\n              "glow-ring h-1.5 w-1.5 rounded-full bg-green-600";\n            indicator.setAttribute("title", "Spotify: Playing");\n            indicator.style.boxShadow = "0 0 5px green, 0 0 10px lime";\n            break;\n          case "paused":\n            indicator.className =\n              "glow-ring h-1.5 w-1.5 rounded-full bg-yellow-600";\n            indicator.setAttribute("title", "Spotify: Paused");\n            indicator.style.boxShadow = "0 0 5px yellow, 0 0 10px orange";\n            break;\n          case "not_playing":\n          case "offline":\n          default:\n            indicator.className =\n              "glow-ring h-1.5 w-1.5 rounded-full bg-red-600";\n            indicator.setAttribute("title", "Spotify: Not playing or offline");\n            indicator.style.boxShadow = "0 0 5px red, 0 0 10px crimson";\n            break;\n        }\n\n        trackInfoElement.textContent = trackInfo;\n        sysInfoBtn.style.backgroundImage = `url(${coverArt})`;\n      }\n    }\n\n    function updateCurrentTime() {\n      const timeElement = document.getElementById("current-time");\n      if (timeElement) {\n        const now = new Date();\n        timeElement.textContent = now.toLocaleTimeString([], {\n          hour: "2-digit",\n          minute: "2-digit",\n        });\n      }\n    }\n    // Time Display\n    updateIndicatorState();\n    updateCurrentTime();\n    setInterval(updateCurrentTime, 1000);\n\n    document\n      .getElementById("track-info")\n      ?.addEventListener("click", (event) => {\n        event.stopPropagation();\n        // Toggle the visibility of the NowPlaying component\n        const nowPlayingElement = document.getElementById(\n          "now-playing-popover",\n        );\n        nowPlayingElement.classList.toggle("hidden");\n        nowPlayingElement.style.top = `${event.target.getBoundingClientRect().bottom}px`; // Position below the track info\n        nowPlayingElement.style.left = `${event.target.getBoundingClientRect().left}px`; // Align with track info\n      });\n\n    document.getElementById("sys-info-btn")?.addEventListener("click", () => {\n      window.location.href = "/euthymia";\n    });\n\n    // Fetch updated now playing information every 7 seconds\n    setInterval(async () => {\n      try {\n        const response = await fetch("/api/now-playing");\n        if (response.ok) {\n          const data = await response.json();\n          playbackState = data.is_playing ? "playing" : "paused";\n          trackInfo = data.item\n            ? `${data.item.name} - ${data.item.artists[0].name}`\n            : "No track information";\n          coverArt = data.item?.album.images[0]?.url || "";\n          updateIndicatorState();\n        }\n      } catch (error) {\n        console.error("Error fetching now playing data:", error);\n      }\n    }, 7000);\n\n    document.getElementById("close-modal")?.addEventListener("click", () => {\n      document.getElementById("now-playing-modal")?.classList.add("hidden");\n    });\n  })();<\/script>  '], [" ", '<button id="sys-info-btn" aria-label="System information" class="group relative flex w-full items-center justify-between overflow-hidden rounded-full border border-black/15 hover:bg-black/5 focus-visible:bg-black/5 dark:border-white/20 dark:hover:bg-white/5 dark:focus-visible:bg-white/5"', ' data-astro-cid-w6xnny7c> <span id="current-time" class="text-ghost-600 cursor-pointer text-sm" style="white-space: nowrap; padding-left: 11px;" data-astro-cid-w6xnny7c></span> <span id="track-info" class="text-ghost-600 marquee max-w-full cursor-pointer truncate text-sm" data-astro-cid-w6xnny7c>', '</span> <span id="online-indicator" class="glow-ring h-1 w-1 rounded-full"', ' title="Spotify status" style="padding-right: 11px;" data-astro-cid-w6xnny7c></span> </button> <div id="now-playing-popover" class="absolute left-1/2 z-50 mt-2 hidden w-[310px] -translate-x-1/2 transform rounded bg-white shadow-lg" data-astro-cid-w6xnny7c> <!-- NowPlaying component will be displayed here --> ', " </div> <script>(function(){", '\n    let playbackState = initialPlaybackState;\n    let trackInfo = initialTrackInfo;\n    let coverArt = initialCoverArt;\n\n    function updateIndicatorState() {\n      const indicator = document.getElementById("online-indicator");\n      const trackInfoElement = document.getElementById("track-info");\n      const sysInfoBtn = document.getElementById("sys-info-btn");\n\n      if (indicator && trackInfoElement && sysInfoBtn) {\n        switch (playbackState) {\n          case "playing":\n            indicator.className =\n              "glow-ring h-1.5 w-1.5 rounded-full bg-green-600";\n            indicator.setAttribute("title", "Spotify: Playing");\n            indicator.style.boxShadow = "0 0 5px green, 0 0 10px lime";\n            break;\n          case "paused":\n            indicator.className =\n              "glow-ring h-1.5 w-1.5 rounded-full bg-yellow-600";\n            indicator.setAttribute("title", "Spotify: Paused");\n            indicator.style.boxShadow = "0 0 5px yellow, 0 0 10px orange";\n            break;\n          case "not_playing":\n          case "offline":\n          default:\n            indicator.className =\n              "glow-ring h-1.5 w-1.5 rounded-full bg-red-600";\n            indicator.setAttribute("title", "Spotify: Not playing or offline");\n            indicator.style.boxShadow = "0 0 5px red, 0 0 10px crimson";\n            break;\n        }\n\n        trackInfoElement.textContent = trackInfo;\n        sysInfoBtn.style.backgroundImage = \\`url(\\${coverArt})\\`;\n      }\n    }\n\n    function updateCurrentTime() {\n      const timeElement = document.getElementById("current-time");\n      if (timeElement) {\n        const now = new Date();\n        timeElement.textContent = now.toLocaleTimeString([], {\n          hour: "2-digit",\n          minute: "2-digit",\n        });\n      }\n    }\n    // Time Display\n    updateIndicatorState();\n    updateCurrentTime();\n    setInterval(updateCurrentTime, 1000);\n\n    document\n      .getElementById("track-info")\n      ?.addEventListener("click", (event) => {\n        event.stopPropagation();\n        // Toggle the visibility of the NowPlaying component\n        const nowPlayingElement = document.getElementById(\n          "now-playing-popover",\n        );\n        nowPlayingElement.classList.toggle("hidden");\n        nowPlayingElement.style.top = \\`\\${event.target.getBoundingClientRect().bottom}px\\`; // Position below the track info\n        nowPlayingElement.style.left = \\`\\${event.target.getBoundingClientRect().left}px\\`; // Align with track info\n      });\n\n    document.getElementById("sys-info-btn")?.addEventListener("click", () => {\n      window.location.href = "/euthymia";\n    });\n\n    // Fetch updated now playing information every 7 seconds\n    setInterval(async () => {\n      try {\n        const response = await fetch("/api/now-playing");\n        if (response.ok) {\n          const data = await response.json();\n          playbackState = data.is_playing ? "playing" : "paused";\n          trackInfo = data.item\n            ? \\`\\${data.item.name} - \\${data.item.artists[0].name}\\`\n            : "No track information";\n          coverArt = data.item?.album.images[0]?.url || "";\n          updateIndicatorState();\n        }\n      } catch (error) {\n        console.error("Error fetching now playing data:", error);\n      }\n    }, 7000);\n\n    document.getElementById("close-modal")?.addEventListener("click", () => {\n      document.getElementById("now-playing-modal")?.classList.add("hidden");\n    });\n  })();<\/script>  '])), maybeRenderHead(), addAttribute(`background-image: url(${coverArt}); background-size: cover; background-position: center; background-color: rgba(0, 0, 0, 0.5);`, "style"), trackInfo, addAttribute(playbackState, "data-state"), renderComponent($$result2, "NowPlaying", $$NowPlaying, { "class": "w-full", "data-astro-cid-w6xnny7c": true }), defineScriptVars({
    initialPlaybackState: playbackState,
    initialTrackInfo: trackInfo,
    initialCoverArt: coverArt
  })) })}`;
}, "/home/source/Documents/GitHub/sourceaura.github.io/src/components/SysInfo.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="py-4" data-astro-cid-3ef6ksr2${addAttribute(createTransitionScope($$result, "l7r54iwe"), "data-astro-transition-persist")}> ${renderComponent($$result, "Container", $$Container, { "data-astro-cid-3ef6ksr2": true }, { "default": ($$result2) => renderTemplate` <div class="flex h-full items-center justify-between" data-astro-cid-3ef6ksr2> <a href="/" id="ase" aria-label="Home" class="flex items-center rounded border border-black/15 bg-transparent px-2 py-1 text-xs font-semibold transition-colors duration-300 ease-in-out hover:bg-black/5 hover:text-black focus-visible:bg-black/5 focus-visible:text-black dark:border-white/20 dark:bg-neutral-900 dark:hover:bg-white/5 dark:hover:text-white dark:focus-visible:bg-white/5 dark:focus-visible:text-white" data-astro-cid-3ef6ksr2>
&nbsp;
${SITE.ALIAS}
&nbsp;
</a> <nav class="flex items-center gap-1 text-sm" data-astro-cid-3ef6ksr2> ${renderComponent($$result2, "SysInfo", $$SysInfo, { "data-astro-cid-3ef6ksr2": true })} </nav> </div> ` })} </header> `;
}, "/home/source/Documents/GitHub/sourceaura.github.io/src/components/Header.astro", "self");

const $$BackToTop = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<button id="back-to-top" class="group relative flex w-fit flex-nowrap rounded border border-black/15 py-1.5 pl-8 pr-3 transition-colors duration-300 ease-in-out hover:bg-black/5 hover:text-black focus-visible:bg-black/5 focus-visible:text-black dark:border-white/20 dark:hover:bg-white/5 dark:hover:text-white dark:focus-visible:bg-white/5 dark:focus-visible:text-white"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="absolute left-2 top-1/2 size-4 -translate-y-1/2 rotate-90 fill-none stroke-current stroke-2"> <line x1="5" y1="12" x2="19" y2="12" class="translate-x-2 scale-x-0 transition-transform duration-300 ease-in-out group-hover:translate-x-0 group-hover:scale-x-100 group-focus-visible:translate-x-0 group-focus-visible:scale-x-100"></line> <polyline points="12 5 5 12 12 19" class="translate-x-1 transition-transform duration-300 ease-in-out group-hover:translate-x-0 group-focus-visible:translate-x-0"></polyline> </svg> <div class="text-sm">Back to top</div> </button>`;
}, "/home/source/Documents/GitHub/sourceaura.github.io/src/components/BackToTop.astro", void 0);

const $$Astro$2 = createAstro("https://sourceaura.vercel.app");
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead()}<footer class="animate"> ${renderComponent($$result, "Container", $$Container, { "class": "footer-container" }, { "default": ($$result2) => renderTemplate` <div class="footer-content relative"> <div class="absolute -top-12 right-0"> ${renderComponent($$result2, "BackToTop", $$BackToTop, {})} </div> </div> <div class="flex items-center justify-between"> <div> <a href="/about"> ${SITE.TITLE} | 🫀 • 🫁 • 🧠 |
</a>
&copy; ${(/* @__PURE__ */ new Date()).getFullYear()} </div> <!-- <button id="theme-toggle">??? </button> --> <!-- --> <div class="theme-buttons flex flex-wrap items-center gap-1.5"> <!-- <button id="theme-toggle"> --> <button> <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"> <defs> <mask id="lineMdLightDarkLoop0"> <circle cx="7.5" cy="7.5" r="5.5" fill="#fff"></circle> <circle cx="7.5" cy="7.5" r="5.5"> <animate fill="freeze" attributeName="cx" dur="0.4s" values="7.5;11"></animate> <animate fill="freeze" attributeName="r" dur="0.4s" values="5.5;6.5"></animate> </circle> </mask> <mask id="lineMdLightDarkLoop1"> <g fill="#fff"> <circle cx="12" cy="9" r="5.5"> <animate fill="freeze" attributeName="cy" begin="1s" dur="0.5s" values="9;15"></animate> </circle> <g fill-opacity="0"> <use href="#lineMdLightDarkLoop2" transform="rotate(-75 12 15)"></use> <use href="#lineMdLightDarkLoop2" transform="rotate(-25 12 15)"></use> <use href="#lineMdLightDarkLoop2" transform="rotate(25 12 15)"></use> <use href="#lineMdLightDarkLoop2" transform="rotate(75 12 15)"></use> <set fill="freeze" attributeName="fill-opacity" begin="1.5s" to="1"></set> <animateTransform attributeName="transform" dur="5s" repeatCount="indefinite" type="rotate" values="0 12 15;50 12 15"></animateTransform> </g> </g> <path d="M0 10h26v5h-26z"></path> <path stroke="#fff" stroke-dasharray="26" stroke-dashoffset="26" stroke-width="2" d="M22 12h-22"> <animate attributeName="d" dur="6s" repeatCount="indefinite" values="M22 12h-22;M24 12h-22;M22 12h-22"></animate> <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.4s" values="26;0"></animate> </path> </mask> <symbol id="lineMdLightDarkLoop2"> <path d="M11 18h2L12 20z" opacity="0"> <animate fill="freeze" attributeName="d" begin="1.5s" dur="0.4s" values="M11 18h2L12 20z;M10.5 21.5h3L12 24z"></animate> <set fill="freeze" attributeName="opacity" begin="1.5s" to="1"></set> </path> </symbol> </defs> <g fill="currentColor"> <rect width="13" height="13" x="1" y="1" mask="url(#lineMdLightDarkLoop0)"></rect> <path d="M-2 11h28v13h-28z" mask="url(#lineMdLightDarkLoop1)" transform="rotate(-45 12 12)"></path> </g> </svg> </button> <!--  --> </div> </div> ` })} </footer> `;
}, "/home/source/Documents/GitHub/sourceaura.github.io/src/components/Footer.astro", void 0);

function cn(...inputs) {
  return twMerge(clsx(inputs));
}
function readingTime(html) {
  const textOnly = html.replace(/<[^>]+>/g, "");
  const wordCount = textOnly.split(/\s+/).length;
  const readingTimeMinutes = (wordCount / 200 + 1).toFixed();
  return `${readingTimeMinutes} min read`;
}
function getRandomSize() {
  const sizes = ["small", "medium", "large"];
  const weights = [0.5, 0.3, 0.2];
  const random = Math.random();
  let sum = 0;
  for (let i = 0; i < weights.length; i++) {
    sum += weights[i];
    if (random < sum) return sizes[i];
  }
  return sizes[0];
}

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsx(
      Comp,
      {
        className: cn(buttonVariants({ variant, size, className })),
        ref,
        ...props
      }
    );
  }
);
Button.displayName = "Button";

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    DayPicker,
    {
      showOutsideDays,
      className: cn("p-3", className),
      classNames: {
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-sm font-medium",
        nav: "space-x-1 flex items-center",
        nav_button: cn(
          buttonVariants({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell: "text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]",
        row: "flex w-full mt-2",
        cell: "h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
        day: cn(
          buttonVariants({ variant: "ghost" }),
          "h-9 w-9 p-0 font-normal aria-selected:opacity-100"
        ),
        day_range_end: "day-range-end",
        day_selected: "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
        day_today: "bg-accent text-accent-foreground",
        day_outside: "day-outside text-muted-foreground opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30",
        day_disabled: "text-muted-foreground opacity-50",
        day_range_middle: "aria-selected:bg-accent aria-selected:text-accent-foreground",
        day_hidden: "invisible",
        ...classNames
      },
      components: {
        IconLeft: ({ ...props2 }) => /* @__PURE__ */ jsx(ChevronLeft, { className: "h-4 w-4" }),
        IconRight: ({ ...props2 }) => /* @__PURE__ */ jsx(ChevronRight, { className: "h-4 w-4" })
      },
      ...props
    }
  );
}
Calendar.displayName = "Calendar";

const $$Astro$1 = createAstro("https://sourceaura.vercel.app");
const $$Search = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Search;
  const { id, className, query, uiOptions = {} } = Astro2.props;
  const bundlePath = `${"/"}pagefind/`;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(id, "id")}${addAttribute([className, "pagefind-init"], "class:list")} data-pagefind-ui${addAttribute(bundlePath, "data-bundle-path")}${addAttribute(query, "data-query")}${addAttribute(JSON.stringify(uiOptions), "data-ui-options")}></div> `;
}, "/home/source/Documents/GitHub/sourceaura.github.io/node_modules/astro-pagefind/src/components/Search.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$PageFind = createComponent(($$result, $$props, $$slots) => {
  const navigationPages = [
    { title: "Home", url: "/" },
    { title: "Petals", url: "/petals" },
    { title: "About", url: "/about" },
    { title: "404", url: "/404" }
    // Add any other main pages you want to include in the search
  ];
  return renderTemplate(_a || (_a = __template(["", '<div id="backdrop" class="bg-[rgba(0, 0, 0, 0.5] invisible fixed left-0 top-0 z-50 flex h-screen w-full justify-center p-6 backdrop-blur-sm"', '> <div id="pagefind-container" class="m-0 flex h-fit max-h-[80%] w-full max-w-screen-sm flex-col overflow-auto rounded border border-black/15 bg-neutral-100 p-2 px-4 py-3 shadow-lg dark:border-white/20 dark:bg-neutral-900 relative"> ', ' <div class="flex justify-between"> <div id="calendar-container" class="mb-4"> <!-- Placeholder for ShadUI Calendar --> ', " </div> ", ' </div> <div class="text-right text-xs dark:prose-invert mt-2">\nPress <span class="prose text-xs dark:prose-invert"><kbd class="">Esc</kbd> </span> </div> <div id="time-display" class="text-left mb-4"> <p>Time: <span id="current-time"></span></p> </div> </div> </div> <script>(function(){', `
  const ase = document.getElementById("ase");
  if (ase) {
    ase.addEventListener("click", () => {
      openPagefind();
    });
  }

  const backdrop = document.getElementById("backdrop");

  function openPagefind() {
    const searchDiv = document.getElementById("search");
    const search = searchDiv.querySelector("input");
    setTimeout(() => {
      search.focus();
    }, 0);
    backdrop?.classList.remove("invisible");
    backdrop?.classList.add("visible");
  }

  function closePagefind() {
    const search = document.getElementById("search");
    search.value = "";
    backdrop?.classList.remove("visible");
    backdrop?.classList.add("invisible");
  }

  // open pagefind
  ase?.addEventListener("click", () => {
    openPagefind();
  });
  // a pseudo pagefind cmd + k
  document.addEventListener("keydown", (e) => {
    if (e.key === "/") {
      e.preventDefault();
      openPagefind();
    } else if ((e.metaKey || e.ctrlKey) && e.key === "k") {
      e.preventDefault();
      openPagefind();
    }
  });

  // close pagefind
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" || e.keyCode === 27) {
      closePagefind();
    }
  });

  backdrop?.addEventListener("click", (event) => {
    if (!event.target.closest("#pagefind-container")) {
      closePagefind();
    }
  });

  // prevent form submission
  const form = document.getElementById("form");
  form?.addEventListener("submit", (event) => {
    event.preventDefault();
  });

  // Custom search function
  function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  function customSearch(query) {
    const lowercaseQuery = query.toLowerCase();
    const matchingPages = navigationPages.filter(page => 
      page.title.toLowerCase().includes(lowercaseQuery)
    );

    const searchResults = document.querySelector('.pagefind-ui__results');
    if (!searchResults) return; // Ensure the element exists
    
    // Clear existing navigation results
    const existingNavigationResults = searchResults.querySelectorAll('.navigation-result');
    existingNavigationResults.forEach(result => result.remove());

    // Add matching navigation pages to the top of the results
    matchingPages.forEach(page => {
      const navigationResult = document.createElement('div');
      navigationResult.className = 'pagefind-ui__result navigation-result';
      navigationResult.innerHTML = \`
        <h3 class="pagefind-ui__result-title">
          <a href="\${page.url}">\${page.title}</a>
        </h3>
        <p class="pagefind-ui__result-excerpt">Navigate to \${page.title} page</p>
      \`;
      searchResults.insertBefore(navigationResult, searchResults.firstChild);
    });
  }

  // Ensure PageFind is initialized before adding event listeners
  window.addEventListener('load', () => {
    const searchInput = document.querySelector('.pagefind-ui__search-input');
    if (searchInput) {
      const debouncedCustomSearch = debounce(customSearch, 300);
      searchInput.addEventListener('input', (e) => {
        debouncedCustomSearch(e.target.value);
      });
    }
  });

  // Override the default search behavior
  const searchInput = document.querySelector('.pagefind-ui__search-input');
  searchInput.addEventListener('input', (e) => {
    setTimeout(() => {
      customSearch(e.target.value);
    }, 100); // Small delay to ensure PageFind has updated the results
  });

  // Update the current time every second
  function updateTime() {
    const now = new Date();
    document.getElementById("current-time").textContent = now.toLocaleTimeString();
  }
  setInterval(updateTime, 1000);
  updateTime(); // Initial call to set time immediately
})();<\/script> `], ["", '<div id="backdrop" class="bg-[rgba(0, 0, 0, 0.5] invisible fixed left-0 top-0 z-50 flex h-screen w-full justify-center p-6 backdrop-blur-sm"', '> <div id="pagefind-container" class="m-0 flex h-fit max-h-[80%] w-full max-w-screen-sm flex-col overflow-auto rounded border border-black/15 bg-neutral-100 p-2 px-4 py-3 shadow-lg dark:border-white/20 dark:bg-neutral-900 relative"> ', ' <div class="flex justify-between"> <div id="calendar-container" class="mb-4"> <!-- Placeholder for ShadUI Calendar --> ', " </div> ", ' </div> <div class="text-right text-xs dark:prose-invert mt-2">\nPress <span class="prose text-xs dark:prose-invert"><kbd class="">Esc</kbd> </span> </div> <div id="time-display" class="text-left mb-4"> <p>Time: <span id="current-time"></span></p> </div> </div> </div> <script>(function(){', `
  const ase = document.getElementById("ase");
  if (ase) {
    ase.addEventListener("click", () => {
      openPagefind();
    });
  }

  const backdrop = document.getElementById("backdrop");

  function openPagefind() {
    const searchDiv = document.getElementById("search");
    const search = searchDiv.querySelector("input");
    setTimeout(() => {
      search.focus();
    }, 0);
    backdrop?.classList.remove("invisible");
    backdrop?.classList.add("visible");
  }

  function closePagefind() {
    const search = document.getElementById("search");
    search.value = "";
    backdrop?.classList.remove("visible");
    backdrop?.classList.add("invisible");
  }

  // open pagefind
  ase?.addEventListener("click", () => {
    openPagefind();
  });
  // a pseudo pagefind cmd + k
  document.addEventListener("keydown", (e) => {
    if (e.key === "/") {
      e.preventDefault();
      openPagefind();
    } else if ((e.metaKey || e.ctrlKey) && e.key === "k") {
      e.preventDefault();
      openPagefind();
    }
  });

  // close pagefind
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" || e.keyCode === 27) {
      closePagefind();
    }
  });

  backdrop?.addEventListener("click", (event) => {
    if (!event.target.closest("#pagefind-container")) {
      closePagefind();
    }
  });

  // prevent form submission
  const form = document.getElementById("form");
  form?.addEventListener("submit", (event) => {
    event.preventDefault();
  });

  // Custom search function
  function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  function customSearch(query) {
    const lowercaseQuery = query.toLowerCase();
    const matchingPages = navigationPages.filter(page => 
      page.title.toLowerCase().includes(lowercaseQuery)
    );

    const searchResults = document.querySelector('.pagefind-ui__results');
    if (!searchResults) return; // Ensure the element exists
    
    // Clear existing navigation results
    const existingNavigationResults = searchResults.querySelectorAll('.navigation-result');
    existingNavigationResults.forEach(result => result.remove());

    // Add matching navigation pages to the top of the results
    matchingPages.forEach(page => {
      const navigationResult = document.createElement('div');
      navigationResult.className = 'pagefind-ui__result navigation-result';
      navigationResult.innerHTML = \\\`
        <h3 class="pagefind-ui__result-title">
          <a href="\\\${page.url}">\\\${page.title}</a>
        </h3>
        <p class="pagefind-ui__result-excerpt">Navigate to \\\${page.title} page</p>
      \\\`;
      searchResults.insertBefore(navigationResult, searchResults.firstChild);
    });
  }

  // Ensure PageFind is initialized before adding event listeners
  window.addEventListener('load', () => {
    const searchInput = document.querySelector('.pagefind-ui__search-input');
    if (searchInput) {
      const debouncedCustomSearch = debounce(customSearch, 300);
      searchInput.addEventListener('input', (e) => {
        debouncedCustomSearch(e.target.value);
      });
    }
  });

  // Override the default search behavior
  const searchInput = document.querySelector('.pagefind-ui__search-input');
  searchInput.addEventListener('input', (e) => {
    setTimeout(() => {
      customSearch(e.target.value);
    }, 100); // Small delay to ensure PageFind has updated the results
  });

  // Update the current time every second
  function updateTime() {
    const now = new Date();
    document.getElementById("current-time").textContent = now.toLocaleTimeString();
  }
  setInterval(updateTime, 1000);
  updateTime(); // Initial call to set time immediately
})();<\/script> `])), maybeRenderHead(), addAttribute(createTransitionScope($$result, "t6dxx5el"), "data-astro-transition-persist"), renderComponent($$result, "Search", $$Search, { "id": "search", "className": "pagefind-ui", "uiOptions": {
    showImages: true,
    excerptLength: 16,
    resetStyles: false
  } }), renderComponent($$result, "Calendar", Calendar, {}), renderComponent($$result, "NowPlaying", $$NowPlaying, {}), defineScriptVars({ navigationPages }));
}, "/home/source/Documents/GitHub/sourceaura.github.io/src/components/PageFind.astro", "self");

const $$Quasar = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "quasar-background", "quasar-background", { "data-astro-cid-hz5gv5xe": true })}  `;
}, "/home/source/Documents/GitHub/sourceaura.github.io/src/components/Quasar.astro", void 0);

const $$Astro = createAstro("https://sourceaura.vercel.app");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, description } = Astro2.props;
  return renderTemplate`<html lang="en" data-astro-cid-sckkx6r4> <head>${renderComponent($$result, "Head", $$Head, { "title": `${title} | ${SITE.TITLE}`, "description": description, "data-astro-cid-sckkx6r4": true })}${renderHead()}</head> <body data-astro-cid-sckkx6r4> ${renderComponent($$result, "Quasar", $$Quasar, { "data-astro-cid-sckkx6r4": true })} ${renderComponent($$result, "Header", $$Header, { "data-astro-cid-sckkx6r4": true })} <main data-astro-cid-sckkx6r4> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-sckkx6r4": true })} ${renderComponent($$result, "PageFind", $$PageFind, { "data-astro-cid-sckkx6r4": true })}  </body> </html>`;
}, "/home/source/Documents/GitHub/sourceaura.github.io/src/layouts/Layout.astro", void 0);

export { $$Container as $, $$Layout as a, cn as c, getRandomSize as g, readingTime as r };
//# sourceMappingURL=Layout_D-RHRMxQ.mjs.map
