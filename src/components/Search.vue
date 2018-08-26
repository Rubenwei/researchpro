<template>
  <div id="Search">
    <form style="margin: 0 30%">
      <el-input v-model="query" placeholder="请输入内容" style="width: 350px" @keyup.native="get"></el-input>
      <el-button type="primary" icon="el-icon-search" @click="Search">搜索</el-button>
      <ul>
        <li v-for="value in myData">{{value}}</li>
      </ul>
      <p v-show="myData.length === 0">暂无数据...</p>
    </form>
  </div>
</template>
<script>
  import jsonp from '../common/js/jsonp'

  export default {
    data() {
      return {
        query: '',
        myData: []
      }
    },
    // //向外传出query内容
    // created() {
    //   this.$watch('query', (newQuery) => {
    //     this.$emit('query', newQuery)
    //   })
    // }
    methods: {
      Search() {
        alert(1);
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
