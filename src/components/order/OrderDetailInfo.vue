<template>
  <div class="order-info">
    <!-- :price-color="'orangered'" -->
    <order-business @controlListShow="controlListShow" v-bind="$attrs"/>
    <order-detail-list v-show="isShow"/>
  </div>
</template>

<script>
  import OrderBusiness from './OrderBusiness'
  import OrderDetailList from './OrderDetailList'

  export default {
    components: {
      OrderBusiness,
      OrderDetailList
    },
    props: {
      isListShow: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        isShow: false
      }
    },
    methods: {
      controlListShow(flag) {
        this.isShow = flag
      }
    }
  }
</script>

<style scoped>
  
</style>