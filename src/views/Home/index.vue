<template>
  <div v-title="'首页'">
    <h1 >带你快速建立对等级的印象</h1>
    <el-row>
      <el-col :span="8" align="right">
        <el-row>
          <el-card class="box-card" align="center">
            <div slot="header" class="clearfix">
              <span>一级科技事件</span>
            </div>
            <div v-for="event1 in events1" :key="event1" class="text item1">
              {{ event1 }}
            </div>
          </el-card>
        </el-row>
        <el-row>
          <el-card class="box-card" align="center">
            <div slot="header" class="clearfix">
              <span>二级科技事件</span>
            </div>
            <div v-for="event2 in events2" :key="event2" class="text item2">
              {{ event2 }}
            </div>
          </el-card>
        </el-row>
      </el-col>
      <el-col :span="8">
        <div id="container" :style="{width: '100%', height:'400px'}"></div>
      </el-col>
      <el-col :span="8" align="left">
        <el-row>
          <el-card class="box-card" align="center">
            <div slot="header" class="clearfix">
              <span>三级科技事件</span>
            </div>
            <div v-for="event3 in events3" :key="event3" class="text item3">
              {{ event3 }}
            </div>
          </el-card>
        </el-row>
        <el-row>
          <el-card class="box-card" align="center">
            <div slot="header" class="clearfix">
              <span>四级科技事件</span>
            </div>
            <div v-for="event4 in events4" :key="event4" class="text item4">
              {{ event4 }}
            </div>
          </el-card>
        </el-row>
      </el-col>
    </el-row>
    <!--<div id="container" :style="{width: '100%', height:'400px'}"></div>-->
  </div>
</template>
<script>

  export default {
    name: "home",
    data() {
      return {
        events1:['事件一','事件二', '事件三'],
        events2:['事件一','事件二', '事件三'],
        events3:['事件一','事件二', '事件三'],
        events4:['事件一','事件二', '事件三'],
      };
    },
    mounted(){
      this.drawChart()
    },
    methods: {
      drawChart(){
        var dom = document.getElementById("container");
        var myChart = this.$echarts.init(dom);
        var app = {};
        var data = genData(50);

        let option = {
          title : {
            // text: '同名数量统计',
            // subtext: '纯属虚构',
            x:'center'
          },
          tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
          },
          legend: {
            type: 'scroll',
            orient: 'vertical',
            right: 10,
            top: 20,
            bottom: 20,
            data: data.legendData,

            selected: data.selected
          },
          series : [
            {
              name: '等级',
              type: 'pie',
              radius : '55%',
              center: ['40%', '50%'],
              data: data.seriesData,
              itemStyle: {
                emphasis: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
            }
          ]
        };


        function genData(count) {
          var nameList = [
            '一','二','三','四'
            // '赵', '钱', '孙', '李', '周', '吴', '郑', '王', '冯', '陈', '褚', '卫', '蒋', '沈', '韩', '杨', '朱', '秦', '尤', '许', '何', '吕', '施', '张', '孔', '曹', '严', '华', '金', '魏', '陶', '姜', '戚', '谢', '邹', '喻', '柏', '水', '窦', '章', '云', '苏', '潘', '葛', '奚', '范', '彭', '郎', '鲁', '韦', '昌', '马', '苗', '凤', '花', '方', '俞', '任', '袁', '柳', '酆', '鲍', '史', '唐', '费', '廉', '岑', '薛', '雷', '贺', '倪', '汤', '滕', '殷', '罗', '毕', '郝', '邬', '安', '常', '乐', '于', '时', '傅', '皮', '卞', '齐', '康', '伍', '余', '元', '卜', '顾', '孟', '平', '黄', '和', '穆', '萧', '尹', '姚', '邵', '湛', '汪', '祁', '毛', '禹', '狄', '米', '贝', '明', '臧', '计', '伏', '成', '戴', '谈', '宋', '茅', '庞', '熊', '纪', '舒', '屈', '项', '祝', '董', '梁', '杜', '阮', '蓝', '闵', '席', '季', '麻', '强', '贾', '路', '娄', '危'
          ];
          var legendData = [];
          var seriesData = [];
          var selected = {};
          for (var i = 0; i < 50; i++) {
            var name = Math.random() > 0.65
              ? makeWord(4, 1) + '·' + makeWord(3, 0)
              : makeWord(2, 1);
            // legendData.push(name);
            seriesData.push({
              name: name,
              value: Math.round(Math.random() * 100000)
            });
            selected[name] = i < 6;
          }

          return {
            legendData: legendData,
            seriesData: seriesData,
            selected: selected
          };

          function makeWord(max, min) {
            var nameLen = Math.ceil(Math.random() * max + min);
            var name = [];
            for (var i = 0; i < nameLen; i++) {
              name.push(nameList[Math.round(Math.random() * nameList.length - 1)]);
            }
            return name.join('');
          }
        }

        if (option && typeof option === "object") {
          myChart.setOption(option, true);
        }
      }
    }
  };
</script>
<style scoped lang="less">
  h1{
    text-align: center;
  }
  .text {
    font-size: 20px;
  }
  .item1 {
    margin-bottom: 20px;
  }
  .item2 {
    margin-bottom: 20px;
  }
  .item3 {
    margin-bottom: 20px;
  }
  .item4 {
    margin-bottom: 20px;
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
    width: 300px;
  }
  span{
    font-size :20px;
    font-weight: bold;
  }
  div.container{
    margin :0;
  }
</style>
