import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { glob } from 'tinyglobby';
import { groupBy, sortBy, formatDate, joinPath } from '../utils/shared';
import { getFileBirthTime } from '../utils/node';
import { UserConfig } from 'vitepress';
import { normalizePath } from 'vite';

type DynamicPages = {
	params: {
		[x: string]: string;
	};
};

type ProcessFn = (raw: any[], config: UserConfig<AsyncThemeConfig>) => [string, number][];

const cache = /* @__PURE__ */ new Map();

/**
 * 获取文章目录下文件
 * @param cwd
 * @returns
 */
const getFiles = (cwd: string) => {
	return glob(['**.md'], {
		cwd: cwd,
		ignore: ['**/node_modules/**', '**/dist/**'],
		expandDirectories: false,
		absolute: true,
	});
};

/**
 * 获取文章的 Frontmatter
 * @param files
 * @param timeZone
 * @returns
 */
const getMeta = (files: string[], timeZone?: number) => {
	const raw = [];
	for (const file of files) {
		const { mtimeMs: timestamp, birthtimeMs } = fs.statSync(file);
		const cached = cache.get(file);

		if (cached && timestamp === cached.timestamp) {
			raw.push(cached.data);
			continue;
		}

		const fileContent = fs.readFileSync(file, 'utf-8');
		const { data: meta } = matter<string, any>(fileContent);

		timeZone = timeZone ?? 8;
		if (!meta.date) {
			meta.date = getFileBirthTime(file);
			if (!meta.date) {
				meta.date = birthtimeMs;
			}
		} else {
			meta.date = new Date(`${new Date(meta.date).toUTCString()}+${timeZone}`).getTime();
		}

		meta.tags = typeof meta.tags === 'string' ? [meta.tags] : meta.tags || [];
		meta.categories = typeof meta.categories === 'string' ? [meta.categories.trim()] : meta.categories || [];

		raw.push(meta);
		cache.set(file, { data: meta, timestamp });
	}
	return raw;
};

/**
 * 分页生成
 * @param len 文章数量
 * @param pageSize 页码
 * @param paramKey 动态参数名
 * @param otherPageName 其他页参数名
 * @param fitstPageName 第一页参数
 * @returns params 属性的对象数组
 */
