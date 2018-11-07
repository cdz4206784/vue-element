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



    <h3>展开行</h3>

    <el-table
    :data="tableData5"
    style="width: 100%">
    <el-table-column type="expand">
      <template slot-scope="props">
        <el-form label-position="left" inline class="demo-table-expand">
          <el-form-item label="商品名称">
            <span>{{ props.row.name }}</span>
          </el-form-item>
          <el-form-item label="所属店铺">
            <span>{{ props.row.shop }}</span>
          </el-form-item>
          <el-form-item label="商品 ID">
            <span>{{ props.row.id }}</span>
          </el-form-item>
          <el-form-item label="店铺 ID">
            <span>{{ props.row.shopId }}</span>
          </el-form-item>
          <el-form-item label="商品分类">
            <span>{{ props.row.category }}</span>
          </el-form-item>
          <el-form-item label="店铺地址">
            <span>{{ props.row.address }}</span>
          </el-form-item>
          <el-form-item label="商品描述">
            <span>{{ props.row.desc }}</span>
          </el-form-item>
        </el-form>
      </template>
    </el-table-column>

    <el-table-column label="商品 ID" prop="id"></el-table-column>
    <el-table-column label="商品名称" prop="name"></el-table-column>
    <el-table-column label="描述" prop="desc"></el-table-column>
  </el-table>

  <h3>自定义表头</h3>
  <el-table :data="tableData.filter(data=>!search || data.name.toLowerCase().includes(search.toLowerCase()))">
    <el-table-column prop="date" label="Date"></el-table-column>
    <el-table-column prop="name" label="Name"></el-table-column>
    <el-table-column align="right">
      <template slot="header" slot-scope="slot">
        <el-input v-model="search" size="mini" placeholder="Type to search"></el-input>
      </template>
      <template slot-scope="scope">
        <el-button size="mini" @click="handleEdit(scope.$index,scope.row)">Edit</el-button>
        <el-button type="danger" size="mini" @click="handleDelete(scope.$index,scope.row)">Delete</el-button>
      </template>
    </el-table-column>
  </el-table>

  <h3>表尾合计行</h3>
  <el-table :data="tableData6" border show-summary>
    <el-table-column prop="id" label="ID"></el-table-column>
    <el-table-column prop="name" label="姓名"></el-table-column>
    <el-table-column prop="amount1" label="数值 1（元）" sortable></el-table-column>
    <el-table-column prop="amount2" label="数值 2" sortable></el-table-column>
    <el-table-column prop="amount3" label="数值 3" sortable></el-table-column>
  </el-table>
  <el-table :data="tableData6" border show-summary :summary-method="getSummaries" style="margin-top:20px">
    <el-table-column prop="id" label="ID"></el-table-column>
    <el-table-column prop="name" label="姓名"></el-table-column>
    <el-table-column prop="amount1" label="数值 1（元）" sortable></el-table-column>
    <el-table-column prop="amount2" label="数值 2" sortable></el-table-column>
    <el-table-column prop="amount3" label="数值 3" sortable></el-table-column>
  </el-table>

  <h3>合并列或行</h3>
  <el-table :data="tableData6" border :span-method="arraySpanMethod">
    <el-table-column prop="id" label="ID"></el-table-column>
    <el-table-column prop="name" label="姓名"></el-table-column>
    <el-table-column prop="amount1" label="数值 1（元）" sortable></el-table-column>
    <el-table-column prop="amount2" label="数值 2" sortable></el-table-column>
    <el-table-column prop="amount3" label="数值 3" sortable></el-table-column>
  </el-table>
  <el-table :data="tableData6" border :span-method="objectSpanMethod">
    <el-table-column prop="id" label="ID"></el-table-column>
    <el-table-column prop="name" label="姓名"></el-table-column>
    <el-table-column prop="amount1" label="数值 1（元）" sortable></el-table-column>
    <el-table-column prop="amount2" label="数值 2" sortable></el-table-column>
    <el-table-column prop="amount3" label="数值 3" sortable></el-table-column>
  </el-table>

  <h3>自定义索引</h3>
  <el-table :data="tableData6" border size="mini">
    <el-table-column type="index" :index="indexMethod"></el-table-column>
    <el-table-column prop="id" label="ID"></el-table-column>
    <el-table-column prop="name" label="姓名"></el-table-column>
    <el-table-column prop="amount1" label="数值 1（元）" sortable></el-table-column>
    <el-table-column prop="amount2" label="数值 2" sortable></el-table-column>
    <el-table-column prop="amount3" label="数值 3" sortable></el-table-column>
  </el-table>

  <p style="height:300px"></p>
  </div>
