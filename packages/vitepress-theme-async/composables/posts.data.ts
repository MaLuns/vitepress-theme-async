import { ContentData, createContentLoader } from 'vitepress';

declare const data: ContentData[];

export { data };

export default createContentLoader('posts/**/*.md', {
	excerpt: file => {
		const reg = /<!--\s*more\s*-->/gs;
		const rpt = reg.exec(file.content);
		if (rpt) {
			file.excerpt = file.content.substring(0, rpt.index);
		} else {
			file.excerpt = '';
		}
	},
	transform(data) {
		return data.map(item => {
			console.log(process.cwd(), item.url);
			return item;
		});
	},
});

// export default <LoaderModule>{
// 	watch: ['**/posts/**/*.md'],
// 	async load(files) {
// 		console.log(files);
// 		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// 		// @ts-ignore
// 		return xxx.load(files)
// 	}
// }
