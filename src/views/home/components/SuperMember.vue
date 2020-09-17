<template>
  <!-- 超级会员部分 -->
  <div class="supermember">
    <div class="left">
      <img src="~assets/img/super_member.png">
      <h3>超级会员</h3>
      <p>&#8226; 每月享超值权益</p>
    </div>
    <div class="right">
      立即开通 &gt;
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style scoped>
  /****************** 超级会员部分 ******************/
  .supermember{
    /*这里也设置容器宽度95%，不能用padding，因为背景色也会充满padding*/
    width: 95%;
    margin: 0 auto;
    height: 11.5vw;
    background-color: #FEEDC1;
    margin-top: 1.3vw;
    border-radius: 2px;
    color: #644F1B;
    
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .supermember .left{
    display: flex;
    align-items: center;
    margin-left: 4vw;
    user-select: none;
  }
  .supermember .left img{
    width: 6vw;
    height: 6vw;
    margin-right: 2vw;
  }
  .supermember .left h3{
    font-size: 4vw;
    margin-right: 2vw;
  }
  .supermember .left p{
    font-size: 3vw;
  }
  .supermember .right{
    font-size: 3vw;
    margin-right: 4vw;
    cursor: pointer;
  }
</style>