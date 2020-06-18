<template>
  <div class="add">
    <h2>新增英雄</h2>
    <el-form label-position="right" label-width="80px" ref="heros" :model="heros">
      <el-form-item class="itemStyle" label="英雄名称">
        <el-input v-model="heros.name" placeholder="请输入英雄名称"></el-input>
      </el-form-item>
      <el-form-item class="itemStyle" label="英雄性别">
        <el-input v-model="heros.gender" placeholder="请输入英雄性别"></el-input>
      </el-form-item>
      <el-form-item class="itemStyle" label="英雄类别">
        <el-input v-model="heros.type" placeholder="请输入英雄类别"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click.prevent="submitForm()">提交</el-button>
        <el-button @click="resetForm('heros')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      heros: {
        name: "",
        gender: ""
      }
    };
  },
  methods: {
    submitForm() {
      axios
        .post("http://localhost:3000/heros", this.heros)
        .then(res => {
          const { status, data } = res;
          if (status === 201) {
            // 回到list组件
            this.$router.push({ name: "heroList" });
          }
        })
        .catch(err => {
          console.error(err);
        });
    },
    resetForm(formName) {
      this[formName] = {};
      this.$nextTick(() => {
        this.$refs[formName].resetFields();
      });
    }
  }
};
</script>

<style scoped>
.add {
  margin: 10px 0 0 20px;
  width: 20%;
  height: auto;
}
.itemStyle {
  font-weight: bold;
}
</style>