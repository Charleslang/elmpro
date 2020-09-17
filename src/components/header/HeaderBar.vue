<template>
  <div class="header">
    <slot name="header-slot"></slot>
  </div>
</template>

<script>
  export default {

  }
</script>

<style scoped>
  .header {
    width: 100%;
    min-height: 12vw;
    background-color: #0097FF;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: sticky;
    top: 0;
  }
</style>