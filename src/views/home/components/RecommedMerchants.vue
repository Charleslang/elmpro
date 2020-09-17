<template>
  <!-- 推荐商家部分 -->
  <div class="recommend">
    <div class="recommend-line"></div>
    <p>推荐商家</p>
    <div class="recommend-line"></div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style scoped>
  /****************** 推荐商家部分 ******************/
  .recommend{
    width: 100%;
    height: 14vw;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .recommend .recommend-line{
    width: 6vw;
    height: 0.2vw;
    background-color: #888;
  }
  .recommend p{
    font-size: 4vw;
    margin: 0 4vw;
  }
</style>