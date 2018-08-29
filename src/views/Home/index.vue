<template>
  <div v-title="'项目信息'">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <i class="el-icon-edit"></i>&nbsp;&nbsp;
        <span>QQ音乐api</span>
      </div>
      <div class="text item">
        <el-carousel :interval="4000" type="card" height="300px">
          <el-carousel-item v-for="item in recommends" :key="item.id">
            <a :href="item.linkUrl">
              <img :src="item.picUrl">
            </a>
          </el-carousel-item>
        </el-carousel>
      </div>
      <div>
        <h1>热门歌单推荐</h1>
        <ul>
          <li v-for="item in discList" class="playlist__item">
            <div class="icon" style="margin: auto;">
              <img :src="item.imgurl" width="60" height="60">
            </div>
            <div class="text" style="float: left;">
              <h2 class="name" v-html="item.creator.name"></h2>
              <p class="desc" v-html="item.dissname"></p>
            </div>
          </li>
        </ul>
      </div>
    </el-card>

  </div>
</template>
<script>
  import {getRecommend, getDiscList} from "../../api/recommend";
  import {ERR_OK} from "../../api/config";

  export default {
    name: "projectinfo",
    data() {
      return {
        recommends: [],
        discList: []
      };
    },
    created() {
      this._getRecommend()
      this._getDiscList()
    },
    methods: {
      _getRecommend() {
        getRecommend().then((res) => {
          if (res.code === ERR_OK) {
            this.recommends = res.data.slider
          }
        })
      },
      _getDiscList() {
        getDiscList().then((res) => {

          if(res.code === ERR_OK){
            this.discList = res.data.list
          }
        })
      }
    }
  };
</script>
<style scoped lang="less">
  li {
    line-height: 30px;
    list-style-type: none;
    padding: 10px;

  }
  .playlist__item {
    display: inline-block;
    width: 15%;
    padding-bottom: 44px;
    overflow: hidden;
    font-size: 14px;
    vertical-align: top;
  }
</style>
