;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="33b5adc6-d915-4b61-bfcb-6a4eb6aadd72",e._sentryDebugIdIdentifier="sentry-dbid-33b5adc6-d915-4b61-bfcb-6a4eb6aadd72")}catch(e){}}();import { F as Fragment, _ as __astro_tag_component__, n as createVNode } from './astro/server_CiN3CFiE.mjs';
import { $ as $$Image } from './_astro_assets_JVTAshYg.mjs';
import { _ as __0__________assets_go_bro_png__ } from './go-bro_CzP6qpv_.mjs';
import 'clsx';

const frontmatter = {
  "title": "Programatic Poetry",
  "description": "...poetry programs.",
  "date": "2021-07-07",
  "demoURL": "https://example.com/demo",
  "repoURL": "https://github.com/example/repo",
  "image": {
    "src": "../../../assets/go-bro.png",
    "alt": "programatic poetry"
  },
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
    "astro-image": "astro-image",
    h2: "h2",
    p: "p",
    ...props.components
  }, _component0 = _components["astro-image"];
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: ["// Local image stored in src/assets/\n", createVNode(_component0, {
        alt: "A rocketship in space",
        src: __0__________assets_go_bro_png__
      })]
    }), "\n", createVNode(_components.h2, {
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
const file = "/home/sourceaura/Documents/GitHub/sourceaura.github.io/src/content/petals/05-web-dev/index.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/sourceaura/Documents/GitHub/sourceaura.github.io/src/content/petals/05-web-dev/index.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
//# sourceMappingURL=index_CUKnThKx.mjs.map
