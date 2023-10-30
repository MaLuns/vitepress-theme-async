import { writeFileSync } from "fs";
import { resolve } from "path";
import { fileURLToPath } from "url";
import themepkg from "../packages/vitepress-theme-async/package.json" assert { type: "json" };
import clipkg from "../packages/create-theme/package.json" assert { type: "json" };


if (process.env.RELEASE_VERSION) {
	const version = process.env.RELEASE_VERSION.split("/").reverse()[0];
	console.log("当前版本：", version);
	themepkg.version = version.replace("v", "");
	clipkg.version = version.replace("cli-v", "");
	writeFileSync(resolve(fileURLToPath(import.meta.url), "../../packages/vitepress-theme-async/package.json"), JSON.stringify(themepkg, null, 4), "utf-8");
	writeFileSync(resolve(fileURLToPath(import.meta.url), "../../packages/create-theme/package.json"), JSON.stringify(clipkg, null, 4), "utf-8");
}
