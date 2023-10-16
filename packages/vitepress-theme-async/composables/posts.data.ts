import { AsyncThemeConfig } from 'types';
import { ContentData, createMarkdownRenderer } from 'vitepress';
import type { LoaderModule, MarkdownRenderer, SiteConfig } from 'vitepress';
import { normalizePath } from 'vite';
import matter from 'gray-matter';
import path from 'node:path';
import fs from 'node:fs';
import { formatDate } from '../utils/client';
import { getFileBirthTime } from '../utils/node';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const config: SiteConfig<AsyncThemeConfig> = (globalThis as any).VITEPRESS_CONFIG;

declare const data: ContentData[];

export { data };

// export default createContentLoader('posts/**/*.md', {
// 	excerpt: file => {
// 		const reg = /<!--\s*more\s*-->/gs;
// 		const rpt = reg.exec(file.content);
// 		if (rpt) {
// 			file.excerpt = file.content.substring(0, rpt.index);
// 		} else {
// 			file.excerpt = '';
// 		}
// 	},
// 	transform(data) {
// 		return data.map(item => {
// 			console.log(process.cwd(), item.url);
// 			return item;
// 		});
// 	},
// });

let md: MarkdownRenderer;
const cache = /* @__PURE__ */ new Map();

export default <LoaderModule>{
	watch: [`${config.site.themeConfig.postDir ?? 'posts'}/**/*.md`].map(p => normalizePath(path.join(config.root, p))),
	async load(files) {
		console.log(files);

		md = md || (await createMarkdownRenderer(config.srcDir, config.markdown, config.site.base, config.logger));
		const raw = [];
		for (const file of files) {
			if (!file.endsWith('.md')) {
				continue;
			}

			const { mtimeMs: timestamp, birthtimeMs } = fs.statSync(file);
			const cached = cache.get(file);

			if (cached && timestamp === cached.timestamp) {
				raw.push(cached.data);
			} else {
				const src = fs.readFileSync(file, 'utf-8');
				const { data: meta, excerpt } = matter(src, {
					excerpt: text => {
						const reg = /<!--\s*more\s*-->/gs;
						const rpt = reg.exec(text);
						return rpt ? text.substring(0, rpt.index) : '';
					},
				});

				// 处理创建时间 md => git => file
				if (!meta.date) {
					meta.date = getFileBirthTime(file);
					if (!meta.date) {
						meta.date = formatDate(new Date(birthtimeMs));
					}
				} else {
					const timeZone = config.site.themeConfig?.timeZone ?? 8;
					meta.date = formatDate(new Date(`${new Date(meta.date).toUTCString()}+${timeZone}`));
				}

				const url =
					'/' +
					normalizePath(path.relative(config.srcDir, file))
						.replace(/(^|\/)index\.md$/, '$1')
						.replace(/\.md$/, config.cleanUrls ? '' : '.html');

				const renderedExcerpt = excerpt ? md.render(excerpt) : void 0;
				const data = {
					frontmatter: meta,
					excerpt: renderedExcerpt,
					url,
				};
				cache.set(file, { data, timestamp });
				raw.push(data);
			}
		}
		return raw;
	},
};
