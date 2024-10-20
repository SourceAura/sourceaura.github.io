;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="4a19bfba-a998-4ce5-abe9-4177770142a3",e._sentryDebugIdIdentifier="sentry-dbid-4a19bfba-a998-4ce5-abe9-4177770142a3")}catch(e){}}();import { F as Fragment, _ as __astro_tag_component__, n as createVNode } from './astro/server_YRuezPoq.mjs';
import { $ as $$Image } from './_astro_assets_872uEcVX.mjs';
import 'clsx';

const frontmatter = {
  "title": "Spot Eye Sea",
  "description": "...inspecting spotify API.",
  "date": "2021-07-09",
  "demoURL": "https://example.com/demo",
  "repoURL": "https://github.com/example/repo",
  "image": {
    "src": "fdafda",
    "alt": "spot-eye-sea"
  },
  "draft": false
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "a-good-place-to-start",
    "text": "a good place to start…"
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
    children: [createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "a-good-place-to-start",
      children: "a good place to start…"
    }), "\n", createVNode(_components.p, {
      children: "As an avid music listener, exploring the Spotify API is a no brainer…\nAnd well…we gotta start somewhere right."
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

const url = "src/content/petals/01-spot-eye-see/index.mdx";
const file = "/home/source/Documents/GitHub/sourceaura.github.io/src/content/petals/01-spot-eye-see/index.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/source/Documents/GitHub/sourceaura.github.io/src/content/petals/01-spot-eye-see/index.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
//# sourceMappingURL=index_DZA5ZIvd.mjs.map
