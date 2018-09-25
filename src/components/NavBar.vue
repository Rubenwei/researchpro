<template>
    <div id="navbar-wrap" >
        <el-menu style="margin: auto; position: relative" background-color="#ecf5ff" text-color="#ddd" :default-active="$route.path" :unique-opened="isUnique" :router="isRouter" mode="horizontal" :collapse="toggSiderBar">
            <template v-for="item in menu">
                <el-menu-item :index="item.router" :key="item.router">
                    <i :class="item.icon"></i>
                    <span slot="title">{{langType === 'en'? item.name_en: item.name}}</span>
                </el-menu-item>
            </template>
        </el-menu>
    </div>
</template>
<script>

export default {
  name: "navbar",
  data() {
    return {
      isRouter: true,
      isUnique:false,
      menu: localStorage.menu ? JSON.parse(localStorage.menu) : []
    };
  },
  computed: {
    toggSiderBar() {
      return this.$store.state.common.isCollapse;
    },
    langType() {
      return this.$i18n.locale;
    }
  },

  methods: {}
};
</script>
<style scoped lang="less">
  #navbar-wrap {
    overflow: hidden;
    border-bottom: 1px solid #e7eaec;
    background: #ecf5ff;
    color: #fff;
    padding: 0 15px;
    z-index: 4;
    box-sizing: border-box;
    .el-menu--horizontal{
      border-bottom: 0;
    }
    .imgWrap{
      text-align: center;
      position: absolute;
      .gif{
        width: 60px;
        height: 60px;
        border-radius: 30px;
        &:hover{
          cursor:pointer;
        }
      }
    }
    .logo {
      color: #fff;
      background: #324157;
      margin: 0;
      padding: 18px 0;
      text-align: center;
    }
    .freeBtn {
      margin-top: 12px;
      text-align: right;
    }
    .name {
      font-weight: 600;
    }
    .el-icon-setting {
      transition: 1s;
      &:hover {
        transform: rotate(180deg);
        cursor: pointer;
      }
    }
    .fa {
      font-size: 24px;
      transition: all 0.3s;
      &:hover {
        cursor: pointer;
      }
    }
    a {
      line-height: 60px;
    }
    a.logout {
      color: #fff;
      text-decoration: none;
      &:hover {
        color: #20a0ff;
      }
    }
    i {
      font-size: 20px;
      line-height: 60px;
    }
    .logout {
      color: #fff;
      &:hover {
        color: #20a0ff;
      }
    }
  }

// 动态改变左侧导航包裹层宽度
#sidebar-wrap.collapsed {
  width: 64px;
}
.el-menu {
  width: 50%;
}

// 美化左侧导航的留白
.el-submenu .el-menu-item {
  padding: 0 20px;
  min-width: 160px;
  padding-left: 20px !important;
}

// 改变元素属性，要不动画效果不管用，是不是很厉害啊？哈哈哈
.rythm.twist1 {
  display: block;
}
</style>
