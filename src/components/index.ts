import { defineAsyncComponent, type App } from "vue";

export default {
	/**
	 * 给components文件夹下的通用组件，自动注册为全局组件
	 * NOTE: 1. import.meta.glob读取文件夹的内容
	 * NOTE: 2. 获取所有组件实例
	 * NOTE: 3. 遍历组件实例列表，通过app.component进行注册
	 * @param app
	 */
	install(app: App<Element>) {
		const components = import.meta.glob("./*/index.vue");
		for (const [path, dynamicFn] of Object.entries(components)) {
			const componentName = path.replace("./", "").split("/")[0];
			app.component("My" + componentName, defineAsyncComponent(dynamicFn as any));
		}
	},
};
