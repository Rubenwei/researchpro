<template>
  <div style="text-align:center;padding:250px" v-title="'补充说明'">

    <!--这里可以利用element的el-carousel组件来展示图片-->
    <!--相应属性查看element文档-->
    <!--通过循环输出图片内容-->

    <!--<el-carousel :interval="4000" type="card" height="300px">-->
      <!--<el-carousel-item v-for="item in items" :key="item.id">-->
          <!--<img :src="item.piclink">-->
      <!--</el-carousel-item>-->
    <!--</el-carousel>-->

    <img class="pic1" src="楚长城.jpg" width="300" height="220"/>
    <!--我觉得图片可以用画廊形式-->
    <img class="pic2" src="楚长城.jpg" width="300" height="220"/>
    <img class="pic3" src="楚长城.jpg" width="300" height="220"/>
    <img class="pic4" src="楚长城.jpg" width="300" height="220"/>
    <video width="400" height="300" controls>
      <source src="movie.mp4" type="video/mp4">
      <source src="movie.ogg" type="video/ogg">
      您的浏览器不支持 video 标签。
    </video>
    <!--<el-button class="animated rollIn" type="primary" size="large" @click="setAdmin" :disabled="isAdminAble"><i class="fa fa-user"></i>&nbsp;&nbsp;我是管理员</el-button>-->
    <!--<el-button class="animated rollIn rythm rythm-high" size="large" @click="setUser" :disabled="!isAdminAble"><i class="fa fa-user-o"></i>&nbsp;&nbsp;我是吃瓜群众</el-button>-->
  </div>
</template>
<script>
  export default {
    data(){
      return{
        items:[{
          name:'事件一',
          piclink:'static/imgs/1.jpg',
          vidlink:'static/video/1.mp4'
        },
          {

          }]
      }
    }
  }
</script>
<style scoped>
  img.pic1{
    position: absolute;
    left: 4%;
    top: 30%;
  }
  img.pic2{
    position: absolute;
    left:27%;
    top: 30%;
  }
  img.pic3{
    position: absolute;
    right:28%;
    top: 30%;
  }
  img.pic4{
    position: absolute;
    right:5%;
    top: 30%;
  }
  video{
    position: absolute;
    top: 70%;
    left: 35%;
  }

</style>
