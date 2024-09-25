<script setup lang="ts">
import { formatDate } from "../utils/shared";
import { usePageUrl, usePrevNext, useTheme } from "../composables";

import TrmDividerTitle from "./global/TrmDividerTitle.vue";
import TrmCardPost from "./global/TrmCardPost.vue";
import TrmCardPostMini from "./global/TrmCardPostMini.vue";
import TrmReward from "./TrmReward.vue";
import TrmPostCopyright from "./TrmPostCopyright.vue";
import TrmOutdateNotice from "./TrmOutdateNotice.vue";
import TrmIconCalendar from "./icons/TrmIconCalendar.vue";
import TrmIconClock from "./icons/TrmIconClock.vue";
import TrmIconUser from "./icons/TrmIconUser.vue";

const control = usePrevNext();
const theme = useTheme();
const pageUrl = usePageUrl();
</script>
<template>
	<slot name="post-before" />
	<div class="trm-post-info row hidden-sm">
		<div class="col-sm-4">
			<div class="trm-card trm-label trm-label-light text-center">
				<TrmIconCalendar class="trm-icon" />
				<br />
				{{ formatDate(control.post.date, "YYYY-MM-DD") }}
			</div>
		</div>
		<div class="col-sm-4">
			<div class="trm-card trm-label trm-label-light text-center">
				<TrmIconClock class="trm-icon" />
				<br />
				{{ formatDate(control.post.date, "HH:mm") }}
			</div>
		</div>
		<div class="col-sm-4">
			<div class="trm-card trm-label trm-label-light text-center">
				<TrmIconUser class="trm-icon" />
				<br />
				{{ control.post.author || theme.author }}
			</div>
		</div>
	</div>
	<slot name="post-info-after" />
	<div class="trm-card">
		<slot name="post-container-before" />
		<article id="article-container" class="trm-publication">
			<slot name="post-content-before" />
			<TrmOutdateNotice v-if="theme.noticeOutdate?.enable && theme.noticeOutdate.position === 'top'" :date="control.post.date" />
			<Content />
			<TrmOutdateNotice style="margin-top: 20px;" v-if="theme.noticeOutdate?.enable && theme.noticeOutdate.position === 'bottom'" :date="control.post.date" />
			<slot name="post-content-after" />
		</article>
		<slot name="post-copyright-before" />
		<TrmPostCopyright />
		<slot name="post-reward-before" />
		<TrmReward />
		<slot name="post-reward-after" />
	</div>
	<slot name="post-pagination-before" />
	<div v-if="theme.postPagination!.enable && (control.prev || control.next)" class="trm-post-next-prev row">
		<div class="col-lg-12">
			<TrmDividerTitle :title="$t('title.otherArticles')" index="01" />
		</div>
		<div class="col-lg-6" v-if="control.prev">
			<TrmCardPost v-if="theme.postPagination?.type === 'large'" :post="control.prev" :category-url="pageUrl.categories" :sticky="false" />
			<TrmCardPostMini v-else :post="control.prev" />
		</div>
		<div class="col-lg-6" v-if="control.next">
			<TrmCardPost v-if="theme.postPagination?.type === 'large'" :post="control.next" :category-url="pageUrl.categories" :sticky="false" />
			<TrmCardPostMini v-else :post="control.next" />
		</div>
	</div>
	<slot name="post-after" />
</template>
