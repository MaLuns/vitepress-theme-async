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
			social: [
				{
					name: 'vue',
					url: 'https://cn.vuejs.org/',
					icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M356.9 64.3H280l-56 88.6-48-88.6H0L224 448 448 64.3h-91.1zm-301.2 32h53.8L224 294.5 338.4 96.3h53.8L224 384.5 55.7 96.3z"/></svg>`,
				},
			],
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
		page: {
			archives: '/archives',
			tags: '/tags',
			categorys: '/categories',
		},
	},
});
