<template>
  <div id="app">
    <transition :name="transitionName">
      <router-view class="views" />
    </transition>
  </div>
</template>

<script>
export default {
  data () {
    return {
      vue: 'vue'
    }
  },
  computed: {
    transitionName () {
      return this.$store.state.transitionName
    }
  }
}
</script>

<style lang="less" scoped>
/*切换页面时的滑动效果*/
.views {
  position: absolute;
  width: 100%;
  transition: all 0.8s ease;
  top: 0;
}
.slide-left-enter-active {
  transition: all 0.3s ease;
}
.slide-left-leave-active {
  transition: all 0.4s ease;
}
.slide-left-enter {
  transform: translateX(100%);
  opacity: 0;
}
.slide-left-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}

.slide-right-enter-active {
  transition: all 0.3s ease;
}
.slide-right-leave-active {
  transition: all 0.4s ease;
}
.slide-right-enter {
  transform: translateX(-100%);
  opacity: 0;
}
.slide-right-leave-to {
  transform: translateX(100%);
  opacity: 0;
}
</style>
