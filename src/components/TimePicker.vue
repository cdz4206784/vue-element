<template>
    <div id="timepicker">
        <el-row>
            <p>固定时间点</p>
            <el-time-select v-model="value1" :picker-options="options1" @change="handleChange"></el-time-select>

            <p>任意时间点 + 时间范围</p>
            <el-time-picker v-model="value2" :picker-options="options2" placeholder="任意时间点"></el-time-picker>
            <el-time-picker v-model="value2" :picker-options="options2" arrow-control placeholder="任意时间点"></el-time-picker>

            <p>固定时间范围(若先选择开始时间，则结束时间内备选项的状态会随之改变)</p>
            <el-time-select v-model="startTime" :picker-options="{start:'08:30',step:'00:15',end:'18:30'}" placeholder="开始时间"></el-time-select>
            <el-time-select v-model="endTime" :picker-options="{start:'08:30',step:'00:15',end:'18:30', minTime:startTime}" placeholder="结束时间"></el-time-select>

            <p>任意时间范围</p>
            <el-time-picker v-model="value4" is-range range-separator="至" start-placeholde="开始时间" end-placeholde="结束时间" placeholder="选择时间范围" @change="handleChange"></el-time-picker>
            <el-time-picker v-model="value4" arrow-control is-range range-separator="至" start-placeholde="开始时间" end-placeholde="结束时间" placeholder="选择时间范围" ></el-time-picker>

            <p>readonly disabled editable clearable size </p>
            <el-time-select v-model="value1" :picker-options="options1" clearable @change="handleChange"></el-time-select>
            <el-time-picker v-model="value2" :picker-options="options2" format="HH-mm-ss"></el-time-picker>
        </el-row>


    </div>
</template>

<script>
    export default {
        name: 'TimePicker',
        data(){
            return {
                value1: '',
                options1: {
                    start: '08:30',
                    step: '00:15',
                    end: '18:30'
                },

                value2: '',
                options2: {
                     selectableRange: '18:30:00 - 20:30:00'
                },

                startTime: '',
                endTime: '',

                value4: [new Date(2018,10,2,9,47), new Date(2018,11,2,9,40)],
                value5: '',

            }
        },
        methods: {
            handleChange(val){
                console.log(val)
            }
        }
    }
</script>

<style>

</style>
