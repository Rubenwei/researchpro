<template>
  <div class="cube-wrap" v-title="'Introduction'">
    <div id="container" :style="{width: '100%', height:'400px'}"></div>
    <!--绝对定位问题-->
    <!--模拟数据问题-->
    <p>
      {{ intro }}
    </p>
    <h1 class="ChiName">
      {{ChiName}}
    </h1>
    <h2>
      {{EngName}}
    </h2>
    <ul>
      <li v-for="item in items">{{item}}</li>
    </ul>
    <button>
      view more
    </button>
  </div>
  <!--<div id="container" :style="{width: '100%', height:'90%'}"></div>-->
</template>
<script>
  export default {
    name: "eventintro",
    data () {
      return{
        items:['事件一','事件二', '事件三'],
        ChiName:'中文名称',
        EngName:'英文名称',
        intro:'      文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍\n',
      }
    },
    mounted(){
      this.drawChart()
    },
    methods:{
      drawChart(){
        let myChart = this.$echarts.init(document.getElementById('container'));
        // var dom = document.getElementById("container");
        // var myChart = echarts.init(dom);
        var app = {};

        app.title = '柱状图框选';

        var xAxisData = [];
        var data1 = [];
        var data2 = [];
        var data3 = [];
        var data4 = [];

        for (var i = 0; i < 10; i++) {
          xAxisData.push('Class' + i);
          data1.push((Math.random() * 2).toFixed(2));
          data2.push(-Math.random().toFixed(2));
          data3.push((Math.random() * 5).toFixed(2));
          data4.push((Math.random() + 0.3).toFixed(2));
        }

        var itemStyle = {
          normal: {
          },
          emphasis: {
            barBorderWidth: 1,
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowOffsetY: 0,
            shadowColor: 'rgba(0,0,0,0.5)'
          }
        };

         let option = {
          backgroundColor: '#eee',
          legend: {
            data: ['bar', 'bar2', 'bar3', 'bar4'],
            align: 'left',
            left: 10
          },
          brush: {
            toolbox: ['rect', 'polygon', 'lineX', 'lineY', 'keep', 'clear'],
            xAxisIndex: 0
          },
          toolbox: {
            feature: {
              magicType: {
                type: ['stack', 'tiled']
              },
              dataView: {}
            }
          },
          tooltip: {},
          xAxis: {
            data: xAxisData,
            name: 'X Axis',
            silent: false,
            axisLine: {onZero: true},
            splitLine: {show: false},
            splitArea: {show: false}
          },
          yAxis: {
            inverse: true,
            splitArea: {show: false}
          },
          grid: {
            left: 100
          },
          visualMap: {
            type: 'continuous',
            dimension: 1,
            text: ['High', 'Low'],
            inverse: true,
            itemHeight: 200,
            calculable: true,
            min: -2,
            max: 6,
            top: 60,
            left: 10,
            inRange: {
              colorLightness: [0.4, 0.8]
            },
            outOfRange: {
              color: '#bbb'
            },
            controller: {
              inRange: {
                color: '#2f4554'
              }
            }
          },
          series: [
            {
              name: 'bar',
              type: 'bar',
              stack: 'one',
              itemStyle: itemStyle,
              data: data1
            },
            {
              name: 'bar2',
              type: 'bar',
              stack: 'one',
              itemStyle: itemStyle,
              data: data2
            },
            {
              name: 'bar3',
              type: 'bar',
              stack: 'two',
              itemStyle: itemStyle,
              data: data3
            },
            {
              name: 'bar4',
              type: 'bar',
              stack: 'two',
              itemStyle: itemStyle,
              data: data4
            }
          ]
        };

        myChart.on('brushSelected', renderBrushed);

        function renderBrushed(params) {
          var brushed = [];
          var brushComponent = params.batch[0];

          for (var sIdx = 0; sIdx < brushComponent.selected.length; sIdx++) {
            var rawIndices = brushComponent.selected[sIdx].dataIndex;
            brushed.push('[Series ' + sIdx + '] ' + rawIndices.join(', '));
          }

          myChart.setOption({
            title: {
              backgroundColor: '#333',
              text: 'SELECTED DATA INDICES: \n' + brushed.join('\n'),
              bottom: 0,
              right: 0,
              width: 100,
              textStyle: {
                fontSize: 12,
                color: '#fff'
              }
            }
          });
        };
        if (option && typeof option === "object") {
          myChart.setOption(option, true);
        }
      }
    }
  };
</script>

<style scoped lang="less">
  p{
    position: absolute;
    top: 35%;
    right: 13%;
    width: 200px;
    border: 2px solid #D1EEEE;
    padding: 120px;
    font-size: 20px;
  }
  h1{
    position: absolute;
    right:25%;
    top: 20%;
    font-weight: lighter;
  }
  h2{
    position: absolute;
    right: 20%;
    top:29%;
    font-weight: lighter;
  }
  button {
    position: absolute;
    bottom: 8%;
    left: 22%;
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
</style>
