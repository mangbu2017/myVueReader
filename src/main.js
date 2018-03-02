// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';

// mint-ui样式库
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';

import VueTouch from 'vue-touch';

Vue.config.productionTip = false

Vue.use(MintUI);

// 刚刚引入的时候如果报错的话重启一下就好了
Vue.use(VueTouch, {
  name: 'v-touch'
});


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
