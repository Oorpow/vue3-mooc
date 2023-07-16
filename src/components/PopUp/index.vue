<template>
	<div>
		<Teleport to="body">
			<Transition name="fade">
				<!-- 蒙层 -->
				<div
					class="w-screen h-screen fixed top-0 left-0 bg-zinc-900/[0.8] z-40"
					v-if="isShowPopup"
					@click="isShowPopup = false"
				></div>
			</Transition>

			<!-- 内容 -->
			<Transition name="popup">
				<div
					v-if="isShowPopup"
					v-bind="$attrs"
					class="bg-white w-full fixed left-0 bottom-0 z-50 rounded-t-sm"
				>
					<slot></slot>
				</div>
			</Transition>
		</Teleport>
	</div>
</template>

<script setup lang="ts">
import { watch } from "vue";
import { useScrollLock, useVModel } from "@vueuse/core";

const props = defineProps<{
	modelValue: boolean;
}>();

const isLocked = useScrollLock(document.body);

/** 响应式数据，当isShowPopup值变化时，会自动触发emit修改modelValue */
const isShowPopup = useVModel(props);

watch(
	isShowPopup,
	(newVal) => {
		isLocked.value = newVal;
	},
	{
		immediate: true,
	},
);
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
	transition: all 0.3s;
}

.fade-enter-from,
.fade-leave-to {
	opacity: 1;
}

.popup-enter-active,
.popup-leave-active {
	transition: all 0.3s;
}

.popup-enter-from,
.popup-leave-to {
	transform: translateY(100%);
}
</style>
