;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="438c1d81-cd53-4ff5-9ac9-09a470aeaef2",e._sentryDebugIdIdentifier="sentry-dbid-438c1d81-cd53-4ff5-9ac9-09a470aeaef2")}catch(e){}}();import { b as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute } from './astro/server_YRuezPoq.mjs';
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
}, "/home/source/Documents/GitHub/sourceaura.github.io/src/components/FormattedDate.astro", void 0);

export { $$FormattedDate as $ };
//# sourceMappingURL=FormattedDate_KSuO3rV7.mjs.map
