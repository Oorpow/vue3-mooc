/**
 * 根据用户屏幕宽度动态计算REM基准值
 */
export const useRem = () => {
	const MAX_FONT_SIZE = 40
	// 监听html文档解析完成的事件
	document.addEventListener('DOMContentLoaded', () => {
		const html = document.querySelector('html')
		let fontSize = window.innerWidth / 10
		fontSize = fontSize > MAX_FONT_SIZE ? MAX_FONT_SIZE : fontSize
		html!.style.fontSize = fontSize + 'px'
	})
}
