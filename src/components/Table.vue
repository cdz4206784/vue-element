<template>
    <div id="app-table">
        <h3>排序 & 筛选</h3>
        <el-table :data="tableData" border>
            <el-table-column prop="date" sortable label="日期" :filters="filters" :filter-method="filterHandler"></el-table-column>
            <el-table-column prop="name" label="姓名"></el-table-column>
            <el-table-column prop="province" label="省份"></el-table-column>
            <el-table-column prop="city" label="城市"></el-table-column>
            <el-table-column prop="address" label="地址" :formatter="formatter"></el-table-column>
            <el-table-column prop="tag" label="标签" :filters="filters2" :filter-method="filterTag">
                <template slot-scope="scope">
                    <el-tag :type="scope.row.tag === '家' ? 'primary' : 'success'">{{scope.row.tag}}</el-tag>
                </template>
            </el-table-column>
        </el-table>

        <h3>自定义列模板</h3>
        <el-table :data="tableData" border>
            <el-table-column label="日期" width="180">
                <template slot-scope="scope">
                    <i class="el-icon-time"></i>
                    <span style="margin-left: 10px">{{ scope.row.date }}</span>
                </template>
            </el-table-column>
            <el-table-column label="姓名" width="180">
                <template slot-scope="scope">
                    <el-popover trigger="hover" placement="top">
                        <p>姓名：{{scope.row.name}}</p>
                        <p>住址：{{scope.row.address}}</p>
                        <div slot="reference" class="name-wrapper">
                            <el-tag size="medium">{{scope.row.name}}</el-tag>
                        </div>
                    </el-popover>
                </template>
            </el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button size="mini" @click="handleEdit(scope.$index,scope.row)">编辑</el-button>
                    <el-button size="mini" type="danger" @click="handleDelete(scope.$index,scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>



    </div>
</template>
<script>
    export default {
        name: 'app-table',
        data(){
            return {
                tableData: [
                    { date: '2018-11-07', name: '崔先生', province: '上海市', city: '闵行区', address: '浦锦路多少多少弄', tag: '家'},
                    { date: '2018-11-06', name: '崔先生', province: '上海市', city: '黄浦区', address: '北京东路科技京城', tag: '公司'},
                    { date: '2018-11-05', name: '崔先生', province: '上海市', city: '闵行区', address: '浦锦路多少多少弄', tag: '家'},
                    { date: '2018-11-04', name: '崔先生', province: '上海市', city: '黄浦区', address: '北京东路科技京城', tag: '公司'}
                ],

                filters: [
                    {text:'2018-11-07', value: '2018-11-07'},
                    {text:'2018-11-06', value: '2018-11-06'},
                ],
                filters2: [
                    { text: '家', value: '家'},
                    { text: '公司', value: '公司'}
                ]
            }
        },
        methods: {
            formatter(row,column){
                return row.address;
            },

            // 筛选的方法
            filterHandler(value,row,column){
                // console.log(value,row,column)
                const property = column['property'];    //得到列的名
                return row[property] === value;

                return row.date === value
            },
            filterTag(value,row){
                console.log(value,row)
                return row.tag === value;
            },

            handleEdit(index,row){
                console.log(index,row)
            },
            handleDelete(index,row){
                // this.tableData.splice(index,1);
                console.log(index,row)
            }

    
        }
    }
</script>

<style scoped>

</style>
