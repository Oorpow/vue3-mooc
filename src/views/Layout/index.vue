<template>
	<div class="h-screen">
		<Header class="h-header" />
		<Main  class="h-main"/>
		<Floating />
	</div>
</template>

<script setup lang="ts">
import Header from './components/Header/index.vue'
import Main from './components/Main.vue';
import Floating from './components/floating.vue';
</script>

<style scoped></style>
