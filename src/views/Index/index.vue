<template>
  <div  v-title="'天气预报'">
    <el-card>
      <el-row :gutter="20">
        <el-col :span="8">
          最高：
        </el-col>
        <el-col :span="8">
          平均：
        </el-col>
        <el-col :span="8">
          比率：
        </el-col>
      </el-row>
    </el-card>
    <el-row :gutter="20">
      <el-col :span="24">
        <el-card>
            <el-tabs v-model="activeName" @tab-click="handleClick">
              <el-tab-pane label="搜索指数" name="first" :lazy='true'><search-index-chart></search-index-chart></el-tab-pane>
              <el-tab-pane label="媒体指数" name="second" :lazy='true'><media-index-chart></media-index-chart>
              </el-tab-pane>
            </el-tabs>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
  import searchindexechart from '../../components/charts/SearhIndexChart'
  import mediaindexechart from '../../components/charts/MediaIndexChart'
  import search from '../../components/Search'
  import Bus from '../../bus'

  export default {
    name: "index",
    components: {
      // "line-chart": lineChart,
      'Search': search,
      'search-index-chart': searchindexechart,
      'media-index-chart': mediaindexechart
    },
    data(){
      return {
        query:localStorage.query,
        activeName: 'second'
      }
    },
    mounted(){
      Bus.$on('query', (res)=>{
        this.query = res
      })
    },
    methods:{
      handleClick(tab, event) {
        console.log(tab, event);
      }

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
