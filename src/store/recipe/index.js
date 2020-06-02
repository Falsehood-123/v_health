import axios from 'axios'
import qs from 'qs'


export default {
    namespaced: true,
    state: {
        allRecipe: []
    },
    getters: {},
    mutations: {
        getAllRecipe(state,payload) {
            state.allRecipe = payload
        }
    },
    actions: {
        // 发布菜谱
        // 在这里若是将之转换为qs的话，后台就会无法解析step
        sendRecipeHandler(context,payload) {
            axios({
                url: '/send/recipe',
                baseURL: 'http://localhost:3000',
                data: payload,
                method: 'POST'
            })
        },
        // 获取所有菜谱
        async findAllRecipeHandler(context,payload) {
            let res = await axios({
                method: 'GET',
                url: '/send/findAllRecipe',
                baseURL: 'http://localhost:3000'
            })
            console.log('find',res.data)
            context.commit('getAllRecipe',res.data)
            return res.data
        }
    }
}