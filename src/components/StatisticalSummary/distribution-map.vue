<template>
  <div class="distribution_map">
    <div class="content">
      <map-view class="map_wrapper" :control='isShowControl'></map-view>
      <div class="close" @click='closeDistributionMap'>
        <img src="@/assets/img/home/取消IC.png" alt="">
      </div>
      <div class="select_wrapper" @click='closeDistributionMap'>
        <el-select size="large" v-model="value" clearable placeholder="服务中心">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </div>
      <div class="statistics_wrapper">
        <div class="total">回访总人数：<span>200</span>人</div>
        <div class="already_visite">回访总人数：<span>200</span>人</div>
        <div class="no_visite">回访总人数：<span>0</span>人</div>
      </div>
    </div>
  </div>
</template>

<script>
import MapView from '@/components/amap'
export default {
  components: {
    MapView
  },
  data () {
    return {
      isShowControl: false,
      value: '',
      options: [
        {
          label: '服务中心A',
          value: 'A'
        },
        {
          label: '服务中心B',
          value: 'B'
        }
      ]
    }
  },
  computed: {},
  methods: {
    closeDistributionMap () {
      this.$emit('closeDistributionMap')
    }
  },
  created () {}
}
</script>
<style lang="scss" scoped>
.distribution_map {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  bottom: 0;
  background: rgba(0,0,0,.5);
  .content {
    width: 96vw;
    height: 92vh;
    margin: 4vh auto;
    .map_wrapper {
      width: 100%;
      height: 100%;
    }
    .close {
      position: absolute;
      right: 2.5vw;
      top: 5vh;
    }
    .select_wrapper {
      width: 150px;
      position: absolute;
      top: 6vh;
      left: 4vw;
    }
    .statistics_wrapper {
      position: absolute;
      width: 96vw;
      bottom: 4vh;
      height: 50px;
      background:rgba(237,40,57,1);
      padding: 0 20px;
      box-sizing: border-box;
      >div {
        float: left;
        height: 50px;
        line-height: 50px;
        font-size: 14px;
        color: rgb(220,220,220);
        margin-right: 40px;
        span {
          color: white;
          font-weight: bold;
          font-size: 20px;
        }
      }
    }
  }
}
</style>
