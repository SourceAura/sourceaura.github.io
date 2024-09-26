;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="0bce7861-d2cb-4fe8-815f-7357dd4da28d",e._sentryDebugIdIdentifier="sentry-dbid-0bce7861-d2cb-4fe8-815f-7357dd4da28d")}catch(e){}}();/* empty css                         */
import * as Sentry from '@sentry/astro';
import { S as SITE } from './consts_Cz7b8feT.mjs';
import { c as createAstro, a as createComponent, r as renderTemplate, b as addAttribute, f as renderComponent, m as maybeRenderHead, d as renderSlot, l as createTransitionScope, n as defineScriptVars, o as renderHead } from './astro/server_Bkp0-z4m.mjs';
import 'kleur/colors';
import 'clsx';

Sentry.init({
  dsn: undefined                                 ,
  debug: false,
  environment: undefined                                 ,
  release: undefined                                            ,
  tracesSampleRate: 1
});

const $$Astro$3 = createAstro("https://sourceaura.vercel.app");
const $$ViewTransitions = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "/home/source/GitHub/sourceaura.github.io/node_modules/astro/components/ViewTransitions.astro", void 0);

var __freeze$2 = Object.freeze;
var __defProp$2 = Object.defineProperty;
var __template$2 = (cooked, raw) => __freeze$2(__defProp$2(cooked, "raw", { value: __freeze$2(raw || cooked.slice()) }));
var _a$2;
const $$Astro$2 = createAstro("https://sourceaura.vercel.app");
const $$Head = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Head;
  const canonicalURL = new URL(Astro2.url.pathname, Astro2.site);
  const { title, description, image = "/blog-placeholder-1.jpg" } = Astro2.props;
  return renderTemplate(_a$2 || (_a$2 = __template$2(['<!-- Global Metadata --><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>\u{1F339}</text></svg>"><meta name="generator"', '><!-- Font preloads --><link rel="preload" href="/fonts/geist.woff2" as="font" type="font/woff2" crossorigin><link rel="preload" href="/fonts/geist-mono.woff2" as="font" type="font/woff2" crossorigin><!-- Canonical URL --><link rel="canonical"', "><!-- Primary Meta Tags --><title>", '</title><meta name="title"', '><meta name="description"', '><!-- Open Graph / Facebook --><meta property="og:type" content="website"><meta property="og:url"', '><meta property="og:title"', '><meta property="og:description"', '><meta property="og:image"', '><!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"', '><meta property="twitter:title"', '><meta property="twitter:description"', '><meta property="twitter:image"', '><!-- PageFind --><!-- <link href="/pagefind/pagefind-ui.css" rel="stylesheet" /> --><!-- <script is:inline src="/pagefind/pagefind-ui.js"><\/script> -->', '<script>\n  function init() {\n    preloadTheme();\n    onScroll();\n    animate();\n    updateThemeButtons();\n    addCopyCodeButtons();\n    setGiscusTheme();\n\n    const backToTop = document.getElementById("back-to-top");\n    backToTop?.addEventListener("click", (event) => scrollToTop(event));\n\n    const backToPrev = document.getElementById("back-to-prev");\n    backToPrev?.addEventListener("click", () => window.history.back());\n\n    const lightThemeButton = document.getElementById("light-theme-button");\n    lightThemeButton?.addEventListener("click", () => {\n      localStorage.setItem("theme", "light");\n      toggleTheme(false);\n      updateThemeButtons();\n    });\n\n    const darkThemeButton = document.getElementById("dark-theme-button");\n    darkThemeButton?.addEventListener("click", () => {\n      localStorage.setItem("theme", "dark");\n      toggleTheme(true);\n      updateThemeButtons();\n    });\n\n    const systemThemeButton = document.getElementById("system-theme-button");\n    systemThemeButton?.addEventListener("click", () => {\n      localStorage.setItem("theme", "system");\n      toggleTheme(window.matchMedia("(prefers-color-scheme: dark)").matches);\n      updateThemeButtons();\n    });\n\n    window\n      .matchMedia("(prefers-color-scheme: dark)")\n      .addEventListener("change", (event) => {\n        if (localStorage.theme === "system") {\n          toggleTheme(event.matches);\n        }\n      });\n\n    document.addEventListener("scroll", onScroll);\n  }\n\n  function updateThemeButtons() {\n    const theme = localStorage.getItem("theme");\n    const lightThemeButton = document.getElementById("light-theme-button");\n    const darkThemeButton = document.getElementById("dark-theme-button");\n    const systemThemeButton = document.getElementById("system-theme-button");\n\n    function removeActiveButtonTheme(button) {\n      button?.classList.remove("bg-black/5");\n      button?.classList.remove("dark:bg-white/5");\n    }\n\n    function addActiveButtonTheme(button) {\n      button?.classList.add("bg-black/5");\n      button?.classList.add("dark:bg-white/5");\n    }\n\n    removeActiveButtonTheme(lightThemeButton);\n    removeActiveButtonTheme(darkThemeButton);\n    removeActiveButtonTheme(systemThemeButton);\n\n    if (theme === "light") {\n      addActiveButtonTheme(lightThemeButton);\n    } else if (theme === "dark") {\n      addActiveButtonTheme(darkThemeButton);\n    } else {\n      addActiveButtonTheme(systemThemeButton);\n    }\n  }\n\n  function animate() {\n    const animateElements = document.querySelectorAll(".animate");\n\n    animateElements.forEach((element, index) => {\n      setTimeout(() => {\n        element.classList.add("show");\n      }, index * 100);\n    });\n  }\n\n  function onScroll() {\n    if (window.scrollY > 0) {\n      document.documentElement.classList.add("scrolled");\n    } else {\n      document.documentElement.classList.remove("scrolled");\n    }\n  }\n\n  function scrollToTop(event) {\n    event.preventDefault();\n    window.scrollTo({\n      top: 0,\n      behavior: "smooth",\n    });\n  }\n\n  function toggleTheme(dark) {\n    const css = document.createElement("style");\n\n    css.appendChild(\n      document.createTextNode(\n        `* {\n             -webkit-transition: none !important;\n             -moz-transition: none !important;\n             -o-transition: none !important;\n             -ms-transition: none !important;\n             transition: none !important;\n          }\n        `,\n      ),\n    );\n\n    document.head.appendChild(css);\n\n    if (dark) {\n      document.documentElement.classList.add("dark");\n    } else {\n      document.documentElement.classList.remove("dark");\n    }\n\n    window.getComputedStyle(css).opacity;\n    document.head.removeChild(css);\n\n    setGiscusTheme();\n  }\n\n  function preloadTheme() {\n    const userTheme = localStorage.theme;\n\n    if (userTheme === "light" || userTheme === "dark") {\n      toggleTheme(userTheme === "dark");\n    } else {\n      toggleTheme(window.matchMedia("(prefers-color-scheme: dark)").matches);\n    }\n  }\n\n  function addCopyCodeButtons() {\n    let copyButtonLabel = "\u{1F4CB}";\n    let codeBlocks = Array.from(document.querySelectorAll("pre"));\n\n    async function copyCode(codeBlock, copyButton) {\n      const codeText = codeBlock.innerText;\n      const buttonText = copyButton.innerText;\n      const textToCopy = codeText.replace(buttonText, "");\n\n      await navigator.clipboard.writeText(textToCopy);\n      copyButton.innerText = "\u2705";\n\n      setTimeout(() => {\n        copyButton.innerText = copyButtonLabel;\n      }, 2000);\n    }\n\n    for (let codeBlock of codeBlocks) {\n      const wrapper = document.createElement("div");\n      wrapper.style.position = "relative";\n\n      const copyButton = document.createElement("button");\n      copyButton.innerText = copyButtonLabel;\n      copyButton.classList = "copy-code";\n\n      codeBlock.setAttribute("tabindex", "0");\n      codeBlock.appendChild(copyButton);\n\n      codeBlock.parentNode.insertBefore(wrapper, codeBlock);\n      wrapper.appendChild(codeBlock);\n\n      copyButton?.addEventListener("click", async () => {\n        await copyCode(codeBlock, copyButton);\n      });\n    }\n  }\n\n  const setGiscusTheme = () => {\n    const giscus = document.querySelector(".giscus-frame");\n\n    const isDark = document.documentElement.classList.contains("dark");\n\n    if (giscus) {\n      const url = new URL(giscus.src);\n      url.searchParams.set("theme", isDark ? "dark" : "light");\n      giscus.src = url.toString();\n    }\n  };\n\n  document.addEventListener("DOMContentLoaded", () => init());\n  document.addEventListener("astro:after-swap", () => init());\n  preloadTheme();\n<\/script>'], ['<!-- Global Metadata --><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>\u{1F339}</text></svg>"><meta name="generator"', '><!-- Font preloads --><link rel="preload" href="/fonts/geist.woff2" as="font" type="font/woff2" crossorigin><link rel="preload" href="/fonts/geist-mono.woff2" as="font" type="font/woff2" crossorigin><!-- Canonical URL --><link rel="canonical"', "><!-- Primary Meta Tags --><title>", '</title><meta name="title"', '><meta name="description"', '><!-- Open Graph / Facebook --><meta property="og:type" content="website"><meta property="og:url"', '><meta property="og:title"', '><meta property="og:description"', '><meta property="og:image"', '><!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"', '><meta property="twitter:title"', '><meta property="twitter:description"', '><meta property="twitter:image"', '><!-- PageFind --><!-- <link href="/pagefind/pagefind-ui.css" rel="stylesheet" /> --><!-- <script is:inline src="/pagefind/pagefind-ui.js"><\/script> -->', '<script>\n  function init() {\n    preloadTheme();\n    onScroll();\n    animate();\n    updateThemeButtons();\n    addCopyCodeButtons();\n    setGiscusTheme();\n\n    const backToTop = document.getElementById("back-to-top");\n    backToTop?.addEventListener("click", (event) => scrollToTop(event));\n\n    const backToPrev = document.getElementById("back-to-prev");\n    backToPrev?.addEventListener("click", () => window.history.back());\n\n    const lightThemeButton = document.getElementById("light-theme-button");\n    lightThemeButton?.addEventListener("click", () => {\n      localStorage.setItem("theme", "light");\n      toggleTheme(false);\n      updateThemeButtons();\n    });\n\n    const darkThemeButton = document.getElementById("dark-theme-button");\n    darkThemeButton?.addEventListener("click", () => {\n      localStorage.setItem("theme", "dark");\n      toggleTheme(true);\n      updateThemeButtons();\n    });\n\n    const systemThemeButton = document.getElementById("system-theme-button");\n    systemThemeButton?.addEventListener("click", () => {\n      localStorage.setItem("theme", "system");\n      toggleTheme(window.matchMedia("(prefers-color-scheme: dark)").matches);\n      updateThemeButtons();\n    });\n\n    window\n      .matchMedia("(prefers-color-scheme: dark)")\n      .addEventListener("change", (event) => {\n        if (localStorage.theme === "system") {\n          toggleTheme(event.matches);\n        }\n      });\n\n    document.addEventListener("scroll", onScroll);\n  }\n\n  function updateThemeButtons() {\n    const theme = localStorage.getItem("theme");\n    const lightThemeButton = document.getElementById("light-theme-button");\n    const darkThemeButton = document.getElementById("dark-theme-button");\n    const systemThemeButton = document.getElementById("system-theme-button");\n\n    function removeActiveButtonTheme(button) {\n      button?.classList.remove("bg-black/5");\n      button?.classList.remove("dark:bg-white/5");\n    }\n\n    function addActiveButtonTheme(button) {\n      button?.classList.add("bg-black/5");\n      button?.classList.add("dark:bg-white/5");\n    }\n\n    removeActiveButtonTheme(lightThemeButton);\n    removeActiveButtonTheme(darkThemeButton);\n    removeActiveButtonTheme(systemThemeButton);\n\n    if (theme === "light") {\n      addActiveButtonTheme(lightThemeButton);\n    } else if (theme === "dark") {\n      addActiveButtonTheme(darkThemeButton);\n    } else {\n      addActiveButtonTheme(systemThemeButton);\n    }\n  }\n\n  function animate() {\n    const animateElements = document.querySelectorAll(".animate");\n\n    animateElements.forEach((element, index) => {\n      setTimeout(() => {\n        element.classList.add("show");\n      }, index * 100);\n    });\n  }\n\n  function onScroll() {\n    if (window.scrollY > 0) {\n      document.documentElement.classList.add("scrolled");\n    } else {\n      document.documentElement.classList.remove("scrolled");\n    }\n  }\n\n  function scrollToTop(event) {\n    event.preventDefault();\n    window.scrollTo({\n      top: 0,\n      behavior: "smooth",\n    });\n  }\n\n  function toggleTheme(dark) {\n    const css = document.createElement("style");\n\n    css.appendChild(\n      document.createTextNode(\n        \\`* {\n             -webkit-transition: none !important;\n             -moz-transition: none !important;\n             -o-transition: none !important;\n             -ms-transition: none !important;\n             transition: none !important;\n          }\n        \\`,\n      ),\n    );\n\n    document.head.appendChild(css);\n\n    if (dark) {\n      document.documentElement.classList.add("dark");\n    } else {\n      document.documentElement.classList.remove("dark");\n    }\n\n    window.getComputedStyle(css).opacity;\n    document.head.removeChild(css);\n\n    setGiscusTheme();\n  }\n\n  function preloadTheme() {\n    const userTheme = localStorage.theme;\n\n    if (userTheme === "light" || userTheme === "dark") {\n      toggleTheme(userTheme === "dark");\n    } else {\n      toggleTheme(window.matchMedia("(prefers-color-scheme: dark)").matches);\n    }\n  }\n\n  function addCopyCodeButtons() {\n    let copyButtonLabel = "\u{1F4CB}";\n    let codeBlocks = Array.from(document.querySelectorAll("pre"));\n\n    async function copyCode(codeBlock, copyButton) {\n      const codeText = codeBlock.innerText;\n      const buttonText = copyButton.innerText;\n      const textToCopy = codeText.replace(buttonText, "");\n\n      await navigator.clipboard.writeText(textToCopy);\n      copyButton.innerText = "\u2705";\n\n      setTimeout(() => {\n        copyButton.innerText = copyButtonLabel;\n      }, 2000);\n    }\n\n    for (let codeBlock of codeBlocks) {\n      const wrapper = document.createElement("div");\n      wrapper.style.position = "relative";\n\n      const copyButton = document.createElement("button");\n      copyButton.innerText = copyButtonLabel;\n      copyButton.classList = "copy-code";\n\n      codeBlock.setAttribute("tabindex", "0");\n      codeBlock.appendChild(copyButton);\n\n      codeBlock.parentNode.insertBefore(wrapper, codeBlock);\n      wrapper.appendChild(codeBlock);\n\n      copyButton?.addEventListener("click", async () => {\n        await copyCode(codeBlock, copyButton);\n      });\n    }\n  }\n\n  const setGiscusTheme = () => {\n    const giscus = document.querySelector(".giscus-frame");\n\n    const isDark = document.documentElement.classList.contains("dark");\n\n    if (giscus) {\n      const url = new URL(giscus.src);\n      url.searchParams.set("theme", isDark ? "dark" : "light");\n      giscus.src = url.toString();\n    }\n  };\n\n  document.addEventListener("DOMContentLoaded", () => init());\n  document.addEventListener("astro:after-swap", () => init());\n  preloadTheme();\n<\/script>'])), addAttribute(Astro2.generator, "content"), addAttribute(canonicalURL, "href"), title, addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(Astro2.url, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(new URL(image, Astro2.url), "content"), addAttribute(Astro2.url, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(new URL(image, Astro2.url), "content"), renderComponent($$result, "ViewTransitions", $$ViewTransitions, {}));
}, "/home/source/GitHub/sourceaura.github.io/src/components/Head.astro", void 0);

