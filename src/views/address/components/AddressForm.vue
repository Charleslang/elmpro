<template>
  <div class="form">
    <!-- 表单部分 -->
    <ul class="form-box">
      <li>
        <div class="title">
          联系人：
        </div>
        <div class="content">
          <input type="text" placeholder="联系人姓名" v-model.trim.lazy="orderUser.name">
        </div>
      </li>
      <li>
        <div class="title">
          性别：
        </div>
        <div class="content" style="font-size: 3vw;">
          <input type="radio" name="sex" style="width:6vw;height:3.2vw;" v-model.number="orderUser.sex" value="1">男
          <input type="radio" name="sex" style="width:6vw;height:3.2vw;" v-model.number="orderUser.sex" value="0">女
        </div>
      </li>
      <li>
        <div class="title">
          电话：
        </div>
        <div class="content">
          <input type="tel" placeholder="电话" v-model.trim="orderUser.tel">
        </div>
      </li>
      <li>
        <div class="title">
          收货地址：
        </div>
        <div class="content">
          <input type="text" placeholder="收货地址" v-model.trim="orderUser.address">
        </div>
      </li>
    </ul>
    
    <div class="button-add">
      <button  @click="goUserAddress">{{ showButtonText }}</button>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      orderUser: {
        type: Object,
        default() {
          return {}
        }
      },
      id: {
        type: String
      }
    },
    computed: {
      showButtonText() {
        return this.id ? '更新' : '保存'
      }
    },
    methods: {
      goUserAddress() {
        this.$router.push('/address')
      }
    }
  }
</script>

<style scoped>
  /*************** （表单信息） ***************/
  .form-box {
    width: 100%;
    /* margin-top: 12vw; */
  }

  .form-box li {
    box-sizing: border-box;
    padding: 4vw 3vw 0vw 3vw;
    display: flex;
  }

  .form-box li .title {
    flex: 0 0 18vw;
    font-size: 3vw;
    font-weight: 700;
    color: #666;
  }

  .form-box li .content {
    flex: 1;

    display: flex;
    align-items: center;
  }

  .form-box li .content input {
    border: none;
    outline: none;
    width: 100%;
    height: 4vw;
    font-size: 3vw;
  }

  .button-add {
    box-sizing: border-box;
    padding: 4vw 3vw 0vw 3vw;
  }

  .button-add button {
    width: 100%;
    height: 10vw;
    font-size: 3.8vw;
    font-weight: 700;

    border: none;
    outline: none;
    border-radius: 4px;
    color: #fff;
    background-color: #38CA73;
  }
</style>