<template>
  <div class="HostoryQuery">
    <el-header>
      <div class="cust_search">
        <input
          placeholder="请输入用户姓名或身份证号"
          type="text"
          v-model="query">
          <span class="append">
            <img src="@/assets/img/cust/查询IC.png" alt="">
          </span>
      </div>
      <div class="btns">
        <el-date-picker
          v-model="date"
          type="datetimerange"
          range-separator="至"
          start-placeholder="请选择开始日期"
          end-placeholder="请选择结束日期"
          class="date_picker">
        </el-date-picker>
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
        size='medium'
        border
        :header-cell-style="tableHeaderColor"
        @selection-change="handleSelectionChange">
        <el-table-column
          type="selection"
          width="50">
        </el-table-column>
        <el-table-column
          label="档案编号">
          <template slot-scope="scope">{{ scope.row.date }}</template>
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名">
        </el-table-column>
        <el-table-column
          prop="address"
          label="性别">
        </el-table-column>
        <el-table-column
          prop="address"
          label="联系方式">
        </el-table-column>
        <el-table-column
          prop="address"
          label="身份证号码">
        </el-table-column>
        <el-table-column
          prop="address"
          label="回访负责人">
        </el-table-column>
        <el-table-column
          prop="address"
          label="上次回访时间">
        </el-table-column>
        <el-table-column
          label="回访记录">
          <template slot-scope="scope">
            <img src="@/assets/img/home/查看IC.png" alt="">
          </template>
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
  components: {},
  data () {
    return {
      query: '',
      date: '',
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
    }
  },
  created () {}
}
</script>
<style lang="scss" scoped>
.HostoryQuery {
  .el-header {
    padding: 0;
    .cust_search {
      width: 280px;
      overflow: hidden;
      display: block;
      float: left;
      input {
        float: left;
        background: rgba(238,238,238,0.94);
        width: 220px;
        height: 40px;
        padding: 0 10px;
        border-radius: 5px 0 0 5px;
        border: 1px solid #D3D3D3;
        border-right: none;
        box-sizing: border-box;
      }
      .append {
        display: block;
        float: right;
        width: 60px;
        height: 40px;
        background: #002496;
        border-radius: 0 5px 5px 0;
        border: 2px solid #002496;
        box-sizing: border-box;
        img {
          width: 28px;
          height: 25px;
          margin: 6px 0 0 14px;
        }
      }
    }
    .btns {
      display: block;
      float: right;
      .date_picker {
        margin-right: 5px;
      }
      .export {
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
