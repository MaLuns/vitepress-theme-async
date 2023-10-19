---
title: Markdown Extensions
date: 2023-09-21 15:25:29
categories: 测试分类
---

## Using custom anchors {#my-anchor}

## Table

| Tables        |      Are      |  Cool |
| ------------- | :-----------: | ----: |
| col 3 is      | right-aligned | $1600 |
| col 2 is      |   centered    |   $12 |
| zebra stripes |   are neat    |    $1 |

## Emoji

:tada: :100:

## Toc

[[toc]]

## Custom Containers

### Default Title

::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::

### Custom Title

::: danger STOP
Danger zone, do not proceed
:::

::: details Click me to view the code

```js
console.log("Hello, VitePress!");
```

:::

### Syntax Highlighting in Code Blocks

```js
export default {
	name: "MyComponent",
	// ...
};
```

```js{1,4,6-8}
export default { // Highlighted
  data () {
    return {
      msg: `Highlighted!
      This line isn't highlighted,
      but this and the next 2 are.`,
      motd: 'VitePress is awesome',
      lorem: 'ipsum'
    }
  }
}
```

```js
export default {
	data() {
		return {
			msg: "Highlighted!", // [!code  hl]
		};
	},
};
```

### Focus in Code Blocks

```js
export default {
	data() {
		return {
			msg: "Focused!", // [!code  focus]
		};
	},
};
```

### Colored Diffs in Code Blocks

```js
export default {
  data () {
    return {
      msg: 'Removed' // [!code  --]
      msg: 'Added' // [!code  ++]
    }
  }
}
```

### Errors and Warnings in Code Blocks

```js
export default {
	data() {
		return {
			msg: "Error", // [!code  error]
			msg: "Warning", // [!code  warning]
		};
	},
};
```

### Code Groups

::: code-group

```js [config.js]
/**
 * @type {import('vitepress').UserConfig}
 */
const config = {
	// ...
};

export default config;
```

```ts [config.ts]
import type { UserConfig } from "vitepress";

const config: UserConfig = {
	// ...
};

export default config;
```

:::
