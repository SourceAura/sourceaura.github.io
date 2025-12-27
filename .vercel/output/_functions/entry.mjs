!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{};e.SENTRY_RELEASE={id:"4f220c343f9676df570b4c9209c95ee5cbde664c"};}catch(e){}}();;{try{(function(){var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="eed6b3f8-dd85-4e75-8d8f-b7c0363b35c4",e._sentryDebugIdIdentifier="sentry-dbid-eed6b3f8-dd85-4e75-8d8f-b7c0363b35c4");})();}catch(e){}};import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CiTGXYbH.mjs';
import { manifest } from './manifest_BEx93Ohz.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/api/spotify/now-playing.astro.mjs');
const _page3 = () => import('./pages/api/spotify/now-playingv1.astro.mjs');
const _page4 = () => import('./pages/euthymia.astro.mjs');
const _page5 = () => import('./pages/petals.astro.mjs');
const _page6 = () => import('./pages/petals/_---slug_.astro.mjs');
const _page7 = () => import('./pages/rss.xml.astro.mjs');
const _page8 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/api/spotify/now-playing.ts", _page2],
    ["src/pages/api/spotify/now-playingV1.js", _page3],
    ["src/pages/euthymia.astro", _page4],
    ["src/pages/petals/index.astro", _page5],
    ["src/pages/petals/[...slug].astro", _page6],
    ["src/pages/rss.xml.js", _page7],
    ["src/pages/index.astro", _page8]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "dfc65c52-cd88-4446-8ea6-4acaaa18bbc0",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
