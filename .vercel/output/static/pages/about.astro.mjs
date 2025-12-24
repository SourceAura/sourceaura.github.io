;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="94698935-d67c-4c8d-b0a0-4966f31a3251",e._sentryDebugIdIdentifier="sentry-dbid-94698935-d67c-4c8d-b0a0-4966f31a3251")}catch(e){}}();import { c as cn, $ as $$Container, a as $$Layout } from '../chunks/Layout_DFngKXYt.mjs';
import { b as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, s as spreadAttributes, e as renderSlot, a as renderComponent } from '../chunks/astro/server_CiN3CFiE.mjs';
import 'kleur/colors';
import 'clsx';
import { H as HERO, S as SITE } from '../chunks/consts_Thi2dnnz.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_JVTAshYg.mjs';
import { _ as __0__________assets_go_bro_png__ } from '../chunks/go-bro_CzP6qpv_.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro("https://sourceaura.vercel.app");
const $$Link = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Link;
  const {
    href,
    external,
    underline = true,
    group = false,
    ...rest
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${addAttribute(external ? "_blank" : "_self", "target")}${addAttribute(cn(
    "inline-block decoration-black/30 dark:decoration-white/30 hover:decoration-black/50 focus-visible:decoration-black/50 dark:hover:decoration-white/50 dark:focus-visible:decoration-white/50 text-current hover:text-black focus-visible:text-black dark:hover:text-white dark:focus-visible:text-white transition-colors duration-300 ease-in-out",
    underline && "underline underline-offset-[3px]",
    group && "group"
  ), "class")}${spreadAttributes(rest)}> ${renderSlot($$result, $$slots["default"])} </a>`;
}, "/home/sourceaura/Documents/GitHub/sourceaura.github.io/src/components/Link.astro", void 0);

const $$Connect = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Container", $$Container, {}, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="footer-links"> <!-- <h2 class="font-semibold text-black dark:text-white">let's link</h2> --> <article> <!-- <p>link</p> --> </article> <ul class=""> <li class="line-clamp-1"> ${renderTemplate`${renderComponent($$result2, "Link", $$Link, { "href": `https://${HERO.GITHUB}` }, { "default": ($$result3) => renderTemplate`  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><mask id="lineMdGithubLoop0" width="24" height="24" x="0" y="0"><g fill="#fff"><ellipse cx="9.5" cy="9" rx="1.5" ry="1"></ellipse><ellipse cx="14.5" cy="9" rx="1.5" ry="1"></ellipse></g></mask><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path stroke-dasharray="32" stroke-dashoffset="32" d="M12 4c1.67 0 2.61 0.4 3 0.5c0.53 -0.43 1.94 -1.5 3.5 -1.5c0.34 1 0.29 2.22 0 3c0.75 1 1 2 1 3.5c0 2.19 -0.48 3.58 -1.5 4.5c-1.02 0.92 -2.11 1.37 -3.5 1.5c0.65 0.54 0.5 1.87 0.5 2.5c0 0.73 0 3 0 3M12 4c-1.67 0 -2.61 0.4 -3 0.5c-0.53 -0.43 -1.94 -1.5 -3.5 -1.5c-0.34 1 -0.29 2.22 0 3c-0.75 1 -1 2 -1 3.5c0 2.19 0.48 3.58 1.5 4.5c1.02 0.92 2.11 1.37 3.5 1.5c-0.65 0.54 -0.5 1.87 -0.5 2.5c0 0.73 0 3 0 3"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.7s" values="32;0"></animate></path><path stroke-dasharray="10" stroke-dashoffset="10" d="M9 19c-1.406 0-2.844-.563-3.688-1.188C4.47 17.188 4.22 16.157 3 15.5"><animate attributeName="d" dur="3s" repeatCount="indefinite" values="M9 19c-1.406 0-2.844-.563-3.688-1.188C4.47 17.188 4.22 16.157 3 15.5;M9 19c-1.406 0-3-.5-4-.5-.532 0-1 0-2-.5;M9 19c-1.406 0-2.844-.563-3.688-1.188C4.47 17.188 4.22 16.157 3 15.5"></animate><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.8s" dur="0.2s" values="10;0"></animate></path></g><rect width="8" height="4" x="8" y="11" fill="currentColor" mask="url(#lineMdGithubLoop0)"><animate attributeName="y" dur="10s" keyTimes="0;0.45;0.46;0.54;0.55;1" repeatCount="indefinite" values="11;11;7;7;11;11"></animate></rect></svg> ` })}`} ${"/"} ${renderTemplate`${renderComponent($$result2, "Link", $$Link, { "href": `https://${HERO.MASTODON}` }, { "default": ($$result3) => renderTemplate`  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path stroke-dasharray="88" stroke-dashoffset="88" d="M15.5 21.5c-10.5 2.5 -12.5 -2.5 -12.5 -8.5v-3c0 -6 2.5 -7 7 -7h4c4.5 0 7 1.5 7 5.5v4c0 6.5 -10 4 -13.5 4c-1 0 -1.5 7 8 5Z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="88;0"></animate></path><path stroke-dasharray="32" stroke-dashoffset="32" d="M7 13.5l0 -5.5c0 0 0.5 -2 2.5 -2c2 0 2.5 2 2.5 2l0 2.5l0 -2.5c0 0 0.5 -2 2.5 -2c2 0 2.5 2 2.5 2l0 5.5"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.7s" values="32;0"></animate></path></g></svg> ` })}`} ${"/"} ${renderTemplate`${renderComponent($$result2, "Link", $$Link, { "href": `https://${HERO.TWITTER}` }, { "default": ($$result3) => renderTemplate`  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="currentColor"><path d="M1 2h2.5L3.5 2h-2.5zM5.5 2h2.5L7.2 2h-2.5z"><animate fill="freeze" attributeName="d" dur="0.4s" values="M1 2h2.5L3.5 2h-2.5zM5.5 2h2.5L7.2 2h-2.5z;M1 2h2.5L18.5 22h-2.5zM5.5 2h2.5L23 22h-2.5z"></animate></path><path d="M3 2h5v0h-5zM16 22h5v0h-5z"><animate fill="freeze" attributeName="d" begin="0.4s" dur="0.4s" values="M3 2h5v0h-5zM16 22h5v0h-5z;M3 2h5v2h-5zM16 22h5v-2h-5z"></animate></path><path d="M18.5 2h3.5L22 2h-3.5z"><animate fill="freeze" attributeName="d" begin="0.5s" dur="0.4s" values="M18.5 2h3.5L22 2h-3.5z;M18.5 2h3.5L5 22h-3.5z"></animate></path></g></svg> ` })}`} ${"/"} ${renderComponent($$result2, "Link", $$Link, { "href": `mailto:${SITE.EMAIL}`, "aria-label": `Email ${SITE.TITLE}` }, { "default": ($$result3) => renderTemplate`  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><mask id="lineMdEmailArrowRight0"><g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path stroke-dasharray="64" stroke-dashoffset="64" d="M4 5h16c0.55 0 1 0.45 1 1v12c0 0.55 -0.45 1 -1 1h-16c-0.55 0 -1 -0.45 -1 -1v-12c0 -0.55 0.45 -1 1 -1Z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></animate></path><path stroke-dasharray="24" stroke-dashoffset="24" d="M3 6.5l9 5.5l9 -5.5"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="24;0"></animate></path><path fill="#000" fill-opacity="0" stroke="none" d="M19 13c3.31 0 6 2.69 6 6c0 3.31 -2.69 6 -6 6c-3.31 0 -6 -2.69 -6 -6c0 -3.31 2.69 -6 6 -6Z"><set fill="freeze" attributeName="fill-opacity" begin="0.8s" to="1"></set></path><path stroke-dasharray="6" stroke-dashoffset="6" d="M16 19h5"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.8s" dur="0.2s" values="6;0"></animate></path><path stroke-dasharray="4" stroke-dashoffset="4" d="M21 19l-2 2M21 19l-2 -2"><animate fill="freeze" attributeName="stroke-dashoffset" begin="1s" dur="0.2s" values="4;0"></animate></path></g></mask><rect width="24" height="24" fill="currentColor" mask="url(#lineMdEmailArrowRight0)"></rect></svg> ` })} ${"/"} ${renderComponent($$result2, "Link", $$Link, { "href": "/petals" }, { "default": ($$result3) => renderTemplate`  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path stroke-dasharray="72" stroke-dashoffset="72" d="M3 19.5v-15.5c0 -0.55 0.45 -1 1 -1h16c0.55 0 1 0.45 1 1v12c0 0.55 -0.45 1 -1 1h-14.5Z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="72;0"></animate></path><path stroke-dasharray="10" stroke-dashoffset="10" d="M8 7h8"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s" values="10;0"></animate></path><path stroke-dasharray="10" stroke-dashoffset="10" d="M8 10h8"><animate fill="freeze" attributeName="stroke-dashoffset" begin="1s" dur="0.2s" values="10;0"></animate></path><path stroke-dasharray="6" stroke-dashoffset="6" d="M8 13h4"><animate fill="freeze" attributeName="stroke-dashoffset" begin="1.3s" dur="0.2s" values="6;0"></animate></path></g></svg> ` })} </li> </ul> </section>  ` })}`;
}, "/home/sourceaura/Documents/GitHub/sourceaura.github.io/src/components/Connect.astro", void 0);

