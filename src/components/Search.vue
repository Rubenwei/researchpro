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
       let url = 'api/getnamelist?message=' + this.query;
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
        let list = this.$store.state.common.eventlist;
        var i;
        for(i = 0; i < list.length; i++){
          if(this.query === list[i]){
            break;
          }
        }
        if(i === list.length){
          this.$router.push({path:'*'});
        }
        else{
          localStorage.query = this.query;
          var url = 'api/avgdata?message=' + localStorage.query
          this.$axios.get(url).then((res)=>{
              this.$store.state.common.avg = res.data.avg;
              this.$store.state.common.avgpc = res.data.avgpc;
              this.$store.state.common.avgmobile = res.data.avgmobile;
          });
          Bus.$emit('query', localStorage.query);
          this.$router.push({path:'eventintro'});
          this.placeholder = this.query;
          // localStorage.query = this.query
          console.log('query:' + localStorage.query)
        }
      },
    }
  }
</script>

<style>

</style>
