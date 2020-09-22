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
          <input type="text" placeholder="手机号码" v-model.trim="user.userTel" 
            @blur="validate(user.userTel, 'tel')"
            maxlength="11">
        </div>
      </li>
      <div class="tips" v-show="errorMessage.tel">{{errorMessage.tel}}</div>
      <li>
        <div class="title">
          密码：
        </div>
        <div class="content">
          <input type="password" placeholder="密码" v-model.trim="user.password" 
          @blur="validate(user.password, 'password')"
          maxlength="18">
        </div>
      </li>
      <div class="tips" v-show="errorMessage.password">{{errorMessage.password}}</div>
      <li>
        <div class="title">
          确认密码：
        </div>
        <div class="content">
          <input type="password" placeholder="确认密码" v-model.trim="confirmPwd" 
            @blur="validate(confirmPwd, 'confirmPwd')"
            maxlength="18">
        </div>
      </li>
      <div class="tips" v-show="errorMessage.confirmPwd">{{errorMessage.confirmPwd}}</div>
      <li>
        <div class="title">
          用户名称：
        </div>
        <div class="content">
          <input type="text" placeholder="用户名称" v-model.trim="user.userName" 
          @blur="validate(user.userName, 'userName')"
          maxlength="20">
        </div>
      </li>
      <div class="tips" v-show="errorMessage.userName">{{errorMessage.userName}}</div>
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
      <button @click="registerUser(user)">注册</button>
    </div>
    
  </div>
</template>

<script>
  import RegisterTopBar from './components/RegisterTopBar'

  import {register} from 'api/djf/register'

  export default {
    name: 'Register',
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
        },
        confirmPwd: '',
        errorMessage: {
          tel: '',
          password: '',
          confirmPwd: '',
          userName: ''
        }
      }
    },
    methods: {
      validate(data, type) {
        if (typeof data === 'object') {
          if (!(/^1([358]\d|4[01456789]|6[2567]|7[012345678]|9[012356789])\d{8}$/.test(data.userTel))) {
            this.errorMessage.tel = '手机格式不正确'
            return false
          } else {
            this.errorMessage.tel = ''
          }
          if(data.password.length < 6 || data.password.length > 18) {
            this.errorMessage.password = '密码为6 - 18位'
            return false
          } else {
            this.errorMessage.password = ''
          }
          if (data.password != this.user.password) {
            this.errorMessage.confirmPwd = '两次输入的密码不一致'
            return false
          } else {
            this.errorMessage.confirmPwd = ''
          }
          if (data.userName.length <= 0) {
            this.errorMessage.userName = '用户名不能为空'
            return false
          } else {
            this.errorMessage.userName = ''
          }
        } else {
          if (type === 'tel') {
            if (!(/^1([358]\d|4[01456789]|6[2567]|7[012345678]|9[012356789])\d{8}$/.test(data))) {
              this.errorMessage.tel = '手机格式不正确'
              return false
            } else {
              this.errorMessage.tel = ''
            }
          } else if (type === 'password') {
            if(data.length < 6 || data.length > 18) {
              this.errorMessage.password = '密码为6 - 18位'
              return false
            } else {
              this.errorMessage.password = ''
            }
          } else if (type === 'confirmPwd') {
            if (data != this.user.password) {
              this.errorMessage.confirmPwd = '两次输入的密码不一致'
              return false
            } else {
              this.errorMessage.confirmPwd = ''
            }
          } else if (type === 'userName') {
            if (data.length <= 0) {
              this.errorMessage.userName = '用户名不能为空'
              return false
            } else {
              this.errorMessage.userName = ''
            }
          }
        }
        return true
      },
      registerUser(user) {
        if (this.validate(user)) {
          register(user).then(res => {
            if (res.code === 200) {
              console.log(res.data)
              this.$store.commit('changeToken', res.data)
              this.$router.push('/profile')
            } else {
              alert(res.message)
            }
          }, err => {
            console.log(err.message)
          })
        }
      }
    }
  }
</script>

<style scoped>
  .register {
    height: 100vh;
    position: relative;
    z-index: 9;
    background-color: #fff;
  }
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

  .tips {
    box-sizing: border-box;
    padding: 4vw 3vw 0 3vw;
    color: #F56C6C;
    font-size: 3.8vw;
  }
</style>