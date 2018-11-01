<template>
    <div id="app-select">
        <p>正常下拉</p>
        <el-select v-model="value" placeholder="请选择">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" :disabled="item.disabled"></el-option>
        </el-select>

        <p>基础多选</p>

        <el-select v-model="value" placeholder="请选择" multiple>
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" :disabled="item.disabled"></el-option>
        </el-select>

        <el-select v-model="value" placeholder="请选择" multiple collapse-tags>
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" :disabled="item.disabled"></el-option>
        </el-select>

        <p>可清空单选</p>

        <el-select v-model="value" placeholder="请选择" clearable>
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" :disabled="item.disabled"></el-option>
        </el-select>


        <p>自定义模板</p>
        <el-select v-model="city" placeholder="请选择">
            <el-option v-for="item in cities" :key="item.zh" :label="item.zh" :value="item.en">
                <span style="float:left">{{item.zh}}</span>
                <span style="float:right; color: #8492a6; font-size: 13px">{{item.en}}</span>
            </el-option>
        </el-select>


        <p>分组</p>

        <el-select v-model="food" placeholder="请选择">
            <el-option-group v-for="group in foods" :key="group.label" :label="group.label">
                <el-option v-for="item in group.options" :key="item.value" :label="item.label" :value="item.value"></el-option>
            </el-option-group>
        </el-select>

        <p>可搜索 + 保留搜索词</p>

        <el-select v-model="value" placeholder="请选择" reserve-keyword="true" filterable multiple>
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
        </el-select>

        <p>远程搜索</p>

        <el-select
            v-model="value9"
            multiple
            filterable
            remote
            reserve-keyword
            placeholder="请输入关键词"
            :remote-method="remoteMethod"
            :loading="loading">
            <el-option
            v-for="item in options4"
            :key="item.value"
            :label="item.label"
            :value="item.value">
            </el-option>
        </el-select>

        <p>创建条目</p>
        <el-select v-model="value10" placeholder="请选择文章标签" filterable allow-create default-first-option multiple clearable @change="hanldeChange" @visible-change="visibleChange">
            <el-option v-for="item in options10" :key="item.value" :label="item.label" :value="item.value"></el-option>
        </el-select>


    </div>
</template>

<script>
    export default {
        name: 'app-select',
        data(){
            return {
                value: '',
                options: [
                    {value: '选项1', label:'黄金糕'},
                    {value: '选项2', label:'双皮奶', disabled: true},
                    {value: '选项3', label:'龙须面'}
                ],

                city: '',
                cities: [
                    {zh:'北京',en:'Beijing'},
                    {zh:'上海',en:'Shanghai'},
                    {zh:'南京',en:'Nanjing'}
                ],
                
                food: '',
                foods: [
                    {
                        label: '水果',
                        options : [
                            {value: 'apple',label:'苹果'},
                            {value: 'banana',label:'香蕉'},
                            {value: 'orange',label:'橘子'}
                        ]
                    },
                    {
                        label: '饮料',
                        options : [
                            {value: 'coffee',label:'咖啡'},
                            {value: 'tea',label:'茶'},
                            {value: 'water',label:'水'}
                        ]
                    }
                ],
                
                options4: [],
                value9: [],
                list: [],
                loading: false,
                states: ["Alabama", "Alaska", "Arizona",
                "Arkansas", "California", "Colorado",
                "Connecticut", "Delaware", "Florida",
                "Georgia", "Hawaii", "Idaho", "Illinois",
                "Indiana", "Iowa", "Kansas", "Kentucky",
                "Louisiana", "Maine", "Maryland",
                "Massachusetts", "Michigan", "Minnesota",
                "Mississippi", "Missouri", "Montana",
                "Nebraska", "Nevada", "New Hampshire",
                "New Jersey", "New Mexico", "New York",
                "North Carolina", "North Dakota", "Ohio",
                "Oklahoma", "Oregon", "Pennsylvania",
                "Rhode Island", "South Carolina",
                "South Dakota", "Tennessee", "Texas",
                "Utah", "Vermont", "Virginia",
                "Washington", "West Virginia", "Wisconsin",
                "Wyoming"],


                value10: '',
                options10:[
                    {value:'HTML', label:'HTML'},
                    {value:'CSS', label:'CSS'},
                    {value:'Javascript', label:'Javascript'}
                ]

            



            }
        },

        mounted(){
            this.list = this.states.map(item => {
                return { value: item, label: item };
            });
        },

        methods: {
            hanldeChange(val){
                console.log(val[0])
            },
            visibleChange(bool){
                if(bool) {
                    console.log('出现')
                }else{
                    console.log('消失')
                }
            },
            remoteMethod(query) {
                if (query !== '') {
                this.loading = true;
                setTimeout(() => {
                    this.loading = false;
                    this.options4 = this.list.filter(item => {
                    return item.label.toLowerCase()
                        .indexOf(query.toLowerCase()) > -1;
                    });
                }, 200);
                } else {
                this.options4 = [];
                }
            }
        }
        
    }
</script>

<style>

</style>

