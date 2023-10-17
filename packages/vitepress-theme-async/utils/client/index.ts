import dayjs from 'dayjs';
import { isObject } from '@vueuse/core';

/**
 * 窗体已滚动距离
 * @returns
 */
export const getScrollTop = () => {
	const supportPageOffset = window.pageXOffset !== undefined;
	const isCSS1Compat = (document.compatMode || '') === 'CSS1Compat';
	return supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;
};

/**
 * 窗体高度
 * @returns
 */
export const getViewPortHeight = () => {
	return window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
};

/**
 * 判断是否在可视范围内
 * @param el
 * @returns
 */
export const isInViewPortOfOne = (el: HTMLElement) => {
	const viewPortHeight = getViewPortHeight();
	const scrollTop = getScrollTop();
	const viewPortBottom = scrollTop + viewPortHeight;
	const { bottom, top, height } = el.getBoundingClientRect();
	const isIn = bottom > 0 && top < viewPortBottom;

	if (isIn) {
		return {
			is: true,
			ratio: top < 0 ? Math.abs(top / height) : 0,
		};
	} else {
		return {
			is: false,
		};
	}
};

/**
 * 时间格式化
 * @param date
 * @param format
 * @returns
 */
export const formatDate = (d: Date | number | string | undefined, fmt: string = 'yyyy-MM-dd hh:mm:ss'): string => {
	return dayjs(d).format(fmt);
};

/**
 *
 * @param data
 * @param paths
 * @returns
 */
export const dataPath = (data: any, paths: string) => {
	const keys = paths.split('.');
	if (!isObject(data)) return;
	const len = keys.length;
	for (let index = 0; index < len; index++) {
		const key = keys[index];
		if (!isObject(data[key]) && index < len - 1) {
			return;
		} else {
			data = data[key];
		}
	}
	return data;
};

/**
 * 分组
 * @param data
 * @param path
 * @returns
 */
export const groupBy = <T extends AnyObject>(data: T[], path: string, convert?: (key: string) => string) => {
	const map = new Map<string, number>();
	convert = convert ?? ((key: string) => key);

	const setMap = (key: string) => {
		const id = convert!(key);
		if (map.has(id)) {
			map.set(id, map.get(id)! + 1);
		} else {
			map.set(id, 1);
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

export const parseArgs = (orderby: Theme.OrderByArg) => {
	const result: [string | number, -1 | 1][] = [];
	if (typeof orderby === 'string') {
		const arr = orderby.split(' ');
		for (let i = 0, len = arr.length; i < len; i++) {
			const key = arr[i];
			switch (key[0]) {
				case '+':
					result.push([key.slice(1), 1]);
					break;
				case '-':
					result.push([key.slice(1), -1]);
					break;
				default:
					result.push([key, 1]);
			}
		}
	} else {
		result.push(
			...Object.keys(orderby).map<[string, -1 | 1]>(key => {
				return [key, orderby[key]];
			}),
		);
	}
	return result;
};

/**
 *
 * Example:
 *
 * ``` js
 * sortBy({date: -1, title: 1});
 * sortBy('-date title');
 * ```
 *
 * @param data
 * @param orderby
 */
export const sortBy = <T extends AnyObject>(data: T[], orderby: Theme.OrderByArg) => {
	const sort = parseArgs(orderby);
	const len = sort.length;
	return data.sort((a, b) => {
		for (let index = 0; index < len; index++) {
			const [key, order] = sort[index];
			if (a[key] === b[key]) {
				continue;
			} else {
				return order > 0 ? a[key] - b[key] : b[key] - a[key];
			}
		}
		return 0;
	});
};
