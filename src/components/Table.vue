<template>
  <div id="app-table">
    <h3>基础用法</h3>
    <el-table :data="tableData" style="width:100%">
      <el-table-column prop="date" label="日期" width="180"></el-table-column>
      <el-table-column prop="name" label="姓名" width="180"></el-table-column>
      <el-table-column prop="address" label="地址"></el-table-column>
    </el-table>

    <h3>斑马纹 & 边框</h3>
    <el-table :data="tableData" stripe border style="width:100%">
      <el-table-column prop="date" label="日期" width="180"></el-table-column>
      <el-table-column prop="name" label="姓名" width="180"></el-table-column>
      <el-table-column prop="address" label="地址"></el-table-column>
    </el-table>

    <h3>带状态的表格</h3>
    <el-table :data="tableData" :row-class-name="tableRowClassName" style="width:100%">
      <el-table-column prop="date" label="日期" width="180"></el-table-column>
      <el-table-column prop="name" label="姓名" width="180"></el-table-column>
      <el-table-column prop="address" label="地址"></el-table-column>
    </el-table>

    <h3>固定表头</h3>
    <el-table :data="tableData2" border height="250" style="width:100%">
      <el-table-column prop="date" label="日期" width="180"></el-table-column>
      <el-table-column prop="name" label="姓名" width="180"></el-table-column>
      <el-table-column prop="address" label="地址"></el-table-column>
    </el-table>

    <h3>固定列 & 固定表头</h3>
    <el-table :data="tableData3" height="250" border style="width:100%">
      <el-table-column fixed prop="date" label="日期" width="180"></el-table-column>
      <el-table-column prop="name" label="姓名" width="180"></el-table-column>
      <el-table-column prop="province" label="省份" width="180"></el-table-column>
      <el-table-column prop="city" label="市区" width="180"></el-table-column>
      <el-table-column prop="address" label="地址" width="600"></el-table-column>
      <el-table-column prop="zip" label="邮编" width="180"></el-table-column>
      <el-table-column fixed="right" label="操作" width="180">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
          <el-button @click="deleteRow(scope.$index,tableData3)" type="text" size="small">移除</el-button>
          <el-button @click="lookScope(scope)" type="text" size="small">scope</el-button>
        </template>
      </el-table-column>
    </el-table>

    <h3>多级表头</h3>
    <el-table :data="tableData3" style="width:100%">
      <el-table-column prop="date" label="日期"></el-table-column>
      <el-table-column label="配送信息">
        <el-table-column prop="name" label="姓名"></el-table-column>
        <el-table-column prop="province" label="省份"></el-table-column>
        <el-table-column prop="city" label="市区"></el-table-column>
        <el-table-column prop="address" label="地址"></el-table-column>
        <el-table-column prop="zip" label="邮编"></el-table-column>
      </el-table-column>
    </el-table>

    <h3>单选</h3>
    <el-table :data="tableData" ref="singleTable" border highlight-current-row @current-change="handleCurrentChange" style="width:100%">
      <el-table-column prop="date" label="日期" width="180"></el-table-column>
      <el-table-column prop="name" label="姓名" width="180"></el-table-column>
      <el-table-column prop="address" label="地址"></el-table-column>
    </el-table>
    <div style="margin-top: 20px">
      <el-button @click="setCurrent(tableData[1])">选中第二行</el-button>
      <el-button @click="setCurrent()">取消选择</el-button>
    </div>

    <h3>多选</h3>
    <el-table
    ref="multipleTable"
    :data="tableData3"
    tooltip-effect="dark"
    style="width: 100%"
    @selection-change="handleSelectionChange">
    <el-table-column  type="selection" width="55"></el-table-column>
    <el-table-column label="日期" width="120">
      <template slot-scope="scope">{{ scope.row.date }}</template>
    </el-table-column>
    <el-table-column  prop="name" label="姓名" width="120"></el-table-column>
    <el-table-column prop="address" label="地址" show-overflow-tooltip></el-table-column>
  </el-table>
  <div style="margin-top: 20px">
    <el-button @click="toggleSelection([tableData3[1], tableData3[2]])">切换第二、第三行的选中状态</el-button>
    <el-button @click="toggleSelection()">取消选择</el-button>
  </div>

  <h3>排序</h3>
  <el-table :data="tableData" border style="width:100%" :default-sort="{prop:'date',order:'descending'}">
      <el-table-column sortable prop="date" label="日期" width="180"></el-table-column>
      <el-table-column sortable prop="name" label="姓名" width="180"></el-table-column>
      <el-table-column prop="address" label="地址" :formatter="formatter"></el-table-column>
  </el-table>

  <h3>筛选ing</h3>
  <el-table :data="tableData" border style="width:100%">
      <el-table-column prop="date" label="日期" width="180"></el-table-column>
      <el-table-column prop="name" label="姓名" width="180"></el-table-column>
      <el-table-column prop="address" label="地址"></el-table-column>
      <el-table-column prop="tag" label="标签" width="100">
        <template slot-scope="scope">
          <el-tag :type="scope.row.tag==='家' ? 'primary' : 'success'">{{scope.row.tag}}</el-tag>
        </template>
      </el-table-column>
  </el-table>







  </div>
