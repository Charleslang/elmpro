<template>
  <div class="order-info">
    <p>
      万家饺子（软件园E18店）
      <i class="fa fa-caret-down" id="showBtn" @click="showDetailList"></i>
    </p>
    <div class="order-info-right">
      <p :style="{'color':$attrs.priceColor}">&#165;49</p>
      <div class="order-info-right-icon" v-if="$attrs.isShowGoPay" @click="goPay">去支付</div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      // priceColor: {
      //   type: String,
      //   default: ''
      // },
      // isShowGoPay: {
      //   type: Boolean,
      //   default: false
      // }
    },
    data() {
      return {
        isListShow: false
      }
    },
    methods: {
      showDetailList() {
        this.isListShow = !this.isListShow
        this.$emit('controlListShow', this.isListShow)
      },
      goPay() {
        this.$router.push('/pay')
      }
    }
  }
</script>

<style scoped>
  .order-info{
    box-sizing: border-box;
    padding: 4vw;
    font-size: 4vw;
    color: #666;
    
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  /* .order-info p:last-child{
    color: orangered;
  } */

  .order-info .order-info-right{
    display: flex;
  }
  .order-info .order-info-right .order-info-right-icon{
    background-color: #f90;
    color: #fff;
    border-radius: 3px;
    margin-left: 2vw;
    user-select: none;
    cursor: pointer;
  }
</style>