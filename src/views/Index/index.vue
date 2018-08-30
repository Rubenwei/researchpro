<template>
  <div  v-title="'天气预报'">
    <el-row :gutter="20">
      <el-col :span="24">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <i class="el-icon-edit"></i>&nbsp;&nbsp;
            <span>echart图api</span>

          </div>
          <el-menu style="margin-left: 10%" background-color="#ecf5ff" text-color="#ddd" :default-active="$route.path" :router="true" mode="horizontal">
            <el-menu-item index="/index/searchchart">
              <i class="el-icon-document"></i>
              <span slot="title">搜索指数</span>
            </el-menu-item>
            <el-menu-item index="/index/mediachart">
              <i class="el-icon-date"></i>
              <span slot="title">媒体指数</span>
            </el-menu-item>
          </el-menu>
          <router-view></router-view>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
  import searchindexechart from '../../components/charts/SearhIndexChart'
  import mediaindexechart from '../../components/charts/MediaIndexChart'
  import search from '../../components/Search'

  export default {
    name: "weather",
    components: {
      // "line-chart": lineChart,
      'Search': search,
      'search-index-chart': searchindexechart,
      'media-index-chart': mediaindexechart


    },
    mounted(){

    },
    methods:{

    }

  };
</script>
<style scoped lang="less">
  .el-menu{
    width: 17.5%;
  }
  .el-menu--horizontal>.el-menu-item {
    float: left;
    height: 40px;
    line-height: 40px;
    margin: 0;
    border-bottom: 2px solid transparent;
    color: #909399;
  }
  .sel-row {
    margin-bottom: 20px;
    .sel-label {
      line-height: 36px;
    }
  }

  .chart-wrap {
    margin-top: 20px;
  }

  .el-card__header {
    padding: 10px 20px !important;
  }

  .ct {
    float: right;
    line-height: 21px;
    &:hover {
      color: #20a0ff;
      cursor: pointer;
    }
  }
</style>
