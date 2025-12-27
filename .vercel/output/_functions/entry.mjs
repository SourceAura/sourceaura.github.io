!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{};e.SENTRY_RELEASE={id:"37530b5fa64007988fc40d3071fac9fcc4d80d3a"};}catch(e){}}();;{try{(function(){var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="ee37fd6e-8f63-4759-85a0-28fa9b67b4d2",e._sentryDebugIdIdentifier="sentry-dbid-ee37fd6e-8f63-4759-85a0-28fa9b67b4d2");})();}catch(e){}};import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CWgYrhLf.mjs';
import { manifest } from './manifest_Cbu3s70T.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/about.astro.mjs');
const _page3 = () => import('./pages/api/spotify/now-playing.astro.mjs');
const _page4 = () => import('./pages/api/spotify/now-playingv1.astro.mjs');
const _page5 = () => import('./pages/euthymia.astro.mjs');
const _page6 = () => import('./pages/petals.astro.mjs');
const _page7 = () => import('./pages/petals/_---slug_.astro.mjs');
const _page8 = () => import('./pages/rss.xml.astro.mjs');
const _page9 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/about.astro", _page2],
    ["src/pages/api/spotify/now-playing.ts", _page3],
    ["src/pages/api/spotify/now-playingV1.js", _page4],
    ["src/pages/euthymia.astro", _page5],
    ["src/pages/petals/index.astro", _page6],
    ["src/pages/petals/[...slug].astro", _page7],
    ["src/pages/rss.xml.js", _page8],
    ["src/pages/index.astro", _page9]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "2bdf6004-61ba-4c58-84d8-66cff16091e1",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
