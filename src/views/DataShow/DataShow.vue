<template>
  <div class="DataShow">
    <el-row :gutter="20">
      <el-col :span="6">
        <div class="left">
          <div class="blood">
            <header>血压变化</header>
            <div class="bloodsuger_chart" id="blood_press_shart"></div>
            <!-- <echarts-view :chartsType='chartsType.line'></echarts-view> -->
            <header>满意度</header>
            <div id="satisfaction_chart"></div>
            <!-- <echarts-view :chartsType='chartsType.pie'></echarts-view> -->
          </div>
        </div>
      </el-col>
      <el-col :span="12">
        <map-view :control='isShowControl' class="map_wrapper"></map-view>
        <div class="middle_info">
          <el-select v-model="value" placeholder="请选择服务中心">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="right">
          <div class="blood">
            <header>血糖变化</header>
            <div class="bloodsuger_chart" id="blood_suger_shart"></div>
            <!-- <echarts-view></echarts-view> -->
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import echarts from 'echarts'
import MapView from '@/components/amap'
// import EchartsView from '@/components/echarts'
export default {
  components: {
    MapView
    // EchartsView
  },
  data () {
    return {
      value: '',
      chartsType: {
        line: 'line',
        pie: 'pie'
      },
      isShowControl: true,
      options: [
        {
          label: '服务中心A',
          value: 'a'
        },
        {
          label: '服务中心B',
          value: 'b'
        },
        {
          label: '服务中心C',
          value: 'c'
        }
      ]
    }
  },
  computed: {},
  methods: {
    // 初始化血压图
    initBooldPressChart () {
      let chart = echarts.init(document.getElementById('blood_press_shart'))
      let option = {
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
      chart.setOption(option)
    },
    // 初始化满意度
    initSatisfactionChart () {
      let chart = echarts.init(document.getElementById('satisfaction_chart'))
      let option = {
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
      chart.setOption(option)
    },
    // 初始化血糖图
    initBloodSugerChart () {
      let chart = echarts.init(document.getElementById('blood_suger_shart'))
      let option = {
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
      chart.setOption(option)
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.initBooldPressChart()
      this.initBloodSugerChart()
      this.initSatisfactionChart()
    })
  }
}
</script>
<style lang="scss" scoped>
.DataShow {
  .left {
    header {
      height: 40px;
      background: #FCD4B3;
      text-align: center;
      line-height: 40px;
      font-weight:bold;
    }
  }
  .map_wrapper {
    position: relative;
    height: 500px;
  }
  .middle_info {
    .el-select {
      width: 130px;
    }
  }
  .right {
    header {
      height: 40px;
      background: #FFA2E5E3;
      text-align: center;
      line-height: 40px;
      font-weight:bold;
    }
  }
}
#bloo {
  height: 250px;
  width: 100%;
}
.bloodsuger_chart {
  width: 100%;
  height: 250px;
}
#satisfaction_chart {
  width: 100%;
  height: 200px;
}
</style>
