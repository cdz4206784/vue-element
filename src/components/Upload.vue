<template>
    <div id="app-upload">
        <el-upload 
        class="upload-demo" 
        action="https://jsonplaceholder.typicode.com/posts/" 
        :on-preview="handlePreview" 
        :on-remove="handleRemove" 
        :before-remove="beforeRemove" 
        multiple 
        :limit="3" 
        :on-exceed="handleExceed" 
        :file-list="fileList"
        >
            <el-button type="primary" size="small">点击上传</el-button>
            <p slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500KB</p>
        </el-upload>

        <p>用户头像上传</p>

        <el-upload 
        class="avatar-uploader" 
        action="https://jsonplaceholder.typicode.com/posts/" 
        :show-file-list="false" 
        :on-success="handleAvatarSuccess" 
        :before-upload="beforeAvatarUpload">
            <img v-if="imageUrl" :src="imageUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>

        <p>照片墙</p>
        <el-upload
        action="https://jsonplaceholder.typicode.com/posts/" 
        list-type="picture-card" 
        :on-preview="handlePictureCardPreview" 
        :on-remove="handleRemove">
        <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
        <img width="100%" :src="dialogImageUrl" alt="">
        </el-dialog>

        <p>图片列表缩略图</p>
        <el-upload class="upload-demo"
        action="https://jsonplaceholder.typicode.com/posts/" 
        :on-preview="handlePreview" 
        :on-remove="handleRemove" 
        :file-list="fileList2" 
        list-type="picture">
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>

        <p>上传文件列表控制</p>
        <el-upload class="upload-demo"
        action="https://jsonplaceholder.typicode.com/posts/" 
        :on-change="handleChange"
        :file-list="fileList3">
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>

        <p>拖拽上传</p>
        <el-upload 
        class="upload-demo" 
        drag
        action="https://jsonplaceholder.typicode.com/posts/" 
        multiple>
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
            <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>

        <p>手动上传</p>
        <el-upload class="upload-demo" 
        ref="upload" 
        action="https://jsonplaceholder.typicode.com/posts/" 
        :on-preview="handlePreview" 
        :on-remove="handleRemove" 
        :file-list="fileList" 
        :auto-upload="false"
        >
        
        <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
        <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
        <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        
        </el-upload>

    </div>
</template>

<script>
    export default {
        name: 'app-upload',
        data(){
            return {
                fileList: [
                    {name:'food.jpeg', url:'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'},
                    {name:'food2.jpeg', url:'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}
                ],

                fileList2: [
                    {name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, 
                    {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}
                ],

                fileList3: [{
                    name: 'food.jpeg',
                    url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
                }, {
                    name: 'food2.jpeg',
                    url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
                }],

                imageUrl: '',

                dialogImageUrl: '',
                dialogVisible: false
            }
        },
        methods: {

            // 点击文件列表中已上传的文件时的钩子
            handlePreview(file){
                console.log(file)
            },

            // 删除文件之前的钩子，参数为上传的文件和文件列表
            beforeRemove(file,fileList){
                return this.$confirm(`确定移除 ${file.name}？`);
            },

            // 文件列表移除文件时的钩子
            handleRemove(file,fileList){
                console.log(file, fileList);
            },
            
            // 文件超出个数限制时的钩子
            handleExceed(files,fileList){
                this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length} 个文件`);
            },

            // 上传文件之前的钩子，参数为上传的文件
            beforeAvatarUpload(file) {
                const isJPG = file.type === 'image/jpeg';
                const isLt2M = file.size / 1024 / 1024 < 2;

                if (!isJPG) {
                    this.$message.error('上传头像图片只能是 JPG 格式!');
                }
                if (!isLt2M) {
                    this.$message.error('上传头像图片大小不能超过 2MB!');
                }
                return isJPG && isLt2M;
            },

            // 文件上传成功时的钩子
            handleAvatarSuccess(res, file) {
                this.imageUrl = URL.createObjectURL(file.raw);
            },

            // 点击文件列表中已上传的文件时的钩子
            handlePictureCardPreview(file){
                this.dialogImageUrl = file.url;
                this.dialogVisible = true;
            },

            // 文件状态改变时的钩子，添加文件、上传成功和上传失败时都会被调用
            handleChange(file, fileList) {
                this.fileList3 = fileList.slice(-3);
            },

            // 点击上传
            submitUpload(){
                this.$refs.upload.submit();
            }

        }
    }
</script>

<style scoped>
    .upload-demo {
        border: 1px solid #eee;
        padding: 20px;
    }
    .el-upload__tip {
        color: #898989
    }


    .avatar-uploader {
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
    }
    .avatar-uploader .el-upload:hover {
        border-color: #409EFF;
    }
    .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 178px;
        height: 178px;
        line-height: 178px;
        text-align: center;
    }
    .avatar {
        width: 178px;
        height: 178px;
        display: block;
    }

</style>
