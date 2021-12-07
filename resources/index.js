import Vue from 'vue'
import axios from 'axios'
import store from './store'
import router from './router'
import App from './App.vue'
import './assets/sass/app.scss'
import './assets/fonts/style.css'

// Add Axios
Vue.prototype.$http = axios;
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: createElement => createElement(App)
}).$mount('#app')