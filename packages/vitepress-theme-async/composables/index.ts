import { computed, onMounted, ref } from 'vue';
import { useData, useRouter, withBase } from 'vitepress';
import { useMediaQuery } from '@vueuse/core';
import { data as allPosts } from './posts.data';
import { groupBy, sortBy, formatDate, joinPath } from '../utils/shared';

import bannerImg from '../assets/banner.png';
import { getMitt } from './mitt';

// import failureImg from '../assets/img/failure.ico'

/** 获取主题配置 */
export const useTheme = () => {
	const { theme } = useData<AsyncThemeConfig>();
	return theme;
};

/** 获取当前页面单双栏配置 */
export const useSingleColumn = () => {
	const { frontmatter } = useData<AsyncThemeConfig>();
	return computed(() => Boolean(frontmatter.value.single_column || frontmatter.value.singleColumn));
};

/** 获取当前页面 banner 配置 */
export const useBanner = () => {
	const { theme, frontmatter, page } = useData<AsyncThemeConfig>();
	const isPost = useIsPost();
	return computed(() => {
		return <AsyncTheme.BannerConfig>{
			bgurl: bannerImg,
			...(theme.value.banner || {}),
			...(frontmatter.value.banner || {}),
			bannerTitle: isPost.value
				? page.value.title || frontmatter.value.banner?.bannerTitle || theme.value.banner?.bannerTitle
				: frontmatter.value.banner?.bannerTitle || page.value.title || theme.value.banner?.bannerTitle,
		};
	});
};

/** 是否显示目录 */
export const useHasOutline = () => {
	const { frontmatter } = useData<AsyncThemeConfig>();
	const isPost = useIsPost();
	const is768 = useMediaQuery('(min-width: 768px)');
	return computed(() => {
		return isPost.value && frontmatter.value.outline !== false && is768.value;
	});
};

/** 获取标签\归档\分类页 url 配置 */
export const usePageUrl = () => {
	const { theme } = useData<AsyncThemeConfig>();
	const { archives, categories, tags } = theme.value.page ?? {};
	return {
		archives: withBase(archives ?? ''),
		categories: withBase(categories ?? ''),
		tags: withBase(tags ?? ''),
	};
};

/**
 * 获取所有文章
 * @param sort 排序
 * @param filter 过滤方法
 */
export const useAllPosts = (sort?: AsyncTheme.OrderByArg, filter?: (v: AsyncTheme.PostData, i: number, l: AsyncTheme.PostData[]) => boolean) => {
	let list = allPosts;
	if (filter) {
		list = list.filter(filter);
	}
	return sort ? sortBy([...list], sort) : [...list];
};

/** 获取当前文章 山下篇文章信息 */
export const usePrevNext = () => {
	const { page } = useData();
	const posts = useAllPosts();
	return computed(() => {
		const index = posts.findIndex(post => post.filePath === page.value.filePath);
		return {
			prev: posts[index - 1],
			post: posts[index],
			next: posts[index + 1],
		};
	});
};

/** 判断当前页是否是文章页 */
export const useIsPost = () => {
	const { page } = useData();
	const posts = useAllPosts();
	return computed(() => {
		const index = posts.findIndex(post => post.filePath === page.value.filePath);
		return index > -1;
	});
};

/** 获取文章标签统计 */
export const useTags = () => sortBy(groupBy(allPosts, 'tags'), { 1: -1 });

/** 获取文章分类统计 */
export const useCategories = () => sortBy(groupBy(allPosts, 'categories'), { 1: -1 });

/** 获取文章归档统计 */
export const useArchives = () => {
	const theme = useTheme();
	return sortBy(
		groupBy(allPosts, 'date', date => formatDate(date, theme.value.archiveGenerator?.dateFmt || 'YYYY')),
		{ 0: -1 },
	);
};

/**
 * 路径提取参数
 * @param path page 中配置路径
 * @param dynamicUrl 动态生成文件路径
 * @returns
 */
