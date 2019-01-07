<template>
  <div>
    <van-search placeholder="请输入搜索关键词" v-model="value" />
    <van-row class="category">
      <van-col class="category-item" span="6">
        <img src="" alt="">
        <span>水果</span>
      </van-col>
      <van-col class="category-item" span="6">
        <img src="" alt="">
        <span>水果</span>
      </van-col>
      <van-col class="category-item" span="6">
        <img src="" alt="">
        <span>水果</span>
      </van-col>
      <van-col class="category-item" span="6">
        <img src="" alt="">
        <span>水果</span>
      </van-col>
      <van-col class="category-item" span="6">
        <img src="" alt="">
        <span>水果</span>
      </van-col>
      <van-col class="category-item" span="6">
        <img src="" alt="">
        <span>水果</span>
      </van-col>
      <van-col class="category-item" span="6">
        <img src="" alt="">
        <span>水果</span>
      </van-col>
      <van-col class="category-item" span="6">
        <img src="" alt="">
        <span>水果</span>
      </van-col>
    </van-row>

    <van-swipe class="swiper" :autoplay="3000" indicator-color="white">
      <van-swipe-item>1</van-swipe-item>
      <van-swipe-item>2</van-swipe-item>
      <van-swipe-item>3</van-swipe-item>
      <van-swipe-item>4</van-swipe-item>
    </van-swipe>
    <div class="good-list">
      <router-link to="/goods-detail/2">
        <van-card
          tag="限时折扣"
          price="2.00"
          desc="描述信息"  
          title="商品标题"
          :thumb="imageURL"
          origin-price="10.00"
        />
      </router-link>
      
      <van-card
        tag="限时折扣"
        price="2.00"
        desc="描述信息"  
        title="商品标题"
        :thumb="imageURL"
        origin-price="10.00"
      />
      <van-card
        tag="限时折扣"
        price="2.00"
        desc="描述信息"  
        title="商品标题"
        :thumb="imageURL"
        origin-price="10.00"
      />
      <van-card
        tag="限时折扣"
        price="2.00"
        desc="描述信息"  
        title="商品标题"
        :thumb="imageURL"
        origin-price="10.00"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: '',
      imageURL: require('../assets/lemon.jpg')
    }
  }
}
</script>

<style scoped>
  .van-search {
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 99;
  }
  .category {
    margin-top: 44px;
  }
  .category-item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 90px;
  }
  .category-item img {
    display: block;
    width: 50px;
    height: 50px;
    background: #fab;
  }
  .swiper {
    height: 150px;
    background: #ffa;
  }
  .goods-list {
    margin-top: 20px;
  }
</style>


