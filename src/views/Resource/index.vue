<template>
  <div style="text-align:center" v-title="'补充说明'">
    <h1>{{eventname + '(' + '更多介绍' + ')'}}</h1>
    <el-col>
      <el-row :span="24">
        <el-col :span="12">
          <div class="text" align="right">
            {{items.name}}
            {{items.picurl}}
            <el-card class="box-card">
              <div v-for="text in texts" :key="text" class="text item">
                {{'列表内容 ' + text }}
              </div>
            </el-card>
          </div>
        </el-col>
        <el-col :span="12"><div class="video">
          <div class="block0">
            <el-carousel trigger="click" :autoplay="false" width="400" height="300">
              <!--这个地方autoplay=false也没用，视频还是不要自动切换比较好，你可以看看Carousel Methods里的setActiveItem可不可以实现-->
              <el-carousel-item v-for="item in items" :key="item.id">
                <video height="500px" width="400px" controls>
                  <source src="item.vidlink" type="item.vidlink/mp4">
                  您的浏览器不支持 video 标签。
                </video>
              </el-carousel-item>
            </el-carousel>
          </div>
        </div>
        </el-col>
      </el-row>
      <h1></h1>
      <el-row :span="24"><div class="pic">
        <div class="block">
          <el-carousel :interval="4000" type="card" height="300px">
            <el-carousel-item class="pic" v-for="item in items.picurl" :key="item.id">
              <img :src="item">
            </el-carousel-item>
          </el-carousel>
        </div>
      </div></el-row>
    </el-col>

    <!--<el-button class="animated rollIn" type="primary" size="large" @click="setAdmin" :disabled="isAdminAble"><i class="fa fa-user"></i>&nbsp;&nbsp;我是管理员</el-button>-->
    <!--<el-button class="animated rollIn rythm rythm-high" size="large" @click="setUser" :disabled="!isAdminAble"><i class="fa fa-user-o"></i>&nbsp;&nbsp;我是吃瓜群众</el-button>-->
  </div>
</template>
<script>
  import {getResource} from '../../api/recommend'
  import Bus from '../../bus'
  export default {
    data(){
      return{
        texts:['事件一','事件二', '事件三'],
        eventname: '事件名',
        items:{
          name:'',
          picurl: ''
        }
      }
    },
    mounted(){
      Bus.$on('query', (res)=>{
        this._getResource()
      })
      this._getResource()
    },
    methods:{
      _getResource(){
        getResource().then((res)=>{
          this.items.name = res.name
          this.items.picurl = res.piclink
        })
      }
    }
  }
</script>
<style scoped>
  .el-carousel__item.pic:nth-child(2n) {
    background-color: #99a9bf;
  }
  .el-carousel__item.pic:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  img{
    margin: 0;
  }
  video{
    margin: 0;
  }
  .box-card{
    font-size:20px;
    height :300px;
    width: 600px;
    text-align: center;
    overflow-y: auto;
  }
</style>
