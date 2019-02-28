import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Dingzhi from '@/page/mallsystem/Dingzhi'
import Xianjin from '@/page/mallsystem/Xianjin'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'dingzhi',
      component: Dingzhi
    },
    {
      path: '/xianjin',
      name: 'xianjin',
      component: Xianjin
    }
  ]
})
