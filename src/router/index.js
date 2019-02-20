import Vue from 'vue'
import Router from 'vue-router'

// 开始
const Start = resolve => require(['@/views/Start'], resolve)

// 布局
const Layout = resolve => require(['@/views/Layout'], resolve)


// 指数统计
const Index = resolve => require(['@/views/Index'], resolve)

// 事件简介
const EventIntro = resolve => require(['@/views/EventIntro'], resolve)

// 事件相关
const EventAbout = resolve => require(['@/views/EventAbout'], resolve)

// 媒体资源
const Resource = resolve => require(['@/views/Resource'], resolve)

// 404
const Notfound = resolve => require(['@/views/Notfound'], resolve)

Vue.use(Router)

const router = new Router({
    mode:'history',
    routes: [
        // 首先是登录页的路由
        {
            path: '/start',
            name: 'Start',
            meta: {
                requireAuth: false
            },
            component: Start
        },
        // 然后就是嵌套路由了，也就是登陆后的各个页面
        {
            path: '/',
            meta: {
                requireAuth: true
            },
            component: Layout,
            redirect: '/start',
            children: [
                  {
                      path: 'index',
                      meta: { requireAuth: true },
                      component: Index,

                  },
                  {
                    path: 'eventintro',
                    meta: { requireAuth: true },
                    component: EventIntro
                  },
                  {
                    path: 'resource',
                    meta: { requireAuth: true },
                    component: Resource
                  },
                  {
                      path: 'about',
                      meta: { requireAuth: true },
                      component: EventAbout
                  },
            ]
        },
        // 最后是404页面
        {
            path:'*',
          meta: { requireAuth: false },
            component: Notfound
        }
    ]
})

export default router
