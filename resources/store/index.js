import Vue from 'vue'
import Vuex from 'vuex'

// Modules
import ProductsModule from './modules/products'
import AuthUserModule from './modules/authUser'
import AlertsModule from './modules/alerts'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    ProductsModule,
    AuthUserModule,
    AlertsModule
  }
})