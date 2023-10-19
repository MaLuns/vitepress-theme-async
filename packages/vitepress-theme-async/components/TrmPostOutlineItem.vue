<script setup lang="ts">
defineProps<{
	headers: AsyncTheme.MenuItem[];
	root?: boolean;
}>();

const onClick = (link: string) => {
	const id = link.split("#")[1];
	const heading = document.getElementById(decodeURIComponent(id));
	heading?.focus({ preventScroll: true });
};
</script>
<template>
	<ul :class="root ? 'root' : 'nested'">
		<li v-for="{ children, link, title } in headers" :key="link">
			<a class="outline-link" :href="link" @click.stop="onClick(link)">
				{{ title }}
			</a>
			<template v-if="children?.length">
				<TrmPostOutlineItem :headers="children" />
			</template>
		</li>
	</ul>
</template>
