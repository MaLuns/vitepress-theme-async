import { AsyncThemeConfig } from 'types';
import { useData, useRouter, withBase } from 'vitepress';
import { Component, defineComponent, h, inject, onMounted, provide, ref } from 'vue';
import failure from './assets/failure.ico';

// export const currentPageIndexSymbol: InjectionKey<Ref<number>> = Symbol('current-page-index');
// export const showMenuSymbol: InjectionKey<Ref<boolean>> = Symbol('show-menu');

export function withConfigProvider(App: Component) {
	return defineComponent({
		name: 'ConfigProvider',
		setup(_, { slots }) {
			const { theme } = useData<AsyncThemeConfig>();
			const router = useRouter();
			const currentPageIndex = ref(1);
			const showMenu = ref(false);

			// fix: 通过 npm 安装, 在 dev 模式时 vue 会提示 injection "Symbol(current-page-index)" not found.
			// 未找到具体原因 暂时用字符替代
			provide('currentPageIndexSymbol', currentPageIndex);
			provide('showMenuSymbol', showMenu);

			onMounted(() => {
				const beforeRoute = router.onBeforeRouteChange;
				let lastDate: number;
				router.onBeforeRouteChange = function (to) {
					if (beforeRoute && beforeRoute(to) === false) {
						return false;
					}
					showMenu.value = false;

					document.documentElement.classList.add('page-animating');
					lastDate = new Date().getTime();
				};

				const afterRoute = router.onAfterRouteChanged;
				router.onAfterRouteChanged = function (to) {
					afterRoute && afterRoute(to);

					const times = Math.max(600 - (new Date().getTime() - lastDate), 0);
					setTimeout(() => document.documentElement.classList.remove('page-animating'), times);
				};

				const favicon = theme.value.favicon;
				if (favicon?.visibilitychange) {
					const originTitle = document.title;
					let titleTime: any;
					const iconEls = Array.from<HTMLLinkElement>(document.querySelectorAll('[rel="icon"]'));
					const icons = iconEls.map(item => item.href);
					document.addEventListener('visibilitychange', function () {
						if (document.hidden) {
							iconEls.forEach(item => {
								item.href = withBase(favicon?.hidden ?? failure);
							});
							document.title = favicon?.hideText ?? '';
							clearTimeout(titleTime);
						} else {
							iconEls.forEach((item, index) => {
								item.href = icons[index];
							});
							document.title = favicon.showText + originTitle;
							titleTime = setTimeout(function () {
								document.title = originTitle;
							}, 2000);
						}
					});
				}

				if (theme.value.creative_commons?.clipboard) {
					document.addEventListener('copy', function (event: ClipboardEvent) {
						const clipboardData = event.clipboardData;
						if (!clipboardData) {
							return;
						}
						let author = theme.value.author;
						const text = window.getSelection()?.toString() || '';
						if (text) {
							event.preventDefault();
							const authorEl = document.getElementById('post-author');
							if (authorEl) {
								author = authorEl.innerText.replace('\n', '');
							}
							const license = theme.value.creative_commons?.license || 'by-nc-sa';
							const ccVersion = theme.value.creative_commons?.license == 'zero' ? '1.0' : '4.0';
							let originalLink = location.href;
							const originalLinkEl = document.getElementById('original-link');
							if (originalLinkEl) {
								originalLink = originalLinkEl.innerText.replace('\n', '');
							}
							const copyrightText = `\n\n//本文作者：${author}\n//本文链接：${originalLink}\n//版权声明：本博客所有文章除特别声明外，均默认采用 CC ${license.toUpperCase()} ${ccVersion} 许可协议。`;
							clipboardData.setData('text/plain', text + copyrightText);
						}
					});
				}
			});

			return () => h(App, null, slots);
		},
	});
}

export const useCurrentPageIndex = () => inject('currentPageIndexSymbol')!;
export const useShowMenu = () => inject('showMenuSymbol')!;
