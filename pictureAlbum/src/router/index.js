import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Dingzhi from '@/page/mallsystem/Dingzhi'
import Xianjin from '@/page/mallsystem/Xianjin'
import Zhihui from '@/page/mallsystem/Zhihui'
import Shejiao from '@/page/mallsystem/Shejiao'
import Zhibo from '@/page/mallsystem/Zhibo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/dingzhi',
      name: 'dingzhi',
      component: Dingzhi
    },
    {
      path: '/xianjin',
      name: 'xianjin',
      component: Xianjin
    },
    {
      path: '/zhihui',
      name: 'zhihui',
      component: Zhihui
    },
    {
      path: '/shejiao',
      name: 'shejiao',
      component: Shejiao
    },
    {
      path: '/',
      name: 'zhibo',
      component: Zhibo
    },
  ]
})
