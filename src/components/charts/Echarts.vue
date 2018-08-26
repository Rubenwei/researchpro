<template>
  <div id="myChart" :style="{width: '100%', height: '500px'}"></div>
</template>

<script>
  export default {
    name: 'echart',
    data () {
      return {

      }
    },
    mounted(){
      this.drawLine();
    },
    methods: {
      drawLine(){
        let myChart = this.$echarts.init(document.getElementById('myChart'));
        let base = +new Date(2011, 0, 0);
        let oneDay = 24 * 3600 * 1000;
        let date = [];

        this.$axios.get('data.json')
          .then(
            (res) => {
              let data = res.data;
              for (let i = 1; i < data.total; i++) {
                let now = new Date(base += oneDay);
                date.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'));

              }
              myChart.setOption({
                tooltip: {
                  trigger: 'axis',
                  position: function (pt) {
                    return [pt[0], '10%'];
                  }
                },
                title: {
                  left: 'center',
                  text: '',
                },
                legend: {
                  data:['搜索指数','pc趋势','移动趋势']
                },
                toolbox: {
                  feature: {
                    dataZoom: {
                      yAxisIndex: 'none'
                    },
                    restore: {},
                    saveAsImage: {}
                  }
                },
                xAxis: {
                  type: 'category',
                  boundaryGap: false,
                  data: date
                },
                yAxis: {
                  type: 'value',
                  boundaryGap: [0, '100%']
                },
                dataZoom: [{
                  type: 'inside',
                  start: 0,
                  end: 10
                }, {
                  start: 0,
                  end: 10,
                  handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
                  handleSize: '80%',
                  handleStyle: {
                    color: '#fff',
                    shadowBlur: 3,
                    shadowColor: 'rgba(0, 0, 0, 0.6)',
                    shadowOffsetX: 2,
                    shadowOffsetY: 2
                  }
                }],
                series: [
                  {
                    name:'搜索指数',
                    type:'line',
                    smooth:true,
                    symbol: 'none',
                    sampling: 'average',
                    itemStyle: {
                      normal: {
                        color: 'rgb(255, 70, 131)'
                      }
                    },
                    areaStyle: {
                      normal: {
                        color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                          offset: 0,
                          color: 'rgb(255, 158, 68)'
                        }, {
                          offset: 1,
                          color: 'rgb(255, 70, 131)'
                        }])
                      }
                    },
                    data: data.data_one
                  },
                  {
                    name:'pc趋势',
                    type:'line',
                    smooth:true,
                    symbol: 'none',
                    sampling: 'average',
                    itemStyle: {
                      normal: {
                        color: '#d4fc79'
                      }
                    },
                    areaStyle: {
                      normal: {
                        color: new this.$echarts.graphic.LinearGradient(0, 0, 255, 1, [{
                          offset: 0,
                          color: '#d4fc79'
                        }, {
                          offset: 1,
                          color: '#96e6a1'
                        }])
                      }
                    },
                    data: data.data_two
                  },
                  {
                    name:'移动趋势',
                    type:'line',
                    smooth:true,
                    symbol: 'none',
                    sampling: 'average',
                    itemStyle: {
                      normal: {
                        color: '#a1c4fd'
                      }
                    },
                    areaStyle: {
                      normal: {
                        color: new this.$echarts.graphic.LinearGradient(0, 0, 35, 1, [{
                          offset: 0,
                          color: '#a1c4fd'
                        }, {
                          offset: 1,
                          color: '#c2e9fb'
                        }])
                      }
                    },
                    data: data.data_three
                  }
                ]
              })
            }
          )
      }
    }
  }
</script>
