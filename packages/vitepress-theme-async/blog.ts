import { Component, defineComponent, h } from 'vue';

export function withConfigProvider(App: Component) {
	return defineComponent({
		name: 'ConfigProvider',
		setup(_, { slots }) {
			return () => h(App, null, slots);
		},
	});
}
