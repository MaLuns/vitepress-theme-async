import { glob } from 'tinyglobby';
import { resolve } from 'path';

const pageSize = 1;
const postsPath = resolve(__filename, '../posts');

export default {
	async paths() {
		const count = Math.ceil(
			(
				await glob(['**.md'], {
					cwd: postsPath,
					ignore: ['**/node_modules/**', '**/dist/**'],
					expandDirectories: false,
				})
			).length / pageSize,
		);

		const paths = new Array(count).fill(null).map((val, i) => {
			return i === 0 ? { params: { index: 'index' } } : { params: { index: `page/${i + 1}` } };
		});
		return paths;
	},
};
