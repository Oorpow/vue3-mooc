import { computed } from 'vue'
import { useWindowSize } from '@vueuse/core'

const { width } = useWindowSize()
const PC_DEVICE_WIDTH = 1280

/**
 * 判断是否属于移动端设备
 */
export const useIsMobile = computed(() => {
	return width.value < PC_DEVICE_WIDTH
})
