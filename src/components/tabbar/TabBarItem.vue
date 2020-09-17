<template>
  <div class="tab-bar-item" @click="itemClick">
    <!-- <slot v-if="!isActive" name="item-icon"></slot>
    <slot v-else name="item-icon-active"></slot> -->
    <!-- <slot :active="isActive" name="item-text"></slot> -->
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="activeAtyle"><slot name="item-text"></slot></div>
  </div>

  <!-- <li id="tab-bar-item" @click="itemClick">
    <i v-if="!isActive"><slot name="item-icon"></slot></i>
    <i v-else><slot name="item-icon-active"></slot></i>
    <p :style="activeAtyle"><slot name="item-text"></slot></p>
    <li onclick="location.href='index.html'">
					<i class="fa fa-home"></i>
					<p>首页</p>
		</li>
  </li> -->
</template>

<script>
  export default {
    props: {
      path: {
        type: String,
        default: '/home'
      },
      activeColor: {
        type: String,
        default: '#0097FF'
      }
    },
    data() {
      return {
        // isActive: true
      }
    },
    computed: {
      isActive() {
        return this.$route.path.indexOf(this.path) !== -1
      },
      activeAtyle() {
        return this.isActive ? {color: this.activeColor} : {}
      }
    },
    methods: {
      itemClick() {
        this.$router.push(this.path)
      }
    }
  }
</script>

<style scoped>
  .tab-bar-item {
    /*li本身的尺寸完全由内容撑起*/
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    color: #999;
    user-select: none;
    cursor: pointer;
  }
  .tab-bar-item div{
    font-size: 2.8vw;
  }
  .tab-bar-item i{
    font-size: 5vw;
  }
  .tab-bar-item .active-icon {
    color: #0097FF
  }
</style>