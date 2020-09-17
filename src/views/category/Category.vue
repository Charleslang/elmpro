<template>
  <div class="category">
    <category-header/>
    <goods-list/>
  </div>
</template>

<script>
  import CategoryHeader from './components/CategoryHeader'

  import GoodsList from 'components/goods/GoodsList'

  export default {
    components: {
      CategoryHeader,
      GoodsList
    },
    methods: {
      
    }
  }
</script>

<style scoped>
  .category {
    /* height: 100vh; */
    position: relative;
    z-index: 9;
    background-color: #fff;
  }
</style>