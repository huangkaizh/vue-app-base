import Vue from 'vue'
import App from './pages/app.vue'
import router from './router'
import store from './store'
import './css/common.less' // 引入公共样式

// 路由跳转前进后退动画,Vue原型上定义transition为动画效果
router.beforeEach((to, from, next) => {
  store.commit('setTransitionName', 'slide-none')
  if (from.meta.tree > to.meta.tree) {
    // 后退,想右滑动
    store.commit('setTransitionName', 'slide-right')
  } else if (from.meta.tree < to.meta.tree) {
    // 前进,想左滑动
    store.commit('setTransitionName', 'slide-left')
  } else {
    // 同一层级,无动画
    store.commit('setTransitionName', 'slide-none')
  }
  next()
})

// eslint-disable-next-line no-new
new Vue({
  router,
  store,
  el: '#root',
  render: h => h(App)
})
