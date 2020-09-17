<template>
  <ul class="order-detail">
    <order-detail-item v-for="(e, i) in 5" :key="i"/>
    <li>
      <p>配送费</p>
      <p>&#165;3</p>
    </li>
  </ul>
</template>

<script>
  import OrderDetailItem from './OrderDetailItem'

  export default {
    components: {
      OrderDetailItem
    }
  }
</script>

<style scoped>
  .order-detail{
    width: 100%;
  }

  li{
    width: 100%;
    box-sizing: border-box;
    padding: 1vw 4vw;
    
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  li p{
    font-size: 3vw;
    color: #666;
  }
</style>