const generatePages = (len: number, pageSize: number, paramKey: string, otherPageName: string, fitstPageName: string): DynamicPages[] => {
	otherPageName = otherPageName.replace(/^\//, '');
	fitstPageName = fitstPageName.replace(/^\//, '');
	const count = Math.ceil(len / pageSize);
	return new Array(count).fill(null).map((_, i) => {
		return i === 0
			? {
					params: {
						[paramKey]: fitstPageName,
						index: fitstPageName,
					},
			  }
			: {
					params: {
						[paramKey]: joinPath(otherPageName, (i + 1).toString()),
						index: joinPath(otherPageName, (i + 1).toString()),
					},
			  };
	});
};

/**
 * 通用分页生成
 * @param files 文章路径集合
 * @param config 主题配置
 * @param pageType [paramName].md 动态文件参数名
 * @param processFn 子级分页数据处理
 * @returns
 *
 * | 配置路径 | 第一页路径 | 其他页路径 | 子级第一页 | 子级其他页路径 |
 * | :---------- | :----------- | :----------- | :----------- | :----------- |
 * | /  				| /index.html			| /page/2.html		 | /子级.html 		| /子级/page/2.html |
 * | /index			| /index.html			| /page/2.html		 | /子级.html 		| /子级/page/2.html |
 * | /xxx 			| /xxx.html				| /xxx/page/2.html | /xxx/子级.html | /xxx/子级/page/2.html |
 * | /xxx/			| /xxx/index.html	| /xxx/page/2.html | /xxx/子级.html | /xxx/子级/page/2.html |
 * | /xxx/index | /xxx/index.html	| /xxx/page/2.html | /xxx/子级.html | /xxx/子级/page/2.html |
 */
const generatePagesByType = async (files: string[], config: UserConfig<AsyncThemeConfig>, pageType: AsyncTheme.PageType, processFn?: ProcessFn) => {
	const raw = getMeta(files, config.themeConfig?.timeZone || 8);
	const pageSize = (pageType === 'index' ? config.themeConfig?.indexGenerator?.perPage : config.themeConfig?.archiveGenerator?.perPage) || 10;
	const type = pageType; // 当前页类型在 Frontmatter 使用的 [属性]
	const paramKey = pageType; // 动态路径参数名 - 默认与 layout 值保持一致

	const baseName = config.themeConfig?.page?.[pageType] || pageType; // 获取用户配置路径
	const basePageName = baseName.replace(/(\/index$|^index$)/, ''); // 去掉路径最后一层的 index

	// 默认分页
	let firstPageName = baseName;
	if (/\/$/.test(firstPageName) || firstPageName === '') {
		firstPageName = joinPath(firstPageName, 'index');
	}

	// 首页、归档默认分页取全部数据   标签、分类默认分页需要根据 Frontmatter [属性] 过滤数据
	const len = ['index', 'archives'].includes(pageType) ? files.length : raw.filter(item => item[type].length).length;
	const defpage = generatePages(len, pageSize, paramKey, joinPath(basePageName, 'page'), firstPageName);

	// 子级分页
	if (processFn) {
		const childPage = processFn(raw, config)
			.map(([key, val]) => {
				const childrFirstName = joinPath(basePageName, key);
				const childOtherName = joinPath(childrFirstName, 'page');
				return generatePages(val, pageSize, paramKey, childOtherName, childrFirstName);
			})
			.flat(1);

		defpage.push(...childPage);
	}

	return [...defpage];
};

/** 首页生成 */
const pageIndex = async (files: string[], config: UserConfig<AsyncThemeConfig>, pageType: AsyncTheme.PageType) => {
	return generatePagesByType(files, config, pageType);
};

/** 标签页生成 */
const tagPageIndex = async (files: string[], config: UserConfig<AsyncThemeConfig>, pageType: AsyncTheme.PageType) => {
	const processFn: ProcessFn = raw => sortBy(groupBy(raw, 'tags'), { 1: -1 });
	return generatePagesByType(files, config, pageType, processFn);
};

/** 分类页生成 */
const categoriePageIndex = async (files: string[], config: UserConfig<AsyncThemeConfig>, pageType: AsyncTheme.PageType) => {
	const processFn: ProcessFn = raw => sortBy(groupBy(raw, 'categories'), { 1: -1 });
	return generatePagesByType(files, config, pageType, processFn);
};

/** 归档页生成 */
const archivePageIndex = async (files: string[], config: UserConfig<AsyncThemeConfig>, pageType: AsyncTheme.PageType) => {
	const processFn: ProcessFn = raw =>
		sortBy(
			groupBy(raw, 'date', date => formatDate(date, config.themeConfig?.archiveGenerator?.dateFmt || 'YYYY')),
			{ 0: -1 },
		);
	return generatePagesByType(files, config, pageType, processFn);
};

/**
 * 动态路由生成
 * @param config 主题配置信息
 * @param pageType 页面 layout 类型
 * @param root 根目录
 * @returns
 */
export const dynamicPages = async (config: UserConfig<AsyncThemeConfig>, pageType: AsyncTheme.PageType, root?: string) => {
	if (!root) {
		const argv = process.argv.slice(2);
		const command = argv[0];
		const dir = argv[command ? 1 : 0] || process.cwd();
		root = normalizePath(path.resolve(dir));
	}

	const srcDir = normalizePath(path.resolve(root!, config.srcDir || '.'));
	const files = await getFiles(normalizePath(`${srcDir}/${config.themeConfig?.postDir ?? 'posts'}`));

	let paths: DynamicPages[] = [];
	switch (pageType) {
		case 'index':
			paths = await pageIndex(files, config, pageType);
			break;
		case 'tags':
			paths = await tagPageIndex(files, config, pageType);
			break;
		case 'archives':
			paths = await archivePageIndex(files, config, pageType);
			break;
		case 'categories':
			paths = await categoriePageIndex(files, config, pageType);
			break;
		default:
			break;
	}

	return paths;
};
