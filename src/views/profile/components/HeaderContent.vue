<template>
  <div class="header">
    <div class="content">
      <img src="~assets/img/avatar.png" alt="">
      <div class="wrapper">
        <div class="operation">
          <div class="login">登录</div>
          <span>/</span>
          <div class="register">注册</div>
        </div>
        <div class="tips">登录后享受更多特权</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style scoped>
  .header {
    /* width: 100vw; */
    background-image: linear-gradient(90deg,#0af,#0085ff);;
    display: flex;
    /* align-items: center; */
    justify-content: center;
    padding: 6.5vw 0;
  }
  .header .content {
    display: flex;
    height: 16vw;
    width: 88%;
  }
  .header img {
    height: 100%;
    border-radius: 50%;
  }
  .header .wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #fff;
    margin-left: 3vw;
  }
  .header .wrapper .operation {
    display: flex;
    font-size: 5.5vw;
    font-weight: bold;
    margin-bottom: 2vw;
  }
  .login, .register {
    cursor: pointer;
  }
  .header .wrapper .tips {
    font-size: 3vw;
  }
</style>