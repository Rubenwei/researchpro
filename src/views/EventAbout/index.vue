<template>
  <div v-title="'相关事件的等级'">

    <!--如果做成动画效果可以用css3的animate.css实现，项目里安装了-->
    <!--像这样在class里面引用相应的动画就可以很酷炫-->
    <!--<div class="login-wrap animated flipInY" v-title="'Auto Vue'">-->
      <!--<h3>Auto Vue</h3>-->
      <!--<Search></Search>-->
    <!--</div>-->

    <!--有些其他友好的交互体验效果不能用jquery写，因为vue是设计出来不是操作dom的-->
    <!--像这样写js代码 实现了锚点效果-->
    <!--jump (index) {-->
    <!--let jump = document.querySelectorAll('.item')-->
    <!--let total = jump[index].offsetTop-->
    <!--let distance = document.documentElement.scrollTop || document.body.scrollTop-->
    <!--// console.log('total:'+total)-->
    <!--// console.log('distance:' + distance)-->
    <!--// 平滑滚动，时长500ms，每10ms一跳，共50跳-->
    <!--let step = total / 50-->
    <!--console.log(step)-->
    <!--if (total > distance) {-->
    <!--smoothDown()-->
    <!--} else {-->
    <!--let newTotal = distance - total-->
    <!--step = newTotal / 50-->
    <!--smoothUp()-->
    <!--}-->

    <h1>
      相关事件的等级介绍
    </h1>
    <h2 class="前导">
      前导事件名称：
    </h2>
    <h2 class="后继">
      后继事件名称：
    </h2>
    <button class="button1">
      view
    </button>
    <button class="button2">
      view
    </button>
    <img class="image1" src=""/>
    <!--这个地方我想的是把等级用一个圆形图标展现出来-->
    <img class="image2" src=""/>
    <p class="箭头1">&#8595</p>
    <p class="箭头2">&#8595</p>


  </div>
</template>

<style>
  .image1{
    position: absolute;
    top: 35%;
    left: 38%;
    width:80px;
    height:80px;
    border-radius:200px;
  }
  .image2{
    position: absolute;
    bottom: 23%;
    left: 38%;
    width:80px;
    height:80px;
    border-radius:200px;
  }
  button.button1{
    position: absolute;
    top: 42%;
    right: 40%;
    width: 120px;
    padding:6px;
    background-color: #63B8FF;
    border-color: #357ebd;
    color: #fff;
    -moz-border-radius: 10px;
    -webkit-border-radius: 10px;
    border-radius: 10px; /* future proofing */
    -khtml-border-radius: 10px; /* for old Konqueror browsers */
    text-align: center;
    vertical-align: middle;
    border: 1px solid transparent;
    font-weight: lighter;
    font-size:110%
  }
  button.button2{
    position: absolute;
    bottom: 25%;
    right: 40%;
    width: 120px;
    padding:6px;
    background-color: #63B8FF;
    border-color: #357ebd;
    color: #fff;
    -moz-border-radius: 10px;
    -webkit-border-radius: 10px;
    border-radius: 10px; /* future proofing */
    -khtml-border-radius: 10px; /* for old Konqueror browsers */
    text-align: center;
    vertical-align: middle;
    border: 1px solid transparent;
    font-weight: lighter;
    font-size:110%
  }
  h1{
    position: absolute;
    left: 5%;
    top: 20%;
  }
  h2.前导{
    position: absolute;
    left: 20%;
    top: 38%;
    font-weight: lighter;
  }
  h2.后继{
    position: absolute;
    left: 20%;
    bottom:23%;
    font-weight: lighter;
  }
  .箭头1{
    position: absolute;
    font-size: 80px;
    right: 25%;
    top: 20%;
    color: #ff4949;
  }
  .箭头2{
    position: absolute;
    bottom: 10%;
    right: 25%;
    font-size: 80px;
    color: #ff4949;
  }
</style>
