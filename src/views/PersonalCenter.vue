<template>
  <div>
    <div class="user">
      <img src="" alt="">
      <p>NULL</p>
    </div>
    <div class="feature-list">
      <van-cell title="会员套餐" is-link to="/membership" />
      <van-cell title="积分商城" is-link to="" />
      <van-cell title="订单记录" is-link to="/" />
      <van-cell title="幸运抽奖" is-link to="" />
      <van-cell title="中奖纪录" is-link to="/" />
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
  .user {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 160px;
    padding-top: 40px;
  }
  .user img {
    width: 60px;
    height: 60px;
    background: #afc;
    border-radius: 50%;
  }
</style>


