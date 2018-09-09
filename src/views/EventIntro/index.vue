<template>
  <div v-title="'Introduction'">
    <div class ="first">
      <el-row>
        <h1 class="title">
          {{ ChiName + '(' + EngName + ')' }}
        </h1>
      </el-row>
      <el-row>
          <el-col :span="10" align="center">
            <img src="../../../static/img/wechat.jpg" style="width: 200px; height: 200px">
          </el-col>
          <el-col :span="14">
            <dl>
              <dt>中文名：</dt>
              <dd>{{ChiName}}</dd>
              <dt>英文名：</dt>
              <dd>{{EngName}}</dd>
              <dt>国家：</dt>
              <dd>{{Country}}</dd>
              <dt>类别：</dt>
              <dd>{{Subject}}</dd>
              <dt>时间：</dt>
              <dd>{{Time}}</dd>
              <dt>重大等级：</dt>
              <dd>{{grade}}</dd>
            </dl>
          </el-col>
      </el-row>
    </div>
    <hr size="5px">
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
        grade: 2
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
          console.log(res.cnname)
        })
      },
    }
  };
</script>

<style scoped lang="less">
  div.first{
    background-image: url("../../../static/img/sky.jpg");
  }
  .title{
    text-align: center;
    color: #9AC0CD;
    font-size: 40px;
  }
  img{
    position: relative;
    overflow: hidden;
  }
  button{
    position: relative;
    margin-left: 45%;
    width: 120px;
    padding:6px;
    background-color: #63B8FF;
    border-color: #357ebd;
    color: #fff;
    -moz-border-radius: 10px;
    -webkit-border-radius: 10px;
    border-radius: 10px; /* future proofing */

    text-align: center;
    vertical-align: middle;

    font-weight: lighter;
    font-size:110%
  }
  ul {
    display:block;
    list-style-type:none;
    margin:25px;

    overflow: hidden;
  }
  dt,dd{

    font-size: 25px;
    color: #707070;

    list-style: none;
    position: relative;
    padding: 0 0 0 2em;
    -webkit-transition: .12s;
    transition: .12s;
  }
  dl{
    float:left; width:100%; height:100%; padding:20px; margin-left:20px;
  }
  dt {  float: left; width: 30%;}
  dd { float: left; width: 30%;}
  .text{
    margin-left: 20%;
    margin-right: 20%;
    font-size: 20px;
    color: #838B8B;
  }
  li::before {
    position: absolute;
    content: '\2022';
    color: #FFF;
    top: 0;
    left: 0;
    text-align: center;
    font-size: 2em;
    opacity: .5;
    line-height: .75;
    -webkit-transition: .5s;
    transition: .5s;
  }
  li:hover {
    color: #7AC5CD	;
  }
  li:hover::before {
    -webkit-transform: scale(2);
    -ms-transform: scale(2);
    transform: scale(2);
    opacity: 1;
    text-shadow: 0 0 4px;
    -webkit-transition: .1s;
    transition: .1s;
  }
</style>