</template>
<script>
  export default {
    name: 'app-table',
    data(){
      return {
        tableData: [
          {date:'2018-11-06', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄',tag: '家'},
          {date:'2018-11-05', name: '王小虎', address: '上海市普陀区金沙江路 1517 弄',tag: '公司'},
          {date:'2018-11-04', name: '王小虎', address: '上海市普陀区金沙江路 1516 弄',tag: '家'}
        ],

        tableData2: [
          {date:'2018-11-06', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄'},
          {date:'2018-11-06', name: '王小虎', address: '上海市普陀区金沙江路 1517 弄'},
          {date:'2018-11-06', name: '王小虎', address: '上海市普陀区金沙江路 1517 弄'},
          {date:'2018-11-06', name: '王小虎', address: '上海市普陀区金沙江路 1517 弄'},
          {date:'2018-11-06', name: '王小虎', address: '上海市普陀区金沙江路 1517 弄'},
          {date:'2018-11-06', name: '王小虎', address: '上海市普陀区金沙江路 1517 弄'},
          {date:'2018-11-06', name: '王小虎', address: '上海市普陀区金沙江路 1517 弄'},
          {date:'2018-11-06', name: '王小虎', address: '上海市普陀区金沙江路 1517 弄'},
          {date:'2018-11-06', name: '王小虎', address: '上海市普陀区金沙江路 1517 弄'},
          {date:'2018-11-06', name: '王小虎', address: '上海市普陀区金沙江路 1517 弄'},
          {date:'2018-11-06', name: '王小虎', address: '上海市普陀区金沙江路 1516 弄'}
        ],

        tableData3: [
          {date:'2018-11-06', name: '王小虎', province:'上海市', city: '浦东新区', address: '上海市普陀区金沙江路 1518 弄', zip:'200000'},
          {date:'2018-11-06', name: '王小虎', province:'上海市', city: '浦东新区', address: '上海市普陀区金沙江路 1518 弄', zip:'200000'},
          {date:'2018-11-06', name: '王小虎', province:'上海市', city: '浦东新区', address: '上海市普陀区金沙江路 1518 弄', zip:'200000'},
          {date:'2018-11-06', name: '王小虎', province:'上海市', city: '浦东新区', address: '上海市普陀区金沙江路 1518 弄', zip:'200000'},
          {date:'2018-11-06', name: '王小虎', province:'上海市', city: '浦东新区', address: '上海市普陀区金沙江路 1518 弄', zip:'200000'},
          {date:'2018-11-06', name: '王小虎', province:'上海市', city: '浦东新区', address: '上海市普陀区金沙江路 1518 弄', zip:'200000'},
          {date:'2018-11-06', name: '王小虎', province:'上海市', city: '浦东新区', address: '上海市普陀区金沙江路 1518 弄', zip:'200000'},
          {date:'2018-11-06', name: '王小虎', province:'上海市', city: '浦东新区', address: '上海市普陀区金沙江路 1518 弄', zip:'200000'}
        ]
      }
    },
    methods:{
      tableRowClassName({row,rowIndex}){
        if (rowIndex === 1) {
          return 'warning-row';
        } else if (rowIndex === 3) {
          return 'success-row';
        }
        return '';
      },

      // 查看
      handleClick(row){
        console.log(row)
      },
      // 删除
      deleteRow(index,rows){
        rows.splice(index,1)
      },
      // 查看scope
      lookScope(scope){
        console.log(scope)
      },

      // 单选
      handleCurrentChange(val){
        this.currentRow = val;
      },
      setCurrent(row) {
        this.$refs.singleTable.setCurrentRow(row);
      },
      // 复选
      toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },

      // 格式化列
      formatter(row,column){
        return row.address
      }



    }
  }
</script>
<style scoped>
  .warning-row {
    background: oldlace;
  }

  .success-row {
    background: #f0f9eb;
  }
</style>

