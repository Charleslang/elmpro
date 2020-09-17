<template>
  <li>
    <div class="food-left">
      <img src="~assets/img/sp01.png">
      <div class="food-left-info">
        <h3>纯肉鲜肉（水饺）</h3>
        <p>新鲜猪肉</p>
        <p>&#165;15</p>
      </div>
    </div>
    <div class="food-right">
      <div>
        <i class="fa fa-minus-circle"></i>
      </div>
      <p><span>3</span></p>
      <div>
        <i class="fa fa-plus-circle"></i>
      </div>
    </div>
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
  /****************** 食品列表部分 ******************/
  li{
    width: 100%;
    box-sizing: border-box;
    padding: 2.5vw;
    user-select: none;
    
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  li .food-left{
    display: flex;
    align-items: center;
  }
  li .food-left img{
    width: 20vw;
    height: 20vw;
  }
  li .food-left .food-left-info{
    margin-left: 3vw;
  }
  li .food-left .food-left-info h3{
    font-size: 3.8vw;
    color: #555;
  }
  li .food-left .food-left-info p{
    font-size: 3vw;
    color: #888;
    margin-top: 2vw;
  }
  li .food-right{
    width: 16vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  li .food-right .fa-minus-circle{
    font-size: 5.5vw;
    color: #999;
    cursor: pointer;
  }
  li .food-right p{
    font-size: 3.6vw;
    color: #333;
  }
  li .food-right .fa-plus-circle{
    font-size: 5.5vw;
    color: #0097EF;
    cursor: pointer;
  }
</style>