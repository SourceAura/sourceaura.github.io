;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="b702d667-8a7d-4003-84e3-2e7edb4765aa",e._sentryDebugIdIdentifier="sentry-dbid-b702d667-8a7d-4003-84e3-2e7edb4765aa")}catch(e){}}();import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_YRuezPoq.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim\nad minim veniam, quis nostrud exercitation ullamco laboris ni ut aliquip ex ea commodo consequat.</p>";

				const frontmatter = {"title":"Draft example","description":"Setting draft flag to true to hide this post.","date":"2022-12-31","demoURL":"https://example.com/demo","repoURL":"https://github.com/example/repo","draft":true,"image":{"src":"./draft.png","alt":"Draft example"}};
				const file = "/home/source/Documents/GitHub/sourceaura.github.io/src/content/petals/99-draft/index.md";
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
//# sourceMappingURL=index_LiPZ10Pd.mjs.map
