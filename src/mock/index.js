import Mock from 'mockjs'

let debug = 1;
if (debug) {

  Mock.mock(/getMenu/, {
    "data": {
      menu: [{
        name: '主页',
        name_en: 'Home',
        router: '/home',
        icon: 'el-icon-menu',
        children: []
        },
        {
          name: '事件简介',
          name_en: 'Introduction',
          router: '/eventintro',
          icon: 'el-icon-menu',
          children: []
        },
        {
          name: '指数统计',
          name_en: 'Index',
          router: '/index',
          icon: 'el-icon-picture-outline',
          children: []
        },
        {
          name: '媒体资源',
          name_en: 'Resource',
          router: '/resource',
          icon: 'el-icon-time',
          children: []
        }, {
          name: '事件相关',
          name_en: 'About',
          router: '/about',
          icon: 'el-icon-setting',
          children: []
        }]
    },
    "msg": "Success",
    "status": "YQ-000"
  })
}
