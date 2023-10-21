---
title: Markdown Extensions
date: 2023-09-21 15:25:29
categories: 测试分类
single_column: true
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

## Code Blocks

### Syntax Highlighting in Code Blocks

```js
export default {
	name: "MyComponent",
	// ...
};
```

```html
<ul>
	<li v-for="todo in todos" :key="todo.id">{{ todo.text }}</li>
</ul>
```

### Line Highlighting in Code Blocks

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

### Focus in Code Blocks

```js
export default {
	data() {
		return {
			msg: "Focused!", // [!code focus]
		};
	},
};
```

### Colored Diffs in Code Blocks

```js
export default {
  data () {
    return {
      msg: 'Removed' // [!code --]
      msg: 'Added' // [!code ++]
    }
  }
}
```

### Errors and Warnings in Code Blocks

```js
export default {
	data() {
		return {
			msg: "Error", // [!code error]
			msg: "Warning", // [!code warning]
		};
	},
};
```

### Line Numbers

```ts {1}
// line-numbers is disabled by default
const line2 = "This is line 2";
const line3 = "This is line 3";
```

```ts:line-numbers {1}
// line-numbers is enabled
const line2 = 'This is line 2'
const line3 = 'This is line 3'
```

```ts:line-numbers=2 {1}
// line-numbers is enabled and start from 2
const line3 = 'This is line 3'
const line4 = 'This is line 4'
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
