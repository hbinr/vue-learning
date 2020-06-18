<template>
  <div id="app">
    <el-container style="border: 1px solid #6ffC6C">
      <!-- 头部 appnav -->
      <app-nav></app-nav>

      <el-container style="height: 600px; border: 1px solid #F56C6C">
        <!-- 侧边栏 appslider -->
        <app-slider></app-slider>

        <!-- 主要内容 hreoList -->
        <!-- 点击路由，展示的内容写在App.vue中 -->
        <router-view></router-view>
        <!-- 
          由于使用了路由，所以之前增加的组件注释即可
          <hero-list></hero-list>
          <foo></foo>
        -->
      </el-container>
      <el-footer>底部</el-footer>
    </el-container>
  </div>
</template>

<script>
import appNav from "./components/common/appnav";
import appSlider from "./components/common/appslider";
import heroList from "./components/hero/heroList";
import foo from "./components/foo/foo";

export default {
  name: "app",
  components: {
    appNav,
    appSlider,
    heroList,
    foo
  },
  data() {
    return {};
  }
};
</script>

<style scoped>
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}
</style>
