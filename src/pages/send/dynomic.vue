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
                        action="http://localhost:3000/public/dynomic"
                        list-type="picture-card">
                        <i class="el-icon-plus"></i>
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

export default {
    data () {
        return {
            dynomicData: {}
        }
    },
    methods: {
        ...mapActions('dynomic',['sendDynomicHandler']),

        // 发表动态
        submitHandler() {
            this.sendDynomicHandler(this.dynomicData)
            // .then((res) => {
            //     // 将步骤的值恢复原值
            //     this.dynomicData.step = [{imageUrl:'',des:''}]
            // })
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
.submit {
    margin-top: 1em;
}
</style>
