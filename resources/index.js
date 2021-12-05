import Vue from 'vue'
import App from './components/App.vue'
import './assets/sass/app.scss'

new Vue({
  render: createElement => createElement(App)
}).$mount('#app')