import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './components/Home.vue'
import Products from './components/products/Products.vue'
import Login from './components/auth/Login.vue'
import Register from './components/auth/Register.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', name: 'home', component: Home, meta: { requireAuth: true } },
    { path: '/products', name: 'products', component: Products, meta: { requireAuth: true } },
    { path: '/login', name: 'login', component: Login },
    { path: '/register', name: 'register', component: Register }
  ]
})

router.beforeEach((to, from, next) => {
  const routeWithAuth = to.matched.some(record => record.meta.requireAuth)

  if (routeWithAuth && !localStorage.getItem('authorizationToken')){
    next({ name: 'login' })
  } else if (!routeWithAuth && localStorage.getItem('authorizationToken')) {
    next({ name: 'home' })
  } else {
    next()
  }
})

export default router