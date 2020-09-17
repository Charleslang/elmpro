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

<style>

</style>