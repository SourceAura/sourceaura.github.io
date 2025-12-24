;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="25ee2891-0430-4178-9536-032dc9f25c6c",e._sentryDebugIdIdentifier="sentry-dbid-25ee2891-0430-4178-9536-032dc9f25c6c")}catch(e){}}();import { r as readingTime, $ as $$Container, g as getRandomSize, a as $$Layout } from '../chunks/Layout_DFngKXYt.mjs';
import { b as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, a as renderComponent } from '../chunks/astro/server_CiN3CFiE.mjs';
import 'kleur/colors';
import { $ as $$Image } from '../chunks/_astro_assets_JVTAshYg.mjs';
import { $ as $$FormattedDate } from '../chunks/FormattedDate_BdRAvYhO.mjs';
/* empty css                                 */
import { g as getCollection } from '../chunks/_astro_content_BrwlgINt.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://sourceaura.vercel.app");
const $$PetalCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PetalCard;
  const { post } = Astro2.props;
  const { title, description, date } = post.data;
  let imageSrc = null;
  const imageRegex = /!\[.*?\]\((.*?)\)/;
  const match = post.body.match(imageRegex);
  if (match && match[1]) {
    imageSrc = match[1].startsWith("http") ? match[1] : `/src/assets/${match[1]}`;
  }
  return renderTemplate`${maybeRenderHead()}<div class="petal-card group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 h-full" data-petal-card data-astro-cid-h6ssqhfp> <a${addAttribute(`/petals/${post.slug}/`, "href")} class="block w-full h-full" data-astro-cid-h6ssqhfp> <div class="absolute inset-0 w-full h-full bg-transparent" data-astro-cid-h6ssqhfp> ${imageSrc ? renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": imageSrc, "alt": `Image for ${title}`, "width": 300, "height": 200, "class": "w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 group-active:scale-110", "data-astro-cid-h6ssqhfp": true })}` : renderTemplate`<div class="w-full h-full bg-transparent" data-astro-cid-h6ssqhfp></div>`} </div> <div class="relative p-1 bg-black bg-opacity-50 text-white h-full flex flex-col justify-between transition-opacity duration-300 group-hover:bg-opacity-70 group-active:bg-opacity-70" data-astro-cid-h6ssqhfp> <div data-astro-cid-h6ssqhfp> <h2 class="text-xs font-bold mb-0.5 line-clamp-1" data-astro-cid-h6ssqhfp>${title}</h2> <p class="text-xs mb-1 line-clamp-2" data-astro-cid-h6ssqhfp>${description}</p> </div> <div class="text-xs opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-300" data-astro-cid-h6ssqhfp> ${renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": new Date(date), "data-astro-cid-h6ssqhfp": true })} <span class="mx-0.5" data-astro-cid-h6ssqhfp>•</span> <span data-astro-cid-h6ssqhfp>${readingTime(post.body)}</span> </div> </div> </a> </div> `;
}, "/home/sourceaura/Documents/GitHub/sourceaura.github.io/src/components/PetalCard.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const posts = (await getCollection("petals")).filter((post) => !post.data.draft).sort(
    (a, b) => new Date(b.data.date).valueOf() - new Date(a.data.date).valueOf()
  );
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Petals Gallery", "description": "A collection of my projects and experiments", "data-astro-cid-kqmutczp": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Container", $$Container, { "data-astro-cid-kqmutczp": true }, { "default": ($$result3) => renderTemplate`  ${maybeRenderHead()}<div class="petal-container" data-pagefind-body data-astro-cid-kqmutczp> <div class="petal-grid" data-astro-cid-kqmutczp> ${posts.map((post) => renderTemplate`<div${addAttribute(`petal-item ${getRandomSize()}`, "class")} data-astro-cid-kqmutczp> ${renderComponent($$result3, "PetalCard", $$PetalCard, { "post": post, "data-astro-cid-kqmutczp": true })} </div>`)} </div> </div> ` })} ` })} `;
}, "/home/sourceaura/Documents/GitHub/sourceaura.github.io/src/pages/petals/index.astro", void 0);

const $$file = "/home/sourceaura/Documents/GitHub/sourceaura.github.io/src/pages/petals/index.astro";
const $$url = "/petals";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
//# sourceMappingURL=petals.astro.mjs.map
