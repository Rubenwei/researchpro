<template>
  <div class="bg">
      <el-row align="right">
        <el-col :span="6" :offset="3">
          <el-card>搜索平均：{{avg}}</el-card>
        </el-col>
        <el-col :span="6" >
          <el-card>PC平均：{{avgpc}}</el-card>
        </el-col>
        <el-col :span="6" >
          <el-card>移动平均：{{avgmobile}}</el-card>
        </el-col>
      </el-row>
    <el-row>
      <el-col :span="18" :offset="3">
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
        activeName: 'second',
        avg: this.$store.state.common.avg,
        avgpc:this.$store.state.common.avgpc,
        avgmobile: this.$store.state.common.avgmobile
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
  .bg{
    background-image: url("../../../static/img/blue.jpg");
    background-position: center;
    background-size: 100%;
  }
  .el-card{
    margin: 20px;
    opacity: 0.65;
  }
</style>
