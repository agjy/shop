<template>
  <div>
    <van-swipe indicator-color="white">
      <van-swipe-item><img src="" alt=""></van-swipe-item>
      <van-swipe-item>2</van-swipe-item>
      <van-swipe-item>3</van-swipe-item>
      <van-swipe-item>4</van-swipe-item>
    </van-swipe>
    <div class="goods-info">
      <div class="goods-title">
        男士毛衣
      </div>
      <div class="goods-price">
        ￥199.0
      </div>
      <div>
        运费￥10.0
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      id:this.$route.params.id,
    }
  },
  mounted() {
    console.log(this.id);
  }
}
</script>

