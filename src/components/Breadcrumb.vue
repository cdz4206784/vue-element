<template>
  <div id="app-breadcrumb">
    <h3>Breadcrumb基础用法</h3>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{path: '/'}">首页</el-breadcrumb-item>
      <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
      <el-breadcrumb-item>活动列表</el-breadcrumb-item>
      <el-breadcrumb-item>活动详情</el-breadcrumb-item>
    </el-breadcrumb>

    <h3>图标分隔符</h3>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{path: '/'}">首页</el-breadcrumb-item>
      <el-breadcrumb-item>活动管理</el-breadcrumb-item>
      <el-breadcrumb-item>活动列表</el-breadcrumb-item>
      <el-breadcrumb-item>活动详情</el-breadcrumb-item>
    </el-breadcrumb>



  </div>
</template>

<script>
  export default {
    name: 'app-breadcrumb',
    data(){
      return {


      }
    },
    methods: {

    }
  }
</script>

<style scoped>

</style>
