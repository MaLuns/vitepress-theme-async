import { useRouter } from 'vitepress';
import { Component, InjectionKey, Ref, defineComponent, h, inject, provide, ref } from 'vue';

export const currentPageIndexSymbol: InjectionKey<Ref<number>> = Symbol('current-page-index');

export const showMenuSymbol: InjectionKey<Ref<boolean>> = Symbol('show-menu');

export function withConfigProvider(App: Component) {
	return defineComponent({
		name: 'ConfigProvider',
		setup(_, { slots }) {
			const router = useRouter();
			const currentPageIndex = ref(1);
			const showMenu = ref(false);

			provide(currentPageIndexSymbol, currentPageIndex);
			provide(showMenuSymbol, showMenu);

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

			return () => h(App, null, slots);
		},
	});
}

export const useCurrentPageIndex = () => inject(currentPageIndexSymbol)!;
export const useShowMenu = () => inject(showMenuSymbol)!;
