import { defineConfig } from 'vitepress';

export default defineConfig({
	outDir: '../dist',
	lang: 'zh-CN',
	title: 'Vitepress-Theme-Async',
	description: '🎈 A simple, lightweight vitepress blog theme',
	lastUpdated: true,
	head: [['link', { rel: 'icon', href: '/favicon.svg' }]],
	cleanUrls: true,
	themeConfig: {
		logo: '/logo.svg',
		search: {
			provider: 'local',
		},
		socialLinks: [
			{
				icon: 'github',
				link: 'https://github.com/MaLuns/vitepress-theme-async',
			},
		],
		editLink: {
			pattern: 'https://github.com/Maluns/vitepress-theme-async/edit/master/docs/:path',
			text: '帮助改善此页面！( ￣□￣)/',
		},
		nav: [
			{ text: 'Guide', link: '/guide/' },
			{ text: 'DemoSites', link: '/demo/' },
		],
		sidebar: {
			'/': [
				{
					text: '指南',
					items: [
						{
							text: '使用指南',
							link: '/guide/',
						},
						{
							text: '主题配置',
							link: '/guide/config',
						},
						{
							text: '更新日志',
							link: '/guide/change-log',
						},
						{
							text: 'FAQ',
							link: '/guide/faq',
						},
					],
				},
				{
					text: '关于',
					items: [
						{
							text: '关于主题',
							link: '/guide/about',
						},
					],
				},
			],
		},
		footer: {
			message: 'Released under the SATA | MIT License.',
			copyright: 'Copyright © 2023-PRESENT MaLuns',
		},
	},
});
