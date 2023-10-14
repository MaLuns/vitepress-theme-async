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