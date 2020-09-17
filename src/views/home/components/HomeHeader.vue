<template>
  <header-bar>
    <template v-slot:header-slot>
      <!-- header部分 -->
			<header>
				<div class="icon-location-box">
				    <div class="icon-location"></div>
				</div>
				<div class="location-text">成都信息工程大学<i class="fa fa-caret-down"></i></div>
			</header>
    </template>
  </header-bar>
</template>

<script>
  import HeaderBar from 'components/header/HeaderBar'

  export default {
    components: {
      HeaderBar
    }
  }
</script>

<style scoped>
  header {
    /* padding: 2vw 0; */
    width: 100%;
    height: 12vw;
    background-color: #0097FF;
    display: flex;
    align-items: center;
  }
  header .icon-location-box{
    width: 3.5vw;
    height: 3.5vw;
    margin: 0 1vw 0 3vw;
  }
  header .location-text{
    font-size: 4.5vw;
    font-weight: 700;
    color: #fff;
  }
  header .location-text .fa-caret-down{
    margin-left: 1vw;
  }

  /****************** search ******************/
  .search{
    /* padding: 2vw 0; */
    width: 100%;
    height: 13vw;
  }
  .search .search-fixed-top{
    width: 100%;
    height: 13vw;
    background-color: #0097FF;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .search .search-fixed-top .search-box{
    width: 90%;
    height: 9vw;
    background-color: #fff;
    border-radius: 2px;
    
    display: flex;
    justify-content: center;
    align-items: center;
    
    font-size: 3.5vw;
    color: #AEAEAE;
    font-family: "宋体";
    /*此样式是让文本选中状态无效*/
    user-select: none;
  }
  .search .search-fixed-top .search-box .fa-search{
    margin-right: 1vw;
  }
</style>