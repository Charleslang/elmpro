<template>
  <div class="wrapper">
    <!-- 商家logo部分 -->
    <div class="business-logo">
      <img src="~assets/img/sj01.png">
    </div>
    <!-- 商家信息部分 -->
    <div class="business-info">
      <h1>万家饺子（软件园E18店）</h1>
      <p>&#165;15起送 &#165;3配送</p>
      <p>各种饺子炒菜</p>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style scoped>
  /****************** 商家logo部分 ******************/
  .wrapper .business-logo{
    width: 100%;
    height: 35vw;
    /*使用上外边距避开header部分*/
    /* margin-top: 12vw; */
    
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .wrapper .business-logo img{
    width: 40vw;
    height: 30vw;
    border-radius: 5px;
  }

  /****************** 商家信息部分 ******************/
  .wrapper .business-info{
    width: 100%;
    height: 20vw;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .wrapper .business-info h1{
    font-size: 5vw;
  }
  .wrapper .business-info p{
    font-size: 3vw;
    color: #666;
    margin-top: 1vw;
  }
</style>