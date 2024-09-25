import { stringFormat } from '../shared';

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
 * 动态获取脚本
 * @param url
 * @param condition 是否存在对应实例，判断是否加载脚本
 * @returns
 */
export const loadScript = (url: string, condition: boolean) => {
	return new Promise<void>((resolve, reject) => {
		if (condition) {
			resolve();
		} else {
			const script = document.createElement('script');
			script.src = url;
			script.setAttribute('async', 'false');
			script.onerror = reject;
			script.onload = () => resolve();
			document.head.appendChild(script);
		}
	});
};

/**
 * 包裹元素
 * @param el
 * @param wrapper
 * @param options
 */
export const wrap = (el: HTMLElement, wrapper: string | HTMLElement, options = {}) => {
	if (typeof wrapper === 'string') {
		wrapper = document.createElement(wrapper);
		for (const [key, value] of Object.entries(options)) {
			wrapper.setAttribute(key, value as string);
		}
	}

	el?.parentNode?.insertBefore(wrapper, el);
	wrapper.appendChild(el);
};

/**
 * 初始化图库排版
 * @param url fjGallery CDN
 */
export const initJustifiedGallery = (url: string) => {
	const gallerys = document.querySelectorAll('.fj-gallery');
	if (gallerys.length && url) {
		gallerys.forEach(item => {
			const imgList = item.querySelectorAll('img');
			imgList.forEach((i: HTMLImageElement) => {
				i.loading = 'eager';
				wrap(i, 'div', {
					class: 'fj-gallery-item',
					'data-src': i.dataset.src || i.src,
					'data-fancybox': 'gallery',
				});
			});
		});

		loadScript(url, window.fjGallery).then(() => {
			gallerys.forEach(selector => {
				window.fjGallery(selector, {
					itemSelector: '.fj-gallery-item',
					rowHeight: 220,
					gutter: 4,
					onJustify: function () {
						this.$container.style.opacity = '1';
					},
				});
			});
		});
	}
};

/**
 * 处理文章图片
 * @param url Fancybox CDN
 */
export const initPictures = (url: string) => {
	const picts = () => {
		document.querySelectorAll<HTMLImageElement>('#article-container img:not(.no-fancybox)').forEach(img => {
			if (!img?.parentElement?.dataset?.fancybox) {
				let fancybox = 'article';
				if (img.classList.contains('trm-light-icon')) {
					fancybox = 'light';
				} else if (img.classList.contains('trm-dark-icon')) {
					fancybox = 'dark';
				}

				wrap(<HTMLImageElement>img, 'div', {
					'data-src': img.dataset.src || img.src,
					'data-fancybox': fancybox,
				});
			}
		});
	};
	if (window.Fancybox) {
		picts();
	} else {
		loadScript(url, window.Fancybox).then(() => {
			window?.Fancybox.bind('[data-fancybox]');
			window?.Fancybox.bind('[data-fancybox="dark"],[data-fancybox="article"]', { groupAll: true });
			window?.Fancybox.bind('[data-fancybox="light"],[data-fancybox="article"]', { groupAll: true });
			window.Fancybox.defaults.Hash = false;
			picts();
		});
	}
};

let intersectionObserver: IntersectionObserver | undefined;
/**
 * 滚动动画
 */
export const initScrollAnimation = () => {
	intersectionObserver?.disconnect();
	intersectionObserver = new IntersectionObserver(
		entries => {
			entries.forEach(({ isIntersecting, target }) => {
				if (isIntersecting) {
					target.classList.add('trm-active-el');
					intersectionObserver?.unobserve(target);
				}
			});
		},
		{ threshold: [0, 1], rootMargin: '0px 0px -40px 0px' },
	);
	document.querySelectorAll('.trm-scroll-animation').forEach(element => element && intersectionObserver?.observe(element));
};

/**
 * 文章破图显示替换图片
 * @param url 破图时显示图片
 * @returns
 */
export const initPostErrorImg = (url: string) => {
	const imgs = document.querySelectorAll<HTMLImageElement>('#article-container img');
	imgs.forEach(img => img.setAttribute('onerror', `this.onerror=null;this.src="${url}";`));
	return imgs.length > 0;
};

/**
 * 页面失焦时标题东湖
 * @param failure 失焦时的图标
 * @param showText 重新获取焦点时显示文案
 * @param hideText 失焦时显示文案
 */
export const initVisibilitychange = (failure: string, showText: string, hideText: string) => {
	const originTitle = document.title;
	const iconEls = Array.from<HTMLLinkElement>(document.querySelectorAll('[rel="icon"]'));
	const icons = iconEls.map(item => item.href);
	let titleTime: any;

	document.addEventListener('visibilitychange', function () {
		if (document.hidden) {
			iconEls.forEach(item => {
				item.href = failure;
			});
			document.title = hideText ?? '';
			clearTimeout(titleTime);
		} else {
			iconEls.forEach((item, index) => {
				item.href = icons[index];
			});
			document.title = showText + originTitle;
			titleTime = setTimeout(function () {
				document.title = originTitle;
			}, 2000);
		}
	});
};

/**
 * 复制时 - 添加版权信息
 * @param config
 */
export const initClipboard = (config: { author?: string; license?: string; text: string }) => {
	document.addEventListener('copy', function (event: ClipboardEvent) {
		const clipboardData = event.clipboardData;
		if (!clipboardData) {
			return;
		}
		let author = config.author || '';
		const text = window.getSelection()?.toString() || '';
		if (text) {
			event.preventDefault();
			const authorEl = document.getElementById('post-author');
			if (authorEl) {
				author = authorEl.innerText.replace('\n', '');
			}
			const license = config.license || 'by-nc-sa';
			const ccVersion = config.license == 'zero' ? '1.0' : '4.0';
			let originalLink = location.href;
			const originalLinkEl = document.getElementById('original-link');
			if (originalLinkEl) {
				originalLink = originalLinkEl.innerText.replace('\n', '');
			}
			const copyrightText = stringFormat(config.text, author, originalLink, license.toUpperCase(), ccVersion);
			clipboardData.setData('text/plain', text + copyrightText);
		}
	});
};
