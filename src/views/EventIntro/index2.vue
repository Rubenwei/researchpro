<template>
  <div class="cube-wrap" v-title="'魔幻立方'">
    {{itemName.name}}
    {{itemName.picurl}}
    {{itemName.info}}
  </div>
</template>
<script>

  import {getItem} from "../../api/recommend";
  import Bus from '../../bus'
  export default {
    name: "",
    data(){
      return {
        itemName:{
          name:'',
          picurl:'',
          info:[]
        }
      }
    },
    mounted(){
      Bus.$on('query', (res)=>{
        this._getItem()
      })
      this._getItem()

    },
    methods:{
      _getItem(){
        getItem().then((res)=>{
          console.log(res)
          this.itemName.name = res.name
          this.itemName.picurl = res.piclink
          this.itemName.info = res.info
        })
      }
    }
  };
</script>
