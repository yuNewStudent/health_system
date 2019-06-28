<template>
  <el-menu
    :default-active="defaultActie"
    class="el-menu-vertical-demo"
    background-color="#002496"
    text-color="#fff">
    <!-- <el-submenu index="1">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>导航一</span>
      </template>
      <el-menu-item-group>
        <template slot="title">分组一</template>
        <el-menu-item index="1-1">选项1</el-menu-item>
        <el-menu-item index="1-2">选项2</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="分组2">
        <el-menu-item index="1-3">选项3</el-menu-item>
      </el-menu-item-group>
      <el-submenu index="1-4">
        <template slot="title">选项4</template>
        <el-menu-item index="1-4-1">选项1</el-menu-item>
      </el-submenu>
    </el-submenu> -->
    <el-menu-item
      v-for='(item, index) in menus'
      :key='index'
      :index="index+''"
      :route='goRoute(item.name)'
      @click='handleRoute(item.name, index)'
      ref='menuItem'>
      <img :src="item.icon" alt="">
      <span slot="title">{{item.title}}</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
import menus from '@/assets/js/menus'
export default {
  components: {},
  data () {
    return {
      menus: null,
      defaultActie: '0'
    }
  },
  computed: {},
  methods: {
    goRoute (name) {
      return { name }
    },
    handleRoute (name, index) {
      this.$router.push({
        name: name
      })
      this.$refs.menuItem[index].$el.style.background = 'rgba(61,100,222,1)'
    }
  },
  created () {
    this.menus = menus
    const name = this.$route.name
    menus.forEach((item, index) => {
      if (item.name === name) {
        this.defaultActie = index + ''
      }
    })
  },
  mounted () {
    this.$refs.menuItem[Number(this.defaultActie)].$el.style.background = 'rgba(61,100,222,1)'
  }
}
</script>
<style lang="scss" scoped>
.el-menu{
  width: 200px;
  .el-menu-item {
    font-size: 22px;
    img {
      width: 24px;
      height: 24px;
      margin-right: 5px;
    }
  }
}
</style>
