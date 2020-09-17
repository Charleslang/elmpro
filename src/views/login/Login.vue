<template>
  <div class="login">
    <login-top-bar/>
    <!-- 表单部分 -->
    <ul class="form-box">
      <li>
        <div class="title">
          手机号码：
        </div>
        <div class="content">
          <input type="text" placeholder="手机号码" v-model="username">
        </div>
      </li>
      <li>
        <div class="title">
          密码：
        </div>
        <div class="content">
          <input type="password" placeholder="密码" v-model="password">
        </div>
      </li>
    </ul>
    
    <div class="button-login">
      <button>登陆</button>
    </div>
    <div class="button-register">
      <button @click="goRegister">去注册</button>
    </div>
  </div>
</template>

<script>
  import LoginTopBar from './components/LoginTopBar'

  export default {
    components: {
      LoginTopBar
    },
    data() {
      return {
        username: '',
        password: ''
      }
    },
    methods: {
      goRegister() {
        this.$router.push('/register')
      }
    }
  }
</script>

<style scoped>
  /****************** 表单部分 ******************/
  .login .form-box{
    width: 100%;
    /* margin-top: 12vw; */
  }
  .login .form-box li{
    box-sizing: border-box;
    padding: 4vw 3vw 0 3vw;
    display: flex;
    align-items: center;
  }
  .login .form-box li .title{
    flex: 0 0 18vw;
    font-size: 3vw;
    font-weight: 700;
    color: #666;
  }
  .login .form-box li .content{
    flex: 1;
  }
  .login .form-box li .content input{
    border: none;
    outline: none;
    width: 100%;
    height: 4vw;
    font-size: 3vw;
  }
  .login .button-login{
    width: 100%;
    box-sizing: border-box;
    padding: 4vw 3vw 0 3vw;
  }
  .login .button-login button{
    width: 100%;
    height: 10vw;
    font-size: 3.8vw;
    font-weight: 700;
    color: #fff;
    background-color: #38CA73;
    border-radius: 4px;
    
    border: none;
    outline: none;
  }
  .login .button-register{
    width: 100%;
    box-sizing: border-box;
    padding: 4vw 3vw 0 3vw;
  }
  .login .button-register button{
    width: 100%;
    height: 10vw;
    font-size: 3.8vw;
    font-weight: 700;
    /*与上面登陆按钮不同的只有颜色、背景色、边框不同*/
    color: #666;
    background-color: #EEE;
    border: solid 1px #DDD;
    border-radius: 4px;
    
    border: none;
    outline: none;
  }
</style>