;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="6e7dc6db-f7e2-4be5-9041-e4ec865e11e3",e._sentryDebugIdIdentifier="sentry-dbid-6e7dc6db-f7e2-4be5-9041-e4ec865e11e3")}catch(e){}}();import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_CiN3CFiE.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim\nad minim veniam, quis nostrud exercitation ullamco laboris ni ut aliquip ex ea commodo consequat.</p>";

				const frontmatter = {"title":"Draft example","description":"Setting draft flag to true to hide this post.","date":"2022-12-31","demoURL":"https://example.com/demo","repoURL":"https://github.com/example/repo","draft":true,"image":{"src":"./draft.png","alt":"Draft example"}};
				const file = "/home/sourceaura/Documents/GitHub/sourceaura.github.io/src/content/petals/99-draft/index.md";
				const url = undefined;
				function rawContent() {
					return "\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim\n ad minim veniam, quis nostrud exercitation ullamco laboris ni ut aliquip ex ea commodo consequat.\n";
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
//# sourceMappingURL=index_D3ghZSmA.mjs.map
