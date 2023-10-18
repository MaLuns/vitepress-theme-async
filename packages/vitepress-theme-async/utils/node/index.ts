import { spawnSync } from 'node:child_process';

export function getFileBirthTime(url: string) {
	try {
		// ct
		const infoStr = spawnSync('git', ['log', '--pretty="%ci"', url]).stdout?.toString().replace(/["']/g, '').trim();
		const timeList = infoStr.split('\n').filter(item => Boolean(item.trim()));
		if (timeList.length > 0) {
			return new Date(timeList.pop()!).getTime();
		}
	} catch (error) {
		return undefined;
	}
}

export const getFileLastUpdateTime = (url: string) => {
	try {
		// 参考 vitepress 中的 getGitTimestamp 实现
		const infoStr = spawnSync('git', ['log', '-1', '--pretty="%ci"', url]).stdout?.toString().replace(/["']/g, '').trim();
		if (infoStr) {
			return new Date(infoStr).getTime();
		}
	} catch (error) {
		return undefined;
	}
};

export const slash = (p: string): string => p.replace(/\\/g, '/');
