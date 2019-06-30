<template>
  <div class="StatisticalSummary">
    <el-header>
      <div class="cust_search">
        <el-select size="large" v-model="value" clearable placeholder="服务中心">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <el-select size="large" v-model="value" clearable placeholder="中心负责人">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </div>
      <div class="btns">
        <div class="import">
          <img src="@/assets/img/cust/新建IC.png" alt="" style="width: 20px">
          <span>新建</span>
        </div>
        <div class="import">
          <img src="@/assets/img/cust/分布地图IC.png" alt="" style="width: 20px">
          <span>分布地图</span>
        </div>
        <div class="import">
          <img src="@/assets/img/cust/导入ic .png" alt="">
          <span>导入</span>
        </div>
        <div class="export">
          <img src="@/assets/img/cust/导出IC.png" alt="">
          <span>导出</span>
        </div>
      </div>
    </el-header>
    <el-main>
      <el-table
        ref="multipleTable"
        :data="customers"
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
          label="服务中心编号">
        </el-table-column>
        <el-table-column
          prop="address"
          label="服务中心地址">
        </el-table-column>
        <el-table-column
          prop="address"
          label="服务中心人数">
        </el-table-column>
        <el-table-column
          prop="address"
          label="已回访"
          width="80">
        </el-table-column>
        <el-table-column
          prop="address"
          label="未回访"
          width="80">
        </el-table-column>
        <el-table-column
          prop="address"
          label="回访人"
          show-overflow-tooltip>
        </el-table-column>
        <el-table-column
          prop="address"
          label="中心负责人"
          show-overflow-tooltip>
        </el-table-column>
        <el-table-column
          label="操作">
        </el-table-column>
      </el-table>
      <el-pagination
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-count='customers.length/8'
        :page-size='pageSize'
        layout="total, prev, pager, next, jumper"
        :total="customers.length"></el-pagination>
    </el-main>
  </div>
</template>

<script>
export default {
  components: {
  },
  data () {
    return {
      query: '',
      customers: [],
      // 分页
      currentPage: 1,
      paginationData: [],
      pageSize: 8
    }
  },
  computed: {},
  methods: {
    // 翻页
    handleCurrentChange () {},
    // 修改table header的背景色
    tableHeaderColor ({row, column, rowIndex, columnIndex}) {
      if (rowIndex === 0) {
        return 'background-color: rgba(213,222,250,1);color:black;font-size:16px;'
      }
    },
    // 修改table tr行的背景色
    tableRowStyle (row, rowIndex) {
      if (!(rowIndex % 2)) {}
      return 'background-color: rgba(213,222,250,1);'
    }
  },
  created () {}
}
</script>
<style lang="scss" scoped>
.StatisticalSummary{
  .el-header {
    padding: 0;
    .cust_search {
      display: block;
      float: left;
      .el-select {
        background: #EEEEEE;
        width: 150px;
        margin-right: 5px;
      }
      .append {
        display: inline-block;
        width: 70px;
        height: 45px;
        background: #002496;
        border-radius: 0 5px 5px 0;
        border: 2px solid #002496;
        box-sizing: border-box;
        img {
          width: 32px;
          height: 30px;
          margin: 5px 0 0 16px;
        }
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
          margin-top: -2px
        }
      }
    }
  }
  .el-main {
    padding: 0;
    .el-pagination {
      text-align: right;
      margin-top: 10px;
    }
  }
}
</style>
