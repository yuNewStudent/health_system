<template>
  <div class="amap">
    <div id="container"></div>
  </div>
</template>

<script>
import AMap from 'AMap'
export default {
  components: {},
  data () {
    return {
      map: null
    }
  },
  computed: {},
  methods: {
    // 初始化地图
    initMap () {
      this.map = new AMap.Map('container', {
        // 调整窗口大小
        resizeEnable: true,
        // 设置中心点
        center: this.center,
        // 地图显示范围
        zoom: 15
      })
      // 添加缩放标尺控件
      AMap.plugin(['AMap.Scale'], () => {
        this.map.addControl(new AMap.Scale())
      })
    }
  },
  created () {},
  mounted () {
    this.$nextTick(() => {
      this.initMap()
    })
  }
}
</script>
<style lang="scss" scoped>
.amap {
  #container {
    height: 500px;
  }
}
</style>
