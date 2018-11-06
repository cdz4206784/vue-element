<template>
    <div id="app-rate">
        
        <p>基础用法</p>
        <el-row>
            <el-col :span="12">
                <p>默认不区分颜色</p>
                <el-rate v-model="value1" @change="handleChange"></el-rate>
            </el-col>
            <el-col :span="12">
                <p>区分颜色</p>
                <el-rate v-model="value2" :colors="colors"></el-rate>
            </el-col>
            <el-col :span="12">
                <p>辅助文字</p>
                <el-rate v-model="value3" show-text></el-rate>
            </el-col>
            <el-col :span="12">
                <p>其他ICON</p>
                <el-rate
                v-model="value4"
                :icon-classes="['icon-rate-face-1', 'icon-rate-face-2', 'icon-rate-face-3']"
                void-icon-class="icon-rate-face-off"
                :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
                </el-rate>
            </el-col>
            <el-col :span="12">
                <p>只读</p>
                <el-rate v-model="value5" show-score score-template="{value}"  disabled></el-rate>
            </el-col>

        </el-row>
    </div>
</template>

<script>
    export default {
        name: 'app-rate',
        data(){
            return {
                
            }
        }
    }    
                value1: null,
                value2: null,
                value3: null,
                value4: null,
                value5: 3.7,
                colors: ['#99A9BF', '#F7BA2A', '#FF9900'],
            }
        },
        methods: {
            handleChange(val){
                console.log(111)
            }
        }
    }
</script>

<style>

</style>

