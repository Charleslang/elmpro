<template>
  <ul class="goods-list">
    <!-- :item -->
    <business-goods-item v-for="(e, i) in 10" :key="i" />
  </ul>
</template>

<script>
  import BusinessGoodsItem from './BusinessGoodsItem'

  export default {
    components: {
      BusinessGoodsItem
    },
    data() {
      return {
        goods: []
      }
    }
  }
</script>

<style scoped>
 .goods-list {
  width: 100%;
  /*使用下外边距避开footer部分*/
  margin-bottom: 14vw;
 }
</style>