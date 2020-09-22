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
          <input type="text" placeholder="手机号码" @input="change" @change="change" :value="username" maxlength="11">
        </div>
      </li>
      <li>
        <div class="title">
          密码：
        </div>
        <div class="content">
          <input type="password" placeholder="密码" v-model.trim="password" maxlength="18">
        </div>
      </li>
    </ul>
    <div class="tips" v-show="errorMessage.length > 0">
      <i class="fa fa-exclamation-circle" aria-hidden="true"></i>
      <span>{{errorMessage}}</span>
    </div>
    <div class="button-login">
      <button @click="userLogin(username, password)">登陆</button>
    </div>
    <div class="button-register">
      <button @click="goRegister">去注册</button>
    </div>
  </div>
</template>

<script>
  import LoginTopBar from './components/LoginTopBar'

  import {login, testToken} from 'api/djf/login'

  export default {
    name: 'Login',
    components: {
      LoginTopBar
    },
    data() {
      return {
        userName: '',
        password: '',
        errorMessage: ''
      }
    },
    computed: {
      username() {
        return this.userName
      }
    },
    methods: {
      goRegister() {
        this.$router.push('/register')
      },
      userLogin(username, password) {
        if (!(/^1([358]\d|4[01456789]|6[2567]|7[012345678]|9[012356789])\d{8}$/.test(username))) {
          this.errorMessage = '请输入正确的手机号'
          return
        } else if(/^\s*$/.test(password)){
          this.errorMessage = '请输入有效的密码'
          return
        } else {
          login(username, password.trim()).then(res => {
            if (res.code === 200) {
              this.$store.commit('changeToken', res.data)
              console.log('login ->' + this.$store.state.token)
              this.$router.go(-1)
              // this.$router.push('/home')
              // alert('登录成功')
            } else {
              alert(res.message)
            }
          }, err => {
            alert(err.message)
          })
        }
      },
      goTestToken() {
        testToken().then(res => {
          console.log(res)
        }, err => {
          localStorage.removeItem('token')
          console.log(err)
          this.$router.push('/login')
        })
      },
      goRegister() {
        this.$router.push('/register')
      },
      change(e) {
        let val = e.target.value.trim()
        // 只能是正整数或空,可根据需求修改正则
        // value.replace(/[^\d]/g,'')
        if (/^[0-9]\d*$|^$/.test(val)) {
            this.userName = val
        } else {
            e.target.value = this.userName
        }
      }
    }
  }
</script>

<style scoped>
  .login {
    height: 100vh;
    position: relative;
    z-index: 9;
    background-color: #fff;
  }
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
  .tips {
    box-sizing: border-box;
    padding: 4vw 3vw 0 3vw;
    color: #F56C6C;
    font-size: 4vw;
  }
  .tips span {
    margin-left: 2vw;
  }
</style>