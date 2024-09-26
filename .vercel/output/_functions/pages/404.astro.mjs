;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="dca05085-e420-457f-ad19-c2ff10ea2aec",e._sentryDebugIdIdentifier="sentry-dbid-dca05085-e420-457f-ad19-c2ff10ea2aec")}catch(e){}}();import { $ as $$Container, a as $$Layout } from '../chunks/Layout_CjQuuQTj.mjs';
import { a as createComponent, r as renderTemplate, f as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_Bkp0-z4m.mjs';
import 'kleur/colors';
import { $ as $$BackToPrevious } from '../chunks/BackToPrevious_CQjI74g3.mjs';
import { S as SITE } from '../chunks/consts_Cz7b8feT.mjs';
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "404", "description": SITE.DESCRIPTION }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="mt-16 grid place-items-center gap-3"> <h4 class="animate text-2xl font-semibold text-black dark:text-white">
404: Page not found
</h4> <span class="animate"> ${renderComponent($$result3, "BackToPrevious", $$BackToPrevious, { "href": "/" }, { "default": ($$result4) => renderTemplate`Go to home page` })} </span> </div> ` })} ` })}`;
}, "/home/source/GitHub/sourceaura.github.io/src/pages/404.astro", void 0);

const $$file = "/home/source/GitHub/sourceaura.github.io/src/pages/404.astro";
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
