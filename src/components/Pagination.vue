<template>
  <div id="app-pagination">
    <el-row>
      <h3>基础用法</h3>
      <p>页码较少时效果</p>
      <el-pagination layout="prev,pager,next" :total="50"></el-pagination>

      <p>大于7页时的效果</p>
      <el-pagination layout="prev,pager,next" :total="1000"></el-pagination>

      <h3>设置最大页码按钮数</h3>
      <el-pagination :page-size="20" :pager-count="11" layout="prev,pager,next" :total="1000"></el-pagination>

      <h3>设置背景色</h3>
      <el-pagination layout="prev,pager,next" background :total="1000"></el-pagination>

      <h3>小型分页</h3>
      <el-pagination small layout="prev,pager,next" :total="50"></el-pagination>

      <h3>附加功能</h3>
      <p>显示总数</p>
      <el-pagination layout="total,prev,pager,next" :page-size="100" :total="1000"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage1"></el-pagination>

      <p>调整每页显示条数</p>
      <el-pagination layout="sizes,prev,pager,next" :page-sizes="[100,200,300,400]" :page-size="100" :total="1000"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage2"></el-pagination>

      <p>直接前往</p>
      <el-pagination layout="prev,pager,next,jumper" :total="1000" :current-page="currentPage3"></el-pagination>

      <p>完整功能</p>
      <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      @prev-click="handlePrevClick"
      @next-click="handleNextClick"
      :current-page="currentPage4"
      :page-sizes="[100,200,300,400]"
      :page-size="100"
      layout="total,sizes,prev,pager,next,jumper"
      :total="400"
      prev-text="上一页"
      next-text="下一页"></el-pagination>


    </el-row>

  </div>
</template>

<script>
  export default {
    name: 'app-pagination',
    data(){
      return {
        currentPage1:5,
        currentPage2:4,
        currentPage3:3,
        currentPage4:2
      }
    },
    methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val){
        console.log(`当前页：${val}`)
      },
      handlePrevClick(){
        console.log('上一页')
      },
      handleNextClick(){
        console.log('下一页')
      },

    }
  }
</script>

<style>

</style>
