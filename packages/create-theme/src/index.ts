#!/usr/bin/env node

import path from 'node:path';
import process from 'process';
import fs from 'fs-extra';

const argvs = process.argv.slice(2);
const bolleanFlag = argvs.filter(item => item.startsWith('--'));
const stringFlag = argvs.filter(item => !item.startsWith('--'));

const projectName = stringFlag[stringFlag.length - 1] || 'my-blog';
const isBun = bolleanFlag.includes('--bun');

console.log('Creating vitepress-theme-async project...');
console.log();

function createThemeProject(destination: string) {
	const templatePath = path.join(__dirname, 'template');
	if (fs.existsSync(destination)) {
		console.log(`❌ The ${projectName} folder already exists.!`);
		console.log();
		return;
	}

	fs.copy(templatePath, destination, async err => {
		// 同步创建.gitignore文件和配置文件
		await fs.copy(path.join(__dirname, 'move/gitignore'), path.join(destination, '.gitignore'));
		await fs.copy(path.join(__dirname, 'move/package'), path.join(destination, 'package.json'));

		const sourceRc = isBun ? 'bunfig.toml' : 'npmrc';
		const targetFile = isBun ? 'bunfig.toml' : '.npmrc';
		await fs.copy(path.join(__dirname, `move/${sourceRc}`), path.join(destination, targetFile));
		// package.json build 指令添加 NODE_ENV=production
		// issue https://github.com/oven-sh/bun/issues/3791
		if (isBun) {
			const pkgPath = path.join(destination, 'package.json');
			const pkg = await fs.readJSON(pkgPath);
			pkg.scripts.build = `NODE_ENV=production ${pkg.scripts.build}`;
			await fs.writeJSON(pkgPath, pkg, { spaces: 2 });
		}
		if (err) {
			console.error('An error occurred while copying template files:', err);
		} else {
			console.log('🎉 🎉 created successfully!');
			console.log();

			console.log('📚 📚 docs: https://vitepress-theme-async.imalun.com');
			console.log();

			console.log(`project in ${destination}`);

			console.log();

			const command = isBun ? 'bun' : 'pnpm';
			const msg = `Done. Now run:

  ①  cd ${path.parse(destination).name}
  ②  ${command} install
  ③  ${command} run ${isBun ? '--bun ' : ''}dev
  ④  ${command} run ${isBun ? '--bun ' : ''}build
  ⑤  ${command} run ${isBun ? '--bun ' : ''}serve`;

			console.log(msg);
		}
	});
}

createThemeProject(path.join(process.cwd(), projectName));

// 参考 https://github.com/ATQQ/sugar-blog/tree/master/packages/create-theme
