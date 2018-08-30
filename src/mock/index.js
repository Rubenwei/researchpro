import Mock from 'mockjs'

let debug = 1;
if (debug) {
  Mock.mock(/login/, {
    "data": {
      userId: "@integer(1,10)",
      "userName|1": ["鲁班七号", "后裔", "蔡文姬", "王昭君", "妲己", "铠"],
      token: '@string(30)'
    },
    "msg": "Success",
    "status": "YQ-000"
  })
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
          name: '指数',
          name_en: 'Index',
          router: '/index',
          icon: 'el-icon-picture-outline',
          children: []
        },
        {
          name: '模块三',
          name_en: 'Cube',
          router: '/cube',
          icon: 'el-icon-menu',
          children: []
        },
        {
          name: '模块一',
          name_en: 'Projects',
          router: '',
          icon: 'el-icon-time',
          children: [{
            name: '模块一1',
            name_en: 'Notes',
            router: '/project-info',
            icon: 'el-icon-date'
          }, {
            name: '模块一2',
            name_en: 'About',
            router: '/enroll-list',
            icon: 'el-icon-document'
          }]
        }, {
          name: '模块四',
          name_en: 'Authority',
          router: '/authority-test',
          icon: 'el-icon-setting',
          children: []
        }]
    },
    "msg": "Success",
    "status": "YQ-000"
  })
}
