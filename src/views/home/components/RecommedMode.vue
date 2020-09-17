<template>
  <!-- 推荐方式部分 -->
  <ul class="recommendtype">
    <li>综合排序<i class="fa fa-caret-down"></i></li>
    <li>距离最近</li>
    <li>销量最高</li>
    <li>筛选<i class="fa fa-filter"></i></li>
  </ul>
</template>

<script>
  export default {

  }
</script>

<style scoped>
  /****************** 推荐方式部分 ******************/
  .recommendtype{
    width: 100%;
    height: 5vw;
    margin-bottom: 5vw;
    
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .recommendtype li{
    font-size: 3.5vw;
    color: #555;
  }
</style>