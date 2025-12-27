!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{};e.SENTRY_RELEASE={id:"bb3ba3970cd8d37b8e215972f27dee3762bdf01e"};}catch(e){}}();;{try{(function(){var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="39da8445-37a5-4579-b079-4d1448d043ec",e._sentryDebugIdIdentifier="sentry-dbid-39da8445-37a5-4579-b079-4d1448d043ec");})();}catch(e){}};import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_3Q_EDk4i.mjs';
import { manifest } from './manifest_DWUtSUBz.mjs';

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
    "middlewareSecret": "c9a2e526-addd-49cb-b02e-f8a1642f1564",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
