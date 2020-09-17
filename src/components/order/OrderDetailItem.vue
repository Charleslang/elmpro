<template>
  <li>
    <p>纯肉鲜肉（水饺） x 2</p>
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