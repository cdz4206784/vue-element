<template>
    <div class="layout-demo">
      <h4>正常:span="24"</h4>
      <el-row>
        <el-col :span="24"><div class="grid-content bg-purple-dark"></div></el-col>
      </el-row>

      <h4>间距:gutter="20"</h4>
      <el-row :gutter="20">
        <el-col :span="12"><div class="grid-content bg-purple-light"></div></el-col>
        <el-col :span="12"><div class="grid-content bg-purple-light"></div></el-col>
      </el-row>

      <h4>偏移:offset="8"</h4>
      <el-row :gutter="20">
        <el-col :span="8"><div class="grid-content bg-purple-light"></div></el-col>
        <el-col :span="8" :offset="8"><div class="grid-content bg-purple"></div></el-col>
      </el-row>

      <h4>Flex type="flex" justify="start/center/end/space-between/space-around"</h4>
      <el-row type="flex" justify="space-around" :gutter="20">
        <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
        <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
        <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
      </el-row>

      <h4>响应式布局 :xs :sm :md :lg :xl (参照Bootstrap)</h4>

      <el-row :gutter="10">
        <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple"></div></el-col>
        <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple"></div></el-col>
        <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple"></div></el-col>
        <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple"></div></el-col>
      </el-row>

    </div>
</template>

<script>
export default {
    name: "layout-demo"
}
    
</script>

<style scoped>
.layout-demo {
  border: 1px solid #ebebeb;
  border-radius: 3px;
  transition: 0.2s;
  padding: 0 20px;
}

/* Layout */
.el-row {
  margin-bottom: 20px;
}

.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>