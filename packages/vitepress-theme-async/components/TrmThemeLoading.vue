<script setup lang="ts">
import TrmIconMoon from "./icons/TrmIconMoon.vue";
import TrmIconSun from "./icons/TrmIconSun.vue";
</script>
<template>
	<div class="trm-mode-swich-animation-frame">
		<div class="trm-mode-swich-animation">
			<i class="i-sun">
				<TrmIconSun />
			</i>
			<div class="trm-horizon"></div>
			<i class="i-moon">
				<TrmIconMoon />
			</i>
		</div>
	</div>
</template>
