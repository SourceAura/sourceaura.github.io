;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="1ea8f78a-b820-4f01-946c-f5f4e365df3b",e._sentryDebugIdIdentifier="sentry-dbid-1ea8f78a-b820-4f01-946c-f5f4e365df3b")}catch(e){}}();import { a as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_Bkp0-z4m.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<hr>\n<h2 id=\"a-good-place-to-start\">a good place to start…</h2>\n<p>As an avid music listener, exploring the Spotify API is a no brainer…\nAnd well…we gotta start somewhere right.</p>";

				const frontmatter = {"title":"Spot Eye Sea","description":"...inspecting spotify API.","date":"2021-07-09","demoURL":"https://example.com/demo","repoURL":"https://github.com/example/repo","draft":false};
				const file = "/home/source/GitHub/sourceaura.github.io/src/content/petals/01-spot-eye-see/index.md";
				const url = undefined;
				function rawContent() {
					return "\n---\n\n## a good place to start...\n\nAs an avid music listener, exploring the Spotify API is a no brainer...\nAnd well...we gotta start somewhere right. \n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"a-good-place-to-start","text":"a good place to start…"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
//# sourceMappingURL=index_BsjLW_24.mjs.map
