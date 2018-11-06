<template>
    <div id="app-switch">
        <el-row>
            <p>基本用法</p>
            <el-switch v-model="value1" active-color="#13ce66" inactive-color="#ff4949"></el-switch>

            <p>文字描述</p>
            <el-switch v-model="value2" active-text="按月付费" inactive-text="按年付费"></el-switch>
            <el-switch v-model="value3" active-text="按月付费" inactive-text="按年付费" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
            
            <p>扩展的value类型</p>
            <el-tooltip :content="'switch value: ' + value4" placement="top" width="200">
                <el-switch v-model="value4" active-color="#13ce66" inactive-color="#ff4949" active-value="100" inactive-value="0"></el-switch>
            </el-tooltip>

            <p>图标</p>
            <el-switch v-model="value1" active-icon-class="el-icon-edit" inactive-icon-class="el-icon-delete" @change="handleChange"></el-switch>


            <p>
                <el-button type="primary" size="small" @click="changeOffValue1">关闭value1</el-button>
                <el-button type="primary" size="small" @click="changeOnValue1">打开value1</el-button>
            </p>
        </el-row>

    </div>
</template>
<script>
    export default {
        name:'app-switch',
        data(){
            return {
                value1: true,
                value2: true,
                value3: true,
                value4: '100',
            }
        },
        methods: {
            handleChange(val){
                console.log(val)
            },
            changeOffValue1(){
                this.value1 = false
            },
            changeOnValue1(){
                this.value1 = true
            }
        }
    }
</script>
<style>

</style>

