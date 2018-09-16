<template>
  <div class="act">
    <div></div>
    <div></div>
    <div></div>
  </div>
</template>
<style scoped>
  .act > div:nth-child(1) {
    -webkit-animation: scale 0.75s 0.12s infinite cubic-bezier(.2, .68, .18, 1.08);
    animation: scale 0.75s 0.12s infinite cubic-bezier(.2, .68, .18, 1.08);
  }
  .act > div{
    background-color: #fff;
    width: 15px;
    height: 15px;
    border-radius: 100%;
    margin: 40px;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    display: inline-block;
  }
</style>
