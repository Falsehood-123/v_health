import axios from 'axios'
import qs from 'qs'

export default {
    namespaced: true,
    state: {
        
    },
    getters: {},
    mutations: {
        
    },
    actions: {
        // 发布菜谱
        async sendRecipeHandler(context,payload) {
            let res = await axios({
                method:'POST',
                url:'/send/recipe',
                data:payload,
                baseURL:'http://localhost:3000',
                transformRequest:[(data) => {
                    return qs.stringify(data)
                }]
            })
        }
    }
}