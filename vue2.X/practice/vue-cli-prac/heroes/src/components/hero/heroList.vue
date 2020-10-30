<template>
  <el-main>
    <el-button class="addBtn" @click="handleAdd()" size="small" type="primary">新增英雄</el-button>
    <hr />
    <el-table
      :data="heros.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
      style="width: 100%"
    >
      <el-table-column label="英雄名称" prop="name"></el-table-column>
      <el-table-column label="英雄性别" prop="gender"></el-table-column>
      <el-table-column label="英雄类型" prop="type"></el-table-column>
      <el-table-column align="right">
        <template slot="header" slot-scope="scope">
          <el-input v-model="search" size="mini" placeholder="输入姓名进行搜索" />
        </template>
        <template slot-scope="scope">
          <el-button size="mini" @click.prevent="handleEdit(scope.$index, scope.row)">Edit</el-button>
          <el-button size="mini" type="danger" @click.prevent="handleDelete(scope.row.id)">Delete</el-button>
        </template>
      </el-table-column>
    </el-table>
  </el-main>
</template>

<script>
export default {
  data() {
    return {
      heros: [],
      search: ""
    };
  },
  mounted() {
    this.handleGetData();
  },
  methods: {
    // 查询
    handleGetData() {
      this.axios
        .get("heros")
        .then(res => {
          const { status, data } = res;
          if (status === 200) {
            this.heros = data;
          }
        })
        .catch(err => {
          console.error(err);
        });
    },
    // 添加
    handleAdd() {
      // 编程式导航
      this.$router.push({ name: "add" });
    },
    // 修改
    handleEdit(index, row) {
      // 编程式导航
      // this.$router.push({
      //   name: "edit",
      //   params: { id: row.id }
      // });
           this.$router.push({
        name: "edit",
        params: row
      });
    },
    // 删除
    handleDelete(ID) {
      if (confirm("确定要删除吗?")) {
        this.axios
          .delete("heros/" + ID)
          .then(res => {
            const { status } = res;
            if (status === 200) {
              this.handleGetData();
            }
          })
          .catch(err => {
            console.error(err);
          });
      }
    }
  }
};
</script>

<style scoped>
.addBtn {
  font-size: 15px;
}
</style>>
