<template>
  <div id="app">
    <router-view>
    </router-view>
    <van-tabbar v-show="true" v-model="active">
      <van-tabbar-item icon="home-o"><router-link to="/">首页</router-link></van-tabbar-item>
      <van-tabbar-item icon="search" dot><router-link to="/order">订单</router-link></van-tabbar-item>
      <van-tabbar-item icon="friends-o" info="5"><router-link to="/personal">个人中心</router-link></van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  },
  data() {
    return {
      active: 0
    }
  }
}
</script>

<style>
#app {
  padding-bottom: 60px;
}
</style>
