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
	title: 'Vitepress Theme Async',
	description: '一个简洁、优雅、轻量、美观的 vitepress 主题',
	titleTemplate: ':title | Async',
	themeConfig: {
		languages: {
			'zh-Hans': {
				title: {
					links: '友情链接',
				},
			},
		},
		globalComponents: ['TrmDividerTitle'],
		topBars: [
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
			copyrightYear: '2023',
			liveTime: {
				enable: true,
				startTime: '2023/10/01',
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
					path: 'https://www.imalun.com/images/reward/wx_pay.jpg',
				},
				{
					name: '支付宝',
					path: 'https://www.imalun.com/images/reward/alipay.jpg',
				},
				{
					name: 'QQ',
					path: 'https://www.imalun.com/images/reward/qq_pay.jpg',
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
		creativeCommons: {
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
		noticeOutdate: {
			enable: true,
			limitDay: 1,
			style: 'flat',
			position: 'bottom',
		},
		rss: {
			enable: true,
			baseUrl: 'https://vitepress-theme-async.imalun.com',
		},
	},
});
