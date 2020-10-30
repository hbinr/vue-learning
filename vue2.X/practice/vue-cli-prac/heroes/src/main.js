import Vue from "vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import App from "./App.vue";
import router from "./router/router.js";
import axios from "axios";

// 设置axios
Vue.prototype.axios = axios; //全局注册，使用方法为:this.axios
axios.defaults.baseURL = 'http://localhost:3000/';   // 设置全局的baseURL，每个请求URL都会自动以其为前缀

// 使用ElementUI(完整引入)
Vue.use(ElementUI);

new Vue({
  el: "#app",
  router,
  render: h => h(App)
});
