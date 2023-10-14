import { defineConfigWithTheme } from 'vitepress';
import { AsyncThemeConfig } from 'vitepress-theme-async'
import Config from 'vitepress-theme-async/config'


export default defineConfigWithTheme<AsyncThemeConfig>({
	extends: Config,
	themeConfig: {
		nav: [
			{ text: 'Guide', link: '/guide/' },
			{ text: 'DemoSites', link: '/demo/' },
			{ text: 'Sponsors', link: '/sponsors/' },
			{
				text: 'Languages',
				items: [
					{ text: '简体中文', link: '/guide/' },
					{ text: 'English', link: '/en/guide/' },
				],
			},
			{
				text: 'Docs',
				items: [
					{ text: 'Preview', link: 'https://hexo-theme-async.imalun.com/' },
					{ text: 'Laster', link: 'https://async-docs.imalun.com/' },
				],
			},
			{ text: 'HexoEditor', link: 'https://web-hexo-editor.imalun.com/' },
		],
		sidebar: {
			typedText: ['Web Developer', 'UI Designer']
		}
	}
});
