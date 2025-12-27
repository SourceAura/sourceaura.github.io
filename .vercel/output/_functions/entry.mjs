!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{};e.SENTRY_RELEASE={id:"e45248dffc4b90e7028c3e6547ae34764407f851"};}catch(e){}}();;{try{(function(){var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="68924e13-8116-4b32-9147-f3af6010066f",e._sentryDebugIdIdentifier="sentry-dbid-68924e13-8116-4b32-9147-f3af6010066f");})();}catch(e){}};import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_BmcY1Uku.mjs';
import { manifest } from './manifest_DqCYz488.mjs';

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
    "middlewareSecret": "6b83fb78-a53d-490f-8dd9-0f3aec05e2e4",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
