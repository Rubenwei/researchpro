<template>
  <div class="bg">
    <div class="login-wrap animated flipInY">
      <h3>知了搜索</h3>
      <Search></Search>
    </div>
    <!-- 粒子漂浮物 -->
    <vue-particles
      color="#fff"
      :particleOpacity="0.7"
      :particlesNumber="30"
      shapeType="star"
      :particleSize="5"
      linesColor="#fff"
      :linesWidth="2"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="150"
      :moveSpeed="3"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
      class="floatitem"
    >
    </vue-particles>

    <div id="menu">
      <ul>
        <li
          v-for="(item, index) in items"
          @click="jump(index)"
          :class="{'active':currentIndex === index}"
        >{{item}}</li>
      </ul>
    </div>

    <div id="content">
      <div class="item" v-for="(content, index) in contents" :id="getId(index)">
        <p style="color:white;font-size:24px; text-align: left;width: 500px; position: relative; top: 30%;left: 11%;text-indent: 40px;line-height: 40px">{{content}}</p>
      </div>
    </div>

  </div>
</template>
<script>
  import search from '../../components/Search'
  export default {
    name: "signin",
    data(){
      return {
        items: ['One', 'Two', 'Three', 'Four'],
        contents:['科技事件影响力评估平台是一个客观评估科技事件在一段时间内在网络中的影响力的系统平台；', '平台通过获取百度指数、百度搜索总数、知乎搜索总数的大量数据，对数据进行清洗，采用目前主流的机器学习算法，进行评估；', '平台可为科技事件的选取和中小学进行科普教育提供一个参考角度；', '如果您在使用过程中发现什么问题，请联系开发人员：GSWLee，QQ：995030368'],
        currentIndex:0
      }
    },
    components:{
      'Search':search,
    },
    created() {
      this.getMenu()
    },
    mounted() {
      // 组件一旦渲染到DOM中，就添加滚动事件监听，每次滚动鼠标滚轮，都会使回调函数执行
      window.addEventListener('scroll', this.handleScroll);
      console.log("请求科技事件名称列表");
      let url = 'api/getsearchlist';
      this.$axios.get(url).then((res)=>{
        console.log(res.data);
        this.$store.state.common.eventlist = res.data;
      })
    },
    methods: {
      handleScroll(){
        let scrolled = document.documentElement.scrollTop || document.body.scrollTop
        // console.log(scrolled)
        if (scrolled >= 3300) {
          this.currentIndex = 4
        } else if (scrolled < 3300 && scrolled >= 2400) {
          this.currentIndex = 3
        } else if (scrolled < 2400 && scrolled >= 1500){
          this.currentIndex = 2
        } else if (scrolled < 1500 && scrolled >= 700){
          this.currentIndex = 1
        } else {
          this.currentIndex = 0
        }
      },
      jump (index) {

        let jump = document.querySelectorAll('.item')
        let total = jump[index].offsetTop
        let distance = document.documentElement.scrollTop || document.body.scrollTop
        // console.log('total:'+total)
        // console.log('distance:' + distance)
        // 平滑滚动，时长500ms，每10ms一跳，共50跳
        let step = total / 50
        console.log(step)
        if (total > distance) {
          smoothDown()
        } else {
          let newTotal = distance - total
          step = newTotal / 50
          smoothUp()
        }
        function smoothDown () {
          if (distance < total) {
            distance += step
            document.body.scrollTop = distance
            document.documentElement.scrollTop = distance
            setTimeout(smoothDown, 10)
          } else {
            document.body.scrollTop = total
            document.documentElement.scrollTop = total
          }
        }
        function smoothUp () {
          if (distance > total) {
            distance -= step
            document.body.scrollTop = distance
            document.documentElement.scrollTop = distance
            setTimeout(smoothUp, 10)
          } else {
            document.body.scrollTop = total
            document.documentElement.scrollTop = total
          }
        }
      },
      getId(index){
        return "item" + (index + 1)
      },
      getMenu() {
        this.$axios({
          url: "getMenu",
          method: "GET"
        }).then(res => {
          // 提取菜单数组，交给本地存储
          let menu = res.data.data.menu;
          localStorage.menu = JSON.stringify(menu);

        });
      },

    },
  };
</script>
<style scoped lang="less">
  *[hidefocus]{outline:none;}
  body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,form,fieldset,input,textarea,p,blockquote,th,td{padding:0;margin:0;}
  fieldset,img,html,body,iframe{border:0;}

  #content{width: 100%;height: auto; margin: 0 auto;}
  #content div{width: 100%; height: 868px; margin: 0 auto;}
  #content #item1{background-image: url('../../../static/img/1.jpg');
    background-size: 110%;}
  #content #item2{background-image: url('../../../static/img/2.jpg');
    background-size: 110%;}
  #content #item3{background-image: url('../../../static/img/3.jpg');
    background-size: 110%;}
  #content #item4{background-image: url('../../../static/img/4.jpg');
    background-size: 110%;}
  #content #item5{background-image: url('../../../static/img/5.jpg');
    background-size: 110%;}
  #content  h1{font-size: 36px; color: #fff;}
  #menu{width: 88px;height: auto; position: fixed;top: 50%;margin-top: -135px;}
  #menu ul{display: block;list-style: none}
  #menu ul li {width: 88px; height: 54px; line-height: 54px; text-align: center;background-color: #fff;color: #32c96a;display: block}
  #menu ul .active{background: #ea5a47;
    color:#fff;}

  .bg {
    #particles-js {
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
    }
  }

  .login-wrap {
    width: 330px;
    border-radius: 5px;
    padding: 20px;
    z-index: 3;
    margin-right: -37%;
    position: fixed;
    top: 35%;
    right:800px;
    background: rgba(216,220,229,0.5);
    .el-form-item {
      margin-bottom: 25px !important;
    }
    h3 {
      text-align: center;
      color: #ebedef;
      margin-top: 0px;
      margin-bottom: 5px;
      span {
        color: #20a0ff;
      }
    }
    form {
      margin-top: 25px;
      .el-form-item {
        margin-bottom: 15px;
      }
    }
    a {
      text-decoration: none;
      color: #1f2d3d;
    }
    button {
      width: 100%;
      font-weight: 600;
    }
  }
</style>
