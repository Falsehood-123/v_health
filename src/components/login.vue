<template>
    <div class="login">
        <el-dialog
            title="登录"
            :visible="loginVisible"
            @close='closeHandler'
            :show-close='false'
            width="30%">
            <el-form :model='userData'>
                <el-form-item
                    label="手机号"
                    prop="phone"
                    :rules="phoneRule"
                >
                    <el-input type="text" maxlength='11' v-model="userData.phone" placeholder='手机号登录'></el-input>
                </el-form-item>
                <el-form-item
                    label="密码"
                    prop="password"
                    :rules="passwordRule"
                >
                    <el-input type="password" v-model="userData.password" placeholder='请输入密码'></el-input>
                </el-form-item>
                <el-button size='midule' type="success" @click="submitHandler">登录</el-button>
            </el-form>
        </el-dialog>
    </div>
</template>

<script>
import { mapState,mapGetters,mapMutations,mapActions } from 'vuex'
import axios from 'axios'

export default {
    name: 'MyLogin',
    data () {
        return {
            phoneRule:[
                { required: true, message: '手机号不能为空'}
            ],
            passwordRule: [
                { required: true, message: '密码不能为空'}
            ],
            userData:{
                phone:'',
                password:''
            }
        }
    },
    computed: {
        ...mapState('login',['loginVisible'])
    },
    methods: {
        ...mapMutations('login',['closeLoginDialog']),
        ...mapActions('login',['loginHandler']),

        closeHandler() {
            this.closeLoginDialog()
        },
        submitHandler() {
            this.loginHandler(this.userData)
            .then((res) => {
                if(res) {
                    this.$message({
                        message: '登录成功',
                        type: 'success'
                    })
                }
                this.closeLoginDialog()
            })
        }
    }
}
</script>

<style scoped>

</style>
