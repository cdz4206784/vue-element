<template>
    <div id="find-info">
        <p>{{nrStr}}</p>

        <el-row>
            <el-col :span="4">
                <el-input v-model="findStr" placeholder="查找"></el-input>
                <el-input v-model="replaceStr" placeholder="替换"></el-input>

                <el-button-group>
                   <el-button type="success" @click="handleReplace">替换</el-button>
                </el-button-group>
            </el-col>
        </el-row>
        

    </div>
</template>

<script>
export default {
    data(){
        return {
            nrStr:'紫泥，为较常见之典型紫砂泥；良者寡，而劣者多，呈紫棕色，玩家惯呼“黑紫泥”，为最广泛市场接受的泥料之一。',
            findStr:'',
            replaceStr:''
        }
    },
    methods:{
        handleReplace(){
            let reg = new RegExp(this.findStr, 'g');
            let newStr = this.nrStr.replace(reg,this.replaceStr);
            this.nrStr = newStr;
        }
    }
}
    
</script>

<style>
    .el-input{
        margin-bottom: 10px;
    }
</style>

