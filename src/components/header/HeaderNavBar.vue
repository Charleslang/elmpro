<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style scoped>
  .nav-bar {
    width: 100%;
    height: 12vw;
    background-color: #0097FF;
    box-shadow: 0 1px 1px rgba(100, 100, 100, .1);
    color: #fff;
    font-size: 4.8vw;
    text-align: center;
    position: sticky;
    top: 0;
    z-index: 1000;
    display: flex;
    justify-content: center;
    align-items: center;
    /* margin-bottom: 12vw; */
  }
  .left, .right {
    width: 60px;
  }
  .center {
    flex-grow: 1;
  }
</style>