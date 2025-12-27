!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{};e.SENTRY_RELEASE={id:"438bd48f23bc572bac8a30e7117a24b482c52bf4"};}catch(e){}}();;{try{(function(){var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="c4a470ef-ab04-4d61-9b2d-dc40c7a50e30",e._sentryDebugIdIdentifier="sentry-dbid-c4a470ef-ab04-4d61-9b2d-dc40c7a50e30");})();}catch(e){}};import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_0Hsb_yls.mjs';
import { manifest } from './manifest_BW77JJVE.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/about.astro.mjs');
const _page3 = () => import('./pages/api/spotify/now-playing.astro.mjs');
const _page4 = () => import('./pages/api/spotify/now-playingv1.astro.mjs');
const _page5 = () => import('./pages/euthymia.astro.mjs');
const _page6 = () => import('./pages/euthymia copy.astro.mjs');
const _page7 = () => import('./pages/petals.astro.mjs');
const _page8 = () => import('./pages/petals/_---slug_.astro.mjs');
const _page9 = () => import('./pages/rss.xml.astro.mjs');
const _page10 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/about.astro", _page2],
    ["src/pages/api/spotify/now-playing.ts", _page3],
    ["src/pages/api/spotify/now-playingV1.js", _page4],
    ["src/pages/euthymia.astro", _page5],
    ["src/pages/euthymia copy.astro", _page6],
    ["src/pages/petals/index.astro", _page7],
    ["src/pages/petals/[...slug].astro", _page8],
    ["src/pages/rss.xml.js", _page9],
    ["src/pages/index.astro", _page10]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "a95bae46-f16f-4758-b245-0d967136bf26",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
