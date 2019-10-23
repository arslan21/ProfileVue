import 'material-design-icons-iconfont/dist/material-design-icons.css'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import server from './server'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import Axios from 'axios'


Vue.use(Vuetify)
Vue.prototype.$http = Axios;
const token = localStorage.getItem('token')
if (token) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = token
}

Vue.config.productionTip = false

new Vue({
  router,
  store,
  server,
  render: h => h(App)
}).$mount('#app')
