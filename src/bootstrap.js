import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import VXETable from 'vxe-table'
import 'vxe-table/lib/style.css'
import ElementUI from 'element-ui'

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(router)
Vue.use(VXETable)
Vue.config.productionTip = false


new Vue({
  render: h => h(App),
}).$mount('#app')