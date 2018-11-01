<template>
    <div id="input-number">

        <el-input-number v-model="num1" size="mini" :min="1" :max="10" label="描述文字" @change="handleChange"></el-input-number>

        <el-input-number v-model="num1" :min="1" :max="10" :step="2" :precision="2"></el-input-number>

        <el-input-number v-model="num1" controls-position="right"></el-input-number>

    </div>
</template>

<script>
name: 'input-number'
export default {
    data(){
        return {
            num1: 1,
        }
    },
    methods:{
        handleChange(val){
            console.log(val)
        }
    }
}
    
</script>

<style>

</style>

