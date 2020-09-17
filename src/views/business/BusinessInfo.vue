<template>
  <div class="business-info">
    <business-top-bar/>
    <business-top-base/>
    <business-goods-list/>
    <business-cart/>
  </div>
</template>

<script>
  import BusinessTopBar from './components/BusinessTopBar'
  import BusinessTopBase from './components/BusinessTopBase'
  import BusinessGoodsList from './components/BusinessGoodsList'
  import BusinessCart from './components/BusinessCart'

  export default {
    components: {
      BusinessTopBar,
      BusinessTopBase,
      BusinessGoodsList,
      BusinessCart
    }
  }
</script>

<style scoped>
  .business-info {
    background-color: #fff;
  }
</style>