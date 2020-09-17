<template>
  <!-- 购物车部分 -->
  <div class="cart">
    <div class="cart-left">
      <div class="cart-left-icon">
        <i class="fa fa-shopping-cart"></i>
        <div class="cart-left-icon-quantity">3</div>
      </div>
      <div class="cart-left-info">
        <p>&#165;12.88</p>
        <p>另需配送费3元</p>
      </div>
    </div>
    <div class="cart-right">
      <!-- 不够起送费 -->
      <!--
      <div class="cart-right-item">
        &#165;15起送
      </div>
      -->
      <!-- 达到起送费 -->
      <div class="cart-right-item" @click="goPayClick">
          去结算
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      goPayClick() {
        this.$router.push('/businessOrder')
      }
    }
  }
</script>

<style scoped>
  /****************** 购物车部分 ******************/
  .cart{
    width: 100%;
    height: 14vw;
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 9;
    display: flex;
  }
  .cart .cart-left{
    flex: 2;
    background-color: #505051;
    display: flex;
  }
  .cart .cart-left .cart-left-icon{
    width: 16vw;
    height: 16vw;
    box-sizing: border-box;
    border: solid 1.6vw #444;
    border-radius: 8vw;
    background-color: #3190E8;
    font-size: 7vw;
    color: #fff;
    
    display: flex;
    justify-content: center;
    align-items: center;
    
    margin-top: -4vw;
    margin-left: 3vw;
    
    position: relative;
  }
  .cart .cart-left .cart-left-icon-quantity{
    width: 5vw;
    height: 5vw;
    border-radius: 2.5vw;
    background-color: red;
    color: #fff;
    font-size: 3.6vw;
    
    display: flex;
    justify-content: center;
    align-items: center;
    
    position: absolute;
    right: -1.5vw;
    top: -1.5vw;
  }
  .cart .cart-left .cart-left-info p:first-child{
    font-size: 4.5vw;
    color: #fff;
    margin-top: 1vw;
  }
  .cart .cart-left .cart-left-info p:last-child{
    font-size: 2.8vw;
    color: #AAA;
  }

  .cart .cart-right{
    flex: 1;
  }
  /*达到起送费时的样式*/
  .cart .cart-right .cart-right-item{
    width: 100%;
    height: 100%;
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