;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="06404822-477b-4b94-898e-8cd8e392a2c6",e._sentryDebugIdIdentifier="sentry-dbid-06404822-477b-4b94-898e-8cd8e392a2c6")}catch(e){}}();import { $ as $$Container, a as $$Layout } from '../chunks/Layout_CjQuuQTj.mjs';
import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, f as renderComponent } from '../chunks/astro/server_Bkp0-z4m.mjs';
import 'kleur/colors';
import { S as SITE, H as HOME } from '../chunks/consts_Cz7b8feT.mjs';
import 'clsx';
/* empty css                                 */
import { g as getCollection } from '../chunks/_astro_content_moAVZzeT.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://sourceaura.vercel.app");
const $$Qi = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Qi;
  const { href } = Astro2.props;
  return renderTemplate`<!-- Wrap the link in a container div for better styling control -->${maybeRenderHead()}<div class="link-container" data-astro-cid-7riuhlff> <a${addAttribute(href, "href")} class="text" data-astro-cid-7riuhlff> <button data-astro-cid-7riuhlff> <span class="text" data-astro-cid-7riuhlff> <svg xmlns="http://www.w3.org/2000/svg" width="2.1em" height="2.1em" viewBox="0 0 24 24" data-astro-cid-7riuhlff> <defs data-astro-cid-7riuhlff> <clipPath id="lineMdWatchLoop0" data-astro-cid-7riuhlff> <rect width="24" height="12" data-astro-cid-7riuhlff></rect> </clipPath> <symbol id="lineMdWatchLoop1" data-astro-cid-7riuhlff> <path fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M23 16.5C23 10.4249 18.0751 5.5 12 5.5C5.92487 5.5 1 10.4249 1 16.5z" clip-path="url(#lineMdWatchLoop0)" data-astro-cid-7riuhlff> <animate attributeName="d" dur="3.78s" keyTimes="0;0.07;0.93;1" repeatCount="indefinite" values="M23 16.5C23 11.5 18.0751 12 12 12C5.92487 12 1 11.5 1 16.5z;M23 16.5C23 10.4249 18.0751 5.5 12 5.5C5.92487 5.5 1 10.4249 1 16.5z;M23 16.5C23 10.4249 18.0751 5.5 12 5.5C5.92487 5.5 1 10.4249 1 16.5z;M23 16.5C23 11.5 18.0751 12 12 12C5.92487 12 1 11.5 1 16.5z" data-astro-cid-7riuhlff></animate> </path> </symbol> <mask id="lineMdWatchLoop2" data-astro-cid-7riuhlff> <use href="#lineMdWatchLoop1" data-astro-cid-7riuhlff></use> <use href="#lineMdWatchLoop1" transform="rotate(180 12 12)" data-astro-cid-7riuhlff></use> <circle cx="12" cy="12" r="0" fill="#fff" data-astro-cid-7riuhlff> <animate attributeName="r" dur="3.78s" keyTimes="0;0.03;0.97;1" repeatCount="indefinite" values="0;3;3;0" data-astro-cid-7riuhlff></animate> </circle> </mask> </defs> <rect width="24" height="24" fill="currentColor" mask="url(#lineMdWatchLoop2)" data-astro-cid-7riuhlff></rect> </svg> </span> <span class="shimmer" data-astro-cid-7riuhlff></span> </button> </a> </div>  `;
}, "/home/source/GitHub/sourceaura.github.io/src/components/Qi.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  (await getCollection("petals")).slice(0, SITE.NUM_POSTS_ON_HOMEPAGE);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": HOME.TITLE, "description": HOME.DESCRIPTION }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="root space-y-16"> <section> <article class="seed space-y-4"> <span class="animate"> ${renderComponent($$result3, "Qi", $$Qi, { "href": "/about" })} <!-- <br /> --> <h1 class="mt-4 text-3xl font-extrabold tracking-tight sm:mt-5 sm:leading-none lg:mt-6 lg:text-3xl xl:text-3xl"> <!-- <span class="animate">{SITE.ALIAS}</span> --> </h1> </span> <span class="animate"> <span class="md:block">${SITE.DESCRIPTION}</span> <br> <span class="md:block">${SITE.DEFINITION}</span> </span> <!--  --> </article> <br> <!-- connect --> <!-- <Connect class="connect"/> --> </section> <!-- <section>
        <h2>Recent Posts</h2>
        <ul>
          {petals.map((petal) => (
            <li>
              <a href={\`/petals/\${petal.slug}\`}>{petal.data.title}</a>
            </li>
          ))}
        </ul>
      </section> --> </div> ` })} ` })}`;
}, "/home/source/GitHub/sourceaura.github.io/src/pages/index.astro", void 0);

const $$file = "/home/source/GitHub/sourceaura.github.io/src/pages/index.astro";
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
