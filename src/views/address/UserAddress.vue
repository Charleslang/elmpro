<template>
  <div class="user-address">
    <address-top-bar/>
    <address-list/>
    <!-- 新增地址部分 -->
    <div class="addbtn" @click="addAddress">
      <i class="fa fa-plus-circle"></i>
      <p>新增收货地址</p>
    </div>
  </div>
</template>

<script>
  import AddressTopBar from './components/AddressTopBar'

  import AddressList from 'components/address/AddressList'

  export default {
    components: {
      AddressTopBar,
      AddressList
    },
    methods: {
      addAddress() {
        this.$router.push('/editAddress')
      }
    }
    
  }
</script>

<style scoped>
  .addbtn{
    width: 100%;
    height: 14vw;
    border-top: solid 1px #DDD;
    border-bottom: solid 1px #DDD;
    background-color: #fff;
    margin-top: 4vw;
    
    display: flex;
    justify-content: center;
    align-items: center;
    
    font-size: 4.5vw;
    color: #0097FF;
    user-select: none;
    cursor: pointer;
  }
  .addbtn p{
    margin-left: 2vw;
  }
</style>