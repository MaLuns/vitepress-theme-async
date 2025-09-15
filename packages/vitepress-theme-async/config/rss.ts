import fs from 'node:fs';
import matter from 'gray-matter';
import path from 'node:path';
import { Feed } from 'feed';
import { normalizePath } from 'vite';
import { SiteConfig } from 'vitepress';
import { getFileBirthTime } from '../utils/node';
import { isString } from '../utils/shared';

/**
 *
 */
export const genFeed = async (config: SiteConfig<AsyncThemeConfig>) => {
	const { themeConfig, base, title, description } = config.site;
	const { rss } = themeConfig;

	const posts = [];
	const postDir = ((themeConfig.postDir ?? 'posts') + '/').replace(/\/+/, '/');
	const files = config.pages.filter(item => item.startsWith(postDir));

	const { createMarkdownRenderer } = await import('vitepress');
	const mdRender = await createMarkdownRenderer(config.srcDir, config.markdown, base, config.logger);

	for (const file of files) {
		const filePath = config.root + '/' + file;
		const fileContent = fs.readFileSync(filePath, 'utf-8');
		let excerpt = '';
		const { data: meta } = matter(fileContent, {
			//@ts-ignore
			excerpt: ({ content }) => {
				const reg = /<!--\s*more\s*-->/gs;
				const rpt = reg.exec(content);
				excerpt = rpt ? content.substring(0, rpt.index) : '';
			},
		});

		// 标题
		if (!meta.title) {
			const title = /^#\s(.+)/gm.exec(fileContent);
			if (title) {
				meta.title = title[1].trim();
			} else {
				meta.title = path.basename(file).replace(new RegExp(`${path.extname(file)}$`), '');
			}
		}

		// 处理创建时间 md => git => file
		const timeZone = themeConfig.timeZone ?? 8;
		if (!meta.date) {
			meta.date = getFileBirthTime(file);
			if (!meta.date) {
				const { birthtimeMs } = fs.statSync(filePath);
				meta.date = birthtimeMs;
			}
		} else {
			meta.date = new Date(`${new Date(meta.date).toUTCString()}+${timeZone}`).getTime();
		}

		// 获取摘要信息
		meta.description = meta.description ? meta.description : excerpt ? mdRender.render(excerpt) : void 0;

		// 封面
		const cover = themeConfig.cover;
		if (Array.isArray(meta.cover)) {
			meta.cover = meta.cover[0];
		}
		if (!isString(meta.cover)) {
			meta.cover = isString(cover?.default) ? cover?.default : '';
		}

		const html = mdRender.render(fileContent);
		let url = normalizePath(path.relative(config.srcDir, filePath));
			url = config.rewrites.map[url] ?? url;
			url = config.site.base + url
					.replace(/(^|\/)index\.md$/, '$1')
					.replace(/\.md$/, config.cleanUrls ? '' : '.html');

		posts.push({
			url,
			filepath: filePath,
			html,
			description: meta.description,
			date: meta.date,
			title: meta.title,
			meta,
		});
	}

	posts.sort((a, b) => +new Date(b.date) - +new Date(a.date));

	if (undefined !== rss?.limit && rss?.limit > 0) {
		posts.splice(rss.limit);
	}

	const feed = new Feed({
		id: rss?.baseUrl ?? '',
		link: rss?.baseUrl,
		title: title,
		description: description,
		copyright: '',
		...(rss?.feedOptions ?? {}),
	});

	for (const post of posts) {
		const { title, html, description, date, meta, url } = post;
		const author = meta?.author || themeConfig.author || '';
		const link = `${themeConfig?.rss?.baseUrl}${url}`;

		let cover = meta?.cover;
		if (cover && !/^http|^\/\//.test(cover)) {
			cover = `${rss?.baseUrl}${(config.site.base + cover).replace('//', '/')}`;
		}

		feed.addItem({
			title: title,
			id: link,
			link,
			description,
			content: html,
			author: [
				{
					name: author,
				},
			],
			image: cover,
			date: new Date(date),
		});
	}

	const RSSFilename = rss?.fileName || 'feed.rss';
	const RSSFilepath = path.join(config.outDir, RSSFilename);
	fs.writeFileSync(RSSFilepath, /\.rss$/.test(RSSFilename) ? feed.rss2() : /\.xml$/.test(RSSFilename) ? feed.atom1() : /\.json$/.test(RSSFilename) ? feed.json1() : feed.rss2());

	console.log();
	console.log('🎉 RSS generated', RSSFilename);
	console.log('✅ rss filepath:', RSSFilepath);
	console.log('✅ rss url:', `${rss?.baseUrl}${config.site.base + RSSFilename}`);
	console.log('✅ include', posts.length, 'posts');
	console.log();
};
