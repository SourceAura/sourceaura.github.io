;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="5bc90bd5-c281-48f0-acf0-b67ec0d7ac14",e._sentryDebugIdIdentifier="sentry-dbid-5bc90bd5-c281-48f0-acf0-b67ec0d7ac14")}catch(e){}}();import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute } from './astro/server_Bkp0-z4m.mjs';
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
}, "/home/source/GitHub/sourceaura.github.io/src/components/FormattedDate.astro", void 0);

export { $$FormattedDate as $ };
//# sourceMappingURL=FormattedDate_DfUVYG8H.mjs.map
