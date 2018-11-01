// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'  //引入element-ui
import 'element-ui/lib/theme-chalk/index.css' //样式文件需要单独引入
import 'element-ui/lib/theme-chalk/display.css' //基于断点的隐藏类
import App from './App'

Vue.config.productionTip = false
Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
