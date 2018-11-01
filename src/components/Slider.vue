<template>
    <div id="app-slider">
        <div class="block">
            <span>默认</span>
            <el-slider v-model="value1" @change="handleChange"></el-slider>
        </div>

        <div class="block">
            <span>自定义初始值</span>
            <el-slider v-model="value2"></el-slider>
        </div>

        <div class="block">
            <span>隐藏Tooltip</span>
            <el-slider v-model="value3" :show-tooltip="false"></el-slider>
        </div>

        <div class="block">
            <span>格式化Tooltip</span>
            <el-slider v-model="value4" :format-tooltip="formatTooltip"></el-slider>
        </div>
        
        <div class="block">
            <span>禁用</span>
            <el-slider v-model="value5" disabled></el-slider>
        </div>

        <div class="block">
            <span>不显示间断点</span>
            <el-slider v-model="value6" :step="10"></el-slider>
        </div>

        <div class="block">
            <span>显示间断点</span>
            <el-slider v-model="value7" :step="10" :show-stops="true"></el-slider>
        </div>

        <div class="block">
            <span>带有输入框</span>
            <el-slider v-model="value8" show-input></el-slider>
        </div>

        <div class="block">
            <span>范围选择range</span>
            <el-slider v-model="value9" range show-stops :max="10"></el-slider>
        </div>

        <div class="block">
            <span>竖模式</span>
            <el-slider v-model="value10" vertical height="200px"></el-slider>
        </div>

    </div>
</template>

<script>
export default {
    name: 'app-slider',
    data(){
        return {
            value1: 0,
            value2: 50,
            value3: 36,
            value4: 48,
            value5: 30,
            value6: 0,
            value7: 0,
            value8: 0,
            value9: [4,8],
            value10: 0
        }
    },
    methods: {
        formatTooltip(val){
            return val/100
        },
        handleChange(val){
            console.log(val)
        }
    }
}
</script>

<style scoped>
    .block {
        border: 1px solid #ddd;
        padding: 20px;
        display: flex;
        justify-content: space-between;
    }

    .block span {
        width: 15%;
        line-height: 38px;
    }

    .block .el-slider {
        width: 85%
    }
</style>

