;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="6ccbd33f-21ba-4404-83e8-29237d957d33",e._sentryDebugIdIdentifier="sentry-dbid-6ccbd33f-21ba-4404-83e8-29237d957d33")}catch(e){}}();import { F as Fragment, _ as __astro_tag_component__, n as createVNode } from './astro/server_CiN3CFiE.mjs';
import { $ as $$Image } from './_astro_assets_JVTAshYg.mjs';
import 'clsx';

const __0_nemo_png__ = new Proxy({"src":"/_astro/nemo.CMRBtdfM.png","width":1024,"height":1024,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/sourceaura/Documents/GitHub/sourceaura.github.io/src/content/petals/00-nemo/nemo.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/home/sourceaura/Documents/GitHub/sourceaura.github.io/src/content/petals/00-nemo/nemo.png");
							return target[name];
						}
					});

const __1__________assets_nemo_png__ = new Proxy({"src":"/_astro/nemo.CO_HehWQ.png","width":3096,"height":4128,"format":"jpg","orientation":6}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/sourceaura/Documents/GitHub/sourceaura.github.io/src/assets/nemo.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/home/sourceaura/Documents/GitHub/sourceaura.github.io/src/assets/nemo.png");
							return target[name];
						}
					});

/*// Local image stored in the same folder*/
/*// Local image stored in the the same folder*/
/*![Nemo](nemo.png)*/
/*// Local image stored in src/assets/*/
/*<Image src={test.png} alt="A rocketship in space." />*/
/*<img src={rocket.src} alt="A rocketship in space." />*/
/*![A rocketship in space](../../assets/go-bro.png)*/
/*![A rocketship in space](./go-bro.png)*/
const frontmatter = {
  "title": "Remember Nemo 🎣",
  "description": "...just keep swimming.",
  "date": "2019-11-21",
  "demoURL": "https://example.com/demo",
  "repoURL": "https://github.com/example/repo",
  "image": {
    "src": "./nemo.png",
    "alt": "Remember Nemo 🎣"
  },
  "draft": false
};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "my-mdx-page",
    "text": "My MDX Page"
  }, {
    "depth": 1,
    "slug": "remember-nemo",
    "text": "Remember Nemo 🎣"
  }, {
    "depth": 2,
    "slug": "remember-not-to-forget",
    "text": "“Remember Not, To Forget”"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    "astro-image": "astro-image",
    h1: "h1",
    h2: "h2",
    p: "p",
    ...props.components
  }, _component0 = _components["astro-image"];
  return createVNode(Fragment, {
    children: [createVNode(_components.h1, {
      id: "my-mdx-page",
      children: "My MDX Page"
    }), "\n", createVNode(_components.p, {
      children: ["// Local image stored in the the same folder\n", createVNode(_component0, {
        alt: "Nemo",
        src: __0_nemo_png__
      })]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_component0, {
        alt: "A starry night sky.",
        src: __1__________assets_nemo_png__
      })
    }), "\n", createVNode(_components.h1, {
      id: "remember-nemo",
      children: "Remember Nemo 🎣"
    }), "\n", "\n", "\n", "\n", "\n", "\n", "\n", "\n", "\n", createVNode(_components.h2, {
      id: "remember-not-to-forget",
      children: "“Remember Not, To Forget”"
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

const url = "src/content/petals/00-nemo/index.mdx";
const file = "/home/sourceaura/Documents/GitHub/sourceaura.github.io/src/content/petals/00-nemo/index.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/sourceaura/Documents/GitHub/sourceaura.github.io/src/content/petals/00-nemo/index.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
//# sourceMappingURL=index_xoW2YUP6.mjs.map
