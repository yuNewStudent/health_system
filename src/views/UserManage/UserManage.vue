<template>
  <div class="UserManage">
    <el-header>
      <div class="cust_search">
        <input
          placeholder="请输入用户姓名和岗位编号"
          type="text"
          v-model="query">
          <span class="append">
            <img src="@/assets/img/cust/查询IC.png" alt="">
          </span>
      </div>
      <div class="btns">
        <!-- <div class="import">
          <img src="@/assets/img/cust/导入ic .png" alt="">
          <span>新增服务中心</span>
        </div> -->
        <div class="import" @click='isShowChangeUser=!isShowChangeUser'>
          <img src="@/assets/img/cust/导入ic .png" alt="">
          <span>新增用户</span>
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
        :data="users"
        tooltip-effect="dark"
        style="width: 100%"
        size='small'
        border
        :header-cell-style="tableHeaderColor"
        @selection-change="handleSelectionChange"
        :cell-style='tableCellStyle'
        :row-style='tableRowStyle'>
        <el-table-column
          type="selection"
          width="50">
        </el-table-column>
        <el-table-column
          label="岗位编号"
          prop="id">
        </el-table-column>
        <el-table-column
          prop="position"
          label="岗位名称">
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名">
        </el-table-column>
        <el-table-column
          prop="contact"
          label="联系方式">
        </el-table-column>
        <el-table-column
          prop="num"
          label="服务中心数量">
        </el-table-column>
        <el-table-column
          label="操作">
          <template>
            <img src="@/assets/img/cust/修改IC.png" alt="">
            <img src="@/assets/img/cust/删除IC.png" alt="">
            <img src="@/assets/img/cust/权限管理IC.png" alt="">
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-count='users.length/8'
        :page-size='pageSize'
        layout="total, prev, pager, next, jumper"
        :total="users.length"></el-pagination>
    </el-main>
    <change-user
      v-if='isShowChangeUser'
      @closeChangeUser='addUser'
      :title='title.add'></change-user>
  </div>
</template>

<script>
import ChangeUser from '@/components/UserManage/change-user'
export default {
  components: {
    ChangeUser
  },
  data () {
    return {
      query: '',
      isShowChangeUser: false,
      users: [
        {
          name: 'yujian',
          num: 20,
          id: 123,
          contact: 12345678,
          position: '前端'
        },
        {
          name: 'yujian',
          num: 20,
          id: 123,
          contact: 12345678,
          position: '前端'
        },
        {
          name: 'yujian',
          num: 20,
          id: 123,
          contact: 12345678,
          position: '前端'
        },
        {
          name: 'yujian',
          num: 20,
          id: 123,
          contact: 12345678,
          position: '前端'
        },
        {
          name: 'yujian',
          num: 20,
          id: 123,
          contact: 12345678,
          position: '前端'
        }
      ],
      title: {
        add: '新增用户',
        editor: '修改用户信息'
      },
      // 分页
      currentPage: 1,
      paginationData: [],
      pageSize: 8
    }
  },
  computed: {},
  methods: {
    // 新增用户
    addUser () {
      this.isShowChangeUser = false
    },
    // 翻页
    handleCurrentChange () {},
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
    }
  },
  created () {}
}
</script>
<style lang="scss" scoped>
.UserManage{
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
