<template>
  <div v-title="'Introduction'">
    <div class ="first">
      <el-row>
        <h1 class="title">
          事件简介
        </h1>
      </el-row>
      <el-row>
          <el-col :span="12">
            <img :src="picurl" style="width: 400px; height: 350px">
          </el-col>
          <el-col :span="12">
              <dl class="active"><dt>中文名：</dt>
                <dd>{{ChiName}}</dd></dl>
              <dl class="active"><dt>英文名：</dt>
                <dd>{{EngName}}</dd></dl>
              <dl class="active"><dt>国家：</dt>
                <dd>{{Country}}</dd></dl>
              <dl class="active"> <dt>类别：</dt>
                <dd>{{Subject}}</dd></dl>
              <dl class="active"><dt>时间：</dt>
                <dd>{{Time}}</dd></dl>
              <dl class="active"><dt>重大等级：</dt>
                <dd><el-rate
                  v-model="grade"
                  disabled
                  show-score
                  text-color="#ff9900"
                  score-template="{value}">
                </el-rate></dd></dl>
          </el-col>
      </el-row>
    </div>
    <el-row class="text">
      <p v-for="info in Intro">
        {{info}}
      </p>
    </el-row>
    <el-row>
      <button>view more</button>
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
        grade: 2,
        picurl:'',
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
          this.grade = res.grade
          this.picurl = res.pic
        })
      },
    }
  };
</script>

<style scoped lang="less">
  div.first{
    background-image: url("../../../static/img/Moon.jpg");
    background-position: center;
    background-size: 100%;
  }
  .title{
    text-align: center;
    color: #9AC0CD;
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
    margin-left: 20%;
    margin-right: 20%;
    font-size: 20px;
    text-indent: 40px;
    line-height: 50px;
    color: #838B8B;
  }
  dt{
    float: left;
    width: 25%;
    list-style: none;
    position: relative;
    padding: 0 0 0 2em;
    margin: 0 0 .5em 10px;
    -webkit-transition: .12s;
    transition: .12s;
  }
  dd{
    width: 75%;
  }
  .active{
    content: '\2022';
    color: #303133;
    text-align: left;
    font-size: 1.75em;
    opacity: .5;
    line-height: 30px;
    -webkit-transition: .5s;
    transition: .5s;
  }
  .active:hover{
    -webkit-transform: scale(1);
    -ms-transform: scale(1);
    transform: scale(1);
    opacity: 1;
    text-shadow: 0 0 4px;
    -webkit-transition: .1s;
    transition: .1s;
  }
</style>
