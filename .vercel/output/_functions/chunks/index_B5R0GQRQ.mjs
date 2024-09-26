;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="aa4a447f-5c6e-4e84-883f-744b18c98ab3",e._sentryDebugIdIdentifier="sentry-dbid-aa4a447f-5c6e-4e84-883f-744b18c98ab3")}catch(e){}}();import { a as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_Bkp0-z4m.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<!-- ![...](../../../assets/may-be.png) -->\n<p>Gedachte - …share the essence of imagination. 💭\n<a href=\"https://app.netlify.com/sites/gedachte/deploys\"><img src=\"https://api.netlify.com/api/v1/badges/237cf08f-b1e8-4789-843e-89a0a3506ca3/deploy-status\" alt=\"Netlify Status\"></a></p>";

				const frontmatter = {"title":"Gedachte - RealTime Chat. 💭","description":"Gedachte - msgs in a bottle. to be revisited soon. 💭","date":"10/21/2019","demoURL":"https://gedachte.netlify.app","repoURL":"https://github.com/SourceAura/gedachte","image":{"src":"./may-be.png","alt":"Let's Go Bro"},"draft":false};
				const file = "/home/source/GitHub/sourceaura.github.io/src/content/petals/08-project-1/index.md";
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
//# sourceMappingURL=index_B5R0GQRQ.mjs.map
