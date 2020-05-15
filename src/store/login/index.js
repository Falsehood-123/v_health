import axios from 'axios'
import qs from 'qs'

export default {
    namespaced: true,
    state: {
        loginVisible: false,
        registerVisible: false,
        loginType:false,
        userData: {}
    },
    getters: {},
    mutations: {
        // 打开登录模态框
        showLoginDialog(state,payload) {
            state.loginVisible = true
        },
        // 关闭登录模态框
        closeLoginDialog(state,payload) {
            state.loginVisible = false
        },
        // 打开注册模态框
        showRegisterDialog(state,payload) {
            state.registerVisible = true
        },
        // 关闭注册模态框
        closeRegisterDialog(state,payload) {
            state.registerVisible = false
        },
        // 获取登录用户数据与状态
        getUserData(state,payload) {
            state.userData = payload
            state.loginType = payload.loginType
        },
        // 退出登录
        userLogout(state,payload) {
            state.loginType = false
        }
    },
    actions: {
        // 注册并登录
        async registerHandler(context,payload) {
            let response = await axios({
                url: '/register',
                data: payload,
                method: 'POST'
            })
            let res = await axios({
                url:'/login',
                data:payload,
                method:'POST'
            })
            context.commit('getUserData',res.data)
            return response
        },
        // 登录
        async loginHandler(context,payload) {
            let response = await axios({
                url: '/login',
                data: payload,
                method: 'POST'
            })
            context.commit('getUserData',response.data)
            return response
        },
        // 退出登录
        async logoutHandler(context,payload) {
            let res = await axios({
                url:'/logout',
                method:'GET',
                params:{id:payload}
            })
            context.commit('userLogout')
            return res
        }
    }
}