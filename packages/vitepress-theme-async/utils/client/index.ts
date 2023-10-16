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
	if (d === undefined) return '';
	if (!(d instanceof Date)) {
		d = new Date(d);
	}
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const o: any = {
		'M+': d.getMonth() + 1, // 月份
		'd+': d.getDate(), // 日
		'h+': d.getHours(), // 小时
		'm+': d.getMinutes(), // 分
		's+': d.getSeconds(), // 秒
		'q+': Math.floor((d.getMonth() + 3) / 3), // 季度
		S: d.getMilliseconds(), // 毫秒
	};
	if (/(y+)/.test(fmt)) {
		fmt = fmt.replace(RegExp.$1, `${d.getFullYear()}`.substr(4 - RegExp.$1.length));
	}
	// eslint-disable-next-line no-restricted-syntax
	for (const k in o) {
		if (new RegExp(`(${k})`).test(fmt)) fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? o[k] : `00${o[k]}`.substr(`${o[k]}`.length));
	}
	return fmt;
};
