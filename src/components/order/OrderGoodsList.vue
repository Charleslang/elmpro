<template>
  <ul class="order-detailed">
    <order-goods-item v-for="(e, i) in 10" :key="i"/>
  </ul>
</template>

<script>
  import OrderGoodsItem from './OrderGoodsItem'

  export default {
    components: {
      OrderGoodsItem
    },
    data() {
      return {
        goods: []
      }
    }
  }
</script>

<style scoped>
  .order-detailed{
    width: 100%;
  }
</style>