import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Dingzhi from '@/page/mallsystem/Dingzhi'
import Xianjin from '@/page/mallsystem/Xianjin'
import Zhihui from '@/page/mallsystem/Zhihui'
import Shejiao from '@/page/mallsystem/Shejiao'
import Zhibo from '@/page/mallsystem/Zhibo'
import Falv from '@/page/mallsystem/Falv'
import Guanwang from '@/page/mallsystem/Guanwang'
import O2o from '@/page/mallsystem/O2o'
import Xiyou from '@/page/mallsystem/Xiyou'
import Zhineng from '@/page/mallsystem/Zhineng'
import Xiyoudata from '@/page/mallsystem/Xiyoudata'
import Zaixian from '@/page/mallsystem/Zaixian'

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
      path: '/zhibo',
      name: 'zhibo',
      component: Zhibo
    },
    {
      path: '/falv',
      name: 'falv',
      component: Falv
    },
    {
      path: '/guanwang',
      name: 'guanwang',
      component: Guanwang
    },
    {
      path: '/o2o',
      name: 'o2o',
      component: O2o
    },
    {
      path: '/xiyou',
      name: 'xiyou',
      component: Xiyou
    },
    {
      path: '/zhineng',
      name: 'zhineng',
      component: Zhineng
    },
    {
      path: '/xiyoudata',
      name: 'xiyoudata',
      component: Xiyoudata
    },
    {
      path: '/zaixian',
      name: 'zaixian',
      component: Zaixian
    },
  ]
})