const $$Container = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="mx-auto max-w-screen-sm px-3"> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "/home/source/GitHub/sourceaura.github.io/src/components/Container.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$SysInfo = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Container", $$Container, { "data-astro-cid-w6xnny7c": true }, { "default": ($$result2) => renderTemplate(_a$1 || (_a$1 = __template$1(["  ", `<button id="sys-info-btn" aria-label="System information" class="group flex items-center justify-start rounded-lg border border-black/15 hover:bg-black/5 focus-visible:bg-black/5 dark:border-white/20 dark:hover:bg-white/5 dark:focus-visible:bg-white/5 w-32 px-4 relative" data-astro-cid-w6xnny7c> <!-- Display current time --> <span id="current-time" class="text-sm text-ghost-600 ml-2" data-astro-cid-w6xnny7c></span> <div class="flex-1" data-astro-cid-w6xnny7c></div> <!-- Spacer to push other content to the right --> <span id="online-indicator" class="glow-ring h-2 w-2 rounded-full bg-green-500" title="Online" data-astro-cid-w6xnny7c></span> </button> <script>
    // Set indicator state to 2 (online) by default
    let indicatorState = 2;

    // Function to update indicator state and glow effect
    function updateIndicatorState() {
      const indicator = document.getElementById('online-indicator');
      
      if (indicatorState === 2) {
        indicator.className = 'glow-ring h-2 w-2 rounded-full bg-green-500';
        indicator.setAttribute('title', 'Online');
        indicator.style.boxShadow = '0 0 10px green, 0 0 20px lime'; // Green-lime glow effect
      }
    }

    // Function to update current time
    function updateCurrentTime() {
      const timeElement = document.getElementById('current-time');
      const now = new Date();
      timeElement.textContent = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    }

    // Call updateIndicatorState immediately to set the default state
    updateIndicatorState();

    // Update time immediately and then every second
    updateCurrentTime();
    setInterval(updateCurrentTime, 1000);

    // Function to handle button click event
    function handleSysInfoClick() {
      window.location.href = '/euthymia';
    }

    // Event listener for button click
    document.getElementById('sys-info-btn')?.addEventListener('click', handleSysInfoClick);

    // Remove the previous click event listener for toggleOnlineIndicator
    // document.getElementById('sys-info-btn')?.addEventListener('click', toggleOnlineIndicator);
  <\/script>  `])), maybeRenderHead()) })}`;
}, "/home/source/GitHub/sourceaura.github.io/src/components/SysInfo.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header data-astro-cid-3ef6ksr2${addAttribute(createTransitionScope($$result, "l7r54iwe"), "data-astro-transition-persist")}> ${renderComponent($$result, "Container", $$Container, { "data-astro-cid-3ef6ksr2": true }, { "default": ($$result2) => renderTemplate`  <div class="flex flex-wrap justify-between gap-y-2" data-astro-cid-3ef6ksr2> <a href="/" id="ase" aria-label="Home" class="font-semibold flex items-center rounded border border-black/15 bg-transparent px-2 py-1 text-xs transition-colors duration-300 ease-in-out hover:bg-black/5 hover:text-black focus-visible:bg-black/5 focus-visible:text-black dark:border-white/20 dark:bg-neutral-900 dark:hover:bg-white/5 dark:hover:text-white dark:focus-visible:bg-white/5 dark:focus-visible:text-white" data-astro-cid-3ef6ksr2>
&nbsp;
${SITE.ALIAS}
&nbsp;
</a> <!-- center --> <!-- right side --> <nav class="flex items-center gap-1 text-sm" data-astro-cid-3ef6ksr2> ${renderComponent($$result2, "SysInfo", $$SysInfo, { "data-astro-cid-3ef6ksr2": true })} <!-- <Link href="/blog">blog</Link> --> <!-- <Link href="/blog">petals</Link>
        <span>{\`/\`}</span>
        <Link href="/projects">projects</Link>
        <span>{\`/\`}</span>
        <Link href="/pulses">pulses</Link> --> <!-- nav end  --> </nav> </div> ` })} </header> `;
}, "/home/source/GitHub/sourceaura.github.io/src/components/Header.astro", "self");

const $$BackToTop = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<button id="back-to-top" class="group relative flex w-fit flex-nowrap rounded border border-black/15 py-1.5 pl-8 pr-3 transition-colors duration-300 ease-in-out hover:bg-black/5 hover:text-black focus-visible:bg-black/5 focus-visible:text-black dark:border-white/20 dark:hover:bg-white/5 dark:hover:text-white dark:focus-visible:bg-white/5 dark:focus-visible:text-white"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="absolute left-2 top-1/2 size-4 -translate-y-1/2 rotate-90 fill-none stroke-current stroke-2"> <line x1="5" y1="12" x2="19" y2="12" class="translate-x-2 scale-x-0 transition-transform duration-300 ease-in-out group-hover:translate-x-0 group-hover:scale-x-100 group-focus-visible:translate-x-0 group-focus-visible:scale-x-100"></line> <polyline points="12 5 5 12 12 19" class="translate-x-1 transition-transform duration-300 ease-in-out group-hover:translate-x-0 group-focus-visible:translate-x-0"></polyline> </svg> <div class="text-sm">Back to top</div> </button>`;
}, "/home/source/GitHub/sourceaura.github.io/src/components/BackToTop.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="animate"> ${renderComponent($$result, "Container", $$Container, { "class": "footer-container" }, { "default": ($$result2) => renderTemplate` <div class="footer-content relative"> <div class="absolute -top-12 right-0"> ${renderComponent($$result2, "BackToTop", $$BackToTop, {})} </div> </div> <div class="flex items-center justify-between"> <!-- <Connect /> --> <div> ${SITE.TITLE} | 🫀 • 🫁 • 🧠 | &copy; ${(/* @__PURE__ */ new Date()).getFullYear()} </div> <!-- theme buttons --> <div class="theme-buttons flex flex-wrap items-center gap-1.5"> <button id="light-theme-button" aria-label="Light theme" class="group flex size-9 items-center justify-center rounded border border-black/15 hover:bg-black/5 focus-visible:bg-black/5 dark:border-white/20 dark:hover:bg-white/5 dark:focus-visible:bg-white/5"> <svg xmlns="http://www.w3.org/2000/svg" width="1.3em" height="1.3em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><circle cx="12" cy="32" r="5"><animate fill="freeze" attributeName="cy" dur="1.2s" values="32;12"></animate></circle><g stroke-dasharray="2" stroke-dashoffset="2"><path d="M0 0"><animate fill="freeze" attributeName="d" begin="1.4s" dur="0.4s" values="M12 19v1M19 12h1M12 5v-1M5 12h-1;M12 21v1M21 12h1M12 3v-1M3 12h-1"></animate><animate fill="freeze" attributeName="stroke-dashoffset" begin="1.4s" dur="0.4s" values="2;0"></animate></path><path d="M0 0"><animate fill="freeze" attributeName="d" begin="1.8s" dur="0.4s" values="M17 17l0.5 0.5M17 7l0.5 -0.5M7 7l-0.5 -0.5M7 17l-0.5 0.5;M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5"></animate><animate fill="freeze" attributeName="stroke-dashoffset" begin="1.8s" dur="0.4s" values="2;0"></animate></path><animateTransform attributeName="transform" dur="60s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"></animateTransform></g></g></svg> </button> <!--  --> <!-- dark theme --> <button id="dark-theme-button" aria-label="Dark theme" class="group flex size-9 items-center justify-center rounded border border-black/15 hover:bg-black/5 focus-visible:bg-black/5 dark:border-white/20 dark:hover:bg-white/5 dark:focus-visible:bg-white/5"> <svg xmlns="http://www.w3.org/2000/svg" width="1.3em" height="1.3em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-dasharray="4" stroke-dashoffset="4" stroke-linecap="round" stroke-linejoin="round"><path d="M13 4h1.5M13 4h-1.5M13 4v1.5M13 4v-1.5"><animate id="lineMdMoonRisingAltLoop0" fill="freeze" attributeName="stroke-dashoffset" begin="1.4s;lineMdMoonRisingAltLoop0.begin+12s" dur="0.8s" values="4;0"></animate><animate fill="freeze" attributeName="stroke-dashoffset" begin="lineMdMoonRisingAltLoop0.begin+4s;lineMdMoonRisingAltLoop0.begin+8s" dur="0.8s" values="4;0"></animate><animate fill="freeze" attributeName="stroke-dashoffset" begin="lineMdMoonRisingAltLoop0.begin+2.4s;lineMdMoonRisingAltLoop0.begin+6.4s;lineMdMoonRisingAltLoop0.begin+10.4s" dur="0.8s" values="0;4"></animate><set attributeName="d" begin="lineMdMoonRisingAltLoop0.begin+3.6s" to="M12 5h1.5M12 5h-1.5M12 5v1.5M12 5v-1.5"></set><set attributeName="d" begin="lineMdMoonRisingAltLoop0.begin+7.6s" to="M12 4h1.5M12 4h-1.5M12 4v1.5M12 4v-1.5"></set><set attributeName="d" begin="lineMdMoonRisingAltLoop0.begin+11.6s" to="M13 4h1.5M13 4h-1.5M13 4v1.5M13 4v-1.5"></set></path><path d="M19 11h1.5M19 11h-1.5M19 11v1.5M19 11v-1.5"><animate id="lineMdMoonRisingAltLoop1" fill="freeze" attributeName="stroke-dashoffset" begin="2.2s;lineMdMoonRisingAltLoop1.begin+12s" dur="0.8s" values="4;0"></animate><animate fill="freeze" attributeName="stroke-dashoffset" begin="lineMdMoonRisingAltLoop1.begin+4s;lineMdMoonRisingAltLoop1.begin+8s" dur="0.8s" values="4;0"></animate><animate fill="freeze" attributeName="stroke-dashoffset" begin="lineMdMoonRisingAltLoop1.begin+2.4s;lineMdMoonRisingAltLoop1.begin+6.4s;lineMdMoonRisingAltLoop1.begin+10.4s" dur="0.8s" values="0;4"></animate><set attributeName="d" begin="lineMdMoonRisingAltLoop1.begin+3.6s" to="M17 11h1.5M17 11h-1.5M17 11v1.5M17 11v-1.5"></set><set attributeName="d" begin="lineMdMoonRisingAltLoop1.begin+7.6s" to="M18 12h1.5M18 12h-1.5M18 12v1.5M18 12v-1.5"></set><set attributeName="d" begin="lineMdMoonRisingAltLoop1.begin+11.6s" to="M19 11h1.5M19 11h-1.5M19 11v1.5M19 11v-1.5"></set></path><path d="M19 4h1.5M19 4h-1.5M19 4v1.5M19 4v-1.5"><animate id="lineMdMoonRisingAltLoop2" fill="freeze" attributeName="stroke-dashoffset" begin="5.8s;lineMdMoonRisingAltLoop2.begin+12s" dur="0.8s" values="4;0"></animate><animate fill="freeze" attributeName="stroke-dashoffset" begin="lineMdMoonRisingAltLoop2.begin+4s" dur="0.8s" values="4;0"></animate><animate fill="freeze" attributeName="stroke-dashoffset" begin="lineMdMoonRisingAltLoop2.begin+2.4s;lineMdMoonRisingAltLoop2.begin+6.4s" dur="0.8s" values="0;4"></animate><set attributeName="d" begin="lineMdMoonRisingAltLoop2.begin+3.6s" to="M20 5h1.5M20 5h-1.5M20 5v1.5M20 5v-1.5"></set><set attributeName="d" begin="lineMdMoonRisingAltLoop2.begin+11.6s" to="M19 4h1.5M19 4h-1.5M19 4v1.5M19 4v-1.5"></set></path></g><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z" transform="translate(0 22)"><animateMotion fill="freeze" calcMode="linear" dur="1.2s" path="M0 0v-22"></animateMotion></path></svg> </button> <!--  --> <!-- make this a singluar button hybrid  --> <!-- system theme --> <button id="system-theme-button" aria-label="System theme" class="group flex size-9 items-center justify-center rounded border border-black/15 hover:bg-black/5 focus-visible:bg-black/5 dark:border-white/20 dark:hover:bg-white/5 dark:focus-visible:bg-white/5"> <svg xmlns="http://www.w3.org/2000/svg" width="1.3em" height="1.3em" viewBox="0 0 24 24"><defs><mask id="lineMdLightDarkLoop0"><circle cx="7.5" cy="7.5" r="5.5" fill="#fff"></circle><circle cx="7.5" cy="7.5" r="5.5"><animate fill="freeze" attributeName="cx" dur="0.8s" values="7.5;11"></animate><animate fill="freeze" attributeName="r" dur="0.8s" values="5.5;6.5"></animate></circle></mask><mask id="lineMdLightDarkLoop1"><g fill="#fff"><circle cx="12" cy="9" r="5.5"><animate fill="freeze" attributeName="cy" begin="2s" dur="1s" values="9;15"></animate></circle><g><g fill-opacity="0"><use href="#lineMdLightDarkLoop2" transform="rotate(-125 12 15)"></use><use href="#lineMdLightDarkLoop2" transform="rotate(-75 12 15)"></use><use href="#lineMdLightDarkLoop2" transform="rotate(-25 12 15)"></use><use href="#lineMdLightDarkLoop2" transform="rotate(25 12 15)"></use><use href="#lineMdLightDarkLoop2" transform="rotate(75 12 15)"></use><set attributeName="fill-opacity" begin="3s" to="1"></set></g><animateTransform attributeName="transform" dur="10s" repeatCount="indefinite" type="rotate" values="0 12 15;50 12 15"></animateTransform></g></g><path d="M0 10h26v5h-26z"></path><path fill="none" stroke="#fff" stroke-dasharray="26" stroke-dashoffset="26" stroke-linecap="round" stroke-width="2" d="M1 12h22"><animate attributeName="d" dur="12s" repeatCount="indefinite" values="M0 12h22;M2 12h22;M0 12h22"></animate><animate fill="freeze" attributeName="stroke-dashoffset" begin="1s" dur="0.8s" values="26;52"></animate></path></mask><symbol id="lineMdLightDarkLoop2"><path d="M0 0"><animate fill="freeze" attributeName="d" begin="3s" dur="0.8s" values="M11 18h2L12 20z;M10.5 21.5h3L12 24z"></animate></path></symbol></defs><g fill="currentColor"><rect width="13" height="13" x="1" y="1" mask="url(#lineMdLightDarkLoop0)"></rect><path d="M-2 11h28v13h-28z" mask="url(#lineMdLightDarkLoop1)" transform="rotate(-45 12 12)"></path></g></svg> </button> </div> </div> ` })} </footer>`;
}, "/home/source/GitHub/sourceaura.github.io/src/components/Footer.astro", void 0);

