<template>
  <div class="service_center">
    <el-header>
      <div class="title"><span @click='handleBack'>返回&nbsp;</span>当前位置：客户管理>服务中心</div>
      <div class="btns">
        <div class="import" @click='isShowChangeService=!isShowChangeService'>
          <img src="@/assets/img/cust/导入ic .png" alt="">
          <span>新增</span>
        </div>
        <div class="export">
          <img src="@/assets/img/cust/导出IC.png" alt="">
          <span>删除</span>
        </div>
      </div>
    </el-header>
    <el-main>
      <el-table
        ref="multipleTable"
        :data="serviceCenters"
        tooltip-effect="dark"
        style="width: 100%"
        size='small'
        border
        @selection-change="handleSelectionChange"
        :header-cell-style="tableHeaderColor"
        :row-style="tableRowStyle">
        <el-table-column
          type="selection"
          width="50">
        </el-table-column>
        <el-table-column
          label="服务中心编号">
          <template slot-scope="scope">{{ scope.row.date }}</template>
        </el-table-column>
        <el-table-column
          prop="name"
          label="服务中心名称">
        </el-table-column>
        <el-table-column
          prop="address"
          label="服务中心地址">
        </el-table-column>
        <el-table-column
          prop="address"
          label="回访负责人">
        </el-table-column>
        <el-table-column
          prop="address"
          label="联系电话">
        </el-table-column>
        <el-table-column
          label="操作">
          <template>
            <img src="@/assets/img/cust/修改IC.png" alt="">
            <img src="@/assets/img/cust/删除IC.png" alt="">
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-count='serviceCenters.length/8'
        :page-size='pageSize'
        layout="total, prev, pager, next, jumper"
        :total="serviceCenters.length"></el-pagination>
    </el-main>
    <change-service
      v-if='isShowChangeService'></change-service>
  </div>
</template>

<script>
import ChangeService from '@/components/CustomerManage/change-service'
export default {
  components: {
    ChangeService
  },
  data () {
    return {
      serviceCenters: [],
      isShowChangeService: false,
      // 分页
      currentPage: 1,
      paginationData: [],
      pageSize: 8
    }
  },
  computed: {},
  methods: {
    // 选择器变化
    handleSelectionChange () {},
    // 修改table header的背景色
    tableHeaderColor ({row, column, rowIndex, columnIndex}) {
      if (rowIndex === 0) {
        return 'background-color: rgba(213,222,250,1);color:black;font-size:18px;'
      }
    },
    tableRowStyle ({row, rowIndex}) {
      if (rowIndex % 2) {
        return 'background-color: rgba(213,222,250,1);font-size: 14px;color:rgba(22,22,22,1)'
      } else {
        return 'font-size: 14px;color:rgba(22,22,22,1)'
      }
    },
    tableCellStyle () {
      return 'padding: 7px 0'
    },
    handleBack () {
      this.$router.go(-1)
    },
    // 分页
    handleCurrentChange () {}
  },
  created () {}
}
</script>
<style lang="scss" scoped>
.service_center{
  .el-header {
    .title {
      float: left;
      font-size: 16px;
      margin-top: 14px;
      span {
        cursor: pointer;
      }
    }
    .btns {
      display: block;
      float: right;
      > div {
        display: inline-block;
        height: 40px;
        background: #ED2839;
        border-radius: 5px;
        line-height: 40px;
        padding: 0 15px;
        margin: 0 5px;
        box-shadow:0px 2px 6px 0px rgba(96,7,15,0.8);
        box-sizing: border-box;
        font-size: 20px;
        img {
          width: 24px;
          height: 20px;
          position: relative;
          top: 2px;
        }
        span {
          font-size: 20px;
          color: white;
          margin-top: -2px;
          cursor: pointer;
        }
      }
    }
  }
  .el-main {
    padding: 0;
    .el-table {
      img {
        width: 17px;
        height: 17px;
        margin: 0 5px;
      }
    }
    .el-pagination {
      text-align: right;
      margin-top: 10px;
    }
  }
}
</style>
