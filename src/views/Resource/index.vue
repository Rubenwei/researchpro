<template>
  <div style="text-align:center" v-title="'补充说明'">
      <el-card>
        <el-row>
          <div class="pic">
            <h1>{{eventname + '(' + '更多介绍' + ')'}}</h1>
            <div class="block">
              <el-carousel :interval="4000" type="card" height="300px">
                <el-carousel-item class="pic" v-for="item in items.picurl" :key="item.id">
                  <img :src="item">
                </el-carousel-item>
              </el-carousel>
            </div>
          </div>
        </el-row>
        <el-row>
         <el-card>
           <p>视频</p>
           <el-row  class="row-bg" justify="space-around" :gutter="50">
             <el-col :span="6" v-for="(item,index) in items.vidurl" :key="index">
               <div class="grid-content bg-purple">
                 <!--<video-player  class="video-player vjs-custom-skin"-->
                                <!--ref="videoPlayer"-->
                                <!--:playsinline="true"-->
                                <!--:options="playerOptions"-->
                                <!--@play="onPlayerPlay($event)"-->
                                <!--@pause="onPlayerPause($event)"-->
                 <!--&gt;-->
                 <!--</video-player>-->
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

  import { videoPlayer } from 'vue-video-player';

  export default {
    data(){
      return {
        texts: ['事件一', '事件二', '事件三'],
        eventname: '事件名',
        items: {
          name: '',
          picurl: ['../../../static/img/sky.jpg', '../../../static/img/sky.jpg', '../../../static/img/sky.jpg'],
          vidurl: ['../../../static/audio/格式工厂oxi.mp4', '../../../static/audio/格式工厂oxi.mp4']
        },
        playerOptions: {
//        playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
          autoplay: false, //如果true,浏览器准备好时开始回放。
          muted: false, // 默认情况下将会消除任何音频。
          loop: false, // 导致视频一结束就重新开始。
          preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
          language: 'zh-CN',
          aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
          fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
          sources: [{
            type: "video/mp4",
            src: "blob:https://baike.baidu.com/bcac16d2-be7b-470a-af88-8ba884b7e9a3" //你的视频地址（必填）
          }],
          poster: "../../../static/img/sky.jpg", //你的封面地址
          width: document.documentElement.clientWidth,
          notSupportedMessage: '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
//        controlBar: {
//          timeDivider: true,
//          durationDisplay: true,
//          remainingTimeDisplay: false,
//          fullscreenToggle: true  //全屏按钮
//        }
        }
      }
    },
    components: {
      videoPlayer
    },
    mounted(){
      Bus.$on('query', (res)=>{
        this._getResource()
      })
      this._getResource()
    },
    methods:{
      onPlayerPlay(player) {

      },
      onPlayerPause(player){

      },
      _getResource(){
        getResource().then((res)=>{
          this.items.name = res.name
          this.items.picurl = res.piclink
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
