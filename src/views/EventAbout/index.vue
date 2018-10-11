<template>
  <div>
    <el-row :gutter="20">
      <!--代码窗-->
      <el-col :span="14" id="one" class="grid-content bg-purple">
        <div>
          <ul id="cmd">
          </ul>
        </div>
      </el-col>
      <!--结果窗-->
      <el-col :span="10" id="two" class="grid-content bg-purple-dark">
        事件名称：{{assdata.chiname}}
        <br>
        <br>
        Event Name:{{assdata.engname}}
        <br>
        <br>
        影响指数：{{assdata.impact}}
        <br>
        <br>
        Impact Index:{{assdata.impact}}
        <br>
        <br>
        影响等级：{{assdata.rander}}
        <br>
        <br>
        Information Level:{{assdata.engrander}}
        <br>
        <br>
        {{assdata.info}}
        <br>
        {{assdata.enginfo}}
      </el-col>
    </el-row>

    <el-row :gutter="20">
      <!--操作窗-->
      <el-col :span="14" id="three" class="grid-content bg-purple">
        <label for="myProgress">进度条</label>
        <progress id="myProgress" value="0" max="100"></progress>
        <span id="mySpan"></span>
        <el-button type="primary" round @click="Progress1">评估</el-button>
        <el-select v-model="kind" @change="currentSel" clearable placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"

            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <!--列表-->
        <div id="list">
          <el-table
            ref="singleTable"
            :data="eventlist"
            highlight-current-row
            @current-change="handleCurrentChange"
            style="width: 100%">
            <el-table-column
              type="index"
              width="50">
            </el-table-column>
            <el-table-column
              property="name"
              label="事件名称"
              width="120">
            </el-table-column>
            <el-table-column
              property="engname"
              label="英文名称"
              width="120">
            </el-table-column>
            <el-table-column
              property="time"
              label="时间">
            </el-table-column>
          </el-table>
        </div>
      </el-col>

      <!--简介窗-->
      <el-col :span="10" id="four" class="grid-content bg-purple-dark">
        {{assdata.brief}}
      </el-col>
    </el-row>
  </div>
</template>
<script>
  import {getCodeInformation, getAssess, getEventList} from "../../api/recommend";
  import Bus from '../../bus'

  export default {
    data() {
      return {
        query: '',
        progress: 0,
        kind:'',
        options:[{
          value: '化工',
          label: '化工'
        }, {
          value: '农业',
          label: '农业'
        }, {
          value: '航天',
          label: '航天'
        }],
        codeinfo: ['11111111', '222222', '33333333333', '444444444444444', '55555555', '66666666666', '7', '88', '9', '0'],
        assdata: {
          chiname: 'Linux',
          engname: 'Linux',
          impact: 6.36186,
          rander: '强',
          engrander: 'Strong',
          info: '(此次计算所有数据均来自互联网)',
          enginfo: '(The data required for this calculation comes from the internet.)',
          brief: 'Linux是一套免费使用和自由传播的类Unix操作系统，是一个基于POSIX和UNIX的多用户、多任务、支持多线程和多CPU的操作系统。它能运行主要的UNIX工具软件、应用程序和网络协议。它支持32位和64位硬件。Linux继承了Unix以网络为核心的设计思想，是一个性能稳定的多用户网络操作系统。',
        },
        eventlist: [{
          name: 'Linux',
          engname: 'Linux',
          time: '1936'
        }, {
          name: '云计算',
          engname: 'cloud computing',
          time: '2006'
        }, {
          name: '大数据',
          engname: 'big data',
          time: '2008年8月中旬'
        }, {
          name: '互联网',
          engname: 'Internet',
          time: '1969'
        }],
        currentRow: null
      }
    },
    methods: {
      //评估结果信息
      _getAssess() {
        getAssess().then((res) => {
          console.log(res);
          this.assdata.chiname = res.chiname;
          this.assdata.engname = res.engname;
          this.assdata.impact = res.impact;
          this.assdata.rander = res.rander;
          this.assdata.engrander = res.engrander;
          this.assdata.brief = res.brief;
        })
      },
      //代码窗代码信息
      _getCodeInformation() {
        getCodeInformation().then(res => {
          console.log(res);
          this.codeinfo = res.codeinfo;
        })
      },
      //事件列表
      _getEventList() {
        getEventList().then(res => {
          console.log(res);
          this.eventlist = res.eventlist;
        })
      },
      currentSel(selVal){
        console.log(selVal)
      },
      Progress1() {
        //this._getAssess();
        //this._getCodeInformation();

        //获取进度条
        var myProgress = document.getElementById("myProgress");
        //获取span元素用于显示进度数值
        var mySpan = document.getElementById("mySpan");
        //获取代码行的div
        var cmd = document.getElementById("cmd")
        //初始化 进度条的value为0，进度数值为空，代码信息为空
        myProgress.value = 0;
        mySpan.innerText = "";
        cmd.innerText = "";

        var i = 0;
        //用一个变量str存放代码信息，直接使用this,codeinfo有问题
        var str = this.codeinfo;
        //value记录进度值
        var value = myProgress.value;
        //打印codeinfo信息
        console.log(str)
        //进度条加载时间间隔
        var time = (this.codeinfo.length * 300) / 10;
        //代码信息模拟
        var ID2 = setInterval(function () {
          if (i === str.length) {
            clearInterval(ID2);
          } else {
            var newnode = document.createElement("li");
            newnode.innerText = "nihao " + str[i]
            cmd.appendChild(newnode);
            i++;
          }
        }, 300);
        //进度条模拟
        var ID1 = setInterval(function () {
          value = myProgress.value;
          if (value < 100) {
            value += 10;
            myProgress.value = value;
            mySpan.innerText = value + "%";
          }
          if (value === 100) {
            clearInterval(ID1);
            localStorage.query = this.query
            Bus.$emit('query', localStorage.query)
          }
        }, time);
      },
      handleCurrentChange(val) {
        console.log(val);
        this.query = val.name;
      }
    }
  }
</script>
<style scoped lang="less">
  #one {
    height: 300px;
    overflow: scroll;
  }

  #two {
    height: 300px;
  }
  #list{
    height: 300px;
    overflow: scroll;
  }
  #four {
    height: 300px;
  }

  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }

  .el-col {
    border-radius: 4px;
  }

  .bg-purple-dark {
    background: #99a9bf;
  }

  .bg-purple {
    background: #d3dce6;
  }

  .bg-purple-light {
    background: #e5e9f2;
  }

  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }

  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
