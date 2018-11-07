<template>
  <div id="app-tag">
    <h3>基础用法</h3>
    <el-row>
      <el-tag>标签1</el-tag>
      <el-tag type="success">标签2</el-tag>
      <el-tag type="info">标签3</el-tag>
      <el-tag type="wraning">标签4</el-tag>
      <el-tag type="danger">标签5</el-tag>
      <el-tag color="#ffffff">自定义-白底</el-tag>
    </el-row>

    <h3>可移除标签</h3>
    <el-row>
      <el-tag v-for="tag in tags" :key="tag.name" :type="tag.type" closable>
        {{tag.name}}
      </el-tag>
    </el-row>

    <h3>动态编辑标签 - 可关闭</h3>
    <el-row>
      <el-tag v-for="tag in dynamicTags" :key="tag" closable :disable-transitions="false" @close="handleClose(tag)">
        {{tag}}
      </el-tag>
      <el-input class="input-new-tag" v-if="inputVisible" v-model="inputValue" ref="saveTagInput" size="small"
      @keyup.enter.native="handleInputConfirm"
      @blur="handleInputConfirm"></el-input>
      <el-button v-else class="button-new-tag" size="small" @click="showInput">+ New Tag</el-button>
    </el-row>

    <h3>不同尺寸</h3>
    <el-row>
      <el-tag closable>默认标签</el-tag>
      <el-tag size="medium" closable>中等标签</el-tag>
      <el-tag size="small" closable>小型标签</el-tag>
      <el-tag size="mini" closable>超小标签</el-tag>
    </el-row>


  </div>
</template>
<script>
  export default {
    name: 'app-tag',
    data(){
      return {
        tags: [
          { name:'标签1', type:''},
          { name:'标签2', type:'success'},
          { name:'标签3', type:'info'},
          { name:'标签4', type:'wraning'},
          { name:'标签5', type:'danger'}
        ],

        // 动态编辑标签
        dynamicTags: ['标签一', '标签二', '标签三'],
        inputVisible: false,
        inputValue: ''
      }
    },
    methods: {
      //关闭标签
      handleClose(tag){
        this.dynamicTags.splice(this.dynamicTags.indexOf(tag),1);
      },

      // 显示输入框
      showInput(){
        this.inputVisible = true;
        this.$nextTick(_=>{
          this.$refs.saveTagInput.$refs.input.focus();
        })
      },

      // 提交tag
      handleInputConfirm(){
        let inputValue = this.inputValue;
        if(inputValue){
          this.dynamicTags.push(inputValue);
        }
        this.inputVisible = false;
        this.inputValue = ''
      }


    }
  }
</script>

<style scoped>
  .el-tag + .el-tag {
    margin-left: 10px;
  }
  .button-new-tag {
    margin-left: 10px;
    height: 32px;
    line-height: 30px;
    padding-top: 0;
    padding-bottom: 0;
  }
  .input-new-tag {
    width: 90px;
    margin-left: 10px;
    vertical-align: bottom;
  }
</style>

