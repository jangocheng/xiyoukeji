// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import router from './router'
import App from './App'
import './assets/style/reset.css'
import './assets/style/border.css'
import '@/style/index.css'
import VueLazyload from 'vue-lazyload'
FastClick.attach(document.body)

Vue.config.productionTip = false
Vue.use(VueLazyload)
/* eslint-disable no-new */
new Vue({
    router,
    render: h => h(App)
}).$mount('#app-box')