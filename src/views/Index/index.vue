<template>
  <div  v-title="'天气预报'">
    <el-row :gutter="20">
      <el-col :span="24">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <i class="el-icon-edit"></i>&nbsp;&nbsp;
            <span>{{query}}</span>
          </div>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card class="box-card">
          <search-index-chart></search-index-chart>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card class="box-card">
          <media-index-chart></media-index-chart>
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
    name: "weather",
    components: {
      // "line-chart": lineChart,
      'Search': search,
      'search-index-chart': searchindexechart,
      'media-index-chart': mediaindexechart


    },
    data(){
      return {
        query:localStorage.query
      }
    },
    mounted(){
      Bus.$on('query', (res)=>{
        this.query = res
      })
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
