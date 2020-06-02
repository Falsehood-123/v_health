<template>
    <div class="send_recipe">
        <div class="contain">
            <div class="top">
                <div class="top_left el-icon-arrow-left" style="margin-right:.4em"></div>
                <div class="top_left">
                    <span>发布动态</span>
                </div>
            </div>
            <div class="content">
                <!-- 标题 -->
                <div class="title">
                    <span>标题</span>
                    <el-input
                    placeholder="请输入标题"
                    v-model="dynomicData.title">
                    </el-input>
                </div>
                <!-- 描述 -->
                <div class="describe">
                    <span>内容</span>
                    <el-input
                    type="textarea"
                    placeholder="请输入内容"
                    v-model="dynomicData.describe">
                    </el-input>
                </div>
                <!-- 上传图片 -->
                <div class="send_img">
                    <span>上传图片</span>
                    <div class="send_item">
                        <el-upload
                        class="upload-demo"
                        action="http://localhost:3000/send/dynomic/img"
                        :file-list="dynomicData.imageBase"
                        list-type="picture">
                        <el-button size="small" type="primary">点击上传</el-button>
                        </el-upload>
                    </div>
                </div>
                <!-- 提交 -->
                <div class="submit">
                    <el-button @click="submitHandler" type="success">发表动态</el-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState,mapGetters,mapMutations,mapActions } from 'vuex'
import { setUserId,getUserId,getUserName,deleteUserId } from '../../localStorage/index.js'

export default {
    data () {
        return {
            dynomicData: {
                imageBase: [],
                userId: getUserId(),
                userName: getUserName()
            }
        }
    },
    methods: {
        ...mapActions('dynomic',['sendDynomicHandler']),

        // 发表动态
        submitHandler() {
            this.sendDynomicHandler(this.dynomicData)
        },
        dynomicImg(index,e){
            let files = document.getElementById('id').files[0]
            console.log('files',files)
            let name = document.getElementById('id').files[0].name
            let arr = name.split('.')
            let fileSize = 0;
            let fileMaxSize = 10240;//1M
            if(files){
                fileSize =files.size;          
                if (fileSize > 10*1024*1024) {
                    alert("文件大小不能大于10M！");
                    file.value = "";
                    return false;
                }else if (fileSize <= 0) {
                    alert("文件大小不能为0M！");
                    file.value = "";
                    return false;
                }
            }else{
                return false;
            }
	        //转码base64
            let reader = new FileReader();
            let imgFile
            let that = this
            reader.readAsDataURL(files)
            reader.onload = e => {
                imgFile = e.target.result;
                let arr = imgFile.split(',')
                this.dynomicData.imageBase.push(arr[1])
            }
            
        }
    }
}
</script>

<style scoped>
/* 整体容器板 */
.contain {
    width: 100%;
}
/* 头部标签 */
.top {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content:flex-start;
  align-items: center;
  border-bottom: 1px solid grey;
}
.top_left {
  font-size: 2em;
  color: #ff8244;
  cursor: pointer;
}
.content {
    width: 600px;
    margin: 1em auto;
}
.content > div {
    margin-bottom: 1em;
}
.content span {
    display: block;
    font-size: 1.2em;
    color: gray;
    margin: 0 0 2px;
}
.send_item {
    width: 100px;
    height: 50px;
    position: relative;
    overflow: hidden;
}
.send_input {
    height: 100px;
    height: 50px;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
}
.submit {
    margin-top: 1em;
}
</style>
