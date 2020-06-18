import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import router from './router/router.js'

// 使用ElementUI(完整引入)
Vue.use(ElementUI);

// 使用路由
Vue.use(router)


new Vue({
  el: '#app',
  router,
  render: h => h(App)
  
})
