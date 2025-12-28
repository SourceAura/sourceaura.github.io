!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{};e.SENTRY_RELEASE={id:"8e437b30f9752bf63b29ff498b0de8c3341d6d1f"};}catch(e){}}();;{try{(function(){var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="35cb6d29-1613-4445-afb0-461c94b2183b",e._sentryDebugIdIdentifier="sentry-dbid-35cb6d29-1613-4445-afb0-461c94b2183b");})();}catch(e){}};import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_XG2gF3JY.mjs';
import { manifest } from './manifest_BgcQUuDC.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/api/spotify/now-playing.astro.mjs');
const _page3 = () => import('./pages/euthymia.astro.mjs');
const _page4 = () => import('./pages/petals.astro.mjs');
const _page5 = () => import('./pages/petals/_---slug_.astro.mjs');
const _page6 = () => import('./pages/rss.xml.astro.mjs');
const _page7 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/api/spotify/now-playing.ts", _page2],
    ["src/pages/euthymia.astro", _page3],
    ["src/pages/petals/index.astro", _page4],
    ["src/pages/petals/[...slug].astro", _page5],
    ["src/pages/rss.xml.js", _page6],
    ["src/pages/index.astro", _page7]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "07dc583d-f50f-4279-be58-b6461fb45165",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
