import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
    routes: [{
            path: '/dingzhi',
            name: 'dingzhi',
            component(resolve) {
                require(['@/page/mallsystem/Dingzhi.vue'], resolve)
            }
        },
        {
            path: '/xianjin',
            name: 'xianjin',
            component(resolve) {
                require(['@/page/mallsystem/Xianjin.vue'], resolve)
            }
        },
        {
            path: '/zhihui',
            name: 'zhihui',
            component(resolve) {
                require(['@/page/mallsystem/Zhihui.vue'], resolve)
            }
        },
        {
            path: '/shejiao',
            name: 'shejiao',
            component(resolve) {
                require(['@/page/mallsystem/Shejiao.vue'], resolve)
            }
        },
        {
            path: '/zhibo',
            name: 'zhibo',
            component(resolve) {
                require(['@/page/mallsystem/Zhibo.vue'], resolve)
            }
        },
        {
            path: '/falv',
            name: 'falv',
            component(resolve) {
                require(['@/page/mallsystem/Falv.vue'], resolve)
            }
        },
        {
            path: '/guanwang',
            name: 'guanwang',
            component(resolve) {
                require(['@/page/mallsystem/Guanwang.vue'], resolve)
            }
        },
        {
            path: '/o2o',
            name: 'o2o',
            component(resolve) {
                require(['@/page/mallsystem/O2o.vue'], resolve)
            }
        },
        {
            path: '/xiyou',
            name: 'xiyou',
            component(resolve) {
                require(['@/page/mallsystem/Xiyou.vue'], resolve)
            }
        },
        {
            path: '/zhineng',
            name: 'zhineng',
            component(resolve) {
                require(['@/page/mallsystem/Zhineng.vue'], resolve)
            }
        },
        {
            path: '/xiyoudata',
            name: 'xiyoudata',
            component(resolve) {
                require(['@/page/mallsystem/Xiyoudata.vue'], resolve)
            }
        },
        {
            path: '/zaixian',
            name: 'zaixian',
            component(resolve) {
                require(['@/page/mallsystem/Zaixian.vue'], resolve)
            }
        },
        {
            path: '/firstPage',
            name: 'firstPage',
            component(resolve) {
                require(['@/pages/firstPage.vue'], resolve)
            }
        },
        {
            path: '/technologyStack',
            name: 'technologyStack',
            component(resolve) {
                require(['@/pages/technologyStack.vue'], resolve)
            }
        },
        {
            path: '/',
            redirect: '/firstPage'
        },
    ]
})