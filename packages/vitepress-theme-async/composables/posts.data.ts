import { createMarkdownRenderer } from 'vitepress';
import type { LoaderModule, MarkdownRenderer, SiteConfig } from 'vitepress';
import { normalizePath } from 'vite';
import matter from 'gray-matter';
import path from 'node:path';
import fs from 'node:fs';
import { getFileBirthTime, getFileLastUpdateTime, slash } from '../utils/node';
import { isObject, isString, sortBy, withBase } from '../utils/shared';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const config: SiteConfig<AsyncThemeConfig> = (globalThis as any).VITEPRESS_CONFIG;
const theme = config.site.themeConfig;

declare const data: AsyncTheme.PostData[];

let md: MarkdownRenderer;
const cache = /* @__PURE__ */ new Map();

export { data };

export default <LoaderModule>{
	watch: [`${config.srcDir}/${theme.postDir ?? 'posts'}/**/*.md`].map(p => normalizePath(p)),
	async load(files) {
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
				continue;
			}

			const fileContent = fs.readFileSync(file, 'utf-8');
			let excerpt = '';
			const { data: meta } = matter<string, any>(fileContent, {
				excerpt: ({ content }: matter.GrayMatterFile<string>) => {
					const reg = /<!--\s*more\s*-->/gs;
					const rpt = reg.exec(content);
					excerpt = rpt ? content.substring(0, rpt.index) : '';
				},
			});

			// 处理创建时间 md => git => file
			const timeZone = theme?.timeZone ?? 8;
			if (!meta.date) {
				meta.date = getFileBirthTime(file);
				if (!meta.date) {
					meta.date = birthtimeMs;
				}
			} else {
				meta.date = new Date(`${new Date(meta.date).toUTCString()}+${timeZone}`).getTime();
			}

			if (!meta.lastUpdated) {
				meta.lastUpdated = getFileLastUpdateTime(file);
				if (!meta.lastUpdateTime) {
					meta.lastUpdated = timestamp;
				}
			} else {
				meta.lastUpdated = new Date(`${new Date(meta.lastUpdateTime).toUTCString()}+${timeZone}`).getTime();
			}

			// 封面
			const cover = theme.cover;
			if (isString(meta.cover) || Array.isArray(meta.cover)) {
				meta.cover = {
					type: cover?.type,
					default: meta.cover,
				};
			} else {
				meta.cover = {
					type: cover?.type,
					default: cover?.default,
					...(isObject(meta.cover) ? meta.cover : {}),
				};
			}

			if (isString(meta.cover.default)) {
				meta.cover.default = withBase(config.site.base, meta.cover.default);
			} else if (Array.isArray(meta.cover.default)) {
				meta.cover.default = meta.cover.default.map((item: string) => withBase(config.site.base, item));
			}

			// 标题
			if (!meta.title) {
				const title = /^#\s(.+)/gm.exec(fileContent);
				if (title) {
					meta.title = title[1].trim();
				} else {
					meta.title = path.basename(file).replace(new RegExp(`${path.extname(file)}$`), '');
				}
			}

			meta.tags = typeof meta.tags === 'string' ? [meta.tags] : meta.tags || [];
			meta.categories = typeof meta.categories === 'string' ? [meta.categories.trim()] : meta.categories || [];

			let url = normalizePath(path.relative(config.srcDir, file));
			url = config.rewrites.map[url] ?? url;
			url = '/' + url.replace(/(^|\/)index\.md$/, '$1').replace(/\.md$/, config.cleanUrls ? '' : '.html');

			const renderedExcerpt = excerpt ? md.render(excerpt) : void 0;
			const data = {
				excerpt: renderedExcerpt,
				sticky: 0,
				...meta,
				url: withBase(config.site.base, url),
				filePath: slash(path.relative(config.srcDir, file)),
			};
			cache.set(file, { data, timestamp });
			raw.push(data);
		}
		return sortBy(raw, `-sticky  ${theme.indexGenerator?.orderBy || '-date'}`) as AsyncTheme.PostData[];
	},
};
