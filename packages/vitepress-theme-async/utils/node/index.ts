import { spawnSync } from 'node:child_process';
import { formatDate } from 'utils/client';

export function getFileBirthTime(url: string) {
	try {
		// 参考 vitepress 中的 getGitTimestamp 实现
		const infoStr = spawnSync('git', ['log', '-1', '--pretty="%ci"', url]).stdout?.toString().replace(/["']/g, '').trim();
		if (infoStr) {
			return formatDate(new Date(infoStr));
		}
	} catch (error) {
		return undefined;
	}
}
