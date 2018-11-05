<template>
    <div id="datepicker">
        <el-row>
            <p>选择日期</p>
            <el-col :span="12">
                <p>默认</p>

                <el-date-picker type="date" v-model="value1" placeholder="选择日期" value-format="yyyy-MM-dd" @change="handleChange"></el-date-picker>

            </el-col>
            <el-col :span="12">
                <p>带快捷选项</p>
                <el-date-picker type="date" v-model="value2" placeholder="选择日期" :picker-options="pickerOptions1"></el-date-picker>
            </el-col>

            <el-col :span="12">
                <p>周</p>
                <el-date-picker v-model="value3" type="week" format="yyyy 第 WW 周" placeholder="选择周" @change="handleChange"></el-date-picker>
            </el-col>
            <el-col :span="12">
                <p>年</p>
                <el-date-picker v-model="value4" type="year" format="yyyy年" placeholder="选择年" @change="handleChange"></el-date-picker>
            </el-col>
            <el-col :span="12">
                <p>月</p>
                <el-date-picker v-model="value5" type="month" placeholder="选择月" @change="handleChange"></el-date-picker>
            </el-col>
            <el-col :span="12">
                <p>多个日期</p>
                <el-date-picker v-model="value6" type="dates" placeholder="多个日期" @change="handleChange"></el-date-picker>
            </el-col>

            <el-col :span="12">
                <p>选择日期范围</p>
                <el-date-picker v-model="value7" type="daterange" value-format="yyyy-MM-dd" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" @change="handleChange"></el-date-picker>
            </el-col>
            <el-col :span="12">
                <p>选择日期范围 - 带快捷选项</p>
                <el-date-picker v-model="value8" type="daterange" unlink-panels range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" :picker-options="pickerOptions2"></el-date-picker>
            </el-col>


            <el-col :span="8">
                <p>默认为Date对象</p>
                <p>值：{{value10}}</p>
                <el-date-picker v-model="value10" format="yyyy 年 MM 月 dd 日"></el-date-picker>
            </el-col>
            <el-col :span="8">
                <p>使用value-format</p>
                <p>值：{{value11}}</p>
                <el-date-picker v-model="value11" format="yyyy 年 MM 月 dd 日" value-format="yyyy-MM-dd"></el-date-picker>
            </el-col>
            <el-col :span="8">
                <p>时间戳</p>
                <p>值：{{value12}}</p>
                <el-date-picker v-model="value12" format="yyyy 年 MM 月 dd 日" value-format="timestamp" clear-icon="el-icon-edit"></el-date-picker>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: 'datapicker',
        data(){
            return {
                pickerOptions1: {
                    // 今日以后不可选
                    disabledDate(time) {
                        return time.getTime() > Date.now();
                    },
                    shortcuts: [{
                        text: '今天',
                        onClick(picker) {
                            picker.$emit('pick', new Date());
                        }
                    }, {
                        text: '昨天',
                        onClick(picker) {
                            const date = new Date();
                            date.setTime(date.getTime() - 3600 * 1000 * 24);
                            picker.$emit('pick', date);
                        }
                    }, {
                        text:'一周前',
                        onClick(picker){
                            const date = new Date();
                            console.log(date)
                            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
                            picker.$emit('pick', date);
                        }
                    }]
                },
                
                pickerOptions2: {
                    shortcuts: [{
                        text: '最近一周',
                        onClick(picker){
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                            picker.$emit('pick',[start,end])
                        }
                    },{
                        text: '最近一个月',
                        onClick(picker){
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                            picker.$emit('pick',[start,end])
                        }
                    },{
                        text: '最近三个月',
                        onClick(picker){
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                            picker.$emit('pick',[start,end])
                        }
                    }]
                },

                value1: '',
                value2: '',
                value3: '',
                value4: '',
                value5: '',
                value6: '',
                value7: '',
                value8: '',


                value10: '',
                value11: '',
                value12: '',
            }
        },
        methods: {
            handleChange(item){
                console.log(item)
            }
        }
    }
</script>

<style scoped>
    #datepicker {
        border: 1px solid #eee;
        padding: 20px
    }
</style>

