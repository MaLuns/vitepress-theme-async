import { isObject } from '@vueuse/core';

export const EXTERNAL_URL_RE = /^[a-z]+:/i;
export const HASH_RE = /#.*$/;
export const EXT_RE = /(index)?\.(md|html)$/;
export const inBrowser = typeof document !== 'undefined';

/**
 * 字符截断
 * @param str
 * @param options
 */
export const truncate = (str: string, options: { length?: number; omission?: string; separator?: string } = {}) => {
	if (typeof str !== 'string') throw new TypeError('str must be a string!');

	const length = options.length || 30;
	const omission = options.omission || '...';
	const { separator } = options;
	const omissionLength = omission.length;

	if (str.length < length) return str;

	if (separator) {
		const words = str.split(separator);
		let result = '';
		let resultLength = 0;

		for (const word of words) {
			if (resultLength + word.length + omissionLength < length) {
				result += word + separator;
				resultLength = result.length;
			} else {
				return result.substring(0, resultLength - 1) + omission;
			}
		}
	} else {
		return str.substring(0, length - omissionLength) + omission;
	}
};

export const isActive = (currentPath: string, matchPath?: string | RegExp, asRegex = false) => {
	if (matchPath === undefined) {
		return false;
	}
	currentPath = normalize(`/${currentPath}`);
	if (asRegex) {
		return new RegExp(matchPath).test(currentPath);
	}
	if (normalize(<string>matchPath) !== currentPath) {
		return false;
	}

	const hashMatch = (<string>matchPath).match(HASH_RE);
	if (hashMatch) {
		return (inBrowser ? location.hash : '') === hashMatch[0];
	}
	return true;
};

export const normalize = (path: string) => {
	return decodeURI(path).replace(HASH_RE, '').replace(EXT_RE, '');
};

/**
 *
 * @param data
 * @param paths
 * @returns
 */
export const dataPath = <T>(data: any, paths: string): T | undefined => {
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

export const parseArgs = (orderby: AsyncTheme.OrderByArg) => {
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
 * 排序
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
export const sortBy = <T extends AnyObject>(data: T[], orderby: AsyncTheme.OrderByArg) => {
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

/**
 * 节流防抖
 * @param fn
 * @param delay
 * @returns
 */
export const throttleAndDebounce = (fn: () => void, delay: number) => {
	let timeoutId: any;
	let called = false;
	return () => {
		if (timeoutId) clearTimeout(timeoutId);
		if (!called) {
			fn();
			(called = true) && setTimeout(() => (called = false), delay);
		} else timeoutId = setTimeout(fn, delay);
	};
};

/**
 * 添加基路径
 * @param base
 * @param path
 */
export const withBase = (base: string, path: string) => {
	return EXTERNAL_URL_RE.test(path) || !path.startsWith('/') ? path : joinPath(base, path);
};

export const joinPath = (base: string, path: string) => `${base}${path}`.replace(/\/+/g, '/');

/**
 * 合并对象
 * @param a
 * @param b
 */
export const mergeObj = <T extends AnyObject>(a: T, b: T): T => {
	const merged = { ...a };
	for (const key in b) {
		const value = b[key];
		if (value == null) {
			continue;
		}
		const existing = merged[key];
		if (Array.isArray(existing) && Array.isArray(value)) {
			// @ts-ignore
			merged[key] = [...existing, ...value];
			continue;
		}
		if (isObject(existing) && isObject(value)) {
			merged[key] = mergeObj(existing, value);
			continue;
		}
		merged[key] = value;
	}
	return merged;
};

/**
 * 字符格式化
 * @param str
 * @param vals
 */
export const stringFormat = (str: string, ...vals: string[]): string => {
	return vals.reduce((s, v, i) => s.replace(new RegExp('\\{' + i + '\\}', 'g'), v), str);
};

/**
 * 是否是字符串
 * @param value
 */
export const isString = (value: unknown): value is string => Object.prototype.toString.call(value) === '[object String]';

/**
 * 计算时间
 * @param d
 * @param more
 * @param suffix
 */
export function diffDate(d: string | number, more: false, suffix?: DiffDateSuffix): number;
export function diffDate(d: string | number, more: true, suffix?: DiffDateSuffix): string;
export function diffDate(d: string | number, more: boolean, suffix?: DiffDateSuffix) {
	const dateNow = new Date();
	const datePost = new Date(d);
	const dateDiff = dateNow.getTime() - datePost.getTime();
	const minute = 1000 * 60;
	const hour = minute * 60;
	const day = hour * 24;
	const month = day * 30;

	if (more) {
		suffix = suffix ?? { month: '个月前', day: '天前', hour: '小时前', min: '分钟前', just: '刚刚' };
		const monthCount = dateDiff / month;
		const dayCount = dateDiff / day;
		const hourCount = dateDiff / hour;
		const minuteCount = dateDiff / minute;
		let result: string;
		if (monthCount > 12) {
			result = datePost.toISOString().slice(0, 10);
		} else if (monthCount >= 1) {
			result = parseInt(monthCount.toString()) + ' ' + suffix.month;
		} else if (dayCount >= 1) {
			result = parseInt(dayCount.toString()) + ' ' + suffix.day;
		} else if (hourCount >= 1) {
			result = parseInt(hourCount.toString()) + ' ' + suffix.hour;
		} else if (minuteCount >= 1) {
			result = parseInt(minuteCount.toString()) + ' ' + suffix.min;
		} else {
			result = suffix.just;
		}
		return result;
	} else {
		return parseInt((dateDiff / day).toString());
	}
}
