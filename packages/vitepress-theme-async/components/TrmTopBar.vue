<script setup lang="ts">
import TrmTopBarLogo from "./TrmTopBarLogo.vue";
import TrmTopBarMenu from "./TrmTopBarMenu.vue";
</script>

<template>
	<header class="trm-top-bar">
		<div class="container">
			<div class="trm-left-side">
				<TrmTopBarLogo />
			</div>
			<div class="trm-right-side">
				<TrmTopBarMenu />
			</div>
			<div class="trm-menu-btn">
				<span></span>
			</div>
		</div>
	</header>
</template>
