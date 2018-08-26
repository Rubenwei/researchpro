<template>
  <div  v-title="'天气预报'">
    <el-row :gutter="20">
      <el-col :span="24">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <i class="el-icon-edit"></i>&nbsp;&nbsp;
            <span>百度搜索api & echart图api</span>
          </div>
          <Search></Search>
        </el-card>
      </el-col>
    </el-row>
    <div class="chart-wrap">
      <el-row>
        <el-col :span="24">
          <el-card class="box-card">
            <div class="animated fadeIn">
              <Echart></Echart>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
// 引入城市列表
// import arr from "../../assets/json/cityList.json";
// 引入自己写的折线图组件
// import lineChart from "comp/charts/Line";
// 引入支持jsonp的库 https://github.com/webmodules/jsonp
// axios不支持jsonp https://github.com/axios/axios/blob/master/COOKBOOK.md#jsonp
// import jsonp from "jsonp";

import echart from '../../components/charts/Echarts'
import Search from '../../components/Search'

export default {
  name: "weather",
  components: {
    // "line-chart": lineChart,
    'Echart': echart,
    'Search': Search
  },
  data() {
    return {

    };
  },

};
</script>
<style scoped lang="less">
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
