<template>
  <div id="home">
    <home-header/>
    <home-header-search/>
    <home-category/>
    <home-banner/>
    <super-member/>
    <recommed-merchants/>
    <recommed-mode/>
    <goods-list :goods="goods"/>
  </div>
</template>

<script>
  import HomeHeader from './components/HomeHeader'
  import HomeHeaderSearch from './components/HomeHeaderSearch'
  import HomeCategory from './components/HomeCategory'
  import HomeBanner from './components/HomeBanner'
  import SuperMember from './components/SuperMember'
  import RecommedMerchants from './components/RecommedMerchants'
  import RecommedMode from './components/RecommedMode'
  
  import GoodsList from 'components/goods/GoodsList'

  export default {
    components: {
      HomeHeader,
      HomeHeaderSearch,
      HomeCategory,
      HomeBanner,
      SuperMember,
      RecommedMerchants,
      RecommedMode,
      GoodsList
    },
    data() {
      return {
        goods: []
      }
    }
  }
</script>

<style scoped>

</style>