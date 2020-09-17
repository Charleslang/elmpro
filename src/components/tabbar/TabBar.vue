<template>
  <div class="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
  export default {

  }
</script>

<style scoped>
  .tab-bar {
    width: 100%;
    height: 14vw;
    border-top: solid 1px #DDD;
    background-color: #fff;
    position: fixed;
    left: 0;
    bottom: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
</style>