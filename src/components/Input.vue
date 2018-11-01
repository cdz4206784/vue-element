<template>
    <div id="app-input">
        <!-- <slot></slot> -->
        <slot style="color:blue"><!--slot 样式无效--></slot>

        <el-row :gutter="20">
            <el-col :span="4">
                <slot name="input1"></slot>
                <el-input v-model="input" placeholder="请输入内容"></el-input>
            </el-col>

            <el-col :span="4">
                <slot name="input2"></slot>
                <el-input v-model="input2" placeholder="可清空" clearable></el-input>
            </el-col>

            <el-col :span="4">
                <slot name="input3"></slot>
                    <el-input placeholder="请选择日期" suffix-icon="el-icon-date"></el-input>
            </el-col>

            <el-col :span="4">
                <slot name="input4"></slot>
                <el-input placeholder="请输入内容" prefix-icon="el-icon-search"></el-input>
            </el-col>

            <el-col :span="4">
                <slot name="input5"></slot>
                <el-input placeholder="请选择日期">
                    <i slot="suffix" class="el-input__icon el-icon-date"></i>
                </el-input>
            </el-col>

            <el-col :span="4">
                <slot name="input6"></slot>
                <el-input placeholder="请选择内容">
                    <i slot="prefix" class="el-input__icon el-icon-search"></i>
                </el-input>

            </el-col>
        </el-row>

        <el-row>
            <el-input type="textarea"></el-input>
            <el-input type="textarea" autosize></el-input>
            <el-input type="textarea" :autosize="{minRows:2,maxRows:4}"></el-input>
        </el-row>

        <p>复合型输入框</p>

        <el-row>
            <el-input placeholder="请输入内容">
                <template slot="prepend">Http://</template>
            </el-input>
            <el-input>
                <template slot="append">
                    .com</template>
            </el-input>
        </el-row>

        <el-row>
              <el-input placeholder="请输入内容" v-model="input5" class="input-with-select">
                <el-select v-model="select" slot="prepend" placeholder="请选择">
                    <el-option label="餐厅名" value="1"></el-option>
                    <el-option label="订单号" value="2"></el-option>
                    <el-option label="用户电话" value="3"></el-option>
                </el-select>
                <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
            
        </el-row>

        <el-row>
            <el-input suffix-icon="el-icon-date" size="medium" placeholder="请输入内容"></el-input>
            <el-input suffix-icon="el-icon-date" size="small" placeholder="请输入内容"></el-input>
            <el-input suffix-icon="el-icon-date" size="mini" placeholder="请输入内容"></el-input>
        </el-row>

        <el-row>
            <el-col :span="12">
                <div class="sub-title">激活即列出输入建议</div>
                <el-autocomplete
                class="inline-input"
                v-model="state1"
                :fetch-suggestions="querySearch"
                placeholder="请输入内容"
                @select="handleSelect"
                ></el-autocomplete>
            </el-col>
            <el-col :span="12">
                <div class="sub-title">输入后匹配建议</div>
                <el-autocomplete 
                class="inline-input" 
                v-model="state2" 
                :fetch-suggestions="querySearch" 
                placeholder="请输入内容" 
                :trigger-on-focus="false" 
                @select="handleSelect"
                ></el-autocomplete>
            </el-col>
        </el-row>
        

    </div>
</template>

<script>
export default {
    data(){
        return {
            input: '',
            input1: '',
            input2: '',
            select: '',
            input5:'',


            restaurants: [],
            state1: '',
            state2: ''


        }
    },
    methods: {
        querySearch(queryString, cb) {
            var restaurants = this.restaurants;
            var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
            // 调用 callback 返回建议列表的数据
            cb(results);
        },
        createFilter(queryString) {
            return (restaurant) => {
            return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
            };
        },


        loadAll(){
            return [
                { "value": "三全鲜食（北新泾店）", "address": "长宁区新渔路144号" },
                { "value": "Hot honey 首尔炸鸡（仙霞路）", "address": "上海市长宁区淞虹路661号" },
                { "value": "新旺角茶餐厅", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
                { "value": "泷千家(天山西路店)", "address": "天山西路438号" },
                { "value": "胖仙女纸杯蛋糕（上海凌空店）", "address": "上海市长宁区金钟路968号1幢18号楼一层商铺18-101" },
                { "value": "贡茶", "address": "上海市长宁区金钟路633号" },
                { "value": "豪大大香鸡排超级奶爸", "address": "上海市嘉定区曹安公路曹安路1685号" },
                { "value": "茶芝兰（奶茶，手抓饼）", "address": "上海市普陀区同普路1435号" },
                { "value": "十二泷町", "address": "上海市北翟路1444弄81号B幢-107" },
                { "value": "星移浓缩咖啡", "address": "上海市嘉定区新郁路817号" }
            ]
        },

        // 选择触发事件
        handleSelect(item) {
            console.log(item);
        }

    },
     mounted() {
      this.restaurants = this.loadAll();
    }
}
</script>

<style>
  .el-select .el-input {
    width: 130px;
  }
  .input-with-select .el-input-group__prepend {
    background-color: #fff;
  }

</style>
