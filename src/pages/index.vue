<template>
  <div id="index">
    <div class="contain">
      <!-- 登录栏 -->
      <!-- <div class="top">
        <div class="logo">
          
        </div>
        <div class="login">
          <span @click="loginHandler">登录</span>
          <span>|</span>
          <span @click="registerHandler">注册</span>
        </div>
      </div> -->
      <!-- 导航栏 -->
      <div class="nav_base">
        <div class="logo_base">

        </div>
        <div class="search">
          <el-input placeholder="请输入内容" v-model="searchText" class="input-with-select">
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </div>
      </div>
      <!-- 轮播 -->
      <div class="banner">
        <el-carousel height='360px'>
          <el-carousel-item v-for="(item, index) in banners" :key="index">
            <div class="img_base">
              <img :src="item.url" alt="error">
            </div>
          </el-carousel-item>
        </el-carousel>
      </div>
      <!-- 菜谱 -->
      <my-recipe></my-recipe>
      <!-- 食材 -->
      <my-foods></my-foods>
      <!-- 社区 -->
      <my-community></my-community>
      <!-- 登录弹框 -->
      <my-login></my-login>
      <!-- 注册弹框 -->
      <my-register></my-register>
    </div>
  </div>
</template>

<script>
import recipe from '../components/recipe.vue'
import foods from '../components/foods.vue'
import community from '../components/community.vue'
import login from '../components/login.vue'
import register from '../components/registered.vue'
import { mapState,mapGetters,mapMutations,mapActions } from 'vuex'

export default {
  components: {
    'MyRecipe': recipe,
    'MyFoods': foods,
    'MyCommunity': community,
    'MyLogin': login,
    'MyRegister': register
  },
  data () {
    return {
      searchText: '',
      banners: [
        {url:require('../../public/images/bing.jpg')},
        {url:require('../../public/images/boluo.jpg')},
        {url:require('../../public/images/chun.jpg')},
        {url:require('../../public/images/kuihua.jpg')},
        {url:require('../../public/images/mom.jpg')},
        {url:require('../../public/images/yeli.jpg')}
      ]
    }
  },
  methods: {}
}
</script>

<style scoped>
.contain {
  width: 990px;
  margin: auto;
  box-sizing: border-box;
}
.nav_base {
  width: 100%;
  height: 80px;
}
.logo_base {
  width: 30%;
  height: 80px;
  background-color: lightblue;
  float: left;
}
.search {
  width: 30%;
  margin-left: 70%;
  height: 80px;
  line-height: 80px;
}
/* banner */
.banner {
  width: 100%;
  height: 360px;
  margin-bottom: 2em;
}
.img_base > img {
  display: block;
}
/* 菜谱 */
/* 菜谱栏 */

</style>
