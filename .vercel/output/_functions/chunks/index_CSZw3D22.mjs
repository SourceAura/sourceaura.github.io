;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="b6f5d172-2602-4f78-99be-0ea3134bf214",e._sentryDebugIdIdentifier="sentry-dbid-b6f5d172-2602-4f78-99be-0ea3134bf214")}catch(e){}}();import { F as Fragment, _ as __astro_tag_component__, e as createVNode } from './astro/server_Bkp0-z4m.mjs';
import { $ as $$Image } from './_astro_assets_CcS1kKrT.mjs';
import 'clsx';

/*![Let's Go Bro](./go-bro.png)*/
/*// Local image stored in src/assets/*/
/*<img src={rocket.src} alt="A rocketship in space." />*/
/*![A rocketship in space](../../assets/go-bro.png)*/
/*![A rocketship in space](./go-bro.png)*/
/*stack icons*/
const frontmatter = {
  "title": "Remember Nemo 🎣",
  "description": "...just keep swimming.",
  "date": "2019-11-21",
  "demoURL": "https://example.com/demo",
  "repoURL": "https://github.com/example/repo",
  "image": {
    "src": "./go-bro.png",
    "alt": "Let's Go Bro"
  },
  "draft": false
};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "my-mdx-page",
    "text": "My MDX Page"
  }, {
    "depth": 2,
    "slug": "remember-not-to-forget",
    "text": "”Remember Not, To Forget”"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
    h2: "h2",
    p: "p",
    ...props.components
  }, {Image} = _components;
  if (!Image) _missingMdxReference("Image");
  return createVNode(Fragment, {
    children: [createVNode(_components.h1, {
      id: "my-mdx-page",
      children: "My MDX Page"
    }), "\n", createVNode(_components.p, {
      children: "// Local image stored in the same folder"
    }), "\n", "\n", "\n", createVNode(Image, {
      src: test.png,
      alt: "A rocketship in space."
    }), "\n", "\n", "\n", "\n", createVNode(_components.h2, {
      id: "remember-not-to-forget",
      children: "”Remember Not, To Forget”"
    }), "\n"]
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
function _missingMdxReference(id, component) {
  throw new Error("Expected " + ("component" ) + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}

const url = "src/content/petals/00-nemo/index.mdx";
const file = "/home/source/GitHub/sourceaura.github.io/src/content/petals/00-nemo/index.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/source/GitHub/sourceaura.github.io/src/content/petals/00-nemo/index.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
//# sourceMappingURL=index_CSZw3D22.mjs.map
