import dayjs from 'dayjs';
import { AsyncThemeConfig } from 'types/index';
import { useData, withBase } from 'vitepress';
import { data as allPosts } from './posts.data';
import { groupBy, sortBy } from '../utils/client';

import bannerImg from '../assets/banner.png';
import { Ref, WatchStopHandle, onBeforeMount, onUnmounted, ref, watch } from 'vue';
import { useBrowserLocation } from '@vueuse/core';

// import failureImg from '../assets/img/failure.ico'

// 获取主题配置
export const useTheme = () => {
	const { theme } = useData<AsyncThemeConfig>();
	return theme;
};

// 获取页面配置是否位单栏
export const useSingleColumn = () => {
	const { frontmatter } = useData<AsyncThemeConfig>();
	return Boolean(frontmatter.value.single_column);
};

// 监听参数变动
export const useQueryVal = <T>(queryKey: string, def: T, fmt: (t: string | null) => T) => {
	const query = ref<T>(def) as Ref<T>;
	const location = useBrowserLocation();
	let watcher: WatchStopHandle;
	onBeforeMount(() => {
		watcher = watch(
			() => location.value.href,
			val => {
				if (val) {
					const { searchParams } = new URL(val);
					if (searchParams.has(queryKey)) {
						query.value = fmt(searchParams.get(queryKey));
					} else {
						query.value = def;
					}
				}
			},
			{
				immediate: true,
			},
		);
	});

	onUnmounted(() => {
		watcher && watcher();
	});
	return query;
};

// 获取页面 banner 配置
export const useBanner = () => {
	const { theme, frontmatter } = useData<AsyncThemeConfig>();
	return <AsyncThemeConfig['banner']>{
		bgurl: bannerImg,
		...(theme.value.banner || {}),
		...(frontmatter.value.banner || {}),
	};
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
export const useAllPosts = (sort?: Theme.OrderByArg) => {
	return sort ? sortBy([...allPosts], sort) : [...allPosts];
};

// 获取当前页面
export const useCurrentPost = () => {};

// 获取所有标签
export const useTags = () => sortBy(groupBy(allPosts, 'tags'), { 1: -1 });

// 获取所有分类
export const useCategories = () => sortBy(groupBy(allPosts, 'categories'), { 1: -1 });

// 获取归档
export const useArchives = () =>
	sortBy(
		groupBy(allPosts, 'date', date => dayjs(date).format('YYYY')),
		{ 0: -1 },
	);
