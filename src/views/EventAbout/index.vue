<template>
  <div v-title="'相关事件的等级'">
    <el-card>
      <el-col>
        <el-row :span="12" class="i1">
          <el-col :span="16" align="center">
            <el-col :span="9" align="right">
              <h2 class="前导">前导事件名称：{{}}</h2>
            </el-col>
            <el-col :span="9" align="center">
              <div class="image1">
                <p>{{ grade1 }}</p>
              </div>
            </el-col>
            <el-col :span="2" align="right">
              <button class="button1">view</button>
            </el-col>
          </el-col>
          <el-col :span="8">
            <div class="image3">
              <p>{{ item1 }}</p>
            </div>
            <p class="箭头1">&#8595</p>
            <div class="image4">
              <p>{{ item2 }}</p>
            </div>
          </el-col>
        </el-row>
        <el-row :span="12">
          <el-col :span="16" align="center">
            <el-col :span="9" align="right">
              <h2 class="后继">后继事件名称：{{}}</h2>
            </el-col>
            <el-col :span="9" align="center">
              <div class="image2">
                <p>{{ grade2 }}</p>
              </div>
            </el-col>
            <el-col :span="2" align="right">
              <button class="button2">view</button>
            </el-col>
          </el-col>
          <el-col :span="8" align="left">
            <p class="箭头2">&#8595</p>
            <div class="image5">
              <p>{{ item3 }}</p>
            </div>
          </el-col>
        </el-row>
      </el-col>
    </el-card>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        grade1: 1,//前导事件等级
        grade2: 2,//后继事件等级,
        item1 : '前导事件',
        item2 : '中间事件',
        item3 : '后继事件',
      }
    }
  }
</script>
<style>
  h1{
    position: relative;
    left: 10%;
  }
  .image1{
    background-image: url('../../../static/img/sky.jpg');/*按理说这里放上正确的图片地址就可以显示出图上加字的效果了*/
    width:80px;
    height:80px;
    border-radius:20px;/*放上图片后改border-radius的值可以改变圆角程度*/
  }
  .image2{
    background-image: url('../../../static/img/sky.jpg');
    width:80px;
    height:80px;
    border-radius:20px;
  }
  .image3{
    background-image: url('../../../static/img/sky.jpg');
    width:80px;
    height:80px;
    border-radius:200px;
  }.image4{
       background-image: url('../../../static/img/sky.jpg');
     width:80px;
     height:80px;
     border-radius:200px;
   }.image5{
      background-image: url('../../../static/img/sky.jpg');
      width:80px;
      height:80px;
      border-radius:200px;
    }
  p{
    position: relative;
    margin: 0;
  }
  button.button1{
    position: relative;
    margin :10px;
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
  button.button2{
    position: relative;
    margin :10px;
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
  h2.前导{
    font-weight: lighter;
  }
  h2.后继{
    font-weight: lighter;
  }
  .箭头1{
    margin-top: 0px;
    margin-left: 13px;
    font-size: 80px;
    color: #ff4949;
  }
  .箭头2{
    margin: 0;
    margin-left: 13px;
    font-size: 80px;
    color: #ff4949;
  }
</style>
