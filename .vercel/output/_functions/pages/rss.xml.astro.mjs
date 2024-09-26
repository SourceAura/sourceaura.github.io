;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="9499d6b3-4667-475e-be67-a45434671c1f",e._sentryDebugIdIdentifier="sentry-dbid-9499d6b3-4667-475e-be67-a45434671c1f")}catch(e){}}();import rss from '@astrojs/rss';
import { S as SITE } from '../chunks/consts_Cz7b8feT.mjs';
import { g as getCollection } from '../chunks/_astro_content_moAVZzeT.mjs';
export { renderers } from '../renderers.mjs';

async function GET(context) {
  const petals = (await getCollection("petals")).filter(post => !post.data.draft);

  // const blog = (await getCollection("blog")).filter((post) => !post.data.draft);

  // const projects = (await getCollection("projects")).filter(
  //   (project) => !project.data.draft,
  // );

  // const items = [...petals, ...blog, ...projects].sort(
  //   (a, b) => new Date(b.data.date).valueOf() - new Date(a.data.date).valueOf(),
  // );
  
  const items = [...petals].sort(
    (a, b) => new Date(b.data.date).valueOf() - new Date(a.data.date).valueOf(),
  );

  return rss({
    title: SITE.TITLE,
    description: SITE.DESCRIPTION,
    site: context.site,
    items: items.map((item) => ({
      title: item.data.title,
      description: item.data.description,
      pubDate: item.data.date,
      link: `/${item.collection}/${item.slug}/`,
    })),
  });
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
//# sourceMappingURL=rss.xml.astro.mjs.map
