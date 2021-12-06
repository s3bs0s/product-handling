import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './components/Home.vue'
import Products from './components/Products.vue'
import Login from './components/Login.vue'
import Register from './components/Register.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', name: 'Home', component: Home, meta: { requireAuth: true } },
    { path: '/products', name: 'Products', component: Products, meta: { requireAuth: true } },
    { path: '/login', name: 'Login', component: Login },
    { path: '/register', name: 'Register', component: Register }
  ]
})

router.beforeEach((to, from, next) => {
  const routeWithAuth = to.matched.some(record => record.meta.requireAuth)

  if (routeWithAuth && !localStorage.getItem('authorizationToken')){
    next({ name: 'Login' })
  } else {
    next()
  }
})

export default router