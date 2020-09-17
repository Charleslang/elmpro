<template>
  <div class="order">
    <order-top-bar/>
    <order-confirm/>
  </div>
</template>

<script>
  import OrderTopBar from './components/OrderTopBar'

  import OrderConfirm from 'components/order/OrderConfirm'

  export default {
    components: {
      OrderTopBar,
      OrderConfirm
    }
  }
</script>

<style scoped>

</style>