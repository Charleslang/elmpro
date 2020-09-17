<template>
  <ul class="business">
    <!-- 传入 :item="e" -->
    <goods-item v-for="(e, i) in 10" :key="i" />
  </ul>
</template>

<script>
  import GoodsItem from './GoodsItem'

  export default {
    components: {
      GoodsItem
    },
    props: {
      goods: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .business{
    width: 100%;
    /* margin-bottom: 14vw; */
    background-color: #fff;
  }
</style>