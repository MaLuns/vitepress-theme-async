/* eslint-disable @typescript-eslint/no-explicit-any */
import { AsyncThemeConfig } from 'types/index';
import { ContentData, useData, withBase } from 'vitepress';
import { data as allPosts } from './posts.data';
import { isObject, isString } from '@vueuse/core';

import bannerImg from '../assets/banner.png';
import postCoverImg from '../assets/block.jpg';

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

const mergeConfig = (frontmatter: Record<string, any>) => {
	const { theme } = useData<AsyncThemeConfig>();
	const { cover } = frontmatter;

	if (isString(cover) && Array.isArray(cover)) {
		frontmatter.cover = {
			type: theme.value.cover?.type,
			default: cover,
		};
	} else {
		frontmatter.cover = {
			type: theme.value.cover?.type,
			default: theme.value.cover?.default || postCoverImg,
			...(isObject(cover) ? cover : {}),
		};
	}

	return frontmatter;
};

const getPosts = (() => {
	let posts: ContentData[] = [];
	return () => {
		if (posts.length === 0) {
			posts = allPosts.map(item => {
				return {
					...item,
					frontmatter: mergeConfig(item.frontmatter),
				};
			});
		}
		return posts;
	};
})();

const dataPath = (d: any, paths: string) => {
	const keys = paths.split('.');
	if (!isObject(d)) return;
	const len = keys.length;
	for (let index = 0; index < len; index++) {
		const key = keys[index];
		if (!isObject(d[key]) && index < len - 1) {
			return;
		} else {
			d = d[key];
		}
	}
	return d;
};

//
const groupBy = <T extends Record<string, any>>(data: T[], path: string) => {
	const map = new Map<string, number>();

	const setMap = (key: string) => {
		if (map.has(key)) {
			map.set(key, map.get(key)! + 1);
		} else {
			map.set(key, 1);
		}
	};

	data.forEach(item => {
		const val = dataPath(item, path);
		if ((val ?? '') !== '') {
			if (Array.isArray(val)) {
				for (let index = 0; index < val.length; index++) {
					setMap(<string>val[index]);
				}
			} else {
				setMap(<string>val);
			}
		} else {
			setMap('');
		}
	});
	return Array.from(map);
};

// 获取所有文章
export const useAllPosts = () => getPosts();

// 获取当前页面
export const useCurrentPost = () => {};

// 获取所有标签
export const useTags = () => groupBy(getPosts(), 'frontmatter.tags');

// 获取所有分类
export const useCategories = () => groupBy(getPosts(), 'frontmatter.categories');

// 获取归档
export const useArchives = () => {};
