;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="e6cf9929-2d6f-4e60-8df3-2952757e62a9",e._sentryDebugIdIdentifier="sentry-dbid-e6cf9929-2d6f-4e60-8df3-2952757e62a9")}catch(e){}}();import { b as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute } from './astro/server_CiN3CFiE.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro("https://sourceaura.vercel.app");
const $$FormattedDate = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$FormattedDate;
  const { date } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<time${addAttribute(date.toISOString(), "datetime")}> ${date.toLocaleDateString("en-US", {
    month: "long",
    day: "2-digit",
    year: "numeric"
  })} </time>`;
}, "/home/sourceaura/Documents/GitHub/sourceaura.github.io/src/components/FormattedDate.astro", void 0);

export { $$FormattedDate as $ };
//# sourceMappingURL=FormattedDate_BdRAvYhO.mjs.map
