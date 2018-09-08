<template>
  <div id="Search" style="text-align: center; margin-top: 10px; margin-bottom: -10px">
    <el-form @submit.native.prevent>
      <el-autocomplete
        v-model="query"
        :fetch-suggestions="querySearchAsync"
        @select="handleSelect"
        :placeholder="placeholder"
        @keyup.native.enter="Search"
        clearable
      >
      </el-autocomplete>
      <el-button type="primary" icon="el-icon-search" @click="Search">搜索</el-button>
      <ul>
        <li v-for="value in myData">{{value}}</li>
      </ul>
    </el-form>
  </div>
</template>
<script>
  import jsonp from '../common/js/jsonp'
  import Bus from '../bus'

  export default {
    data() {
      return {
        query: '',
        placeholder: '请输入内容',
        myData:[]
      }
    },
    methods: {
      querySearchAsync(queryString, callback) {
       let url = 'api/getnamelist?message=' + this.query

        //从后台获取到对象数组
        this.$axios.get(url)
          .then(
            (res => {
              callback(res.data)
            })
          )
      },
      handleSelect(item) {
        console.log(item);
        //do something
      },
      Search(){
        localStorage.query = this.query

        Bus.$emit('query', localStorage.query)
        this.$router.push({path:'home'});
        this.placeholder = this.query
        // localStorage.query = this.query
        console.log('query:' + localStorage.query)
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

</style>
