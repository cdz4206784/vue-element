<template>
  <div id="message-box">
    <el-row>
      <h3>MessageBox弹框 - 消息提示</h3>
      <el-button type="text" @click="open">点击打开Message Box</el-button>

      <h3>确认消息</h3>
      <el-button type="text" @click="open2">点击打开Message Box</el-button>

      <h3>提交内容</h3>
      <el-button type="text" @click="open3">点击打开Message Box</el-button>

      <h3>自定义</h3>
      <el-button type="text" @click="open4">点击打开Message Box</el-button>

      <h3>使用HTMl片段</h3>
      <el-button type="text" @click="open5">点击打开Message Box</el-button>

      <h3>区分取消和关闭</h3>
      <el-button type="text" @click="open6">点击打开Message Box</el-button>

      <h3>居中布局</h3>
      <el-button type="text" @click="open7">点击打开Message Box</el-button>

    </el-row>

  </div>
</template>

<script>
  export default {
    name: 'message-box',
    data(){
      return {


      }
    },
    methods: {
      open(){
        this.$alert('这是一段内容','标题名称',{
          confirmButtonText:'确定',
          callback: action => {
            this.$message({
              type: 'info',
              message: `action: ${action}`
            })
          }
        })
      },

      open2(){
        this.$confirm('此操作将永久删除该文件，是否继续？','提示',{
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type:'warning'
        }).then(()=>{
          this.$message({
            type:'success',
            message: '删除成功！'
          })
        }).catch(()=>{
          this.$message({
            type: 'info',
            message: '已取消删除'
          })
        })
      },


      open3(){
        this.$prompt('请输入邮箱','提示',{
          confirmButtonText: '确定',
          cancleButtonText: '取消',
          inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
          inputErrorMessage: '邮箱格式不正确',
          inputPlaceholder: '请输入邮箱'
        }).then(({value})=>{
          this.$message({
            type: 'success',
            message: '你的邮箱是:' + value
          })
        }).catch(()=>{
          this.$message({
            type: 'info',
            message: '取消输入'
          })
        })
      },


      open4(){
        const h = this.$createElement;
        this.$msgbox({
          title: '消息',
          message: h('p',null,[
            h('span',null,'内容可以是 '),
            h('i',{style:'color:teal'}, 'VNode')
          ]),
          showCancelButton: true,
          confirmButtonText: '确定',
          cancleButtonText: '取消',
          beforeClose:(action,instance,done)=>{
            if(action === 'confrim'){
              instance.confirmButtonLoading = true;
              instance.confirmButtonText = '执行中...';
              setTimeout(()=>{
                done();
                setTimeout(()=>{
                  instance.confirmButtonLoading = false;
                },300)
              },3000)
            }else{
              done();
            }
          }
        }).then(action=>{
          this.$message({
            type: 'success',
            message: 'action: ' + action
          })
        }).catch(()=>{
          this.$message({
            type: 'info',
            message :'取消'
          })
        })
      },


      open5(){
        this.$alert('<strong>这是 <i>HTML</i> 片段</strong>','HTML片段',{
          dangerouslyUseHTMLString: true
        })
      },

      open6(){
        this.$confirm('检测到未保存的内容，是否在离开页面前保存修改？', '确认信息', {
          distinguishCancelAndClose: true,
          confirmButtonText: '保存',
          cancelButtonText: '放弃修改'
        }).then(()=>{
          this.$message({
            type:'info',
            message: '保存修改'
          })
        }).catch(action=>{
          this.$message({
            type: 'info',
            message: action === 'cancel' ? '放弃保存并留在页面' : '停留在当前页面'
          })
        })
      },

      open7(){
        this.$confirm('此操作将永久删除文件，是否继续？','提示',{
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          center: true
        }).then(()=>{
          this.$message({
            type:'success',
            message: '删除成功'
          })
        }).catch(()=>{
          this.$message({
            type:'info',
            message: '取消删除'
          })
        })
      }




    }
  }
</script>

<style scoped>

</style>
