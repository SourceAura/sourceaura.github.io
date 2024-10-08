;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="d47fbea1-943c-4dfa-9fd4-10c347409771",e._sentryDebugIdIdentifier="sentry-dbid-d47fbea1-943c-4dfa-9fd4-10c347409771")}catch(e){}}();import { F as Fragment, _ as __astro_tag_component__, e as createVNode } from './astro/server_Bkp0-z4m.mjs';
import { $ as $$Image } from './_astro_assets_CcS1kKrT.mjs';
import 'clsx';

/*script*/
const frontmatter = {
  "title": "Programatic Poetry",
  "description": "...poetry programs.",
  "date": "2021-07-07",
  "demoURL": "https://example.com/demo",
  "repoURL": "https://github.com/example/repo",
  "draft": false
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "the-pursuit-of",
    "text": "The Pursuit Of…"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    h2: "h2",
    hr: "hr",
    p: "p",
    ...props.components
  };
  return createVNode(Fragment, {
    children: ["\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "the-pursuit-of",
      children: "The Pursuit Of…"
    }), "\n", createVNode(_components.p, {
      children: "I’ve decided to challenge myself. Life’s been a bit hectic here lately."
    }), "\n", createVNode(_components.p, {
      children: "But with the world’s dusts settling slightly per say I feel compelled to redouble both my aspirations and my efforts toward them."
    }), "\n", createVNode(_components.p, {
      children: "Code. Create. Repeat. ^_^"
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}

const url = "src/content/petals/05-web-dev/index.mdx";
const file = "/home/source/GitHub/sourceaura.github.io/src/content/petals/05-web-dev/index.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/source/GitHub/sourceaura.github.io/src/content/petals/05-web-dev/index.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
//# sourceMappingURL=index_GPdNnx6I.mjs.map
