import { dynamicPages } from '../packages/vitepress-theme-async/plugin/page';
import config from './.vitepress/config';

export default {
	async paths() {
		const paths = await dynamicPages(config, 'tags');
		console.log(paths);
		return paths;
	},
};
