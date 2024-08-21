import { computed } from 'vue';
import { useData, withBase } from 'vitepress';
import { useMediaQuery } from '@vueuse/core';
import { data as allPosts } from './posts.data';
import { groupBy, sortBy } from '../utils/shared';
import { formatDate } from '../utils/client';

import bannerImg from '../assets/banner.png';

// import failureImg from '../assets/img/failure.ico'

// 获取主题配置
export const useTheme = () => {
	const { theme } = useData<AsyncThemeConfig>();
	return theme;
};

// 获取页面配置是否位单栏
export const useSingleColumn = () => {
	const { frontmatter } = useData<AsyncThemeConfig>();
	return computed(() => Boolean(frontmatter.value.single_column));
};

// 获取页面 banner 配置
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

//
export const useHasOutline = () => {
	const { frontmatter } = useData<AsyncThemeConfig>();
	const isPost = useIsPost();
	const is768 = useMediaQuery('(min-width: 768px)');
	return computed(() => {
		return isPost.value && frontmatter.value.outline !== false && is768.value;
	});
};

// 获取页面 url 配置
export const usePageUrl = () => {
	const { theme } = useData<AsyncThemeConfig>();
	const { archives, categorys, tags } = theme.value.page ?? {};
	return {
		archives: withBase(archives ?? ''),
		categorys: withBase(categorys ?? ''),
		tags: withBase(tags ?? ''),
	};
};

// 获取所有文章
export const useAllPosts = (sort?: AsyncTheme.OrderByArg, filter?: (v: AsyncTheme.PostData, i: number, l: AsyncTheme.PostData[]) => boolean) => {
	let list = allPosts;
	if (filter) {
		list = list.filter(filter);
	}
	return sort ? sortBy([...list], sort) : [...list];
};

// 获取当前页面
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

// 判断当前页是否是文章页
export const useIsPost = () => {
	const { page } = useData();
	const posts = useAllPosts();
	return computed(() => {
		const index = posts.findIndex(post => post.filePath === page.value.filePath);
		return index > -1;
	});
};

// 获取所有标签
export const useTags = () => sortBy(groupBy(allPosts, 'tags'), { 1: -1 });

// 获取所有分类
export const useCategories = () => sortBy(groupBy(allPosts, 'categories'), { 1: -1 });

// 获取归档
export const useArchives = () => {
	const theme = useTheme();
	return sortBy(
		groupBy(allPosts, 'date', date => formatDate(date, theme.value.archiveGenerator?.dateFmt || 'YYYY')),
		{ 0: -1 },
	);
};
