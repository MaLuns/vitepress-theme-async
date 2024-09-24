<template>
	<TrmPortfolio :src="data.src" :cover="data.cover" :title="data.title" :desc="data.desc" />
</template>

<script setup>
const data = {
	title: "壁纸",
	desc: "收藏的一些壁纸",
	src: 'https://',
	cover: "https://img1.wallspic.com/previews/5/0/1/6/6/166105/166105-pang_ke-zi_se_de-zi_luo_lan_se-fen_hong_se-pin_hong_se-500x.jpg"
}
</script>
