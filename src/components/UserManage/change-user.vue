<template>
  <message-box
    class="change_service"
    @closeChangeBox='closeChangeUser'
    :title='title'>
    <div class="input_wrapper">
      <div>
        <label for="">请输入姓名</label>
        <el-input></el-input>
      </div>
      <div>
        <label for="">请输入电话号码</label>
        <el-input></el-input>
      </div>
      <div>
        <label for="">请选择岗位</label>
        <el-input></el-input>
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
    <div class="footer">
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
      userInfo: {}
    }
  },
  computed: {},
  methods: {
    closeChangeUser () {
      this.$emit('closeChangeUser')
    },
    // 保存
    handleSave () {
      this.$emit('closeChangeUser', this.userInfo)
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
            margin-top: 10px;
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
