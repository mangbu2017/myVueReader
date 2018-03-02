import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage';

// @是 resolve('src') 的别名
// 配置在webpack.base.conf.js中

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    }
  ]
})
