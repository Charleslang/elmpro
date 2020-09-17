<template>
  <header-nav-bar>
    <template v-slot:center>
      <div class="title">
        用户注册
      </div>
    </template>
  </header-nav-bar>
</template>

<script>
  import HeaderNavBar from 'components/header/HeaderNavBar'

  export default {
    components: {
      HeaderNavBar
    }
  }
</script>

<style scoped>
  .fa-angle-left {
    font-size: 7vw;
  }
</style>