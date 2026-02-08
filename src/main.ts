import EmployeeQuery from './components/EmployeeQuery.vue';

import { type App } from 'vue';
// 支持按需引入
export { EmployeeQuery }
export default {
  install(app: App) {
    app.component('EmployeeQuery', EmployeeQuery)
  }
}