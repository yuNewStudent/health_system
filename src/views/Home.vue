<template>
  <el-container class="Home">
    <el-header>
      <div class="system_name">XX系统</div>
      <div class="user_name">admin</div>
    </el-header>
    <el-container>
      <el-aside>
        <menu-view></menu-view>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import MenuView from '@/components/menu'
export default {
  components: {
    MenuView
  },
  data () {
    return {
      menus: null
    }
  },
  computed: {},
  methods: {},
  created () {
    // console.log(menus)
    // this.menus = menus
  }
}
</script>
<style lang="scss" scoped>
.el-container {
  height: 100%;
  // color: red;
  .el-header {
    height: 60px !important;
    line-height: 60px;
    background: #002496;
    > div {
      display: inline-block;
      font-size: 24px;
      color: white;
    }
    .system_name {}
    .user_name {
      float: right;
    }
  }
  .el-container {
    height: 100%;
    .el-aside {
      background: #002496;
      width: 200px !important;
      height: 100%;
    }
    .el-main {}
  }
}
</style>
