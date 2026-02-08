import EmployeeQuery from './components/EmployeeQuery.vue';

import { type App } from 'vue';
// 创建插件对象（不加 : Plugin 类型注解！TypeScript 会精确推导 plugin 是 { install: (app: App) => void }）
const plugin = {
install(app: App) {
    app.component('EmployeeQuery', EmployeeQuery)
  }
}
// 支持按需引入
export { EmployeeQuery }
export default plugin