// 模块化工程中路由的用法
import Vue from "vue"
import VueRouter from "vue-router";
Vue.use(VueRouter)

// 导入需要渲染的组件
import HeroList from "../components/hero/heroList.vue";
import Foo from "../components/foo/foo.vue";
import Add from "../components/hero/add.vue"
import Edit from "../components/hero/edit.vue"

// 路由配置
var routes = [
  {
    name: "heroList",
    path: "/heroList",
    component: HeroList
  },
  {
    name: "foo",
    path: "/foo",
    component: Foo
  },
  {
    name:"add",
    path:"/add",
    component:Add
  },
  {
    name:"edit",
    // id要和push的参数params对象的key(id)一致
    path:"/edit/:id",
    component:Edit
  }
];

// 实例化路由
var router = new VueRouter({
  // 增加全局路由点击激活属性,value值为菜单标签激活时的样式class名称，如active
  // linkExactActiveClass:active,
  
  // 增加路由配置属性
  routes
});

// 导出模块
export default router;
