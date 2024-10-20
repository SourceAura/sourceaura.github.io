;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="c3c76a3c-b2e2-4540-96ab-edbe8a73f2ac",e._sentryDebugIdIdentifier="sentry-dbid-c3c76a3c-b2e2-4540-96ab-edbe8a73f2ac")}catch(e){}}();import { $ as $$Container, a as $$Layout } from '../chunks/Layout_D-RHRMxQ.mjs';
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_YRuezPoq.mjs';
import 'kleur/colors';
import { S as SITE, a as HOME } from '../chunks/consts_C5FYsQMh.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": HOME.TITLE, "description": HOME.DESCRIPTION }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="root space-y-16"> <section> <article class="seed space-y-4"> <span class="animate"> <!-- <br /> --> <h1 class="mt-4 text-3xl font-extrabold tracking-tight sm:mt-5 sm:leading-none lg:mt-6 lg:text-3xl xl:text-3xl"> <!-- <span class="animate">{SITE.ALIAS}</span>/ --> </h1> </span> <span class="animate"> <span class="md:block">${SITE.DESCRIPTION}</span> <br> <span class="md:block">${SITE.DEFINITION}</span> </span> <!--  --> </article> <br> <!-- connect --> <!-- <Connect class="connect"/> --> </section> </div> ` })} ` })}`;
}, "/home/source/Documents/GitHub/sourceaura.github.io/src/pages/index.astro", void 0);

const $$file = "/home/source/Documents/GitHub/sourceaura.github.io/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
//# sourceMappingURL=index.astro.mjs.map
