<script setup lang="ts">
import { ref } from "vue";
import { useTheme } from "../composables";
import TrmIconReward from "./icons/TrmIconReward.vue";

const show = ref(false);
const theme = useTheme();
</script>
<template>
	<div v-if="theme.reward?.enable" class="trm-reward">
		<a v-if="theme.reward?.url" :href="theme.reward.url" rel="noopener noreferrer" target="_blank" class="trm-reward-btn trm-glow">
			<TrmIconReward />
		</a>
		<span v-else class="trm-reward-btn trm-glow" @click="show = !show">
			<TrmIconReward />
		</span>
		<p class="trm-reward-comment">{{ $t("post.rewardComment") }}</p>
		<div v-if="show && theme.reward?.methods" id="qr">
			<div v-for="(method, idx) in theme.reward.methods" style="display: inline-block" :key="idx">
				<a :href="method.link ? method.link : method.path" rel="noopener noreferrer" target="_blank">
					<img :src="method.path" :alt="method.name" loading="lazy" />
				</a>
				<p>{{ method.name }}</p>
			</div>
		</div>
	</div>
</template>
