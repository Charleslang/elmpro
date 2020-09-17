<template>
  <div class="register">
    <register-top-bar/>
    <!-- 表单部分 -->
    <ul class="form-box">
      <li>
        <div class="title">
          手机号码：
        </div>
        <div class="content">
          <input type="text" placeholder="手机号码" v-model="user.userTel">
        </div>
      </li>
      <li>
        <div class="title">
          密码：
        </div>
        <div class="content">
          <input type="password" placeholder="密码" v-model="user.password">
        </div>
      </li>
      <li>
        <div class="title">
          确认密码：
        </div>
        <div class="content">
          <input type="password" placeholder="确认密码">
        </div>
      </li>
      <li>
        <div class="title">
          用户名称：
        </div>
        <div class="content">
          <input type="text" placeholder="用户名称" v-model="user.userName">
        </div>
      </li>
      <li>
        <div class="title">
          性别：
        </div>
        <div class="content" style="font-size: 3vw;">
          <input type="radio" name="sex" value="1" style="width:6vw;height: 3.2vw;" v-model="user.userSex">男
          <input type="radio" name="sex" value="0" style="width:6vw;height: 3.2vw;" v-model="user.userSex">女
        </div>
      </li>
    </ul>
    
    <div class="button-login">
      <button @click="registerUser">注册</button>
    </div>
  </div>
</template>

<script>
  import RegisterTopBar from './components/RegisterTopBar'

  export default {
    components: {
      RegisterTopBar
    },
    data() {
      return {
        user: {
          userName: '',
          password: '',
          userSex: 1,
          userTel: ''
        }
      }
    },
    methods: {
      registerUser() {
        console.log("注册")
      }
    }
  }
</script>

<style scoped>
  /****************** 表单部分 ******************/
  .register .form-box{
    width: 100%;
    /* margin-top: 12vw; */
  }
  .register .form-box li{
    box-sizing: border-box;
    padding: 4vw 3vw 0 3vw;
    display: flex;
    align-items: center;
  }
  .register .form-box li .title{
    flex: 0 0 18vw;
    font-size: 3vw;
    font-weight: 700;
    color: #666;
  }
  .register .form-box li .content{
    flex: 1;
  }
  .register .form-box li .content input{
    border: none;
    outline: none;
    width: 100%;
    height: 4vw;
    font-size: 3vw;
  }
  .register .button-login{
    width: 100%;
    box-sizing: border-box;
    padding: 4vw 3vw 0 3vw;
  }
  .register .button-login button{
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
  .register .button-register{
    width: 100%;
    box-sizing: border-box;
    padding: 4vw 3vw 0 3vw;
  }
  .register .button-register button{
    width: 100%;
    height: 10vw;
    font-size: 3.8vw;
    font-weight: 700;
    color: #666;
    background-color: #EEE;
    border-radius: 4px;
    
    border: none;
    outline: none;
    border: solid 1px #DDD;
  }
</style>