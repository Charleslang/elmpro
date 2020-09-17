<template>
  <tab-bar>
    <tab-bar-item path="/home" activeColor="#0097FF">
      <template v-slot:item-icon>
        <i class="fa fa-home"></i>
      </template>
      <template v-slot:item-icon-active>
        <i class="fa fa-home active-icon"></i>
      </template>
      <template v-slot:item-text>
        <div>首页</div>
      </template>
    </tab-bar-item>
    <tab-bar-item path="/discover" activeColor="#0097FF">
      <template v-slot:item-icon>
        <i class="fa fa-compass"></i>
      </template>
      <template v-slot:item-icon-active>
        <i class="fa fa-compass active-icon"></i>
      </template>
      <template v-slot:item-text>
        <div>发现</div>
      </template>
    </tab-bar-item>
    <tab-bar-item path="/order" activeColor="#0097FF">
      <template v-slot:item-icon>
        <i class="fa fa-file-text-o"></i>
      </template>
      <template v-slot:item-icon-active>
        <i class="fa fa-file-text-o active-icon"></i>
      </template>
      <template v-slot:item-text>
        <div>订单</div>
      </template>
    </tab-bar-item>
    <tab-bar-item path="/profile" activeColor="#0097FF">
      <template v-slot:item-icon>
        <i class="fa fa-user-o"></i>
      </template>
      <template v-slot:item-icon-active>
        <i class="fa fa-user-o active-icon"></i>
      </template>
      <template v-slot:item-text>
        <div>我的</div>
      </template>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
  import TabBar from './TabBar'
  import TabBarItem from './TabBarItem'

  export default {
    components: {
      TabBarItem,
      TabBar
    }
  }
</script>

<style>

</style>