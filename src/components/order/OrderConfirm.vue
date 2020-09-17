<template>
  <div class="order-confirm">
    <!-- 订单信息部分 -->
    <div class="order-info">
      <h5>订单配送至：</h5>
      <div class="order-info-address" @click="goAddress">
        <p>沈阳市浑南区智慧四街1-121号</p>
        <i class="fa fa-angle-right"></i>
      </div>
      <p>习近平先生 13656785432</p>
    </div>
    
    <h3>万家饺子（软件园E18店）</h3>

    <order-goods-list/>

    <div class="order-deliveryfee">
      <p>配送费</p>
      <p>&#165;3</p>
    </div>

    <!-- 合计部分 -->
    <div class="total">
      <div class="total-left">
        &#165;49
      </div>
      <div class="total-right" @click="goPayment">
        去支付
      </div>
    </div>
  </div>
</template>

<script>
  import OrderGoodsList from './OrderGoodsList'

  export default {
    components: {
      OrderGoodsList
    },
    methods: {
      goPayment() {
        this.$router.push('/pay')
      },
      goAddress() {
        this.$router.push('/address')
      }
    }
  }
</script>

<style scoped>
  .order-confirm {
    position: relative;
    z-index: 9;
  }
  /****************** 订单信息部分 ******************/
  .order-info{
    /*注意这里，不设置高，靠内容撑开。因为地址有可能折行*/
    width: 100%;
    /* margin-top: 12vw; */
    background-color: #0097EF;
    box-sizing: border-box;
    padding: 2vw;
    color: #fff;
  }
  .order-info h5{
    font-size: 3vw;
    font-weight: 300;
  }
  .order-info .order-info-address{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    font-weight: 700;
    user-select: none;
    cursor: pointer;
    margin: 1vw 0;
  }
  .order-info .order-info-address p{
    width: 90%;
    font-size: 5vw;
  }
  .order-info .order-info-address i{
    font-size: 6vw;
  }
  .order-info p{
    font-size: 3vw;
  }

  h3{
    box-sizing: border-box;
    padding: 3vw;
    font-size: 4vw;
    color: #666;
    border-bottom: solid 1px #DDD;
  }
  .order-deliveryfee{
    width: 100%;
    height: 16vw;
    box-sizing: border-box;
    padding: 3vw;
    color: #666;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 3.5vw;
    margin-bottom: 14vw;
  }

  /****************** 订单合计部分 ******************/
  .total{
    width: 100%;
    height: 14vw;
    position: fixed;
    left: 0;
    bottom: 0;
    display: flex;
  }
  .total .total-left{
    flex: 2;
    background-color: #505051;
    color: #fff;
    font-size: 4.5vw;
    font-weight: 700;
    user-select: none;
    
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .total .total-right{
    flex: 1;
    background-color: #38CA73;
    color: #fff;
    font-size: 4.5vw;
    font-weight: 700;
    user-select: none;
    cursor: pointer;
    
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>