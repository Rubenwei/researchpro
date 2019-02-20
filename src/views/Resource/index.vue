<template>
  <div class="bg">
    <el-row>
      <div class="pic">
        <h1 style="text-align: center;">{{items.name}}</h1>
        <div class="block">
          <el-carousel :interval="4000" type="card" height="300px">
            <el-carousel-item class="pic" v-for="item in items.picurl" :key="item.id">
              <img :src="item" class="bannderimg">
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
    </el-row>
    <el-row>
      <h1 style="text-align: center;">视频</h1>
      <el-row  type="flex">
        <ul style="width: 1400px">
          <li v-for="(item,index) in items.vidurl" :key="index" class="play-list">
              <video width="300px" height="200px" controls>
                <source :src="item"  type="video/mp4">
                您的浏览器不支持 HTML5 video 标签。
              </video>
          </li>
        </ul>
      </el-row>
    </el-row>
  </div>
</template>
<script>
  import {getResource} from '../../api/recommend'
  import Bus from '../../bus'

  export default {
    data(){
      return {
        items: {
          name: '',
          picurl: [],
          vidurl: []
        },
      }
    },
    mounted(){
      Bus.$on('query', (res)=>{
        this._getResource()
      })
      this._getResource()
    },
    watch:{
      '$route.path': function (newVal, oldVal) {
        if(newVal === '/resource'){
          console.log(newVal)
          this._getResource()
          var list = document.getElementsByTagName("video")
          for (var i = 0; i < list.length; i++){
            list[i].currentTime=0
            list[i].load()
          }
        }
      }
    },
    methods:{
      _getResource(){
        getResource().then((res)=>{
          console.log(res)
          this.items.name = res.name
          this.items.picurl = res.piclink
          this.items.vidurl = res.vidlink
        })
      }
    }
  }
</script>
<style scoped lang="less">
  .bg{
    background-image: url("../../../static/img/blue.jpg");
    background-position: center;
    background-size: 100%;
  }
  .play-list{
    display: inline-block;
    padding-bottom: 44px;
    overflow: hidden;
    width: 33%;
    vertical-align: top;
  }
  .pic{
    border-radius: 15px;
  }

  .bannderimg
  {
    max-width:100%;
  }
  .box-card{
    font-size:20px;
    height :300px;
    width: 600px;
    text-align: center;
    overflow-y: auto;
  }
</style>
