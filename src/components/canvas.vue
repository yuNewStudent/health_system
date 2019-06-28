<template>
  <div class="canvas">
    <canvas
      id='canvas'
      ref='canvas'
      @touchstart='touchstart'
      @touchmove='touchmove'
      @touchend='touchend'></canvas>
  </div>
</template>

<script>
export default {
  components: {},
  data () {
    return {
      canvasLeft: 0,
      canvasTop: 0,
      lines: [],
      ctx: null
    }
  },
  computed: {},
  methods: {
    initCavas () {
      let c = this.$refs.canvas
      this.canvasLeft = c.offsetLeft
      this.canvasTop = c.offsetTop
      this.ctx = c.getContext('2d')
    },
    touchstart (e) {
      const position = this.getPosition(e)
      this.ctx.beginPath()
      this.ctx.moveTo(position.x, position.y)
    },
    touchmove (e) {
      const position = this.getPosition(e)
      this.ctx.lineTo(position.x, position.y)
      this.ctx.stroke()
    },
    touchend (e) {
    },
    drawLine () {
      
    },
    getPosition (e) {
      let x = e.touches[0].clientX - this.canvasLeft
      let y = e.touches[0].clientY - this.canvasTop
      return { x, y }
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.initCavas()
    })
  }
}
</script>
<style lang="scss" scoped>
.canvas{
  #canvas {
    width: 300px;
    height: 300px;
    border: 1px solid gray;
  }
}
</style>
