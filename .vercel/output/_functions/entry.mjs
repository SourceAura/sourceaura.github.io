;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="74597d20-88d9-47b8-9ff9-de28c7256ce8",e._sentryDebugIdIdentifier="sentry-dbid-74597d20-88d9-47b8-9ff9-de28c7256ce8")}catch(e){}}();import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_D1P6-Zw-.mjs';
import { manifest } from './manifest_CqBuXmeM.mjs';
import { onRequest } from './_astro-internal_middleware.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/about.astro.mjs');
const _page3 = () => import('./pages/euthymia.astro.mjs');
const _page4 = () => import('./pages/petals.astro.mjs');
const _page5 = () => import('./pages/petals/_---slug_.astro.mjs');
const _page6 = () => import('./pages/rss.xml.astro.mjs');
const _page7 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/about.astro", _page2],
    ["src/pages/euthymia.astro", _page3],
    ["src/pages/petals/index.astro", _page4],
    ["src/pages/petals/[...slug].astro", _page5],
    ["src/pages/rss.xml.js", _page6],
    ["src/pages/index.astro", _page7]
]);
const serverIslandMap = new Map();

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "053d9499-7811-4bb6-8e4e-9749f0bb1703",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
//# sourceMappingURL=entry.mjs.map
