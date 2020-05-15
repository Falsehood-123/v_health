<template>
    <div class="login">
        <el-dialog
            title="注册"
            :visible="registerVisible"
            @close='closeHandler'
            :show-close='false'
            width="30%">
            <el-form :model='userData'>
                <el-form-item
                    label="用户名"
                    prop="username"
                    :rules="usernameRule"
                >
                    <el-input type="text" v-model="userData.username" placeholder='请输入用户名'></el-input>
                </el-form-item>
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
                <el-button size='midule' type="success" @click="submitHandler">注册</el-button>
            </el-form>
        </el-dialog>
    </div>
</template>

<script>
import { mapState,mapGetters,mapMutations,mapActions } from 'vuex'
import axios from 'axios'
import qs from 'qs'
import http from '../http'

export default {
    name: 'MyRegister',
    data () {
        return {
            usernameRule:[
                { required: true, message: '用户名不能为空'}
            ],
            phoneRule:[
                { required: true, message: '手机号不能为空'}
            ],
            passwordRule: [
                { required: true, message: '密码不能为空'}
            ],
            userData:{
                phone:'',
                password:'',
                username:''
            }
        }
    },
    computed: {
        ...mapState('login',['registerVisible'])
    },
    methods: {
        ...mapMutations('login',['closeRegisterDialog']),
        ...mapActions('login',['registerHandler']),

        closeHandler() {
            this.closeRegisterDialog()
        },
        submitHandler() {
            this.registerHandler(this.userData)
            .then((res) => {
                if(res) {
                    this.$message({
                        message: '注册成功',
                        type: 'success'
                    })
                }
                this.closeRegisterDialog()
            })
        }
    }
}
</script>

<style scoped>

</style>
