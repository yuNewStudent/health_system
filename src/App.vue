<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@import './assets/css/reset.css';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
}
input {
  height: 45px;
}
/* .el-input-group__append {
  background: #002496;
  border: 1px solid #002496;
  padding: 0 10px;
  box-sizing: border-box;
} */
</style>
