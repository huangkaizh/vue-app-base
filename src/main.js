import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './css/common.less'

// eslint-disable-next-line no-new
new Vue({
  router,
  store,
  el: '#root',
  render: h => h(App)
})
