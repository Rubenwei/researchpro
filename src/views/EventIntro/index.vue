<template>
  <div class="bg">
    <div>
      <el-row style="padding-top: 10px">
        <el-col :span="11" align="right" >
          <el-card class="box-card" style="width: 513px ;height: 400px">
            <div id="container" :style="{width: '400px',height:'400px'}"></div>
          </el-card>
        </el-col>
        <el-col :span="11">
          <el-card class="box-card " style="width: 661px; height: 400px">
            <dl class="active">
              <dt>中文名：</dt><dd class="long">{{ChiName}}</dd></dl>
            <dl class="active">
              <dt>英文名：</dt><dd class="long">{{EngName}}</dd></dl>
            <dl class="active">
              <dt>国家：</dt><dd>{{Country}}</dd></dl>
            <dl class="active">
              <dt>类别：</dt><dd>{{Subject}}</dd></dl>
            <dl class="active">
              <dt>时间：</dt><dd>{{Time}}</dd></dl>
            <dl class="active">
              <dt>影响力等级：</dt><dd><el-rate
              v-model="grade"
              disabled
              show-score
              text-color="#ff9900"
              score-template="{value}">
            </el-rate></dd></dl>
          </el-card>
        </el-col>
      </el-row>
    </div>
    <el-row class="text">
      <el-card class="box-card">
        <p v-for="info in Intro">
          {{info}}
        </p>
      </el-card>
    </el-row>
    <go-top></go-top>
  </div>
</template>
<script>
  import gotop from '../../components/GoTop'
  import Bus from '../../bus'
  export default {
    name: "eventintro",
    data () {
      return{

        ChiName:'中文名称',
        EngName:'wjhfefbqiwf',
        Country:'中国',
        Subject: '类别学科',
        Time:'时间',
        Intro:['我是第一段文字','我是第二段文字','我是第三段文字','我是第四段文字','我是第四段文字','我是第四段文字','我是第四段文字','我是第四段文字'],
        grade: 2,
        picurl:'',
      }
    },
    components:{
      'go-top':gotop
    },
    mounted(){
      Bus.$on('query', (res)=>{
        this.drawchart()
      })
      this.drawchart()
    },
    methods:{
      drawchart(){
        const url = '../../static/data.json'
        console.log('intro:' + url)
        this.$axios.get(url).then((res)=>{
          console.log(res);
          this.ChiName = res.data.cnname
          this.EngName = res.data.engname
          this.Country = res.data.country
          this.Subject = res.data.subject
          this.Time = res.data.time
          this.Intro = res.data.info
          this.grade = res.data.grade
          this.picurl = res.data.pic

          let myChart = this.$echarts.init(document.getElementById("container"));
          let t = this;
          var app = {};
          let option = {
            xAxis: {
              type: 'category',
              data: ['等级一', '等级二', '等级三', '等级四', '等级五'],
              axisLabel: {
                textStyle: {
                  color: '#878787',//坐标值的具体的颜色
                }
              },
            },
            yAxis: {
              type: 'value',
              axisLabel: {
                textStyle: {
                  color: '#878787',//坐标值得具体的颜色
                }
              }
            },
            grid:{
              show: true,
              width: 300,
              height: 300
            },
            series: [{
              data: [1, 2, 3, 4, 5],
              type: 'bar',
              itemStyle: {
                normal: {
                  color: '#00BFFF',//设置柱子颜色
                  label: {
                    show: true,//柱子上显示值
                    position: 'top',//值在柱子上方显示
                    textStyle: {
                      color: '#FD6B71'//值得颜色
                    }
                  }
                },
                emphasis: {
                  color:'#FD6B71',
                  shadowColor: 'rgba(0, 0, 0, 0.5)',
                  shadowBlur: 20
                }
              },

            }]
          };
          if (option && typeof option === "object") {
            myChart.setOption(option, true);
            myChart.dispatchAction({
              type:'highlight',
              seriesIndex: 0,
              dataIndex: t.grade - 1
            })
          }
        })

      }
    }
  };
</script>

<style scoped lang="less">
  #container{
    float: left;
    margin-left: 10%;
    margin-top: -20px;
  }
  .box-card{
    margin: 10px;
    width: 100%;
    opacity: 0.65;
  }
  .bg{
    background-image: url("../../../static/img/blue.jpg");
    background-position: center;
    background-size: 100%;
  }
  .title{
    text-align: center;
    color: #0f0f0f;
    font-size: 40px;
  }
  img{
    position: relative;
    overflow: hidden;
    float: right;
    margin-top: 20px;
    margin-right: 150px ;
    margin-bottom: 50px;
  }
  button{
    position: relative;
    margin-left: 45%;
    width: 120px;
    padding:6px;
    background-color: #63B8FF;
    /*border-color: #357ebd;*/
    color: #fff;
    -moz-border-radius: 10px;
    -webkit-border-radius: 10px;
    border-radius: 10px; /* future proofing */
    text-align: center;
    vertical-align: middle;
    font-weight: lighter;
    font-size:110%;
    margin-bottom: 100px;
  }
  .text{
    margin-left: 10%;
    margin-right: 10%;
    font-size: 20px;
    text-indent: 40px;
    line-height: 50px;
    color: #838B8B;
  }
  .long{
    padding-left: 220px;
  }
  dt{
    float: left;
    margin-left: 5%;
    width: 30%;
    list-style: none;
    position: relative;
    padding: 0 0 0 2em;
    line-height:180%;
    -webkit-transition: .12s;
    transition: .12s;
  }
  dl{
    width: 100%;
  }
  .active{
    content: '\2022';
    color: black;
    text-align: left;
    font-size: 20px;
    opacity: .5;
    line-height:180%;
    -webkit-transition: .5s;
    transition: .5s;
  }
  .active:hover{
    -webkit-transform: scale(1);
    -ms-transform: scale(1);
    transform: scale(1);
    opacity: 1;
    text-shadow: 0 0 1px;
    -webkit-transition: .1s;
    transition: .1s;
  }
</style>
