<template>
  <message-box
    class="change_service"
    @closeChangeBox='closeChangeService'
    :title='title'>
    <div class="input_wrapper" v-show='isfirst'>
      <div class="servicen_num">
        <label for="">请输入服务中心编号</label>
        <el-input></el-input>
      </div>
      <div class="servicen_num">
        <label for="">请输入服务中心名称</label>
        <el-input></el-input>
      </div>
      <div class="servicen_num">
        <label for="">请输入服务中心地址</label>
        <el-input></el-input>
      </div>
      <div class="servicen_num">
        <label for="">请输入服务中心人数</label>
        <el-input></el-input>
      </div>
    </div>
    <div class="input_wrapper" v-show='!isfirst'>
      <div class="servicen_num">
        <label for="">请选择项目负责人</label>
        <el-select size="large" v-model="value" clearable placeholder="请选择项目负责人">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </div>
      <div class="servicen_num">
        <label for="">请选择中心负责人</label>
        <el-select size="large" v-model="value" clearable placeholder="请选择项目负责人">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </div>
      <div class="servicen_num">
        <label for="">请选择回访负责人</label>
        <el-select size="large" v-model="value" clearable placeholder="请选择项目负责人">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </div>
    </div>
    <div class="footer" v-if='isfirst'>
      <span @click='handleNext'>下一步</span>
    </div>
    <div class="footer" v-else>
      <span @click='handleBack'>上一步</span>
      <span @click='handleSave'>确定</span>
    </div>
  </message-box>
</template>

<script>
import MessageBox from '@/components/message-box'
export default {
  props: ['title'],
  components: {
    MessageBox
  },
  data () {
    return {
      isfirst: true,
      options: [
        {
          label: 'hh',
          value: 'ss'
        },
        {
          label: 'ee',
          value: 'tt'
        }
      ],
      value: '',
      serviceInfo: {}
    }
  },
  computed: {},
  methods: {
    closeChangeService () {
      this.$emit('closeChangeService')
    },
    // 进行下一步填写
    handleNext () {
      this.isfirst = false
    },
    // 返回上一步填写
    handleBack () {
      this.isfirst = true
    },
    // 保存
    handleSave () {
      this.$emit('closeChangeService', this.serviceInfo)
    }
  },
  created () {}
}
</script>
<style lang="scss" scoped>
.change_service{
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  width: 100vw;
  bottom: 0;
  background: rgba(0,0,0,.5);
  .content {
    width: 500px;
    background: white;
    box-shadow:0px 2px 6px 0px rgba(111,111,111,0.8);
    border-radius:10px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    .content_wrapper {
      position: relative;
      padding: 30px;
      header {
        font-size: 20px;
        font-weight: 560;
        position: relative;
        height: 24px;
        padding-left: 10px;
        &:before {
          content: '';
          width: 5px;
          background: red;
          height: 28px;
          top: -4px;
          left: 0;
          display: inline-block;
          position: absolute;
          border-radius: 5px;
        }
      }
      .input_wrapper {
        margin-top: 20px;
        > div {
          margin: 10px 0;
          label {
            display: block;
            font-size: 14px;
            color:rgba(155,155,155,1);
            line-height: 30px;
          }
          .el-select {
            border-radius:4px;
            width: 100%;
          }
        }
      }
      .footer {
        text-align: right;
        margin-top: 20px;
        span {
          display: inline-block;
          width:90px;
          line-height:40px;
          background:rgba(237,40,57,1);
          border-radius:6px;
          font-weight:400;
          font-size: 18px;
          color: white;
          text-align: center;
          cursor: pointer;
        }
      }
      .close {
        position: absolute;
        right: 10px;
        top: 10px;
      }

    }
  }
}
</style>
