<template>
  <header-bar>
    <template v-slot:header-slot>
			<div class="search">
				<!-- 当滚动条超过上面的定位块时，search-fixed-top块变成固定在顶部。 -->
				<div class="search-fixed-top" id="fixedBox">
					<!-- 搜索框部分中间的白框 -->
					<div class="search-box">
						<i class="fa fa-search"></i>搜索饿了么商家、商品名称
					</div>
				</div>
			</div>
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