<script setup lang="ts">
import { useSingleColumn } from "../composables/index";

const singleColumn = useSingleColumn();
</script>
<template>
	<div class="trm-page-content" :class="!singleColumn ? 'col-lg-8' : 'col-lg-12'">
		<div id="trm-content" class="trm-content">
			<slot></slot>
		</div>
	</div>
</template>
