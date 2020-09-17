<template>
  <div>
    <order-top-bar/>
    <!-- 订单列表部分 -->
    <h3>未支付订单信息：</h3>
    <order-detail-info :priceColor="'orangered'" :isShowGoPay="true"/>

    <h3>已支付订单信息：</h3>
    <order-detail-info :priceColor="'#666'" :isShowGoPay="false"/>
  </div>
</template>

<script>
  import OrderTopBar from './components/OrderTopBar'

  import OrderDetailInfo from 'components/order/OrderDetailInfo'

  export default {
    components: {
      OrderTopBar,
      OrderDetailInfo
    }
  }
</script>

<style scoped>
  h3{
    /* margin-top: 12vw; */
    box-sizing: border-box;
    padding: 4vw;
    font-size: 4vw;
    font-weight: 300;
    color: #999;
  }
  h3:last-of-type {
    margin-top: 12vw;
  }
</style>