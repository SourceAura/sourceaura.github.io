;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="19b19f0e-c9ba-4894-ae8a-e377a620ae38",e._sentryDebugIdIdentifier="sentry-dbid-19b19f0e-c9ba-4894-ae8a-e377a620ae38")}catch(e){}}();import { a as $$Layout, $ as $$Container, r as readingTime } from '../../chunks/Layout_DFngKXYt.mjs';
import { b as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, a as renderComponent } from '../../chunks/astro/server_CiN3CFiE.mjs';
import 'kleur/colors';
import { g as getCollection } from '../../chunks/_astro_content_BrwlgINt.mjs';
import { $ as $$FormattedDate } from '../../chunks/FormattedDate_BdRAvYhO.mjs';
import { $ as $$BackToPrevious } from '../../chunks/BackToPrevious_BXkzZBwq.mjs';
import 'clsx';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

const $$Astro$1 = createAstro("https://sourceaura.vercel.app");
const $$PostNavigation = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$PostNavigation;
  const { prevPost, nextPost } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="grid grid-cols-2 gap-1.5 sm:gap-3"> ${prevPost?.slug ? renderTemplate`<a${addAttribute(prevPost?.slug, "href")} class="group relative flex flex-nowrap rounded-lg border border-black/15 px-4 py-3 pl-10 no-underline transition-colors duration-300 ease-in-out hover:bg-black/5 hover:text-black focus-visible:bg-black/5 focus-visible:text-black dark:border-white/20 dark:hover:bg-white/5 dark:hover:text-white dark:focus-visible:bg-white/5 dark:focus-visible:text-white"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="absolute left-2 top-1/2 size-5 -translate-y-1/2 fill-none stroke-current stroke-2"> <line x1="5" y1="12" x2="19" y2="12" class="translate-x-3 scale-x-0 transition-transform duration-300 ease-in-out group-hover:translate-x-0 group-hover:scale-x-100 group-focus-visible:translate-x-0 group-focus-visible:scale-x-100"></line> <polyline points="12 5 5 12 12 19" class="translate-x-1 transition-transform duration-300 ease-in-out group-hover:translate-x-0 group-focus-visible:translate-x-0"></polyline> </svg> <div class="flex items-center text-sm">${prevPost?.data.title}</div> </a>` : renderTemplate`<div class="invisible"></div>`} ${nextPost?.slug ? renderTemplate`<a${addAttribute(nextPost?.slug, "href")} class="group relative flex flex-grow flex-row-reverse flex-nowrap rounded-lg border border-black/15 px-4 py-4 pr-10 no-underline transition-colors duration-300 ease-in-out hover:bg-black/5 hover:text-black focus-visible:bg-black/5 focus-visible:text-black dark:border-white/20 dark:hover:bg-white/5 dark:hover:text-white dark:focus-visible:bg-white/5 dark:focus-visible:text-white"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="absolute right-2 top-1/2 size-5 -translate-y-1/2 fill-none stroke-current stroke-2"> <line x1="5" y1="12" x2="19" y2="12" class="translate-x-3 scale-x-0 transition-transform duration-300 ease-in-out group-hover:translate-x-0 group-hover:scale-x-100 group-focus-visible:translate-x-0 group-focus-visible:scale-x-100"></line> <polyline points="12 5 19 12 12 19" class="-translate-x-1 transition-transform duration-300 ease-in-out group-hover:translate-x-0 group-focus-visible:translate-x-0"></polyline> </svg> <div class="flex items-center rounded text-sm"> ${nextPost?.data.title} </div> </a>` : renderTemplate`<div class="invisible"></div>`} </div>`;
}, "/home/sourceaura/Documents/GitHub/sourceaura.github.io/src/components/PostNavigation.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Giscus = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", '<div class="giscus" data-astro-cid-an2nl7ar></div> <script src="https://giscus.app/client.js" data-repo="sourceaura/sourceaura.github.io" data-repo-id="MDEwOlJlcG9zaXRvcnkyMDg2Nzg2NjY=" data-category="Show and tell" data-category-id="DIC_kwDODHAvCs4Cgi0j" data-mapping="pathname" data-strict="0" data-reactions-enabled="1" data-emit-metadata="0" data-input-position="top" data-theme="transparent_dark" data-lang="en" crossorigin="anonymous" async><\/script> '])), maybeRenderHead());
}, "/home/sourceaura/Documents/GitHub/sourceaura.github.io/src/components/Giscus.astro", void 0);

const $$Astro = createAstro("https://sourceaura.vercel.app");
async function getStaticPaths() {
  const posts = (await getCollection("petals")).filter((post) => !post.data.draft).sort(
    (a, b) => new Date(b.data.date).valueOf() - new Date(a.data.date).valueOf()
  );
  return posts.map((post) => ({
    params: { slug: post.slug },
    props: post
  }));
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const posts = await getCollection("petals");
  const sortedPosts = posts.filter((post2) => !post2.data.draft).sort(
    (a, b) => new Date(b.data.date).valueOf() - new Date(a.data.date).valueOf()
  );
  function getAdjacentPost(offset) {
    const currentIndex = sortedPosts.findIndex(
      (post2) => post2.slug === Astro2.params.slug
    );
    return sortedPosts[currentIndex + offset];
  }
  const nextPost = getAdjacentPost(1);
  const prevPost = getAdjacentPost(-1);
  const post = Astro2.props;
  const { Content, headings } = await post.render();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": post.data.title, "description": post.data.description }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="mx-auto max-w-3xl"> ${renderComponent($$result3, "BackToPrevious", $$BackToPrevious, { "href": "/petals" }, { "default": ($$result4) => renderTemplate`petals` })} <!-- ✅ PAGEFIND FIX: mark the article as searchable --> <article class="mt-8" data-pagefind-body> <h1 class="mb-4 text-3xl font-semibold">${post.data.title}</h1> <div class="mb-4 text-sm text-gray-600 dark:text-gray-400"> ${renderComponent($$result3, "FormattedDate", $$FormattedDate, { "date": new Date(post.data.date) })} <span class="mx-2">•</span> <span>${readingTime(post.body)} min read</span> </div> <div class="prose max-w-none dark:prose-invert"> ${renderComponent($$result3, "Content", Content, {})} </div> </article> <div class="mt-12"> ${renderComponent($$result3, "PostNavigation", $$PostNavigation, { "prevPost": prevPost, "nextPost": nextPost })} </div> <div class="mt-12"> ${renderComponent($$result3, "Giscus", $$Giscus, {})} </div> </div> ` })} ` })}`;
}, "/home/sourceaura/Documents/GitHub/sourceaura.github.io/src/pages/petals/[...slug].astro", void 0);

const $$file = "/home/sourceaura/Documents/GitHub/sourceaura.github.io/src/pages/petals/[...slug].astro";
const $$url = "/petals/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
//# sourceMappingURL=_---slug_.astro.mjs.map
