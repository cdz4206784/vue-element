<template>
  <div id="app-dialog">
    <h3>Dialog基础用法</h3>
    <el-button type="text" @click="dialogVisible = true">点击打开 Dialog</el-button>

    <el-dialog title="提示" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确定</el-button>
      </span>
    </el-dialog>

    <h3>自定义内容</h3>
    <el-button type="text" @click="dialogTableVisible = true">打开嵌套表格的 Dialog</el-button>
    <el-button type="text" @click="dialogFormVisible = true">打开嵌套表单的 Dialog</el-button>
    <el-dialog title="收货地址" :visible.sync="dialogTableVisible">
      <el-table :data="gridData" border>
        <el-table-column property="date" label="日期" width="150"></el-table-column>
        <el-table-column property="name" label="姓名" width="200"></el-table-column>
        <el-table-column property="address" label="地址"></el-table-column>
      </el-table>
    </el-dialog>

    <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="活动名称" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="活动区域" :label-width="formLabelWidth">
          <el-select v-model="form.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>

    <h3>嵌套的 Dialog</h3>
    <el-button type="text" @click="outerVisible = true">点击打开外层的 Dialog</el-button>
    <el-dialog title="外层 Dialog" :visible.sync="outerVisible">
      <el-dialog title="内层 Dialog" :visible.sync="innerVisible" width="30%" append-to-body>
        内层Dialog的内容
      </el-dialog>

      外层Dialog的内容

      <div slot="footer" class="el-dialog-footer">
        <el-button @click="outerVisible = false">取消</el-button>
        <el-button type="primary" @click="innerVisible = true">打开内层的 Dialog</el-button>
      </div>
    </el-dialog>

    <h3>居中布局 + 全局</h3>
    <el-button type="text" @click="centerVisible = true">点击打开Dialog</el-button>
    <el-dialog :visible.sync="centerVisible" fullscreen center>
      <template slot="title">居中布局 + 全局</template>
      <span>需要注意的是内容是默认不居中的</span>
      <div slot="footer" class="el-dialog-footer">
        <el-button @click="centerVisible = false">取消</el-button>
        <el-button type="primary" @click="centerVisible = false">确定</el-button>
      </div>
    </el-dialog>


  </div>
</template>

<script>
  export default {
    name: 'app-dialog',
    data(){
      return {
        dialogVisible: false,
        dialogTableVisible: false,
        gridData:[
          {
          date: '2018-11-12',
          name: '崔先生',
          address: '上海市闵行区'
        },
          {
          date: '2018-11-12',
          name: '崔先生',
          address: '上海市闵行区'
        },
          {
          date: '2018-11-12',
          name: '崔先生',
          address: '上海市闵行区'
        }
        ],

        dialogFormVisible: false,
        formLabelWidth: '120px',
        form: {
          name: '',
          region: ''
        },

        outerVisible: false,
        innerVisible: false,

        centerVisible: false,



      }
    },
    methods: {
      handleClose(done){
        this.$confirm('确认关闭？').then(_=>{
          done();
        }).catch(_=>{})
      },


    }
  }
</script>

<style scoped>

</style>
