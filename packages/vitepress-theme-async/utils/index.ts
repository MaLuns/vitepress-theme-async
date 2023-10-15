/**
 * 窗体已滚动距离
 * @returns
 */
export const getScrollTop = () => {
	const supportPageOffset = window.pageXOffset !== undefined;
	const isCSS1Compat = (document.compatMode || '') === 'CSS1Compat';
	return supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;
}

/**
 * 窗体高度
 * @returns
 */
export const getViewPortHeight = () => {
	return window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
}

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
}

/**
 * 时间格式化
 * @param date
 * @param format
 * @returns
 */
export const formatDate = (date: Date | number | string | undefined, format: string): string => {
	if (date === undefined) return ''
	if (!(date instanceof Date)) date = new Date(date)

	const year = date.getFullYear();
	const month = date.getMonth() + 1;
	const day = date.getDate();
	const hour = date.getHours();
	const minute = date.getMinutes();
	const second = date.getSeconds();

	const map: Record<string, number> = {
		YYYY: year,
		MM: month,
		DD: day,
		HH: hour,
		mm: minute,
		ss: second,
	};

	return format.replace(/YYYY|MM|DD|HH|mm|ss/g, (match: string) => {
		const value = map[match] + "";
		return value !== undefined ? (value.length > 1 ? value : (Array(2).fill("0").join("") + value).slice(-2)) : match;
	});
};