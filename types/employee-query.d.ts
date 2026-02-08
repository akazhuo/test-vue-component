import type { DefineComponent, Plugin } from 'vue';

declare const EmployeeQuery: DefineComponent;

/** 插件类型 */
declare const plugin: Plugin & {
  install(app: import('vue').App): void;
};

export { EmployeeQuery };
export default plugin;