<template>
    <div id="app-cascader">
        <el-row :gutter="20">
            <h3>Cascader 级联选择器</h3>
            <el-col :span="6">
                <p>click触发子菜单</p>
                <el-cascader :options="options" v-model="selectedOptions" @change="handleChange"></el-cascader>
            </el-col>
            <el-col :span="6">
                <p>hover触发子菜单</p>
                <el-cascader expand-trigger="hover" :options="options" v-model="selectedOptions2" @change="handleChange"></el-cascader>
            </el-col>
            <el-col :span="6">
                <p>show-all-levels仅显示最后一级</p>
                <el-cascader :show-all-levels="false" :options="options" v-model="selectedOptions3" @change="handleChange"></el-cascader>
            </el-col>
            <el-col :span="6">
                <p>默认值</p>
                <el-cascader :options="options" v-model="selectedOptions4" @change="handleChange"></el-cascader>
            </el-col>
            <el-col :span="6">
                <p>选择即改变</p>
                <el-cascader change-on-select :options="options" v-model="selectedOptions5" @change="handleChange"></el-cascader>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: 'app-cascader',
        data(){
            return {
                selectedOptions: [],
                selectedOptions2: [],
                selectedOptions3: [],
                selectedOptions4: ['zhinan', 'shejiyuanze', 'fankui'],
                selectedOptions5: [],
                // 数据
                options: [
                    {value:'zhinan', label:'指南', disabled:true, children: [
                        {value:'shejiyuanze', label:'设计原则', children: [
                            {value: 'yizhi', label:'一致'},
                            {value: 'fankui', label:'反馈'},
                            {value: 'xiaolv', label:'效率'}
                        ]}
                    ]},
                    {value:'daohang', label:'导航', children: [
                        {value:'cexiangdaohang', label:'侧向导航'},
                        {value:'dingbudaohang', label:'顶部导航'}
                    ]},

                    {value:'zujian', label:'组件', children: [
                        {value:'basic', label:'Basic', children: [
                            {value: 'layout', label:'Layout 布局'},
                            {value: 'color', label:'Color 色彩'},
                            {value: 'typography', label:'Typography 字体', disabled:true}
                        ]},
                        {value:'form', label:'Form', children: [
                            {value: 'radio', label:'Radio 单选框'},
                            {value: 'checkbox', label:'Checkbox 多选框'},
                            {value: 'input', label:'Input 输入框'}
                        ]}
                    ]}

                ]
            }
        },

        methods: {
            handleChange(value){
                console.log(value)
            }
        }
        
    }
</script>

<style scoped>

</style>
