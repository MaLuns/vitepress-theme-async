import { isObject } from '@vueuse/core';

export const HASH_RE = /#.*$/;
export const EXT_RE = /(index)?\.(md|html)$/;
export const inBrowser = typeof document !== 'undefined';

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
