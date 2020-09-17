<template>
  <div class="pay">
    <pay-top-bar/>
    <!-- 订单信息部分 -->
    <h3>订单信息：</h3>
    <order-detail-info :priceColor="'orangered'" :isShowGoPay="false"/>
    <!-- 支付方式部分 -->
    <ul class="payment-type">
      <li>
        <img src="~assets/img/alipay.png">
        <i class="fa fa-check-circle"></i>
      </li>
      <li>
        <img src="~assets/img/wechat.png">
      </li>
    </ul>
    <div class="payment-button">
      <button @click="confirmPay">确认支付</button>
    </div>
  </div>
</template>

<script>
  import PayTopBar from './components/PayTopBar'
  import OrderDetailInfo from 'components/order/OrderDetailInfo'

  import {pay} from 'api/djf/pay'

  export default {
    components: {
      PayTopBar,
      OrderDetailInfo
    },
    data() {
      return {
        isShow: false
      }
    },
    methods: {
      showDetailList() {
        this.isShow = !this.isShow
      },
      confirmPay() {
        pay().then(data => {
          console.log(data)
          let form = data
          const div = document.createElement('div')
          div.innerHTML = form
          document.body.appendChild(div)
          // document.forms[0].submit()
        })
      }
    }
  }
</script>

<style scoped>
  .pay {
    height: 100vh;
    position: relative;
    z-index: 9;
    background-color: #fff;
  }
  /****************** 订单信息部分 ******************/
  .pay h3{
    /* margin-top: 12vw; */
    box-sizing: border-box;
    padding: 4vw 4vw 0;
    font-size: 4vw;
    font-weight: 300;
    color: #999;
  }
  /* .pay .order-info{
    box-sizing: border-box;
    padding: 4vw;
    font-size: 4vw;
    color: #666;
    
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .pay .order-info p:last-child{
    color: orangered;
  } */

  /****************** 支付方式部分 ******************/
  .payment-type{
    width: 100%;
  }
  .payment-type li{
    width: 100%;
    box-sizing: border-box;
    padding: 4vw;
    
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .payment-type li img{
    width: 33vw;
    height: 8.9vw;
  }
  .payment-type li .fa-check-circle{
    font-size: 5vw;
    color: #38CA73;
  }
  .payment-button{
    width: 100%;
    box-sizing: border-box;
    padding: 4vw;
  }
  .payment-button button{
    width: 100%;
    height: 10vw;
    border: none;
    /*去掉外轮廓线*/
    outline: none;
    border-radius: 4px;
    background-color: #38CA73;
    color: #fff;
  }
</style>