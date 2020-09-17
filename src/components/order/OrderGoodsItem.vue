<template>
  <li>
    <div class="order-detailed-left">
      <img src="~assets/img/sp01.png">
      <p>纯肉鲜肉（水饺） x 2</p>
    </div>
    <p>&#165;15</p>
  </li>
</template>

<script>
  export default {
    props: {
      item: {
        type: Object,
        default() {
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  li{
    width: 100%;
    height: 16vw;
    box-sizing: border-box;
    padding: 3vw;
    color: #666;
    
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  li .order-detailed-left{
    display: flex;
    align-items: center;
  }
  li .order-detailed-left img{
    width: 10vw;
    height: 10vw;
  }
  li .order-detailed-left p{
    font-size: 3.5vw;
    margin-left: 3vw;
  }
  li p{
    font-size: 3.5vw;
  }
</style>