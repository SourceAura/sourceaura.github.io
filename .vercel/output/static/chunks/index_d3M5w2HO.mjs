;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="77f2bb14-3acb-42a1-b85b-b0f4caa7bb3f",e._sentryDebugIdIdentifier="sentry-dbid-77f2bb14-3acb-42a1-b85b-b0f4caa7bb3f")}catch(e){}}();import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_CiN3CFiE.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<!-- ![...](../../../assets/may-be.png) -->\n<p>Gedachte - …share the essence of imagination. 💭\n<a href=\"https://app.netlify.com/sites/gedachte/deploys\"><img src=\"https://api.netlify.com/api/v1/badges/237cf08f-b1e8-4789-843e-89a0a3506ca3/deploy-status\" alt=\"Netlify Status\"></a></p>";

				const frontmatter = {"title":"Gedachte - RealTime Chat. 💭","description":"Gedachte - msgs in a bottle. to be revisited soon. 💭","date":"10/21/2019","demoURL":"https://gedachte.netlify.app","repoURL":"https://github.com/SourceAura/gedachte","image":{"src":"./gedachte.png","alt":"Gedachte - RealTime Chat. 💭"},"draft":false};
				const file = "/home/sourceaura/Documents/GitHub/sourceaura.github.io/src/content/petals/08-project-1/index.md";
				const url = undefined;
				function rawContent() {
					return "<!-- ![...](../../../assets/may-be.png) -->\n\nGedachte - ...share the essence of imagination. 💭\n[![Netlify Status](https://api.netlify.com/api/v1/badges/237cf08f-b1e8-4789-843e-89a0a3506ca3/deploy-status)](https://app.netlify.com/sites/gedachte/deploys)";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
//# sourceMappingURL=index_d3M5w2HO.mjs.map
