<template>
  <div id="app-tabs">
    <h3>基础用法</h3>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
      <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
      <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
      <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
    </el-tabs>

    <h3>选项卡样式</h3>
    <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
      <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
      <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
      <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
      <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
    </el-tabs>

    <h3>卡片化</h3>
    <el-tabs v-model="activeName2" type="border-card" @tab-click="handleClick">
      <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
      <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
      <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
      <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
    </el-tabs>

    <h3>位置</h3>
    <el-radio-group v-model="tabPosition" style="margin-bottom:20px">
      <el-radio-button label="top">top</el-radio-button>
      <el-radio-button label="right">right</el-radio-button>
      <el-radio-button label="bottom">bottom</el-radio-button>
      <el-radio-button label="left">left</el-radio-button>
    </el-radio-group>

    <el-tabs v-model="activeName2" :tab-position="tabPosition" @tab-click="handleClick">
      <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
      <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
      <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
      <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
    </el-tabs>

    <h3>自定义标签页</h3>
    <el-tabs type="border-card">
      <el-tab-pane>
        <span slot="label"><i class="el-icon-date"></i> 我的行程</span>
      </el-tab-pane>
      <el-tab-pane label="消息中心"></el-tab-pane>
      <el-tab-pane label="角色管理"></el-tab-pane>
      <el-tab-pane label="定时任务补偿"></el-tab-pane>
    </el-tabs>

    <h3>动态增减标签页</h3>
    <el-tabs type="card" v-model="editableTabsValue" editable @edit="handleTabsEdit">
      <el-tab-pane v-for="(item,index) in editableTabs" :key="item.name" :label="item.title" :name="item.name">
        {{item.content}}
      </el-tab-pane>
    </el-tabs>

    <h3>自定义增加标签页触发器</h3>
    <div style="margin-bottom:20px;">
      <el-button size="small" @click="addTab(editableTabsValue2)">add tab</el-button>
    </div>
    <el-tabs v-model="editableTabsValue2" type="card" closable @tab-remove="removeTab">
      <el-tab-pane v-for="(item, index) in editableTabs2" :key="item.name" :label="item.title" :name="item.name">{{item.content}}</el-tab-pane>
    </el-tabs>


  </div>
</template>

<script>
  export default {
    name: 'app-tabs',
    data(){
      return {
        activeName: 'second',
        activeName2: 'first',
        // 设置位置
        tabPosition:'top',

        // 动态增减
        editableTabsValue:'2',
        editableTabs:[
          {title: 'Tab 1', name: '1', content: 'Tab 1 content'},
          {title: 'Tab 2', name: '2', content: 'Tab 2 content'},
        ],

        editableTabsValue2: '2',
        editableTabs2: [{
          title: 'Tab 1',
          name: '1',
          content: 'Tab 1 content'
        }, {
          title: 'Tab 2',
          name: '2',
          content: 'Tab 2 content'
        }],


        tabIndex: 2

      }
    },
    methods: {
      handleClick(tab,event){
        console.log(tab,event)
      },

      // 动态增减
      handleTabsEdit(targetName,action){
        if(action === 'add'){
          let newTabName = ++this.tabIndex+'';
          this.editableTabs.push({
            title:'New Tab',
            name: newTabName,
            content: 'New Tab content'
          });
          this.editableTabsValue = newTabName
        }

        if (action === 'remove') {
          let tabs = this.editableTabs;
          let activeName = this.editableTabsValue;
          if (activeName === targetName) {
            tabs.forEach((tab, index) => {
              if (tab.name === targetName) {
                let nextTab = tabs[index + 1] || tabs[index - 1];
                if (nextTab) {
                  activeName = nextTab.name;
                }
              }
            });
          }

          this.editableTabsValue = activeName;
          this.editableTabs = tabs.filter(tab => tab.name !== targetName);
        }

      },

      addTab(targetName) {
        let newTabName = ++this.tabIndex + '';
        this.editableTabs2.push({
          title: 'New Tab',
          name: newTabName,
          content: 'New Tab content'
        });
        this.editableTabsValue2 = newTabName;
      },
      removeTab(targetName) {
        let tabs = this.editableTabs2;
        let activeName = this.editableTabsValue2;
        if (activeName === targetName) {
          tabs.forEach((tab, index) => {
            if (tab.name === targetName) {
              let nextTab = tabs[index + 1] || tabs[index - 1];
              if (nextTab) {
                activeName = nextTab.name;
              }
            }
          });
        }

        this.editableTabsValue2 = activeName;
        this.editableTabs2 = tabs.filter(tab => tab.name !== targetName);
      }



    }
  }
</script>

<style scoped>

</style>
