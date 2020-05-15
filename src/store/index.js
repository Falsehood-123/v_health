import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import login from './login/index.js'
import recipe from './recipe/index.js'
import dynomic from './dynomic/index.js'

export default new Vuex.Store({
  modules: {
    login,
    recipe,
    dynomic
  }
})
