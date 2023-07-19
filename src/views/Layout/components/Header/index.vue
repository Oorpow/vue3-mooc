<template>
	<div class="w-full bg-white border-b border-b-zinc-200 px-2 py-1">
		<div class="flex items-center gap-1">
			<div>logo</div>
			<HeaderSearch />
			<HeaderTheme />
			<HeaderMy />
		</div>
	</div>
</template>

<script setup lang="ts">
import HeaderSearch from "./HeaderSearch.vue";
import HeaderTheme from "./HeaderTheme.vue";
import HeaderMy from "./HeaderMy.vue";
</script>

<style scoped></style>
