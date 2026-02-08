import type { Plugin } from 'vue';
import type EmployeeQueryRaw from '../src/components/EmployeeQuery.vue'

type EmployeeQuery = type of EmployeeQueryRaw

/** 插件类型 */
interface ZhuoTsVuePlugin extends Plugin {
  install(app: import('vue').App, ...options: any[]) => void;
};

declare const plugin: ZhuoTsVuePlugin

export { EmployeeQuery };
export default plugin;