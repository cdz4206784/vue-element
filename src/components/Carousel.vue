<template>
  <div id="app-carousel">
    <h3>Carousel基础用法</h3>

    <el-row :gutter="20">
      <el-col :span="12">
        <p>默认Hover指示器触发</p>
        <el-carousel height="150px">
          <el-carousel-item v-for="item in 4" :key="item">
            <h3>{{item}}</h3>
          </el-carousel-item>
        </el-carousel>

      </el-col>
      <el-col :span="12">
        <p>Click指示器触发</p>
        <el-carousel height="150px" trigger="click">
          <el-carousel-item v-for="item in 4" :key="item"><h3>{{item}}</h3></el-carousel-item>
        </el-carousel>
      </el-col>
    </el-row>

    <h3>指示器</h3>
    <el-carousel indicator-position="outside">
      <el-carousel-item v-for="item in 4" :key="item">
        <h3>{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>

    <h3>切换箭头</h3>
    <el-carousel arrow="always" :interval="5000">
      <el-carousel-item v-for="item in 4" :key="item">
        <h3>{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>

    <h3>卡片化</h3>

    <el-carousel :interval="4000" height="200px" type="card">
      <el-carousel-item v-for="item in 6" :key="item">
        <h3>{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>



  </div>
</template>

<script>
export default {
  name: "app-carousel",
  data() {
    return {

    }
  },
  methods: {}
};
</script>

<style scoped>
  .el-carousel__item h3 {
    text-align: center;
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }

</style>
