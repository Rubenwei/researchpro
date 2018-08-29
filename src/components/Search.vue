<template>
  <div id="Search" style="text-align: center; margin-top: 10px; margin-bottom: -10px">
    <form>
      <el-autocomplete
        v-model="query"
        :fetch-suggestions="querySearchAsync"
        @select="handleSelect"
        placeholder="请输入内容"
      >
      </el-autocomplete>
      <el-button type="primary" icon="el-icon-search" @click="Search">搜索</el-button>
      <ul>
        <li v-for="value in myData">{{value}}</li>
      </ul>
    </form>
  </div>
</template>
<script>
  import jsonp from '../common/js/jsonp'
  import Bus from '../bus'

  export default {
    props:{
      placeholder:{
        type: String,
        default:'请输入内容'
      }
    },
    data() {
      return {
        query: '',
        myData:[]
      }
    },
    methods: {
      querySearchAsync(queryString, callback) {
        var list = [{}];
        //从后台获取到对象数组
        let self = this

        jsonp("https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su", {
            wd: queryString
          },
          {
            param: 'cb'
          }).then(function (res) {
          list = res.s;
          console.log(list)
          callback(list)
        }, function () {

        });
      },
      handleSelect(item) {
        console.log(item);
        //do something
      },
      Search(){
        Bus.$emit('data', this.query)
      },
      get() {
        let self = this
        // console.log(res);
        jsonp("https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su", {
            wd: this.query
          },
          {
            param: 'cb'
          }).then(function (res) {
          self.myData = res.s
        }, function () {

        });

      }
    }
  }
</script>

<style>
  div{
    padding: 0;
    margin: 0;
  }
</style>
