<script setup lang="ts">
import { formatDate } from "../utils/client";
import { usePrevNext, useTheme } from "../composables";

import TrmIcon from "./TrmIcon.vue";
import TrmDividerTitle from "./TrmDividerTitle.vue";
import TrmCardPost from "./TrmCardPost.vue";
import TrmCardPostMini from "./TrmCardPostMini.vue";
import TrmReward from "./TrmReward.vue";
import TrmPostCopyright from "./TrmPostCopyright.vue";

const control = usePrevNext();
const theme = useTheme();
</script>
<template>
	<slot name="post-before" />
	<div class="trm-post-info row hidden-sm">
		<div class="col-sm-4">
			<div class="trm-card trm-label trm-label-light text-center">
				<TrmIcon class="trm-icon" :icon="theme.icons!.calendar"></TrmIcon>
				{{ formatDate(control.post.date, "YYYY-MM-DD") }}
			</div>
		</div>
		<div class="col-sm-4">
			<div class="trm-card trm-label trm-label-light text-center">
				<TrmIcon class="trm-icon" :icon="theme.icons!.clock"></TrmIcon>
				{{ formatDate(control.post.date, "HH:mm") }}
			</div>
		</div>
		<div class="col-sm-4">
			<div class="trm-card trm-label trm-label-light text-center">
				<TrmIcon class="trm-icon" :icon="theme.icons!.user"></TrmIcon>
				{{ control.post.author || theme.author }}
			</div>
		</div>
	</div>
	<slot name="post-info-after" />
	<div class="trm-card">
		<slot name="post-container-before" />
		<article id="article-container" class="trm-publication">
			<slot name="post-content-before" />
			<Content />
			<slot name="post-content-after" />
		</article>
		<slot name="post-copyright-before" />
		<TrmPostCopyright />
		<slot name="post-reward-before" />
		<TrmReward />
		<slot name="post-reward-after" />
	</div>
	<slot name="post-pagination-before" />
	<div v-if="theme.post_pagination!.enable && (control.prev || control.next)" class="trm-post-next-prev row">
		<div class="col-lg-12">
			<TrmDividerTitle title="其他文章" index="01" />
		</div>
		<div class="col-lg-6" v-if="control.prev">
			<TrmCardPost v-if="theme.post_pagination?.type === 'large'" :post="control.prev" />
			<TrmCardPostMini v-else :post="control.prev" />
		</div>
		<div class="col-lg-6" v-if="control.next">
			<TrmCardPost v-if="theme.post_pagination?.type === 'large'" :post="control.next" />
			<TrmCardPostMini v-else :post="control.next" />
		</div>
	</div>
	<slot name="post-after" />
</template>