const $$Astro$1 = createAstro("https://sourceaura.vercel.app");
const $$Search = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Search;
  const { id, className, query, uiOptions = {} } = Astro2.props;
  const bundlePath = `${"/"}pagefind/`;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(id, "id")}${addAttribute([className, "pagefind-init"], "class:list")} data-pagefind-ui${addAttribute(bundlePath, "data-bundle-path")}${addAttribute(query, "data-query")}${addAttribute(JSON.stringify(uiOptions), "data-ui-options")}></div> `;
}, "/home/source/GitHub/sourceaura.github.io/node_modules/astro-pagefind/src/components/Search.astro", void 0);

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
  return renderTemplate(_a || (_a = __template(["", '<div id="backdrop" class="bg-[rgba(0, 0, 0, 0.5] invisible fixed left-0 top-0 z-50 flex h-screen w-full justify-center p-6 backdrop-blur-sm"', '> <div id="pagefind-container" class="m-0 flex h-fit max-h-[80%] w-full max-w-screen-sm flex-col overflow-auto rounded border border-black/15 bg-neutral-100 p-2 px-4 py-3 shadow-lg dark:border-white/20 dark:bg-neutral-900 relative"> ', ' <div class="text-right text-xs dark:prose-invert mt-2">\nPress <span class="prose text-xs dark:prose-invert"><kbd class="">Esc</kbd></span> </div> </div> </div> <script>(function(){', `
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
})();<\/script> `], ["", '<div id="backdrop" class="bg-[rgba(0, 0, 0, 0.5] invisible fixed left-0 top-0 z-50 flex h-screen w-full justify-center p-6 backdrop-blur-sm"', '> <div id="pagefind-container" class="m-0 flex h-fit max-h-[80%] w-full max-w-screen-sm flex-col overflow-auto rounded border border-black/15 bg-neutral-100 p-2 px-4 py-3 shadow-lg dark:border-white/20 dark:bg-neutral-900 relative"> ', ' <div class="text-right text-xs dark:prose-invert mt-2">\nPress <span class="prose text-xs dark:prose-invert"><kbd class="">Esc</kbd></span> </div> </div> </div> <script>(function(){', `
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
})();<\/script> `])), maybeRenderHead(), addAttribute(createTransitionScope($$result, "t6dxx5el"), "data-astro-transition-persist"), renderComponent($$result, "Search", $$Search, { "id": "search", "className": "pagefind-ui", "uiOptions": {
    showImages: true,
    excerptLength: 15,
    resetStyles: false
  } }), defineScriptVars({ navigationPages }));
}, "/home/source/GitHub/sourceaura.github.io/src/components/PageFind.astro", "self");

const $$Quasar = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "quasar-background", "quasar-background", {})} `;
}, "/home/source/GitHub/sourceaura.github.io/src/components/Quasar.astro", void 0);

const $$Astro = createAstro("https://sourceaura.vercel.app");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, description } = Astro2.props;
  return renderTemplate`<html lang="en" data-astro-cid-sckkx6r4> <head>${renderComponent($$result, "Head", $$Head, { "title": `${title} | ${SITE.TITLE}`, "description": description, "data-astro-cid-sckkx6r4": true })}${renderHead()}</head> <body data-astro-cid-sckkx6r4> ${renderComponent($$result, "Quasar", $$Quasar, { "data-astro-cid-sckkx6r4": true })} ${renderComponent($$result, "Header", $$Header, { "data-astro-cid-sckkx6r4": true })} <main data-astro-cid-sckkx6r4> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-sckkx6r4": true })} ${renderComponent($$result, "PageFind", $$PageFind, { "data-astro-cid-sckkx6r4": true })} </body></html>`;
}, "/home/source/GitHub/sourceaura.github.io/src/layouts/Layout.astro", void 0);

export { $$Container as $, $$Layout as a };
//# sourceMappingURL=Layout_CjQuuQTj.mjs.map
