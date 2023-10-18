<script setup lang="ts">
import TrmTopBarLogo from "./TrmTopBarLogo.vue";
import TrmTopBarMenu from "./TrmTopBarMenu.vue";
import { useShowMenu } from "../blog";

const show = useShowMenu();

const onChangState = () => {
	if (show) {
		show.value = !show.value;
	}
};
</script>

<template>
	<header class="trm-top-bar">
		<div class="container">
			<div class="trm-left-side">
				<slot name="topbar-left-before" />
				<TrmTopBarLogo />
				<slot name="topbar-left-after" />
			</div>
			<div class="trm-right-side" :class="{ 'trm-active': show }">
				<slot name="topbar-right-before" />
				<TrmTopBarMenu />
				<slot name="topbar-right-after" />
			</div>
			<div class="trm-menu-btn" :class="{ 'trm-active': show }" @click="onChangState">
				<span></span>
			</div>
		</div>
	</header>
</template>
