import * as dayjs from 'dayjs';

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
 * 设置移动端-状态栏主题
 * @param colorVal
 */
export const setThemeColor = (colorVal = '--theme-bg-color') => {
	const themeColor = getComputedStyle(document.documentElement).getPropertyValue(colorVal);
	if (themeColor) {
		const metaDom = document.querySelector<HTMLMetaElement>('meta[name="theme-color"]');
		if (metaDom) {
			metaDom.content = themeColor;
		} else {
			const meta = document.createElement('meta');
			meta.name = 'theme-color';
			meta.content = themeColor;
			document.head.appendChild(meta);
		}
	}
};

/**
 * 主题切换动画
 * @param wait
 * @returns
 */
export const themeLoading = (wait: number = 600): Promise<void> => {
	return new Promise<void>(resolve => {
		document.documentElement.classList.add('theme-animating');
		setTimeout(() => {
			setTimeout(() => {
				document.documentElement.classList.remove('theme-animating');
			}, wait);
			resolve();
		}, wait);
	});
};

/**
 * 阅读模式切换
 */
export const switchReadMode = () => {
	const $body = document.body;

	type Flag = { el: HTMLElement; ratio?: number } | void;

	const getScrollFlag = () => {
		return new Promise<Flag>(resolve => {
			const article = document.getElementById('article-container') as HTMLDivElement;
			if (article) {
				const list = Array.from(article.children);
				for (let i = 0; i < list.length; i++) {
					const el = <HTMLElement>list[i];
					const flag = isInViewPortOfOne(el);
					if (flag.is) {
						resolve({
							el,
							ratio: flag.ratio,
						});
						return;
					}
				}
				resolve();
			} else {
				resolve();
			}
		});
	};

	const setScroll = (data: Flag) => {
		if (data && data.ratio && data.ratio > 0) {
			const { top, height } = data.el.getBoundingClientRect();
			const elementTop = data.ratio * height + top + getScrollTop();
			window.scrollTo({ top: elementTop });
		}
	};

	getScrollFlag().then(data => {
		$body.classList.toggle('trm-read-mode');
		setScroll(data);
	});
};

/**
 * 切换单双栏
 */
export const switchSingleColumn = () => document.body.classList.toggle('trm-single-column');

/**
 *
 */
export const backTop = (smooth?: boolean) => window.scrollTo({ top: 0, behavior: smooth ? 'smooth' : 'auto' });

/**
 * 日期格式化
 * @param date
 * @param format
 * @returns
 */
export const formatDate = (d: Date | number | string | undefined, fmt: string = 'yyyy-MM-dd hh:mm:ss'): string => dayjs.default(d).format(fmt);

/**
 * 获取图标
 * @param icon
 * @param type
 * @returns
 */
export const iconHTML = (icon: string, type: 'symbol' | 'font' = 'font') => {
	if (type === 'symbol') {
		return `<svg class="symbol-icon " aria-hidden="true"><use xlink:href="#${icon}"></use></svg>`;
	} else {
		return `<i class="iconfont ${icon}"></i>`;
	}
};
