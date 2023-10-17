import { defineConfigWithTheme } from 'vitepress';
import { AsyncThemeConfig } from 'vitepress-theme-async';
import Config from 'vitepress-theme-async/config';

export default defineConfigWithTheme<AsyncThemeConfig>({
	extends: Config,
	cleanUrls: true,
	themeConfig: {
		nav: [
			{ text: 'Home', link: '/' },
			{
				text: 'Demo',
				items: [
					{ text: '归档', link: '/archives' },
					{ text: '分类', link: '/categories' },
					{ text: '标签', link: '/tags' },
				],
			},
			{ text: 'About', link: '/about' },
			{ text: 'HexoEditor', link: 'https://web-hexo-editor.imalun.com/' },
		],
		sidebar: {
			typedText: ['Web Developer', 'UI Designer'],
		},
		user: {
			email: 'admin@imalun.com',
		},
		footer: {
			copyright_year: '2023',
			live_time: {
				enable: true,
				start_time: '2023/10/01',
			},
		},
	},
});
