;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="1c4de36a-3eb0-4bfb-8855-d9917b788ede",e._sentryDebugIdIdentifier="sentry-dbid-1c4de36a-3eb0-4bfb-8855-d9917b788ede")}catch(e){}}();import { a as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_Bkp0-z4m.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>// Local image stored in the the same folder</p>\n<!-- ![Let's Go Bro](./go-bro.png) -->\n<p>Have you ever wondered how life evolves over time? What if you could watch evolution happen right before your eyes? Enter Axols, a captivating evolution simulation that brings the process of natural selection to life on your computer screen.</p>\n<p>Axols is a Go-based project that simulates the life and evolution of particle-like creatures called “axols” in a 2D environment. Using the Pixel game library, it creates a visually engaging representation of these digital lifeforms as they navigate their world, seek food, and evolve over generations.</p>\n<h2 id=\"key-features-of-axols\">Key Features of Axols</h2>\n<ol>\n<li>\n<p><strong>Two Distinct Species</strong>: The simulation starts with two different types of axols, each with their own unique properties. This diversity sets the stage for interesting evolutionary paths.</p>\n</li>\n<li>\n<p><strong>Food-Seeking Behavior</strong>: Axols aren’t just wandering aimlessly. They actively seek out food sources within their sensory range, mimicking real-world foraging behaviors.</p>\n</li>\n<li>\n<p><strong>Generational Evolution</strong>: Every 10 seconds, a new generation is born. The most successful axols (those who consumed the most food) get to pass on their traits, driving the evolution of the population.</p>\n</li>\n<li>\n<p><strong>Mutation and Crossover</strong>: Just like in nature, axols’ offspring inherit traits from their parents, but with the possibility of mutations. This genetic variation is the fuel for evolution.</p>\n</li>\n<li>\n<p><strong>Visual Representation</strong>: Each axol is beautifully rendered with a translucent body, a nucleus, and a wiggling tail. It’s not just data - you can actually see the creatures moving and evolving!</p>\n</li>\n</ol>\n<p>What makes Axols particularly interesting is how it simplifies complex evolutionary concepts into a visually appealing and easy-to-understand format. Whether you’re a biology enthusiast, a coding aficionado, or just someone curious about the mechanics of life, Axols offers a unique and engaging experience.</p>\n<p>While the project is still evolving (pun intended!), with plans for multiple biomes and more complex evolutionary mechanisms, it already provides a fascinating glimpse into the world of digital life simulations.</p>\n<p>So why not give it a try? Clone the repository, run the simulation, and watch as generations of axols adapt and evolve before your eyes. Who knows - you might just gain a new perspective on the intricate dance of life and evolution!</p>";

				const frontmatter = {"title":"Axols: An Evolution Simulation in Go","description":"Exploring the fascinating world of digital evolution with Axols, a 2D particle-based life simulation.","date":"2024-09-13","demoURL":"https://example.com/demo","repoURL":"https://github.com/example/repo","draft":false};
				const file = "/home/source/GitHub/sourceaura.github.io/src/content/petals/07-axols/index.md";
				const url = undefined;
				function rawContent() {
					return "\n\n// Local image stored in the the same folder\n<!-- ![Let's Go Bro](./go-bro.png) -->\n\nHave you ever wondered how life evolves over time? What if you could watch evolution happen right before your eyes? Enter Axols, a captivating evolution simulation that brings the process of natural selection to life on your computer screen.\n\nAxols is a Go-based project that simulates the life and evolution of particle-like creatures called \"axols\" in a 2D environment. Using the Pixel game library, it creates a visually engaging representation of these digital lifeforms as they navigate their world, seek food, and evolve over generations.\n\n## Key Features of Axols\n\n1. **Two Distinct Species**: The simulation starts with two different types of axols, each with their own unique properties. This diversity sets the stage for interesting evolutionary paths.\n\n2. **Food-Seeking Behavior**: Axols aren't just wandering aimlessly. They actively seek out food sources within their sensory range, mimicking real-world foraging behaviors.\n\n3. **Generational Evolution**: Every 10 seconds, a new generation is born. The most successful axols (those who consumed the most food) get to pass on their traits, driving the evolution of the population.\n\n4. **Mutation and Crossover**: Just like in nature, axols' offspring inherit traits from their parents, but with the possibility of mutations. This genetic variation is the fuel for evolution.\n\n5. **Visual Representation**: Each axol is beautifully rendered with a translucent body, a nucleus, and a wiggling tail. It's not just data - you can actually see the creatures moving and evolving!\n\nWhat makes Axols particularly interesting is how it simplifies complex evolutionary concepts into a visually appealing and easy-to-understand format. Whether you're a biology enthusiast, a coding aficionado, or just someone curious about the mechanics of life, Axols offers a unique and engaging experience.\n\nWhile the project is still evolving (pun intended!), with plans for multiple biomes and more complex evolutionary mechanisms, it already provides a fascinating glimpse into the world of digital life simulations.\n\nSo why not give it a try? Clone the repository, run the simulation, and watch as generations of axols adapt and evolve before your eyes. Who knows - you might just gain a new perspective on the intricate dance of life and evolution!\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"key-features-of-axols","text":"Key Features of Axols"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
//# sourceMappingURL=index_BGLk-PN3.mjs.map
