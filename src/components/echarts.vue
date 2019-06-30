<template>
  <div class="echarts">
    <div id="chart"></div>
  </div>
</template>

<script>
import echarts from 'echarts'
export default {
  props: ['chartsType'],
  data () {
    return {}
  },
  methods: {
    initChart () {
      let chart = echarts.init(document.getElementById('chart'))
      let option
      switch (this.chartsType) {
        case 'line':
          option = {
            xAxis: {
              type: 'category',
              data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
              type: 'value'
            },
            series: [{
              data: [820, 932, 901, 934, 1290, 1330, 1320],
              type: 'line',
              smooth: true
            }]
          }
          break
        case 'pie':
          option = {
            series: [{
              name: '访问来源',
              type: 'pie',
              radius: '55%',
              center: ['50%', '60%'],
              data: [
                {value: 335, name: '直接访问'},
                {value: 310, name: '邮件营销'},
                {value: 234, name: '联盟广告'},
                {value: 135, name: '视频广告'},
                {value: 1548, name: '搜索引擎'}
              ],
              itemStyle: {
                emphasis: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
            }]
          }
          break
      }
      chart.setOption(option)
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.initChart()
    })
  }
}
</script>

<style lang="scss" scoped>
#chart {
  height: 250px;
  width: 100%;
}
</style>
