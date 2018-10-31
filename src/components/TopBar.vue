
<template>
  <div id="topbar-wrap" >
    <el-row type="flex" justify="space-between">
      <el-col :span="8">
        <h3 class="logo" style="float: left">
          <span class="rythm twist1">{{toggTopBar ? 'VUE': 'CCNU'}}</span>
        </h3>
        <div style="margin-left: 150px" class="animated bounceInDown imgWrap">
          <img src="../../static/img/little.gif"  height="60px" class="gif rythm pulse3"  @click="toggleDance">
        </div>
      </el-col>
      <el-col :span="8">
        <Search></Search>
      </el-col>
      <el-col :span="8">
        <el-row type="flex" class="row-right" justify="end">
          <el-col :span="3">
            <i class="fa fa-language" title="切换语言" @click="toggleLanguage"></i>
          </el-col>
          <el-col :span="3">
            <i class="fa fa-arrows-alt" title="切换全屏" @click="toggleFullscreen"></i>
          </el-col>
          <el-col :span="4">
            <i class="fa fa-sign-out logout" title="退出" @click.prevent="logout"></i>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>
<script>
  import Rythm from "rythm.js";
  const rythm = new Rythm();
  const music = require("../../static/audio/romeostune.mp3");

  import screenfull from 'screenfull'
  import search from './Search'
  import bus from "@/bus";

  export default {
    name: "topbar",
    data() {
      return {
        isMusicOn: false,
        isUnique: true,
      };
    },
    components:{
      'Search':search
    },
    computed: {
      toggTopBar() {
        return this.$store.state.common.isCollapse;
      },
      langType() {
        return this.$i18n.locale;
      },
      isCollapse() {
        return this.$store.state.common.isCollapse
      }

    },
    created() {
      this.initRythm();
      bus.$on("stopMusic", () => {
        this.isMusicOn = false;
        rythm.stop();
      });
    },
    methods: {
      initRythm() {
        rythm.setMusic(music);
        rythm.addRythm("twist1", "twist", 0, 10);
        rythm.addRythm("pulse3", "pulse", 0, 10, {
          min: 0.75,
          max: 1.5
        });
      },
      toggleDance() {
        if (this.isMusicOn) {
          this.isMusicOn = false;
          rythm.stop();
        } else {
          this.isMusicOn = true;
          rythm.start();
        }
      },
      toggleLanguage() {
        let locale = this.$i18n.locale
        locale === 'zh' ? (this.$i18n.locale = 'en') : (this.$i18n.locale = 'zh')
        let info = locale === 'en' ? '切换成功' : 'change language successfully'
        this.$message.success(info)
      },
      toggleFullscreen() {
        if (!screenfull.enabled) {
          this.$message({
            message: '您的浏览器不支持全屏',
            type: 'warning'
          })
          return false
        }
        screenfull.toggle()
      },
      logout() {
        localStorage.clear()
        bus.$emit('stopMusic')
        this.$router.push('/start')
      }
    },
    watch: {
      $route(to, from) {
        this.pathName = this.$route.path.substring(1)
        this.nowPath = this.$route.path
      }
    }
  };
</script>
<style scoped lang="less">
  #topbar-wrap {
    overflow: hidden;
    border-bottom: 1px solid #e7eaec;
    background: #324157;
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
      font-weight: bold;
      line-height: 60px;
      margin: 0;
      letter-spacing: 1px;
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
  // 改变元素属性，要不动画效果不管用，是不是很厉害啊？哈哈哈
  .rythm.twist1 {
    display: block;
  }
</style>