</template>
<script>
export default {
  name: "app-table",
  data() {
    return {
      search: "",
      tableData: [
        {
          date: "2018-11-06",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          tag: "家"
        },
        {
          date: "2018-11-05",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
          tag: "公司"
        },
        {
          date: "2018-11-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
          tag: "家"
        }
      ],

      tableData2: [
        {
          date: "2018-11-06",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2018-11-06",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2018-11-06",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2018-11-06",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2018-11-06",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2018-11-06",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2018-11-06",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2018-11-06",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2018-11-06",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2018-11-06",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2018-11-06",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ],

      tableData3: [
        {
          date: "2018-11-06",
          name: "王小虎",
          province: "上海市",
          city: "浦东新区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: "200000"
        },
        {
          date: "2018-11-06",
          name: "王小虎",
          province: "上海市",
          city: "浦东新区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: "200000"
        },
        {
          date: "2018-11-06",
          name: "王小虎",
          province: "上海市",
          city: "浦东新区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: "200000"
        },
        {
          date: "2018-11-06",
          name: "王小虎",
          province: "上海市",
          city: "浦东新区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: "200000"
        },
        {
          date: "2018-11-06",
          name: "王小虎",
          province: "上海市",
          city: "浦东新区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: "200000"
        },
        {
          date: "2018-11-06",
          name: "王小虎",
          province: "上海市",
          city: "浦东新区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: "200000"
        },
        {
          date: "2018-11-06",
          name: "王小虎",
          province: "上海市",
          city: "浦东新区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: "200000"
        },
        {
          date: "2018-11-06",
          name: "王小虎",
          province: "上海市",
          city: "浦东新区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: "200000"
        }
      ],

      tableData5: [
        {
          id: "12987122",
          name: "好滋好味鸡蛋仔",
          category: "江浙小吃、小吃零食",
          desc: "荷兰优质淡奶，奶香浓而不腻",
          address: "上海市普陀区真北路",
          shop: "王小虎夫妻店",
          shopId: "10333"
        },
        {
          id: "12987123",
          name: "好滋好味鸡蛋仔",
          category: "江浙小吃、小吃零食",
          desc: "荷兰优质淡奶，奶香浓而不腻",
          address: "上海市普陀区真北路",
          shop: "王小虎夫妻店",
          shopId: "10333"
        }
      ],

      tableData6: [
        {
          id: "12987122",
          name: "王小虎",
          amount1: "234",
          amount2: "3.2",
          amount3: 10
        },
        {
          id: "12987123",
          name: "王小虎",
          amount1: "165",
          amount2: "4.43",
          amount3: 12
        },
        {
          id: "12987124",
          name: "王小虎",
          amount1: "324",
          amount2: "1.9",
          amount3: 9
        },
        {
          id: "12987125",
          name: "王小虎",
          amount1: "621",
          amount2: "2.2",
          amount3: 17
        },
        {
          id: "12987126",
          name: "王小虎",
          amount1: "539",
          amount2: "4.1",
          amount3: 15
        }
      ]
    };
  },
  methods: {
    tableRowClassName({ row, rowIndex }) {
      if (rowIndex === 1) {
        return "warning-row";
      } else if (rowIndex === 3) {
        return "success-row";
      }
      return "";
    },

    // 查看
    handleClick(row) {
      console.log(row);
    },
    // 删除
    deleteRow(index, rows) {
      rows.splice(index, 1);
    },
    // 查看scope
    lookScope(scope) {
      console.log(scope);
    },

    // 单选
    handleCurrentChange(val) {
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
    formatter(row, column) {
      return row.address;
    },

    //合计方法
    getSummaries(param) {
      const { columns, data } = param;
      const sums = [];
      columns.forEach((column, index) => {
        if (index === 0) {
          sums[index] = "总价";
          return;
        }
        const values = data.map(item => Number(item[column.property]));
        if (!values.every(value => isNaN(value))) {
          sums[index] = values.reduce((prev, curr) => {
            const value = Number(curr);
            if (!isNaN(value)) {
              return prev + curr;
            } else {
              return prev;
            }
          }, 0);
          sums[index] += " 元";
        } else {
          sums[index] = "N/A";
        }
      });

      return sums;
    },

    // 合并列或行
    arraySpanMethod({ row, column, rowIndex, columnIndex }) {
      if (rowIndex % 2 === 0) {
        if (columnIndex === 0) {
          return [1, 2];
        } else if (columnIndex === 1) {
          return [0, 0];
        }
      }
    },
    objectSpanMethod({ row, column, rowIndex, columnIndex }) {
      if (columnIndex === 0) {
        if (rowIndex % 2 === 0) {
          return {
            rowspan: 2,
            colspan: 1
          };
        } else {
          return {
            rowspan: 0,
            colspan: 0
          };
        }
      }
    },

    // 索引方法
    indexMethod(index){
      return index*2
    }

  }
};
</script>
<style scoped>
.warning-row {
  background: oldlace;
}

.success-row {
  background: #f0f9eb;
}

.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}
</style>

