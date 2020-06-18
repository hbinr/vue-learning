<template>
  <el-aside style="background-color: rgb(238, 241, 246)">
    <el-menu :default-openeds="['1', '2']">
      <el-menu-item  index="1">
        <template slot="title">
          <router-link to="/heroList" tag="li"><b>英雄列表</b></router-link>
        </template>
      </el-menu-item>
      <el-menu-item  index="2">
        <template slot="title">
           <router-link to="/foo" tag="li"><b>Foo列表(测试)</b></router-link>
        </template>
      </el-menu-item>

    </el-menu>
  </el-aside>
</template>

<script>
export default {};
</script>

<style scoped>
</style>