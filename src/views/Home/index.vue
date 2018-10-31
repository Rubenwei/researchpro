<template>
  <div class="act">
    <el-row>
      <el-col :span="12"><div class="grid-content bg-purple" align="center">
        <h1 class="typing title-h">带你快速建立对等级的印象</h1>
      </div></el-col>
      <el-col :span="12"><div class="grid-content bg-purple-light" align="center">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>等级一</span>
          </div>
          <div v-for="o in items1" :key="o" class="text item">
            {{ o }}
          </div>
        </el-card>
      </div></el-col>
    </el-row>
    <el-row>
      <el-col :span="12"><div class="grid-content bg-purple" align="center">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>等级二</span>
          </div>
          <div v-for="o in items2" :key="o" class="text item">
            {{ o }}
          </div>
        </el-card>
      </div></el-col>
      <el-col :span="12"><div class="grid-content bg-purple-light" align="center">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>等级三</span>
          </div>
          <div v-for="o in items3" :key="o" class="text item">
            {{ o }}
          </div>
        </el-card>
      </div></el-col>
    </el-row>
    <el-row>
      <el-col :span="12"><div class="grid-content bg-purple" align="center">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>等级四</span>
          </div>
          <div v-for="o in items4" :key="o" class="text item">
            {{ o }}
          </div>
        </el-card>
      </div></el-col>
      <el-col :span="12"><div class="grid-content bg-purple-light" align="center">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>等级五</span>
          </div>
          <div v-for="o in items5" :key="o" class="text item">
            {{ o }}
          </div>
        </el-card>
      </div></el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: "eventintro",
    data () {
      return{
        items1:['传感器','电子管', '晶体管'],
        items2:['单片机','嵌入式系统', '3G'],
        items3:['图灵机','物联网', '4G'],
        items4:['安卓','Linux', 'Windows'],
        items5:['互联网','计算机', '电话'],

      }
    }
  }
</script>

<!-- <style scoped> -->
<style scoped>
  div.act{
    background-image: url("../../../static/img/blue.jpg");
    background-position: center;
    background-size: 100%;
  }
  /*.act > div:nth-child(1) {
    -webkit-animation: scale 0.75s 0.12s infinite cubic-bezier(.2, .68, .18, 1.08);
    animation: scale 0.75s 0.12s infinite cubic-bezier(.2, .68, .18, 1.08);
  }
  .act > div{
    background-color: #fff;
    width: 15px;
    height: 15px;
    border-radius: 100%;
    margin: 40px;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    display: inline-block;
  }*/
  .el-row {
    margin-bottom: 20px;
  &:last-child {
     margin-bottom: 0;
   }
  }
  .el-col {
    border-radius: 4px;
  }
  /*.bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }*/
  h1{
    position: relative;
    margin-bottom: 0px;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px;
    background-color: #f9fafc;
  }
  .text {
    position: relative;
    font-size: 16px;
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
    opacity: 0.65;
    width: 360px;
  }
  .title-h{
    font-size: 1.8rem;
    padding-top: 10%;
    margin-bottom: 5%;
    font-weight: normal;
    letter-spacing: .3rem;
    /*padding-left: 29.2%;*/
    -webkit-animation: type 2s steps(50, end) forwards;
    animation: type 2s steps(50, end) forwards;
  }
  .typing{
    text-align: center;
    color: black;
    width:100%;
    white-space:nowrap;
    overflow:hidden;
  }
  @-webkit-keyframes type{
    from { width: 0;}
  }

  @keyframes type{
    from { width: 0;}
  }

</style>

