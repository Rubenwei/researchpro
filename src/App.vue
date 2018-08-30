<template>
    <div id="app">
        <router-view v-if="isRouterAlive"></router-view>
    </div>
</template>
<script>
export default {
  name: 'app',
  provide(){
    return {
      reload: this.reload
    }
  },
  data(){
    return{
      isRouterAlive: true
    }
  },
  methods:{
    reload(){
      this.isRouterAlive = false
      this.$nextTick(function () {
        this.is = true
      })
    }
  }
}
</script>
<style lang="less">
// 这里是坑啊，文件路径中好像不能用@符号
// 引入全局样式
@import "./assets/styles/global.less";
</style>
