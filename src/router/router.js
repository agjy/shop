import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home'
import Order from '@/components/order/Order'
import PersonalCenter from '@/components/personal-center/PersonalCenter'
import Membership from '@/components/membership/Membership'
Vue.use(Router)

const router = new Router({
  routes : [
    { path: '/', name: 'Home', component: Home },
    { path: '/order', name: 'Order',component: Order },
    { path: '/personal', name: 'PersonalCenter', component: PersonalCenter},
    { path: '/membership', name: 'Membership', component: Membership}

  ]
})

export default router