const extParamsByPath = (path: string, dynamicUrl: string) => {
	let pageIndex = 1;
	let filter = '';

	const clearPath = path
		.replace(/^\//, '')
		.replace(/\/index$/, '/')
		.replace(/^index$/, '');
	const regPath = clearPath ? joinPath(clearPath, '/') : '';

	const homePath = (/\/$/.test(path) ? joinPath(path, 'index') : path).replace(/^\//, '');

	const pageReg = new RegExp(`^${regPath}page/(\\d+)$`); // {pageBase}/page/2
	const childReg = new RegExp(`^${regPath}([^\\/]*)$`); // {pageBase}/ffff
	const childPageReg = new RegExp(`^${regPath}([^\\/]*)/page/(\\d+)$`); // {pageBase}/ffff/page/2

	if (dynamicUrl === homePath) {
		pageIndex = 1;
	} else if (pageReg.test(dynamicUrl)) {
		pageIndex = Number(pageReg.exec(dynamicUrl)?.[1] || '1');
	} else if (childReg.test(dynamicUrl)) {
		const reg = childReg.exec(dynamicUrl);
		pageIndex = 1;
		filter = reg?.[1] || '';
	} else if (childPageReg.test(dynamicUrl)) {
		const reg = childPageReg.exec(dynamicUrl);
		pageIndex = Number(reg?.[2] || '1');
		filter = reg?.[1] || '';
	}

	const getNewPath = (pageIndex?: number, filter?: string) => {
		let url = clearPath;
		if (filter) url = joinPath(url, filter);
		if (pageIndex && pageIndex > 1) url = joinPath(url, `page/${pageIndex}`);
		return url;
	};

	return { pageIndex, filter, getNewPath };
};

/** 分类归档标题页 - 基础数据获取 */
const usePageArchiveBase = () => {
	const { frontmatter, theme } = useData<AsyncThemeConfig>();
	const layout = frontmatter.value.layout;
	const { perPage = 10, orderBy = '-date', dateFmt = 'YYYY' } = theme.value.archiveGenerator || {};
	const pageIndex = ref(1);
	const pageSize = perPage || 10;

	const allPosts = useAllPosts(orderBy, item => {
		if (['tags', 'categories'].includes(layout)) {
			//@ts-ignore
			return item[layout].length > 0;
		} else {
			//@ts-ignore
			item.archive_date = formatDate(item.date, dateFmt);
			return true;
		}
	});

	const data = new Map([
		['tags', useTags],
		['archives', useArchives],
		['categories', useCategories],
	]);

	// 当前页码标签信息
	const tagsList = (data.get(layout) ?? (() => []))();
	const filter = ref('');

	// 根据标签过滤
	const filterList = computed(() => {
		let list = allPosts;
		if (filter.value) {
			if (['tags', 'categories'].includes(layout)) {
				//@ts-ignore
				list = list.filter(item => item[layout].includes(filter.value));
			} else {
				//@ts-ignore
				list = list.filter(item => item.archive_date === filter.value);
			}
		}
		return list;
	});

	// 将过滤有数据进行分页
	const pageList = computed(() => {
		const startIdx = (pageIndex.value - 1) * pageSize;
		const endIdx = startIdx + pageSize;
		return filterList.value.slice(startIdx, endIdx);
	});

	return {
		layout,
		filter,
		tagsList,
		pageSize,
		pageIndex,
		pageLength: computed(() => filterList.value.length),
		pageList,
	};
};

/** 分类归档标题页 - 静态生成模式 */
export const usePageArchiveStatic = () => {
	const data = usePageArchiveBase();
	const router = useRouter();
	const { theme, params, frontmatter, site } = useData<AsyncThemeConfig>();

	const layout: AsyncTheme.PageType = frontmatter.value.layout;
	const page = theme.value.page?.[layout] || ''; // 获取用户配置路径
	const dynamicUrl = Object.values(params.value || {})[0] || '';

	const { pageIndex, filter, getNewPath } = extParamsByPath(page, dynamicUrl);
	data.pageIndex.value = pageIndex;
	data.filter.value = filter;

	// {siteBase}/{pageBase}/[filter]/page/[pageIndex]
	const go = () => {
		const url = joinPath(site.value.base, getNewPath(data.pageIndex.value, data.filter.value));
		router.go(url);
	};

	const onFilter = (item: string) => {
		if (data.filter.value === item) return;
		data.filter.value = item;
		data.pageIndex.value = 1;
		go();
	};

	const onChangePage = (current: number) => {
		if (data.pageIndex.value === current) return;
		data.pageIndex.value = current;
		go();
	};

	return { ...data, onFilter, onChangePage };
};

/** 分类归档标题页 - url 参数模式 */
export const usePageArchiveParam = () => {
	const data = usePageArchiveBase();
	const router = useRouter();
	const mitt = getMitt();

	onMounted(() => {
		const { searchParams } = new URL(location.href);
		if (searchParams.has('q')) data.filter.value = searchParams.get('q') ?? '';
		if (searchParams.has('page')) data.pageIndex.value = Number(searchParams.get('page'));
	});

	const setParams = () => {
		const { searchParams } = new URL(window.location.href!);
		searchParams.delete('page');
		searchParams.delete('q');
		searchParams.append('page', String(data.pageIndex.value));
		searchParams.append('q', data.filter.value);
		router.go(`${location.origin}${router.route.path}?${searchParams.toString()}`);
		mitt.emit('page:update');
	};

	const onFilter = (item: string) => {
		if (data.filter.value === item) return;
		data.filter.value = item;
		data.pageIndex.value = 1;
		setParams();
	};

	const onChangePage = (current: number) => {
		if (data.pageIndex.value === current) return;
		data.pageIndex.value = current;
		setParams();
	};

	return { ...data, onFilter, onChangePage };
};

/** 首页 - 基础数据获取 */
const usePageIndexBase = () => {
	const { theme } = useData<AsyncThemeConfig>();
	const { perPage = 10 } = theme.value.indexGenerator || {};

	const pageIndex = ref(1); // 页码
	const pageSize = perPage;

	const allCategories = useCategories();
	const categories = allCategories.sort((a, b) => b[1] - a[1]).slice(0, theme.value.categorieCard?.len || 2);

	const pageList = computed(() => {
		const startIdx = (pageIndex.value - 1) * pageSize;
		const endIdx = startIdx + pageSize;
		return allPosts.slice(startIdx, endIdx);
	});

	// 是否需要显示分类卡片
	const hasCategorieCard = computed(() => {
		const cc = theme.value.categorieCard;
		return cc?.enable && (categories.length > 0 || (Array.isArray(cc.list) && cc.list.length > 0));
	});

	// 分类
	const categorieList = computed(() => {
		if (!hasCategorieCard.value) return [];
		const cc = theme.value.categorieCard;
		if (Array.isArray(cc?.list) && cc.list.length > 0) {
			return allCategories.filter(item => cc.list!.includes(item[0]));
		}
		return categories;
	});

	return {
		pageSize,
		pageIndex,
		pageList,
		pageLength: allPosts.length,
		hasCategorieCard,
		categorieList,
	};
};

/** 首页 - 静态生成模式 */
export const usePageIndexStatic = () => {
	const { site, params, theme } = useData<AsyncThemeConfig>();
	const data = usePageIndexBase();
	const router = useRouter();
	const page = theme.value.page?.index || '';
	const dynamicUrl = Object.values(params.value || {})[0] || '';

	const { pageIndex, getNewPath } = extParamsByPath(page, dynamicUrl);
	data.pageIndex.value = pageIndex;

	// {siteBase}/{pageBase}/page/[pageIndex]
	const go = () => {
		const url = joinPath(site.value.base, getNewPath(data.pageIndex.value));
		router.go(url);
	};

	const onChangePage = (current: number) => {
		if (data.pageIndex.value === current) return;
		data.pageIndex.value = current;
		go();
	};

	return { ...data, onChangePage };
};

/** 首页 - url 参数模式 */
export const usePageIndexParam = () => {
	const data = usePageIndexBase();
	const router = useRouter();
	const mitt = getMitt();

	onMounted(() => {
		const { searchParams } = new URL(location.href);
		if (searchParams.has('page')) {
			data.pageIndex.value = Number(searchParams.get('page'));
		} else {
			data.pageIndex.value = 1;
		}
	});

	const onChangePage = (current: number) => {
		if (data.pageIndex.value === current) return;
		data.pageIndex.value = current;

		const { searchParams } = new URL(window.location.href!);
		searchParams.delete('page');
		searchParams.append('page', String(current));
		router.go(`${location.origin}${router.route.path}?${searchParams.toString()}`);
		mitt.emit('page:update');
	};

	return { ...data, onChangePage };
};
