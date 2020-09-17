<template>
  <div class="address-list">
    <address-item v-for="(e, i) in 5" :key="i"/>
  </div>
</template>

<script>
  import AddressItem from './AddressItem'

  export default {
    components: {
      AddressItem
    }
  }
</script>

<style scoped>
  .addresslist{
    width: 100%;
    /* margin-top: 12vw; */
    background-color: #fff;
  }
</style>