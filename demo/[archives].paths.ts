import { dynamicPages } from '../packages/vitepress-theme-async/plugin/page';
import config from './.vitepress/config';

export default {
	async paths() {
		return dynamicPages(config, 'archives');
	},
};
