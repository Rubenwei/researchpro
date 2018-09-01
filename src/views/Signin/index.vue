<template>
    <div class="bg">
        <div class="login-wrap animated flipInY" v-title="'Auto Vue'">
            <h3>Search Things</h3>
            <Search></Search>
        </div>
        <!-- 粒子漂浮物 -->
        <vue-particles
            color="#fff"
            :particleOpacity="0.7"
            :particlesNumber="30"
            shapeType="star"
            :particleSize="5"
            linesColor="#fff"
            :linesWidth="2"
            :lineLinked="true"
            :lineOpacity="0.4"
            :linesDistance="150"
            :moveSpeed="3"
            :hoverEffect="true"
            hoverMode="grab"
            :clickEffect="true"
            clickMode="push"
        >
        </vue-particles>
    </div>
</template>
<script>
  import search from '../../components/Search'
export default {
  name: "signin",
  data() {
    return {
    }
  },
  components:{
    'Search':search
  },
  created() {
    this.getMenu()
  },
  methods: {
    getMenu() {
      this.$axios({
        url: "getMenu",
        method: "GET"
      }).then(res => {
        // 提取菜单数组，交给本地存储
        let menu = res.data.data.menu;
        localStorage.menu = JSON.stringify(menu);

      });
    },
    openMsg() {
      // 注意这里使用了国际化
      this.$message.warning(this.$t('m.login.info'));
    }
  },
};
</script>
<style scoped lang="less">
.bg {
    position: relative;
    overflow: hidden;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url('../../../static/img/sky.jpg');
    background-position: -20% 10%;
    background-size: contain;
    #particles-js {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
    }
}
.login-wrap {
  width: 330px;
  border-radius: 5px;
  padding: 20px;
  z-index: 3;
  margin-right: -37%;
  background: rgba(216,220,229,0.5);
  .el-form-item {
    margin-bottom: 25px !important;
  }
  h3 {
    text-align: center;
    color: #ebedef;
    margin-top: 0px;
    margin-bottom: 5px;
    span {
        color: #20a0ff;
    }
  }
  form {
    margin-top: 25px;
    .el-form-item {
      margin-bottom: 15px;
    }
  }
  a {
    text-decoration: none;
    color: #1f2d3d;
  }
  button {
    width: 100%;
    font-weight: 600;
  }
}
</style>
