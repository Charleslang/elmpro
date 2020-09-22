<template>
  <div class="profile">
    <div class="header">
      <div class="content">
        <img src="~assets/img/avatar.png" alt="">
        <div class="wrapper">
          <template v-if="Object.keys(getUser).length && getToken">
            <div class="operation">
              {{getUser.userName}}
            </div>
            <div class="tips">{{getUser.tel}}138***138138</div>
          </template>
          <template v-else>
            <div class="operation">
              <div class="login" @click="goLogin">登录</div>
              <span>/</span>
              <div class="register" @click="goRegister">注册</div>
            </div>
            <div class="tips">登录后享受更多特权</div>
          </template>
        </div>
      </div>
    </div>
    <img src="~assets/img/profile_center.png" alt="">
    <img src="~assets/img/profile_bottom.png" alt="">
    <div class="logout" v-if="Object.keys(getUser).length && getToken" @click="userLogout">退出登录</div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'

  import {getUserInfo, logout} from 'api/djf/profile'

  export default {
    data() {
      return {
        // 当前用户
        user: {}
      }
    },
    components: {
    },
    created() {
    },
    activated() {
      console.log('profile 激活')
      if ((!(Object.keys(this.getUser).length > 0)) && this.getToken != '') {
        getUserInfo().then(res => {
          if (res.code === 200) {
            this.$store.commit('changeUser', res.data)
            console.log('成功获取用户信息')
            console.log(this.getUser)
          } else {
            console.log(res.data)
          }
        }, err => {
          alert(err.data)
        })
      }
    },
    computed: {
      ...mapGetters(['getUser', 'getToken'])
    },
    methods: {
      goLogin() {
        this.$router.push('/login')
      },
      goRegister() {
        this.$router.push('/register')
      },
      userLogout() {
        logout().then(res => {
          if (res.code === 200) {
            this.$store.commit('clearUserData')
            console.log(res.data)
          }
        }, err => {
          alert("出错了, 请稍后再试")
        })
      }
    }
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
  .profile {
    height: 100vh;
    background-color: #f5f5f5;
  }
  .profile>img {
    width: 100%;
  }
  .profile>img:last-of-type {
    margin-top: 2vw;
  }
  .logout {
    color: #ff5339;
    margin-top: 2vw;
    background-color: #fff;
    text-align: center;
    font-size: 4.3vw;
    font-weight: 600;
    padding: 3.7vw 0;
    cursor: pointer;
  }
</style>