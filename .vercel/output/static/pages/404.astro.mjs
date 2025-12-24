;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="b65d08f3-0f91-4cd3-abe5-55d4693e6393",e._sentryDebugIdIdentifier="sentry-dbid-b65d08f3-0f91-4cd3-abe5-55d4693e6393")}catch(e){}}();import { $ as $$Container, a as $$Layout } from '../chunks/Layout_DFngKXYt.mjs';
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_CiN3CFiE.mjs';
import 'kleur/colors';
import { $ as $$BackToPrevious } from '../chunks/BackToPrevious_BXkzZBwq.mjs';
import { S as SITE } from '../chunks/consts_Thi2dnnz.mjs';
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "404", "description": SITE.DESCRIPTION }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="mt-16 grid place-items-center gap-3"> <h4 class="animate text-2xl font-semibold text-black dark:text-white">
404: Page not found
</h4> <span class="animate"> ${renderComponent($$result3, "BackToPrevious", $$BackToPrevious, { "href": "/" }, { "default": ($$result4) => renderTemplate`Go to home page` })} </span> </div> ` })} ` })}`;
}, "/home/sourceaura/Documents/GitHub/sourceaura.github.io/src/pages/404.astro", void 0);

const $$file = "/home/sourceaura/Documents/GitHub/sourceaura.github.io/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
//# sourceMappingURL=404.astro.mjs.map
