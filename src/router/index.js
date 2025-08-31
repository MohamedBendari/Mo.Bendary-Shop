import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Products from '../views/Products.vue'
import About from '../views/About.vue'
import Cart from '../views/Cart.vue'
import Contact from '../views/Contact.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/products', component: Products },
  { path: '/about', component: About },
  { path: '/cart', component: Cart },
  { path: '/contact', component: Contact }
]

export default createRouter({
  history: createWebHistory(),
  routes,
})
