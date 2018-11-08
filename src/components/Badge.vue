<template>
  <div id="app-badge">
    <el-row>
      <el-badge :value="12" class="item">
        <el-button size="small">评论</el-button>
      </el-badge>

      <el-badge :value="3" class="item">
        <el-button size="small">回复</el-button>
      </el-badge>

      <el-badge :value="1" class="item" type="primary">
        <el-button size="small">评论</el-button>
      </el-badge>

      <el-badge :value="2" class="item" type="warning">
        <el-button size="small">回复</el-button>
      </el-badge>

      <el-dropdown trigger="click">
        <span class="el-dropdown-link">点我查看 <i class="el-icon-caret-bottom el-icon--right"></i></span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>
            评论<el-badge :value="12"></el-badge>
          </el-dropdown-item>
          <el-dropdown-item>
            回复<el-badge :value="3" type="primary"></el-badge>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>

      <h3>最大值</h3>
      <el-badge :value="200" :max="99" class="item">
        <el-button size="small">评论</el-button>
      </el-badge>

      <el-badge :value="100" :max="10" class="item">
        <el-button size="small">回复</el-button>
      </el-badge>

      <h3>自定义内容</h3>
      <el-badge value="new" class="item">
        <el-button size="small">评论</el-button>
      </el-badge>
      <el-badge value="hot" type="info" class="item">
        <el-button size="small">评论</el-button>
      </el-badge>

      <h3>小红点</h3>
      <el-badge is-dot class="item">
        数据查询
      </el-badge>

      <el-badge is-dot class="item">
        <el-button class="share-button" icon="el-icon-share" type="primary"></el-button>
      </el-badge>

    </el-row>

  </div>
</template>

<script>
  export default {
    name: 'app-badge',
    data(){
      return {

      }
    },
    methods: {

    }
  }
</script>

<style scoped>
  .item {
    margin-top: 10px;
    margin-right: 40px;
  }
</style>
