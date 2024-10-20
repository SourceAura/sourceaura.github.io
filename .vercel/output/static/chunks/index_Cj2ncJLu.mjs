;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="64175f9e-be33-43fb-a9db-8e28861f0c1b",e._sentryDebugIdIdentifier="sentry-dbid-64175f9e-be33-43fb-a9db-8e28861f0c1b")}catch(e){}}();import { F as Fragment, _ as __astro_tag_component__, n as createVNode } from './astro/server_YRuezPoq.mjs';
import { $ as $$Image } from './_astro_assets_872uEcVX.mjs';
import 'clsx';

const __0__________assets_axol_png__ = new Proxy({"src":"/_astro/axol.b5OtjvDG.png","width":1024,"height":1024,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/source/Documents/GitHub/sourceaura.github.io/src/assets/axol.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/home/source/Documents/GitHub/sourceaura.github.io/src/assets/axol.png");
							return target[name];
						}
					});

/*![Axols](axol.png)*/
/*<!-- Use a relative file path or import alias -->*/
const frontmatter = {
  "title": "Axols: An Evolution Simulation in Go",
  "description": "Exploring the fascinating world of digital evolution with Axols, a 2D particle-based life simulation.",
  "date": "2024-09-13",
  "demoURL": "https://example.com/demo",
  "repoURL": "https://github.com/example/repo",
  "image": {
    "src": "./axol.png",
    "alt": "Axols: An Evolution Simulation in Go"
  },
  "draft": false
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "key-features-of-axols",
    "text": "Key Features of Axols"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    "astro-image": "astro-image",
    h2: "h2",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ...props.components
  }, _component0 = _components["astro-image"];
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "// Local image stored in the the same folder"
    }), "\n", "\n", "\n", createVNode(_components.p, {
      children: createVNode(_component0, {
        alt: "A starry night sky.",
        src: __0__________assets_axol_png__
      })
    }), "\n", createVNode(_components.p, {
      children: "Have you ever wondered how life evolves over time? What if you could watch evolution happen right before your eyes? Enter Axols, a captivating evolution simulation that brings the process of natural selection to life on your computer screen."
    }), "\n", createVNode(_components.p, {
      children: "Axols is a Go-based project that simulates the life and evolution of particle-like creatures called “axols” in a 2D environment. Using the Pixel game library, it creates a visually engaging representation of these digital lifeforms as they navigate their world, seek food, and evolve over generations."
    }), "\n", createVNode(_components.h2, {
      id: "key-features-of-axols",
      children: "Key Features of Axols"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Two Distinct Species"
          }), ": The simulation starts with two different types of axols, each with their own unique properties. This diversity sets the stage for interesting evolutionary paths."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Food-Seeking Behavior"
          }), ": Axols aren’t just wandering aimlessly. They actively seek out food sources within their sensory range, mimicking real-world foraging behaviors."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Generational Evolution"
          }), ": Every 10 seconds, a new generation is born. The most successful axols (those who consumed the most food) get to pass on their traits, driving the evolution of the population."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Mutation and Crossover"
          }), ": Just like in nature, axols’ offspring inherit traits from their parents, but with the possibility of mutations. This genetic variation is the fuel for evolution."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Visual Representation"
          }), ": Each axol is beautifully rendered with a translucent body, a nucleus, and a wiggling tail. It’s not just data - you can actually see the creatures moving and evolving!"]
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "What makes Axols particularly interesting is how it simplifies complex evolutionary concepts into a visually appealing and easy-to-understand format. Whether you’re a biology enthusiast, a coding aficionado, or just someone curious about the mechanics of life, Axols offers a unique and engaging experience."
    }), "\n", createVNode(_components.p, {
      children: "While the project is still evolving (pun intended!), with plans for multiple biomes and more complex evolutionary mechanisms, it already provides a fascinating glimpse into the world of digital life simulations."
    }), "\n", createVNode(_components.p, {
      children: "So why not give it a try? Clone the repository, run the simulation, and watch as generations of axols adapt and evolve before your eyes. Who knows - you might just gain a new perspective on the intricate dance of life and evolution!"
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

const url = "src/content/petals/07-axols/index.mdx";
const file = "/home/source/Documents/GitHub/sourceaura.github.io/src/content/petals/07-axols/index.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/source/Documents/GitHub/sourceaura.github.io/src/content/petals/07-axols/index.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
//# sourceMappingURL=index_Cj2ncJLu.mjs.map