const $$Astro = createAstro("https://sourceaura.vercel.app");
const $$About = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$About;
  const skills = [
    "JavaScript",
    "Python",
    "Go Lang",
    "TypeScript",
    "React",
    "Next.js",
    "Astro",
    "Tailwind CSS",
    "HTML",
    "CSS",
    "SQL",
    "PostgreSQL",
    "MongoDB",
    "Docker",
    "Kubernetes",
    "AWS",
    "Azure",
    "Git",
    "GitHub",
    "GitLab",
    "Bitbucket",
    "Linux",
    "Windows"
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "About Me", "description": SITE.DESCRIPTION }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate`${maybeRenderHead()}<div class="flex min-h-screen flex-col items-center justify-center px-4 py-12"><div class="mx-auto w-full max-w-2xl text-center">${renderComponent($$result3, "Image", $$Image, { "src": __0__________assets_go_bro_png__, "alt": SITE.TITLE, "width": 192, "height": 192, "class": "mx-auto mb-8 rounded-full object-cover" })}<div class="skills-ticker mb-8"><div class="skills-ticker-content">${skills.map((skill) => renderTemplate`<span class="skill-pill">${skill}</span>`)}</div></div>${renderComponent($$result3, "Connect", $$Connect, {})}</div></div><span class="animate"><!-- <BackToPrevious href="/">Go to home page</BackToPrevious> --></span>` })}` })}`;
}, "/home/sourceaura/Documents/GitHub/sourceaura.github.io/src/pages/about.astro", void 0);

const $$file = "/home/sourceaura/Documents/GitHub/sourceaura.github.io/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
//# sourceMappingURL=about.astro.mjs.map
