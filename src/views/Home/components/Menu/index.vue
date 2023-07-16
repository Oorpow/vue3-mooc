<template>
	<div class="p-1">
		<h2 class="text-xl text-zinc-900 font-bold">所有分类</h2>
		<ul class="mt-1 h-[300px] overflow-y-auto">
			<li
				class="text-lg my-1.5 text-zinc-900"
				v-for="item in 30"
				:key="item"
				@click="$emit('menuItemClick', item - 1)"
			>
				UI/UX
			</li>
		</ul>
	</div>
</template>

<script setup lang="ts">
defineEmits<{
	menuItemClick: [data: number];
}>();
</script>

<style scoped></style>
