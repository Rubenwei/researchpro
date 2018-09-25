<template>
  <div style="text-align:center" v-title="'补充说明'">
      <el-card>
        <el-row>
          <div class="pic">
            <h1>{{items.name}}</h1>
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
         <el-card>
           <p>视频</p>
           <el-row  class="row-bg" justify="space-around" :gutter="50" type="flex">
             <el-col :span="6" v-for="(item,index) in items.vidurl" :key="index" >
               <div class="grid-content bg-purple">
                 <video width="320" height="240" controls>
                   <source :src="item"  type="video/mp4">
                   您的浏览器不支持 HTML5 video 标签。
                 </video>
               </div>
             </el-col>
           </el-row>
         </el-card>
        </el-row>
      </el-card>
  </div>
</template>
<script>
  import {getResource} from '../../api/recommend'
  import Bus from '../../bus'

  export default {
    data(){
      return {
        items: {
          name: '肥皂',
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
  .el-row {
    margin-bottom: 20px;
  &:last-child {
     margin-bottom: 0;
   }
  }
  .bannderimg{
    max-width:100%;
    max-height: 100%;
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
  img{
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
