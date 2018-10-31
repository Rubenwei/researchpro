<template>
  <div>
    <el-row :gutter="20">
      <!--代码窗-->
      <el-col :span="13" id="one" class="grid-content bg-purple">
        <div class="code">
          <ul id="cmd">
          </ul>
        </div>
      </el-col>
      <!--结果窗-->
      <el-col :span="11" id="two" class="grid-content bg-purple-dark">
        事件名称：{{assdata.chiname}}
        <br>

        Event Name:{{assdata.engname}}
        <br>
        <br>
        影响指数：{{assdata.impact}}
        <br>

        Impact Index:{{assdata.impact}}
        <br>
        <br>
        影响等级：{{assdata.rander}}
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
      <el-col :span="13" id="three" class="grid-content bg-purple1">
        <div id="xyl">
          <label for="myProgress">进度条</label>
          <progress id="myProgress" value="0" max="100"></progress>
          <span id="mySpan"></span>

          <!--按钮-->
          <el-button :disabled="unable"
                     type="primary"
                     round
                     @click="Progress1"
          >评估
          </el-button>
          <br>

          <el-select v-model="kind" @change="currentSel" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
          <el-checkbox v-model="checked1" disabled>百度</el-checkbox>
          <el-checkbox v-model="checked2" disabled>知乎</el-checkbox>
          <el-checkbox v-model="checked3" disabled>其他</el-checkbox>
        </div>
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
              width="60">
            </el-table-column>
            <el-table-column
              property="name"
              label="事件名称"
              width="120">
            </el-table-column>
            <el-table-column
              property="engname"
              label="英文名称"
              width="150">
            </el-table-column>
            <el-table-column
              property="time"
              label="时间">
            </el-table-column>
          </el-table>
        </div>
      </el-col>

      <!--简介窗-->
      <el-col :span="11" id="four" class="grid-content bg-purple-dark">
        {{assdata.brief}}
      </el-col>
    </el-row>
  </div>
</template>
<script>
  import {getCodeInformation, getAssess} from "../../api/recommend";
  import Bus from '../../bus'

  export default {
    data() {
      return {
        query: '',
        progress: 0,
        unable:true,
        kind:'',
        checked1:true,
        checked2:true,
        checked3:true,
        options:[{
          value: '化工',
          label: '化工'
        }, {
          value: '信息',
          label: '信息'
        }, {
          value: '机械',
          label: '机械'
        }],
        codeinfo: ['11111111', '222222', '33333333333', '444444444444444', '55555555', '66666666666', '7', '88', '9', '0','11111111', '222222', '33333333333', '444444444444444', '55555555', '66666666666', '7', '88', '9', '0'],
        assdata: {
          chiname: '',
          engname: '',
          impact: '',
          rander: '',
          engrander: '',
          info: '',
          enginfo: '',
          brief: '',
        },
        eventlist: [
          {
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
        }
        ],
        currentRow: null
      }
    },
    mounted(){
      //this._getCodeInformation();
    },
    methods: {
      selectable(index){
        return index !== 1
      },
      //评估结果信息
      _getAssess() {
        getAssess().then((res) => {
          console.log(res.data);
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
          console.log('coooooo'+res);
          this.codeinfo = res;
        })
      },
      currentSel(selVal){
        console.log("选中类型："+selVal);
        // var url = 'api/eventlist?message=' + selVal;
        // console.log('EventList:' + url);
        // this.$axios.get(url).then((res)=>{
        //   console.log(res.data);
        //   this.eventlist = res.data
        // });

        this.unable = false;
      },
      Progress1() {
        //获取代码行数据
        // this._getCodeInformation();
        this.unable = true;
        //获取进度条
        var myProgress = document.getElementById("myProgress");
        //获取span元素用于显示进度数值
        var mySpan = document.getElementById("mySpan");
        var scro = document.getElementById("one");
        //获取代码行的div
        var cmd = document.getElementById("cmd")
        //初始化 进度条的value为0，进度数值为空，代码信息为空
        myProgress.value = 0;
        mySpan.innerText = "";
        cmd.innerText = "";
        var str = this.codeinfo
        console.log('str'+str);
        var i = 0;
        //用一个变量str存放代码信息，直接使用this,codeinfo有问题
        var value = myProgress.value;
        //进度条加载时间间隔
        var time = (10 * 300) / 10;
        //代码信息模拟
        var ID2 = setInterval(function () {
          if (i === 10) {
            clearInterval(ID2);
          } else {
            var newnode = document.createElement("li");
            newnode.innerText =str[i];
            cmd.appendChild(newnode);
            scro.scrollTop = scro.scrollHeight;
            i++;
          }
        }, 300);
        let t = this;
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
            t._getAssess();
            t.unable = false;
          }
        }, time);
      },
      handleCurrentChange(val) {
        this.unable = false;
        console.log("选中事件："+val.name);
        localStorage.query = val.name;
        Bus.$emit('query', localStorage.query)
        // var url = 'api/assessinfomation?message=' + localStorage.query;
        // console.log('AssessInformation:' + url);
        // this.$axios.get(url).then((res) => {
        //   console.log(res.data);
        //   this.assdata.chiname = res.data.chiname;
        //   this.assdata.engname = res.data.engname;
        //   this.assdata.impact = res.data.impact;
        //   this.assdata.rander = res.data.rander;
        //   this.assdata.engrander = res.data.engrander;
        //   this.assdata.brief = res.data.brief;
        // });
      }
    }
  }
</script>
<style scoped lang="less">
  #one {
    height: 300px;
    overflow: scroll;
    font-size:20px;
  }
  #two {
    height: 300px;
    font-size:17px;
  }
  #list{
    text-align:left;
    height: 260px;
    overflow: scroll;
  }
  #xyl{
    text-align: center;
  }
  #four {
    height: 300px;
    font-size: 20px;
    text-indent: 40px;
    line-height:35px;
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
    /*background: #99a9bf;*/
    /*background: #d3dce6;*/
    background: #303030;
    color:#D3D3D3;
  }

  .bg-purple {
    /*background: #d3dce6;*/
    color: #D3D3D3;
    background: #1E1E1E;
  }
  .bg-purple1 {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #D3D3D3;
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
