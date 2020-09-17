<template>
  <li @click="goodsItemClick">
    <img src="~assets/img/sj01.png">
    <div class="business-info">
      <div class="business-info-h">
        <h3>万家饺子（软件园E18店）</h3>
        <div class="business-info-like">&#8226;</div>
      </div>
      <div class="business-info-star">
        <div class="business-info-star-left">
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <p>4.9 月售345单</p>
        </div>
        <div class="business-info-star-right">
          蜂鸟专送
        </div>
      </div>
      <div class="business-info-delivery">
        <p>&#165;15起送 | &#165;3配送</p>
        <p>3.22km | 30分钟</p>
      </div>
      <div class="business-info-explain">
        <div>各种饺子</div>
      </div>
      <div class="business-info-promotion">
        <div class="business-info-promotion-left">
          <div class="business-info-promotion-left-incon">新</div>
          <p>饿了么新用户首单立减9元</p>
        </div>
        <div class="business-info-promotion-right">
          <p>2个活动</p>
          <i class="fa fa-caret-down"></i>
        </div>
      </div>
      <div class="business-info-promotion">
        <div class="business-info-promotion-left">
          <div class="business-info-promotion-left-incon" style="background-color: #F1884F;">特</div>
          <p>特价商品5元起</p>
        </div>
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
    },
    methods: {
      goodsItemClick() {
        this.$router.push('/businessInfo')
      }
    }
  }
</script>

<style scoped>
  li{
    width: 100%;
    box-sizing: border-box;
    padding: 2.5vw;
    user-select: none;
    border-bottom: solid 1px #DDD;
    
    display: flex;
  }
  li img{
    width: 18vw;
    height: 18vw;
  }
  li .business-info{
    width: 100%;
    box-sizing: border-box;
    padding-left: 3vw;
  }
  li .business-info .business-info-h{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2vw;
  }
  li .business-info .business-info-h h3{
    font-size: 4vw;
    color: #333;
  }
  li .business-info .business-info-h .business-info-like{
    width: 1.6vw;
    height: 3.4vw;
    background-color: #666;
    color: #fff;
    font-size: 4vw;
    margin-right: 4vw;
    
    display: flex;
    justify-content: center;
    align-items: center;
  }
  li .business-info .business-info-star{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2vw;
    font-size: 3.1vw;
  }
  li .business-info .business-info-star .business-info-star-left{
    display: flex;
    align-items: center;
  }
  li .business-info .business-info-star .business-info-star-left .fa-star{
    color: #FEC80E;
    margin-right: 0.5vw;
  }
  li .business-info .business-info-star .business-info-star-left p{
    color: #666;
    margin-left: 1vw;
  }
  li .business-info .business-info-star .business-info-star-right{
    background-color: #0097FF;
    color: #fff;
    font-size: 2.4vw;
    border-radius: 2px;
    padding: 0 0.6vw;
  }
  li .business-info .business-info-delivery{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2vw;
    
    color: #666;
    font-size: 3.1vw;
  }
  li .business-info .business-info-explain{
    display: flex;
    align-items: center;
    margin-bottom: 3vw;
  }
  li .business-info .business-info-explain div{
    border: solid 1px #DDD;
    font-size: 2.8vw;
    color: #666;
    border-radius: 3px;
    padding: 0 0.1vw ;
  }
  li .business-info .business-info-promotion{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.8vw;
  }
  li .business-info .business-info-promotion .business-info-promotion-left{
    display: flex;
    align-items: center;
  }
  li .business-info .business-info-promotion .business-info-promotion-left .business-info-promotion-left-incon{
    width: 4vw;
    height: 4vw;
    background-color: #70BC46;
    border-radius: 3px;
    font-size: 3vw;
    color: #fff;
    
    display: flex;
    justify-content: center;
    align-items: center;
  }
  li .business-info .business-info-promotion .business-info-promotion-left p{
    color: #666;
    font-size: 3vw;
    margin-left: 2vw;
  }
  li .business-info .business-info-promotion .business-info-promotion-right{
    display: flex;
    align-items: center;
    font-size: 2.5vw;
    color: #999;
  }
  li .business-info .business-info-promotion .business-info-promotion-right p{
    margin-right: 2vw;
  }
</style>