<template>
  <div class="edit-address">
    <edit-address-top-bar :title="showTitle"/>
    <address-form :order-user="orderUser" :id="id"/>
  </div>
</template>

<script>
  import EditAddressTopBar from './components/EditAddressTopBar'
  import AddressForm from './components/AddressForm'

  export default {
    name: 'EditAddress',
    components: {
      EditAddressTopBar,
      AddressForm
    },
    data() {
      return {
        orderUser: {
          name: '',
          sex: 1,
          tel: '',
          address: ''
        },
        id: null
      }
    },
    // beforeCreate() {
    //   document.title = this.$route.params.id ? this.$route.meta.title : '饿了么 新增收货地址'
    // },
    created() {
      this.id = this.$route.params.id
      this.getOrderUser(this.id)
    },
    computed: {
      showTitle() {
        return this.id ? '编辑收货地址' : '新增收货地址'
      }
    },
    methods: {
      getOrderUser(id) {
        if (id) {
          // 查询
          this.orderUser.name = "代俊峰"
          this.orderUser.tel = '123456789'
          this.orderUser.address = '成都信息工程大学'
        }
      }
    }
  }
</script>

<style scoped>
 .edit-address {
    height: 100vh;
    position: relative;
    z-index: 9;
    background-color: #fff;
 }
</style>