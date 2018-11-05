<template>
    <div id="color-picker">
        <el-row>
            <el-col :span="6">
                <p>有默认值</p>
                <el-color-picker v-model="value1" @change="handleChange" @active-change="handleActiveChange"></el-color-picker>
            </el-col>
            <el-col :span="6">
                <p>无默认值</p>
                <el-color-picker v-model="value2"></el-color-picker>
            </el-col>
            <el-col :span="6">
                <p>选择透明度</p>
                <el-color-picker v-model="value3" show-alpha @change="handleChange" color-format="rgb"></el-color-picker>
            </el-col>
            <el-col :span="6">
                <p>预定义颜色</p>
                <el-color-picker v-model="value4" show-alpha :predefine="predefineColors"></el-color-picker>
            </el-col>
            <el-col :span="6">
                <p>不同尺寸</p>
                <el-color-picker v-model="value4"></el-color-picker>
                <el-color-picker v-model="value4" size="medium"></el-color-picker>
                <el-color-picker v-model="value4" size="small"></el-color-picker>
                <el-color-picker v-model="value4" size="mini"></el-color-picker>
            </el-col>
        </el-row>

    </div>
</template>
<script>
    export default {
        data(){
            return {
                value1: 'red',
                value2:'',
                value3: 'rgba(0,0,0,0.5)',
                value4: 'rgba(255, 69, 0, 0.68)',
                predefineColors: [
                    '#ff4500',
                    '#ff8c00',
                    '#ffd700',
                    '#90ee90',
                    '#00ced1',
                    '#1e90ff',
                    '#c71585',
                    'rgba(255, 69, 0, 0.68)',
                    'rgb(255, 120, 0)',
                    'hsv(51, 100, 98)',
                    'hsva(120, 40, 94, 0.5)',
                    'hsl(181, 100%, 37%)',
                    'hsla(209, 100%, 56%, 0.73)',
                    '#c7158577'
                ]

            }
        },
        methods:{
            handleChange(val){
                console.log(val)
            },
            handleActiveChange(val){
                console.log(val)
            }
        }
    }
</script>

<style>

</style>

