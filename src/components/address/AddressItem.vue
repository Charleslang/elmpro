<template>
  <li>
    <div class="addresslist-left" @click="goBusinessOrder">
      <h3>习近平先生 12345671111</h3>
      <p>沈阳市浑南区智慧四街规划大厦北区34楼34-10-56号</p>
    </div>
    <div class="addresslist-right">
      <i class="fa fa-edit" @click="goEditAddress"></i>
      <i class="fa fa-remove"></i>
    </div>
  </li>
</template>

<script>
  export default {
    methods: {
      goBusinessOrder() {
        this.$router.push('/businessOrder')
      },
      goEditAddress() {
        this.$router.push('/editAddress/0')
      }
    }
  }
</script>

<style scoped>
  li{
    width: 100%;
    box-sizing: border-box;
    border-bottom: solid 1px #DDD;
    padding: 3vw;
    
    display: flex;
  }
  li .addresslist-left{
    flex:5;
    /*左边这块区域是可以点击的*/
    user-select: none;
    cursor: pointer;
  }
  li .addresslist-left h3{
    font-size: 4.6vw;
    font-weight: 300;
    color: #666;
  }
  li .addresslist-left p{
    font-size: 4vw;
    color: #666;
  }
  li .addresslist-right{
    flex:1;
    font-size: 5.6vw;
    color: #999;
    cursor: pointer;
    
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
</style>