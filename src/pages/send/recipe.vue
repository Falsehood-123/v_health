<template>
    <div class="send_recipe">
        <div class="contain">
            <div class="top">
                <div class="top_left el-icon-arrow-left" style="margin-right:.4em"></div>
                <div class="top_left">
                    <span>发布菜谱</span>
                </div>
            </div>
            <div class="content">
                <!-- 标题 -->
                <div class="title">
                    <span>菜谱名称</span>
                    <el-input
                    placeholder="请输入标题"
                    v-model="recipeData.title">
                    </el-input>
                </div>
                <!-- 成品图 -->
                <div class="finish">
                    <span>成品图</span>
                    <div class="finesh_img">
                        <el-upload
                        action="http://localhost:3000/public/recipe"
                        class="upload-demo">
                        <el-button size="small" type="success">点击上传</el-button>
                        </el-upload>
                    </div>
                </div>
                <!-- 描述 -->
                <div class="describe">
                    <span>描述</span>
                    <el-input
                    type="textarea"
                    placeholder="请输入描述"
                    v-model="recipeData.describe">
                    </el-input>
                </div>
                <!-- 用料 -->
                <div class="season">
                    <span>用料</span>
                    <el-input
                    placeholder="请输入用料"
                    v-model="recipeData.season">
                    </el-input>
                </div>
                <!-- 步骤 -->
                <div class="step">
                    <span>步骤</span>
                    <div class="step_detail">
                        <ul class="detal_base">
                            <li class="detail_item" v-for="(item,index) in recipeData.step" :key="index">
                                <div class="de_left">
                                    <el-upload
                                    action="http://localhost:3000/public/recipe"
                                    :show-file-list="false">
                                    <img v-if="item.imageUrl" :src="item.imageUrl" class="avatar">
                                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                                    </el-upload>
                                </div>
                                <div class="de_right">
                                    <el-input
                                    type="textarea"
                                    placeholder="请输入步骤说明"
                                    :autosize="{ minRows: 9}"
                                    v-model="item.des">
                                    </el-input>
                                </div>
                                <el-button class="step_del" type="danger" icon="el-icon-delete" @click="delStepHandler(index)" circle></el-button>
                                <el-button class="step_add" type="info" icon="el-icon-plus" @click="addStepHandler" circle></el-button>
                            </li>
                        </ul>
                    </div>
                </div>
                <!-- 提示 -->
                <div class="tip">
                    <span>小窍门</span>
                    <el-input
                    type="textarea"
                    placeholder="请输入描述"
                    v-model="recipeData.tip">
                    </el-input>
                </div>
                <!-- 提交 -->
                <div class="submit">
                    <el-button @click="submitHandler" type="success">发布菜谱</el-button>
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
            recipeData: {
                step:[{imageUrl:'',des:''}]
            }
        }
    },
    methods: {
        ...mapActions('recipe',['sendRecipeHandler']),

        // 删除步骤
        delStepHandler(data) {
            let length = this.recipeData.step.length
            if(length > 1) {
                this.recipeData.step.splice(data,1)
            } else {
                this.$message({
                    type: 'warning',
                    message: '无法删除第一个!'
                })
            }
        },
        // 添加步骤
        addStepHandler() {
            this.recipeData.step.push({imageUrl:'',des:''})
        },
        // 提交菜谱
        submitHandler() {
            this.sendRecipeHandler(this.recipeData)
            .then((res) => {
                // 将步骤的值恢复原值
                this.recipeData.step = [{imageUrl:'',des:''}]
            })
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
/* 步骤 */
.stpe {
    width: 100%;
    margin-bottom: 1em;
}
.detal_base {
    width: 100%;
}
.detail_item {
    width: 100%;
    height: 200px;
    position: relative;
    margin-bottom: 1em;
}
.de_left {
    width: 200px;
    line-height: 200px;
    box-sizing: border-box;
    border: 1px dashed gray;
    text-align: center;
    position: absolute;
    top: 0;
    left: 0;
    background-color: #fff;
}
.de_right {
    width: 390px;
    height: 200px;
    position: absolute;
    top: 0;
    right: 0;
}
.step_del {
    position: absolute;
    top: 1em;
    right: -50px;
}
.step_add {
    position: absolute;
    top: calc( 2em + 50px );
    right: -50px;
}
.submit {
    margin-top: 1em;
}
</style>
