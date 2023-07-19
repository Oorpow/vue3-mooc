<template>
	<div class="relative" @mousemove="onMouseMove" @mouseleave="onMouseLeave">
		<!-- 具名slot：触发弹出层的视图 -->
		<div>
			<slot name="showup"></slot>
		</div>
		<!-- 内容slot -->
		<Transition name="popover">
			<div
				v-if="isVisiable"
				class="absolute right-2 top-[50px] w-[140px] rounded-sm bg-white border border-zinc-100 shadow-md duration-300"
			>
				<slot name="content"></slot>
			</div>
		</Transition>
	</div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const isVisiable = ref(false);

const onMouseMove = () => {
	isVisiable.value = true;
};

const onMouseLeave = () => {
	isVisiable.value = false;
};
</script>

<style lang="scss" scoped>
.popover-enter-active,
.popover-leave-active {
	transition: all 0.3s;
}

.popover-enter-from,
.popover-leave-to {
	opacity: 0;
}
</style>
