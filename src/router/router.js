import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home'
import Order from '@/components/order/Order'
Vue.use(Router)

const router = new Router({
  routes : [
    { path: '/', name: 'Home', component: Home },
    { path: '/order', name: 'Order',component: Order }
  ]
})

export default router