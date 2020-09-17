<template>
  <!-- 点餐分类部分 -->
    <ul class="foodtype">
      <li @click="categoryClick">
        <img src="~assets/img/dcfl01.png">
        <p>美食</p>
      </li>
      <li @click="categoryClick">
        <img src="~assets/img/dcfl02.png">
        <p>早餐</p>
      </li>
      <li @click="categoryClick">
        <img src="~assets/img/dcfl03.png">
        <p>跑腿代购</p>
      </li>
      <li @click="categoryClick">
        <img src="~assets/img/dcfl04.png">
        <p>汉堡披萨</p>
      </li>
      <li @click="categoryClick">
        <img src="~assets/img/dcfl05.png">
        <p>甜品饮品</p>
      </li>
      <li @click="categoryClick">
        <img src="~assets/img/dcfl06.png">
        <p>速食简餐</p>
      </li>
      <li @click="categoryClick">
        <img src="~assets/img/dcfl07.png">
        <p>地方小吃</p>
      </li>
      <li @click="categoryClick">
        <img src="~assets/img/dcfl08.png">
        <p>米粉面馆</p>
      </li>
      <li @click="categoryClick">
        <img src="~assets/img/dcfl09.png">
        <p>包子粥铺</p>
      </li>
      <li @click="categoryClick">
        <img src="~assets/img/dcfl10.png">
        <p>炸鸡炸串</p>
      </li>
    </ul>
</template>

<script>
  export default {
    methods: {
      categoryClick() {
        this.$router.push('/category')
      }
    }
  }
</script>

<style scoped>
  /****************** 点餐分类部分 ******************/
  .foodtype{
    width: 100%;
    height: 48vw;
    
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    /*要使用align-content。10个子元素将自动换行为两行，而且两行作为一个整体垂直居中*/
    align-content: center;
  }
  .foodtype li{
    /*一共10个子元素，通过计算，子元素宽度在16.7 ~ 20 之间，才能保证换两行*/
    width: 18vw;
    height: 20vw;
    
    display: flex;
    /*弹性盒子主轴方向设为column，然后仍然是垂直水平方向居中*/
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    user-select: none;
    cursor: pointer;
  }
  .foodtype li img{
    width: 12vw;
    /*视频讲解时高度设置为12vw，实际上设置为10.3vw更佳*/
    height: 10.3vw;
  }
  .foodtype li p{
    font-size: 3.2vw;
    color: #666;
  }
</style>