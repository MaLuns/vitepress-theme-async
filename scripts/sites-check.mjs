import demosite from "../docs/.vitepress/assets/sites.json" assert { type: "json" };
import { readFileSync, writeFileSync } from "fs";
import { resolve as _resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const generateDemoSiteHtml = data => {
	let str = `<!-- demo-start -->
<table>
  <tr align="center">`;
	data.forEach((item, index) => {
		if (index % 8 === 0 && index > 0) {
			str += `
    </tr>
    <tr align="center">`;
		}
		str += `
        <td>
            <a href="${item.url}" target="_blank">
                <img width="80px" src="${item.avatar}" />
                <br />
                <sub title="${item.desc}">${item.name}</sub>
            </a>
        </td>`;
	});
	str += `
      </tr>
</table>
<!-- demo-end -->`;
	return str;
};

const updateReadme = sites => {
	const paths = [_resolve(__dirname, "../README.md"), _resolve(__dirname, "../README_zh-CN.md")];
	paths.forEach(item => {
		let readme = readFileSync(item, "utf-8");
		readme = readme.replace(/<!-- demo-start -->(.)+?<!-- demo-end -->/gms, () => generateDemoSiteHtml(sites));
		writeFileSync(item, readme, "utf-8");
	});
};

updateReadme(demosite);
