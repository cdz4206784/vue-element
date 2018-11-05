<template>
    <div id="dateTimePicker">
        <el-row>
            <el-col :span="8">
                <p>默认 - 换图标prefix-icon clear-icon ，不可写editable</p>
                <el-date-picker v-model="value1" type="datetime" value-format="yyyy-MM-dd HH:mm:ss" prefix-icon="el-icon-edit" :editable="false" clear-icon="el-icon-delete" placeholder="选择日期时间" @change="handleChange"></el-date-picker>
            </el-col>
            <el-col :span="8">
                <p>带快捷选项</p>
                <el-date-picker v-model="value2" type="datetime" value-format="yyyy-MM-dd HH:mm:ss" placeholder="选择日期时间" :picker-options="pickerOptions1" @change="handleChange"></el-date-picker>
            </el-col>
            <el-col :span="8">
                <p>设置默认时间</p>
                <el-date-picker v-model="value3" type="datetime" value-format="yyyy-MM-dd HH:mm:ss" default-time="12:00:00" placeholder="选择日期时间"></el-date-picker>
            </el-col>

            <el-col :span="12">
                <p>日期和时间范围</p>
                <el-date-picker v-model="value4" type="datetimerange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期"></el-date-picker>
            </el-col>
            <el-col :span="12">
                <p>日期和时间范围 - 带快捷选项</p>
                <el-date-picker v-model="value5" type="datetimerange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" :picker-options="pickerOptions2"></el-date-picker>
            </el-col>

            <el-col :span="12">
                <p>起始日期时刻为 12:00:00</p>
                <el-date-picker v-model="value6" type="datetimerange" :default-time="['12:00:00']" start-placeholder="开始日期" end-placeholder="结束日期"></el-date-picker>
            </el-col>
            <el-col :span="12">
                <p>起始日期时刻为 12:00:00，结束日期时刻为 08:00:00</p>
                <el-date-picker v-model="value7" type="datetimerange" :default-time="['12:00:00', '08:00:00']" start-placeholder="开始日期" end-placeholder="结束日期"></el-date-picker>
            </el-col>


        </el-row>
    </div>
</template>

<script>
    export default {
        name: 'DateTimePicker',
        data(){
            return {
                value1: '',
                value2: '',
                value3: '',
                value4: '',
                value5: '',
                value6: '',
                value7: '',
                
                // 快捷选项
                pickerOptions1: {
                    shortcuts: [{
                        text: '今天',
                        onClick(picker){
                            picker.$emit('pick',new Date())
                        }
                    },{
                        text: '昨天',
                        onClick(picker){
                            const date = new Date();
                            picker.$emit('pick',date.setTime(date.getTime() - 3600 * 1000 * 24))
                        }
                    },{
                        text: '一周前',
                        onClick(picker){
                            const date = new Date();
                            picker.$emit('pick',date.setTime(date.getTime() - 3600*1000*24*7))
                        }
                    }]
                },

                // 快捷选项
                pickerOptions2: {
                    shortcuts: [
                        {
                            text: '最近一周',
                            onClick(picker){
                                const start = new Date();
                                const end = new Date();
                                start.setTime(start.getTime() - 3600*1000*24*7);
                                picker.$emit('pick',[start,end]);
                            }
                        },
                        {
                            text: '最近一月',
                            onClick(picker){
                                const start = new Date();
                                const end = new Date();
                                start.setTime(start.getTime() - 3600*1000*24*30)
                                picker.$emit('pick',[start,end])
                            }
                        },
                        {
                            text: '最近三月',
                            onClick(picker){
                                const start = new Date();
                                const end = new Date();
                                start.setTime(start.getTime() - 3600*1000*24*90)
                                picker.$emit('pick',[start,end])
                            }
                        },
                        {
                            text: '最近一年',
                            onClick(vm){
                                const start = new Date();
                                const end = new Date();
                                start.setTime(start.getTime() - 3600*1000*24*365)
                                vm.$emit('pick',[start,end])
                            }
                        }
                    ]
                }




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

