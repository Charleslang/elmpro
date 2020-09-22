<template>
  <div id="app">
    <!-- 排除详情页面不刷新的 bug -->
    <keep-alive exclude="EditAddress,Login,Register">
      <router-view/>
    </keep-alive>
    <bottom-tab-bar/>
  </div>
</template>

<script>
  import BottomTabBar from 'components/tabbar/BottomTabBar'

  export default {
    name: 'App',
    components: {
      BottomTabBar
    }
  }
</script>

<style>
  @import 'assets/css/reset.css';
  @import 'assets/css/icon.css';
  @import 'assets/css/font-awesome/css/font-awesome.min.css';
</style>
