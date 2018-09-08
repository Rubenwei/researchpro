<template>
  <div v-title="'Introduction'">
    <el-row>
      <el-col :span="12"><div class="grid-content bg-purple">
        <div id="container" :style="{width: '100%', height:'400px'}"></div>
        <button>
          view more
        </button>
      </div>
      </el-col>
      <el-col :span="12"><div class="grid-content bg-purple-light">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>{{ ChiName + '(' + EngName + ')'}}</span>
          </div>
          <div class="text item">
            <p v-for="msg in Intro">
              {{msg}}
            </p>
          </div>
        </el-card>
      </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
  import {getItem} from '../../api/recommend'
  import Bus from '../../bus'
  export default {
    name: "eventintro",
    data () {
      return{
        // items:['事件一','事件二', '事件三'],
        ChiName:'中文名称',
        EngName:'英文名称',
        Country:'中国',
        Subject: '类别学科',
        Time:'时间',
        Intro:['我是第一段文字','我是第二段文字','我是第三段文字','我是第四段文字'],
        Level:20
      }
    },
    mounted(){
      Bus.$on('query', (res)=>{
        this._getItem()
      })
      this._getItem()
    },
    methods:{
      _getItem(){
        getItem().then((res)=>{
          console.log(res)
          this.ChiName = res.cnname
          this.EngName = res.engname
          this.Country = res.country
          this.Subject = res.subject
          this.Time = res.time
          this.Intro = res.info
          this.Level = res.level
          this.drawChart()
        })
      },
      drawChart(){
        var dom = document.getElementById("container");
        var myChart = this.$echarts.init(dom);
        var app = {};
        let option = {

          // toolbox: {
          //   feature: {
          //     restore: {},
          //     saveAsImage: {}
          //   }
          // },
          series: [
            {
              name: '事件重大等级程度',
              type: 'gauge',
              detail: {formatter:'{value}%'},//这个地方的百分数应该改为等级程度
              data: [{value: this.Level, name: '事件重大等级'}]
            }
          ]
        };

        // setInterval(function () {
        //   option.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0;
        //   option.series[0].data[0].value = 20;
        //   myChart.setOption(option, true);
        // },2000);

        if (option && typeof option === "object") {
          myChart.setOption(option, true);
        }
      }
    }
  };
</script>

<style scoped lang="less">
  button {
    position: absolute;
    bottom: 15%;
    left: 20.5%;
    width: 120px;
    padding:6px;
    background-color: #63B8FF;
    border-color: #357ebd;
    color: #fff;
    -moz-border-radius: 10px;
    -webkit-border-radius: 10px;
    border-radius: 10px; /* future proofing */
    -khtml-border-radius: 10px; /* for old Konqueror browsers */
    text-align: center;
    vertical-align: middle;
    border: 1px solid transparent;
    font-weight: lighter;
    font-size:110%
  }
  .text {
    position: relative;
    font-size: 25px;
    height: 200px;
    overflow-y: auto;//不用加窗口，这行代码可以使内容超过200px自动出现滚动条
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    margin: 40px;
    width: 480px;
    height: 360px;
  }
  .clearfix{
    text-align: center;
    font-size: 35px;
  }
</style>
