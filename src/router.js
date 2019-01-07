import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Order from '@/views/Order'
import PersonalCenter from '@/views/PersonalCenter'
import Membership from '@/views/Membership'
import GoodsDetail from '@/views/GoodsDetail'
Vue.use(Router)

const router = new Router({
  routes : [
    { path: '/', name: 'Home', component: Home },
    { path: '/order', name: 'Order',component: Order },
    { path: '/personal', name: 'PersonalCenter', component: PersonalCenter},
    { path: '/membership', name: 'Membership', component: Membership},
    { path: '/goods-detail/:id', name: 'GoodsDetail', component: GoodsDetail}
  ]
})

export default router