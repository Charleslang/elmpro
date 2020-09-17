<template>
  <!-- 横幅广告部分（注意：此处有背景图片） -->
  <div class="banner">
    <h3>品质套餐</h3>
    <p>搭配齐全吃得好</p>
    <a>立即抢购 &gt;</a>
  </div>
</template>

<script>
  export default {

  }
</script>

<style scoped>
  /****************** 横幅广告部分 ******************/
  .banner{
    /**
    * 设置容器宽度95%，然后水平居中，这样两边留白; 
    * 这里不能用padding，因为背景图片也会覆盖padding
    */
    width: 95%;
    margin: 0 auto;
    height: 29vw;
    
    /*此三个样式组合，可以保证背景图片充满整个容器*/
    background-image: url(~assets/img/index_banner.png);
    background-repeat: no-repeat;
    background-size: cover;
    
    box-sizing: border-box;
    padding: 2vw 6vw;
  }
  .banner h3{
    font-size: 4.2vw;
    margin-bottom: 1.2vw;
  }
  .banner p{
    font-size: 3.4vw;
    color: #666;
    margin-bottom: 2.4vw;
  }
  .banner a{
    font-size: 3vw;
    color: #C79060;
    font-weight: 700;
  }
</style>