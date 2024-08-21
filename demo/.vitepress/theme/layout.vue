<script setup lang="ts">
import Theme from "vitepress-theme-async";
const { Layout } = Theme;
</script>
<template>
	<Layout>
		<template #links-after>
			<TrmDividerTitle title="插槽示例" index="01" />
			这是自定义插槽
		</template>
	</Layout>
</template>
