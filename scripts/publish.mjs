import { writeFileSync } from "fs";
import { resolve } from "path";
import { fileURLToPath } from "url";
import pkg from "../packages/vitepress-theme-async/package.json" assert { type: "json" };

if (process.env.RELEASE_VERSION) {
	const version = process.env.RELEASE_VERSION.split("/").reverse()[0];
	console.log("当前版本：", version);
	pkg.version = version.replace("v", "");
	writeFileSync(resolve(fileURLToPath(import.meta.url), "../../packages/vitepress-theme-async/package.json"), JSON.stringify(pkg, null, 4), "utf-8");
}
