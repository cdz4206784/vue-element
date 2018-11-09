<template>
  <div id="app-message">
    <el-row>
      <h3>Message消息提示 - 基础用法</h3>
      <el-button :plain="true" @click="open">打开消息提示</el-button>
      <el-button :plain="true" @click="openVn">VNode</el-button>

      <h3>不同状态</h3>
      <el-button type="success" :plain="true" @click="open2">成功</el-button>
      <el-button type="warning" :plain="true" @click="open3">警告</el-button>
      <el-button :plain="true" @click="open">消息</el-button>
      <el-button type="danger" :plain="true" @click="open4">错误</el-button>

      <h3>可关闭</h3>
      <el-button type="success" :plain="true" @click="open5">成功</el-button>
      <el-button type="warning" :plain="true" @click="open6">警告</el-button>
      <el-button :plain="true" @click="open7">消息</el-button>
      <el-button type="danger" :plain="true" @click="open8">错误</el-button>

      <h3>文字居中</h3>
      <el-button :plain="true" @click="openCenter">文字居中</el-button>

      <h3>使用HTML片段</h3>
      <el-button @click="openHTML">使用HTML片段</el-button>



    </el-row>

  </div>
</template>

<script>
  export default {
    name: 'app-message',
    data(){
      return {

      }
    },
    methods: {
      open(){
        this.$message('这是一条消息提示')
      },
      openVn(){
        const h = this.$createElement;
        this.$message({
          message:h('p',null,[
            h('span',null,'内容可以是 '),
            h('i',{style:'color:teal'}, 'VNode')
          ])
        })
      },

      open2(){
        this.$message({
          message:'恭喜你，这是一条成功消息',
          type: 'success'
        })
      },
      open3(){
        // this.$message({
        //   message:'警告哦，这是一条警告消息',
        //   type: 'warning'
        // })
        this.$message.warning('警告哦，这是一条警告信息')
      },
      open4(){
        this.$message.error('错了哦，这是一条错误信息')
      },

      open5(){
        this.$message({
          showClose: true,
          message: '这是一条消息提示',
          type: 'success'
        })
      },
      open6(){
        this.$message.warning({
          showClose:true,
          message:'警告哦，这是一条警告信息'
        })
      },
      open7(){
        this.$message({
          showClose:true,
          message:'这是一条信息'
        })
      },
      open8(){
        this.$message({
          showClose:true,
          message:'错了哦，这是一条错误信息',
          type:'error'
        })
      },

      openCenter(){
        this.$message({
          message: '居中的文字',
          center: true
        })
      },

      openHTML(){
        this.$message({
          dangerouslyUseHTMLString: true,
          message:'<strong>这是 <i>HTML</i> 片段</strong>'
        })
      }

    }
  }
</script>

<style scoped>

</style>
