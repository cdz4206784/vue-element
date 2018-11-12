<template>
  <div id="app-dropdown">
    <h3>Dropdown基础用法</h3>

    <el-dropdown>
      <span class="el-dropdown-link">
        下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>黄金糕</el-dropdown-item>
        <el-dropdown-item>狮子头</el-dropdown-item>
        <el-dropdown-item>螺蛳粉</el-dropdown-item>
        <el-dropdown-item disabled>双皮奶</el-dropdown-item>
        <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>

    <h3>触发对象</h3>
    <el-dropdown>
      <el-button type="primary">
        更多菜单<i class="el-icon-arrow-down el-icon--right"></i>
      </el-button>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>黄金糕</el-dropdown-item>
        <el-dropdown-item>狮子头</el-dropdown-item>
        <el-dropdown-item>螺蛳粉</el-dropdown-item>
        <el-dropdown-item disabled>双皮奶</el-dropdown-item>
        <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>

    <el-dropdown split-button type="primary" @click="handleClick">
        更多菜单
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>黄金糕</el-dropdown-item>
          <el-dropdown-item>狮子头</el-dropdown-item>
          <el-dropdown-item>螺蛳粉</el-dropdown-item>
          <el-dropdown-item disabled>双皮奶</el-dropdown-item>
          <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
        </el-dropdown-menu>
    </el-dropdown>

    <h3>触发方式</h3>
    <el-row>
      <el-col :span="12">
        <p>hover 激活</p>
        <el-dropdown>
          <span class="el-dropdown-link">
            下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>菜单1</el-dropdown-item>
            <el-dropdown-item>菜单2</el-dropdown-item>
            <el-dropdown-item>菜单3</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
      <el-col :span="12">
        <p>click 激活</p>
        <el-dropdown trigger="click">
          <span class="el-dropdown-link">
            下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>菜单1</el-dropdown-item>
            <el-dropdown-item>菜单2</el-dropdown-item>
            <el-dropdown-item>菜单3</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
    </el-row>

    <h3>菜单隐藏方式</h3>

    <el-dropdown :hide-on-click="false">
      <span class="el-dropdown-link">
        下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>菜单1</el-dropdown-item>
        <el-dropdown-item>菜单2</el-dropdown-item>
        <el-dropdown-item>菜单3</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>

    <h3>指令事件</h3>
    <el-dropdown @command="handleCommand">
      <span class="el-dropdown-link">
        下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="a">菜单1</el-dropdown-item>
        <el-dropdown-item command="b">菜单2</el-dropdown-item>
        <el-dropdown-item command="c">菜单3</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>

    <h3>不同尺寸</h3>
    <el-dropdown split-button type="success" placement="top-start">
      默认尺寸
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>菜单1</el-dropdown-item>
        <el-dropdown-item>菜单2</el-dropdown-item>
        <el-dropdown-item>菜单3</el-dropdown-item>
        <el-dropdown-item>菜单4</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <el-dropdown split-button type="success" size="medium">
      中等尺寸
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>菜单1</el-dropdown-item>
        <el-dropdown-item>菜单2</el-dropdown-item>
        <el-dropdown-item>菜单3</el-dropdown-item>
        <el-dropdown-item>菜单4</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <el-dropdown split-button type="success" size="small">
      小型尺寸
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>菜单1</el-dropdown-item>
        <el-dropdown-item>菜单2</el-dropdown-item>
        <el-dropdown-item>菜单3</el-dropdown-item>
        <el-dropdown-item>菜单4</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <el-dropdown split-button type="success" size="mini">
      超小尺寸
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>菜单1</el-dropdown-item>
        <el-dropdown-item>菜单2</el-dropdown-item>
        <el-dropdown-item>菜单3</el-dropdown-item>
        <el-dropdown-item>菜单4</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>




  </div>
</template>

<script>
  export default {
    name: 'app-dropdown',
    data(){
      return {


      }
    },
    methods: {
      handleClick(){
        alert('button click')
      },
      handleCommand(command){
        this.$message('click on item ' + command)
      }
    }
  }
</script>

<style scoped>

</style>
