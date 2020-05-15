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
        // 发布动态
        async sendDynomicHandler(context,payload) {
            let res = await axios({
                method:'POST',
                url:'/send/dynomic',
                data:payload,
                baseURL:'http://localhost:3000',
                transformRequest:[(data) => {
                    return qs.stringify(data)
                }]
            })
        }
    }
}