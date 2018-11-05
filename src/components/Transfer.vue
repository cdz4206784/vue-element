<template>
    <div id="app-transfer">
        <h3>Transfer基础用法</h3>
        <el-transfer v-model="value1" :data="data"></el-transfer>

        <h3>可搜索</h3>
        <el-transfer 
        v-model="value2" 
        :data="data2" 
        filterable 
        :filter-method="filterMethod" 
        filter-placeholder="请输入城市拼音" 
        ></el-transfer>

        <h3>可自定义</h3>
        <p>使用 render-content 自定义数据项</p>
        <el-transfer style="text-align: left; display: inline-block"
        v-model="value3"
        filterable
        :left-default-checked="[2, 3]"
        :right-default-checked="[1]"
        :render-content="renderFunc"
        :titles="['Source', 'Target']"
        :button-texts="['到左边', '到右边']"
        :format="{
            noChecked: '${total}',
            hasChecked: '${checked}/${total}'
        }"
        @change="handleChange"
        :data="data">
            <el-button class="transfer-footer" slot="left-footer" size="small">操作</el-button>
            <el-button class="transfer-footer" slot="right-footer" size="small">操作</el-button>
        </el-transfer>
        <p>使用 scoped-slot 自定义数据项</p>
        <el-transfer style="text-align: left; display: inline-block"
        v-model="value4"
        filterable
        :left-default-checked="[2, 3]"
        :right-default-checked="[1]"
        :titles="['Source', 'Target']"
        :button-texts="['到左边', '到右边']"
        :format="{
            noChecked: '${total}',
            hasChecked: '${checked}/${total}'
        }"
        @change="handleChange"
        :data="data">
            <span slot-scope="{ option }">{{ option.key }} - {{ option.label }}</span>
            <el-button class="transfer-footer" slot="left-footer" size="small">操作</el-button>
            <el-button class="transfer-footer" slot="right-footer" size="small">操作</el-button>
        </el-transfer>

        <h3>数据项属性别名</h3>
        <el-transfer v-model="value5" :props="{ key: 'value', label: 'desc' }" :data="data3"></el-transfer>

    </div>
</template>
<script>
    export default {
        name:'app-transfer',
        data() {
            const generateData = _ => {
                const data = [];
                for (let i = 1; i <= 15; i++) {
                data.push({
                    key: i,
                    label: `备选项 ${ i }`,
                    disabled: i % 4 === 0
                });
                }
                return data;
            };

            const generateData2 = _ =>{
                const data = [];
                const cities = ['上海', '北京', '广州', '深圳', '南京', '西安', '成都'];
                const pinyin = ['shanghai', 'beijing', 'guangzhou', 'shenzhen', 'nanjing', 'xian', 'chengdu'];
                cities.forEach((city,index)=>{
                    data.push({
                        label: city,
                        key: index,
                        pinyin: pinyin[index]
                    })
                })
                return data;
            };

            const generateData3 = _ => {
                const data = [];
                for (let i = 1; i <= 15; i++) {
                data.push({
                    value: i,
                    desc: `备选项 ${ i }`,
                    disabled: i % 4 === 0
                });
                }
                return data;
            };

            return {
                data: generateData(),
                value1: [1, 4],

                value2: [],
                data2: generateData2(),

                filterMethod(query,item){
                    return item.pinyin.indexOf(query) > -1;
                },



                value3: [1],
                value4: [1],
                renderFunc(h, option) {
                    return <span>{ option.key } - { option.label }</span>;
                },



                data3: generateData3(),
                value5: []

            }
        },
        methods: {
            handleChange(value, direction, movedKeys) {
                console.log(value, direction, movedKeys);
            }
        }
    }
</script>
