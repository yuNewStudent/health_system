<template>
  <div class="change_service">
    <div class="content">
      <header>新增服务中心</header>
      <div class="input_wrapper">
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
      <div class="footer">
        <span>下一步</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data () {
    return {
    }
  },
  computed: {},
  methods: {},
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
    padding: 30px;
    box-shadow:0px 2px 6px 0px rgba(111,111,111,0.8);
    border-radius:10px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
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
          font-size: 16px;
          color:rgba(155,155,155,1);
          line-height: 30px;
        }
        .el-input {
          border-radius:4px;
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
      }
    }
  }
}
</style>
