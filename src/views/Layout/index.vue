<template>
    <div>
        <!-- 这是侧导航 -->
        <top-bar></top-bar>

            <!-- 这是顶部导航 -->
            <nav-bar></nav-bar>
            <!-- 这是组件要插入的地方 -->
            <keep-alive>
            <router-view class="page-component-wrap animated fadeIn"></router-view>
            </keep-alive>

    </div>
</template>
<script>
import TopBar from 'comp/TopBar'
import NavBar from 'comp/NavBar'
import 'filters/handleNum.js'
export default {
  name: 'layout',
  computed: {
    isCollapse() {
      return this.$store.state.common.isCollapse
    }
  },
  components: {
    'top-bar': TopBar,
    'nav-bar': NavBar
  }
}
</script>

