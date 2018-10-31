<template>
    <div class="bg">
        <h1 class="animated flipInX">对不起，数据库里没有这条数据，请您重新输入。
        </h1>
        <div class="back animated bounceInUp">
            <i title="返回" class="fa fa-reply-all" @click="goBack"></i>
        </div>
    </div>
</template>
<script>
export default {
    name: 'notfound',
    methods: {
        goBack() {
            this.$router.go(-1)
        }
    }
}
</script>
<style scoped lang="less">
  *{
    padding: 0;
    margin: 0;
  }
.bg{
    background:url("../../../static/img/404.jpg" ) no-repeat ;
  background-size:cover;

  height: 100%;
  width: 100%;
}
h1 {
    line-height: 4em;
    text-align: center;
    font-size: 2em;
    font-family: fantasy;
    color: #475669;
    letter-spacing: 25px;
}

.back {
    padding-right: 3em;
    text-align: right;
    i {
        font-size: 2em;
        color: #475669;
        &:hover {
            cursor: pointer;
            color: #324057;
        }
    }
}
</style>
