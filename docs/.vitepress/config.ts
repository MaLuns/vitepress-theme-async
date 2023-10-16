import { defineConfigWithTheme } from 'vitepress';
import { AsyncThemeConfig } from 'vitepress-theme-async';
import Config from 'vitepress-theme-async/config';

export default defineConfigWithTheme<AsyncThemeConfig>({
	extends: Config,
	themeConfig: {
		nav: [
			{ text: 'Home', link: '/' },
			{
				text: 'Demo',
				items: [
					{ text: '归档', link: '/archives' },
					{ text: '分类', link: '/categorys' },
					{ text: '标签', link: '/tags' },
				],
			},
			{ text: 'About', link: '/about' },
			{ text: 'HexoEditor', link: 'https://web-hexo-editor.imalun.com/' },
		],
		sidebar: {
			typedText: ['Web Developer', 'UI Designer'],
		},
	},
});
