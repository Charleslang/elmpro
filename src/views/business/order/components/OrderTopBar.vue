<template>
  <header-nav-bar>
    <template v-slot:left>
      <div class="back" @click="goBack">
        <i class="fa fa-angle-left" aria-hidden="true"></i>
      </div>
    </template>
    <template v-slot:center>
      <div class="title">
        确认订单
      </div>
    </template>
  </header-nav-bar>
</template>

<script>
  import HeaderNavBar from 'components/header/HeaderNavBar'

  export default {
    components: {
      HeaderNavBar
    },
    methods: {
      goBack() {
        this.$router.go(-1)
      }
    }
  }
</script>

<style>
  .fa-angle-left {
    font-size: 7vw;
  }
</style>