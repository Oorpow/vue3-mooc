<template>
	<div class="group p-0.5 rounded-xl border-white duration-500 hover:bg-red-100/40">
		<div class="flex items-center relative">
			<!-- 前缀搜索图标 -->
			<Icon icon="mdi-magnify" class="text-xl absolute left-1 text-gray-400" />
			<input
				type="text"
				class="w-full h-[44px] pl-4 bg-zinc-100 rounded-xl tracking-wide border text-sm font-semibold duration-300 focus:outline-0 group-hover:bg-white"
			/>
			<!-- 清空输入框按钮 -->
			<Icon icon="mdi-close-circle" class="text-lg absolute right-5 cursor-pointer text-gray-400	" />
			<!-- 分割线 -->
			<div class="h-[22px] w-[1px] bg-zinc-300 absolute right-4"></div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";
</script>

<style scoped></style>
