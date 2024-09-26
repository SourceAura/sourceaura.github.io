;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="e7cbed06-8810-4ddd-9e71-6140332edda7",e._sentryDebugIdIdentifier="sentry-dbid-e7cbed06-8810-4ddd-9e71-6140332edda7")}catch(e){}}();import { $ as $$Container, a as $$Layout } from '../chunks/Layout_CjQuuQTj.mjs';
import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, f as renderComponent } from '../chunks/astro/server_Bkp0-z4m.mjs';
import 'kleur/colors';
import { $ as $$Image } from '../chunks/_astro_assets_CcS1kKrT.mjs';
import { $ as $$FormattedDate } from '../chunks/FormattedDate_DfUVYG8H.mjs';
import { r as readingTime, g as getRandomSize } from '../chunks/utils_DaMc5IgF.mjs';
/* empty css                                 */
import { g as getCollection } from '../chunks/_astro_content_moAVZzeT.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro("https://sourceaura.vercel.app");
const $$PetalCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$PetalCard;
  const { post } = Astro2.props;
  const { title, description, date, image } = post.data;
  let imageSrc = post.data.image?.src ? post.data.image.src : null;
  if (!imageSrc) {
    const imageRegex = /!\[.*?\]\((.*?)\)/;
    const match = post.body.match(imageRegex);
    if (match) {
      imageSrc = match[1];
    }
  }
  return renderTemplate`${maybeRenderHead()}<div class="petal-card group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 h-full" data-petal-card data-astro-cid-h6ssqhfp> <a${addAttribute(`/petals/${post.slug}/`, "href")} class="block w-full h-full" data-astro-cid-h6ssqhfp> ${imageSrc && renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": imageSrc, "alt": image?.alt || title, "width": 300, "height": 200, "class": "absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 group-active:scale-110", "data-astro-cid-h6ssqhfp": true })}`} <div class="relative p-1 bg-black bg-opacity-50 text-white h-full flex flex-col justify-between transition-opacity duration-300 group-hover:bg-opacity-70 group-active:bg-opacity-70" data-astro-cid-h6ssqhfp> <div data-astro-cid-h6ssqhfp> <h2 class="text-xs font-bold mb-0.5 line-clamp-1" data-astro-cid-h6ssqhfp>${title}</h2> <p class="text-xs mb-1 line-clamp-2" data-astro-cid-h6ssqhfp>${description}</p> </div> <div class="text-xs opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-300" data-astro-cid-h6ssqhfp> ${renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": new Date(date), "data-astro-cid-h6ssqhfp": true })} <span class="mx-0.5" data-astro-cid-h6ssqhfp>•</span> <span data-astro-cid-h6ssqhfp>${readingTime(post.body)}</span> </div> </div> </a> </div> `;
}, "/home/source/GitHub/sourceaura.github.io/src/components/PetalCard.astro", void 0);

const $$Astro = createAstro("https://sourceaura.vercel.app");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const posts = (await getCollection("petals")).filter((post) => !post.data.draft).sort((a, b) => new Date(b.data.date).valueOf() - new Date(a.data.date).valueOf());
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Petals Gallery", "description": "A collection of my projects and experiments", "data-astro-cid-kqmutczp": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Container", $$Container, { "data-astro-cid-kqmutczp": true }, { "default": ($$result3) => renderTemplate`  ${maybeRenderHead()}<div class="petal-container" data-astro-cid-kqmutczp> <div class="petal-grid" data-astro-cid-kqmutczp> ${posts.map((post) => renderTemplate`<div${addAttribute(`petal-item ${getRandomSize()}`, "class")} data-astro-cid-kqmutczp> ${renderComponent($$result3, "PetalCard", $$PetalCard, { "post": post, "data-astro-cid-kqmutczp": true })} </div>`)} </div> </div> ` })} ` })}  `;
}, "/home/source/GitHub/sourceaura.github.io/src/pages/petals/index.astro", void 0);

const $$file = "/home/source/GitHub/sourceaura.github.io/src/pages/petals/index.astro";
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
