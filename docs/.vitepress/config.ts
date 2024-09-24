import { defineConfig } from 'vitepress';

export default defineConfig({
	outDir: '../dist',
	lang: 'zh-CN',
	title: 'Vitepress-Theme-Async',
	description: '🎈 A simple, lightweight vitepress blog theme',
	lastUpdated: true,
	head: [
		['link', { rel: 'icon', href: '/logo@64x64.png' }],
		['meta', { property: 'og:type', content: 'website' }],
		['meta', { property: 'og:title', content: 'hexo-theme-async 主题' }],
		['meta', { property: 'og:image', content: '/logo@64x64.png' }],
		['meta', { property: 'og:url', content: 'https://www.imalun.com' }],
		['meta', { property: 'og:description', content: '一个简单而轻量级的 Hexo 主题' }],
	],
	cleanUrls: true,
	themeConfig: {
		logo: '/logo@128x128.png',
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
							text: '页面配置',
							link: '/guide/page',
						},
						{
							text: '全局组件',
							link: '/guide/global-components',
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
		outline: {
			level: [2, 4],
		},
		// @ts-ignore
		plugin: {
			thirdPartyProvider: 'https://npm.elemecdn.com',
			plugins: {
				flickrJustifiedGallery: '/flickr-justified-gallery@latest/dist/fjGallery.min.js',
			},
		},
	},
});
