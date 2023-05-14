import Vue from 'vue'
import router from '@/router'
import App from './App.vue'
import VXETable from 'vxe-table'
import 'vxe-table/lib/style.css'
import ElementUI from 'element-ui'

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(VXETable)
Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')