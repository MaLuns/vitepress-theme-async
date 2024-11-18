import { useData, useRoute, useRouter, withBase } from 'vitepress';
import { Component, defineComponent, Ref, h, inject, onMounted, provide, ref, nextTick, onUnmounted, WatchStopHandle, watch } from 'vue';
import failure from './assets/failure.ico';
import errimg from './assets/404.jpg';
import pkg from './package.json';
import { dataPath, stringFormat, log } from './utils/shared';
import { initClipboard, initPictures, initPostErrorImg, initScrollAnimation, initVisibilitychange } from './utils/client';
import { getMitt } from './composables/mitt';

// export const AsyncShowMenuSymbol: InjectionKey<Ref<boolean>> = Symbol('show-menu');

export const useShowMenu = () => inject<Ref<boolean>>('AsyncShowMenuSymbol')!;
export const useLang = () => inject<Ref<string>>('AsyncLanguageSymbol')!;
export const useCurrentLang = () => {
	const lang = useLang();
	const { theme } = useData<AsyncThemeConfig>();
	const languages = theme.value.languages ?? {};
	const langData = languages[lang?.value] ?? languages['zh-Hans'];
	return langData;
};

export const getLangText = (k: string, ...pras: string[]) => {
	const langData = useCurrentLang();
	let text = dataPath<string>(langData, k) ?? k;
	if (pras.length) text = stringFormat(text, ...pras);
	return text;
};

export function withConfigProvider(App: Component) {
	return defineComponent({
		name: 'ConfigProvider',
		setup(_, { slots }) {
			const { theme, site } = useData<AsyncThemeConfig>();
			const router = useRouter();
			const route = useRoute();
			const mitt = getMitt();

			const showMenu = ref(false);
			const language = ref(site.value.lang ?? 'zh-Hans');
			let watcher: WatchStopHandle;

			// fix: 通过 npm 安装, 在 dev 模式时 vue 会提示 injection "Symbol(current-page-index)" not found.
			// 未找到具体原因 暂时用字符替代
			provide('AsyncShowMenuSymbol', showMenu);
			provide('AsyncLanguageSymbol', language);

			const favicon = theme.value.favicon;

			const getCurLangText = (k: DeepKeys<AsyncTheme.Language> | 'none', ...pras: string[]) => {
				const languages = theme.value.languages ?? {};
				const langData = languages[language.value] ?? languages['zh-Hans'];
				let text = dataPath<string>(langData, k) ?? k;
				if (pras.length) text = stringFormat(text, ...pras);
				return text;
			};

			const hideText = getCurLangText(<'none'>favicon?.hideText ?? '');
			const showText = getCurLangText(<'none'>favicon?.showText ?? '');

			// 页面更新时重新初始化相关操作
			const initPageUpdate = () => {
				const eimg = theme.value.errorImg?.postPage ? withBase(theme.value.errorImg?.postPage) : errimg;
				const flag = initPostErrorImg(eimg);
				nextTick(() => {
					initScrollAnimation();
					!flag && initPostErrorImg(eimg);
					if (theme.value.plugin?.plugins?.fancybox?.js) {
						initPictures(theme.value.plugin?.thirdPartyProvider + theme.value.plugin.plugins.fancybox.js);
					}
				});
			};

			onMounted(() => {
				log(`%c 🚀 Vitepress-Theme-Async ${pkg.version == '0.0.0' ? 'Github' : pkg.version} %c https://github.com/MaLuns/hexo-theme-async `);
				log(`%c 📑 Vitepress-Theme-Async Docs %c ${pkg.homepage}`);
				mitt.on('page:update', initPageUpdate);

				if (theme.value.pageLoading) {
					const beforeRoute = router.onBeforeRouteChange;
					let lastDate: number;
					router.onBeforeRouteChange = function (to) {
						if (beforeRoute && beforeRoute(to) === false) return false;

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
				}

				if (favicon?.visibilitychange) {
					initVisibilitychange(favicon?.hidden ? withBase(favicon?.hidden) : failure, showText, hideText);
				}

				if (theme.value.creativeCommons?.clipboard) {
					const authorTitle = getCurLangText('post.copyright.author');
					const linkTitle = getCurLangText('post.copyright.link');
					const licenseTitle = getCurLangText('post.copyright.licenseTitle');
					const licenseContent = getCurLangText('post.copyright.licenseContent', `CC {2} {3}`);
					const colon = getCurLangText('symbol.colon');
					initClipboard({
						author: theme.value.author,
						license: theme.value.creativeCommons?.license,
						text: `\n\n//${authorTitle}${colon}{0}\n//${linkTitle}${colon}{1}\n//${licenseTitle}${colon}${licenseContent}`,
					});
				}

				watcher = watch(
					() => route.path,
					() => mitt.emit('page:update'),
					{ immediate: true, deep: true },
				);
			});

			onUnmounted(() => {
				mitt.off('page:update', initPageUpdate);
				watcher?.();
			});

			return () => h(App, null, slots);
		},
	});
}
