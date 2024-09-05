<script setup lang="ts">
import { useTheme } from "../composables/index";
import TrmSwichImgs from "./global/TrmSwichImgs.vue";
import avatarImg from "../assets/avatar.jpg";
import { onMounted, ref } from "vue";
import { withBase } from "vitepress";

const theme = useTheme();
const typedTextRef = ref<HTMLDivElement>();

const setTyper = (element: HTMLElement, words?: Array<string>) => {
	if (!element || !words || !Array.isArray(words) || (Array.isArray(words) && !words.length)) return;

	const LETTER_TYPE_DELAY = 100;
	const WORD_STAY_DELAY = 3000;

	const DIRECTION_FORWARDS = 0;
	const DIRECTION_BACKWARDS = 1;

	let direction = DIRECTION_FORWARDS;
	let wordIndex = 0;
	let letterIndex = 0;
	let wordTypeInterval: unknown;

	startTyping();

	function startTyping() {
		wordTypeInterval = setInterval(typeLetter, LETTER_TYPE_DELAY);
	}

	function typeLetter() {
		const word = words![wordIndex];

		if (direction == DIRECTION_FORWARDS) {
			letterIndex++;

			if (letterIndex == word.length) {
				direction = DIRECTION_BACKWARDS;
				clearInterval(<number>wordTypeInterval);
				setTimeout(startTyping, WORD_STAY_DELAY);
			}
		} else if (direction == DIRECTION_BACKWARDS) {
			letterIndex--;

			if (letterIndex == 0) {
				nextWord();
			}
		}

		const textToType = word.substring(0, letterIndex);
		element.textContent = textToType;
	}

	function nextWord() {
		letterIndex = 0;
		direction = DIRECTION_FORWARDS;
		wordIndex++;

		if (wordIndex == words!.length) {
			wordIndex = 0;
		}
	}
};

onMounted(() => {
	if (typedTextRef.value) {
		setTyper(typedTextRef.value, theme.value.sidebar?.typedText);
	}
});

const avatars = [
	theme.value.user?.avatar ? withBase(theme.value.user?.avatar) : avatarImg,  //
	theme.value.user?.darkAvatar ? withBase(theme.value.user?.darkAvatar) : undefined
]
</script>
<template>
	<div class="trm-mc-header">
		<div class="trm-avatar-frame trm-mb-20">
			<TrmSwichImgs :src="avatars" :attrs="{ alt: 'Avatar', class: 'trm-avatar' }" />
		</div>
		<h5 class="trm-name trm-mb-15">
			{{ theme.user?.name }}
		</h5>
		<div v-if="theme.sidebar?.typedText && Array.isArray(theme.sidebar.typedText) && theme.sidebar.typedText.length > 0" class="trm-label">
			{{ theme.sidebar?.typedTextPrefix }}
			<span ref="typedTextRef" class="trm-typed-text"></span>
		</div>
	</div>
</template>
