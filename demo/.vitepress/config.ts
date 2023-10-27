import { defineConfig } from 'vitepress-theme-async/config';
import taskLists from 'markdown-it-task-lists';

export default defineConfig({
	cleanUrls: true,
	base: '/demosite',
	outDir: '../dist/demosite',
	vite: {
		css: {
			preprocessorOptions: {
				less: {},
			},
		},
	},
	markdown: {
		config(md) {
			md.use(taskLists);
		},
	},
	titleTemplate: ':title | Async',
	themeConfig: {
		top_bars: [
			{ title: 'Home', url: '/' },
			{
				title: 'Demo',
				children: [
					{ title: '归档', url: '/archives' },
					{ title: '分类', url: '/categories' },
					{ title: '标签', url: '/tags' },
				],
			},
			{ title: 'Links', url: '/links' },
			{ title: 'About', url: '/about' },
			{ title: 'HexoEditor', url: 'https://web-hexo-editor.imalun.com/' },
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
		links: [
			{
				name: 'Vitepress',
				url: 'https://vitepress.dev',
				image: 'https://vitepress.dev/vitepress-logo-mini.svg',
				desc: 'VitePress is a Static Site Generator (SSG) designed for building fast, content-centric websites',
			},
			{
				name: '白云苍狗',
				url: 'https://www.imalun.com/',
				image: 'https://www.imalun.com/images/avatar.jpg',
				desc: '醒，亦在人间；梦，亦在人间',
			},
		],
		reward: {
			enable: true,
			methods: [
				{
					name: '微信',
					path: 'https://mp-8b005489-7724-4f8c-afdd-30192ff4f7ae.cdn.bspapp.com/cloudstorage/61a57135-2e65-4d51-8be1-03b8bd1c595e.jpg',
				},
				{
					name: '支付宝',
					path: 'https://mp-8b005489-7724-4f8c-afdd-30192ff4f7ae.cdn.bspapp.com/cloudstorage/a21e9954-22f2-43fe-b3b0-3dba1fdde3ed.jpg',
				},
				{
					name: 'QQ',
					path: 'https://mp-8b005489-7724-4f8c-afdd-30192ff4f7ae.cdn.bspapp.com/cloudstorage/69fb1903-d0dc-4169-9a02-1e76ec8e7761.jpg',
				},
			],
		},
		rightside: {
			readmode: true,
			aside: true,
		},
		outline: {
			level: [2, 6],
		},
		favicon: {
			logo: '/favicon.svg',
			icon16: '/favicon.svg',
			icon32: '/favicon.svg',
			visibilitychange: true,
		},
		creative_commons: {
			post: true,
			clipboard: true,
		},
		search: {
			provider: 'local',
		},
		icons: {
			type: 'font',
			sun: 'far fa-sun',
			moon: 'far fa-moon',
			email: 'far fa-envelope',
			next: 'fas fa-arrow-right',
			calendar: 'far fa-calendar-alt',
			clock: 'far fa-clock',
			user: 'far fa-user',
			back_top: 'fas fa-arrow-up',
			close: 'fas fa-times',
			search: 'fas fa-search',
			reward: 'fas fa-hand-holding-usd',
			toc_tag: 'fas fa-th-list',
			read: 'fas fa-book-reader',
			arrows: 'fas fa-arrows-alt-h',
			// play: 'fas fa-play',
			// user_tag: 'fas fa-user-alt',
			// double_arrows: 'fas fa-angle-double-down',
			// copy: 'fas fa-copy',
		},
		page: {
			archives: '/archives',
			tags: '/tags',
			categorys: '/categories',
		},
	},
});
