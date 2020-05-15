<template>
  <div id="app">
    <div class="contain">
      <!-- 登录栏 -->
      <div class="top">
        <div class="logo">
          
        </div>
        <div class="nav">
          <el-tabs v-model="active" @tab-click="tabChangeHandler">
            <el-tab-pane label="首页" name="/"></el-tab-pane>
            <el-tab-pane label="菜谱" name="/recipe"></el-tab-pane>
            <el-tab-pane label="食材" name="/foods"></el-tab-pane>
            <el-tab-pane label="健康" name="/health"></el-tab-pane>
            <el-tab-pane label="社区" name="/dynomic"></el-tab-pane>
          </el-tabs>
        </div>
        <div class="login" v-if="loginType">
          <div class="avatar_base">
            <el-dropdown>
              <div class="login_avatar">
                <img :src="'http://localhost:3000'+userData.avatar" alt="error">
              </div>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item><span>个人中心</span></el-dropdown-item>
                <el-dropdown-item><span @click="toRecipeHandler">发布菜谱</span></el-dropdown-item>
                <el-dropdown-item><span @click="toDynomicHandler">发布动态</span></el-dropdown-item>
                <el-dropdown-item><span @click="logout">退出登录</span></el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </div>
        <div class="no_login" v-else>
          <span @click="loginHandler">登录</span>
          <span>|</span>
          <span @click="registerHandler">注册</span>
        </div>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { mapState,mapGetters,mapMutations,mapActions } from 'vuex'

export default {
  data () {
    return {
      active: '/'
    }
  },
  computed: {
    ...mapState('login',['loginType','userData'])
  },
  methods: {
    ...mapMutations('login',['showLoginDialog','showRegisterDialog']),
    ...mapActions('login',['logoutHandler']),

    tabChangeHandler(path) {
      this.$router.push({path:path.name})
    },
    loginHandler() {
      this.showLoginDialog()
    },
    registerHandler() {
      this.showRegisterDialog()
    },
    logout() {
      this.logoutHandler(this.userData._id)
      .then((res) => {
        if(!res.data.loginType) {
          this.$message({
            type:'success',
            message:'退出登录成功'
          })
        }
      })
    },
    // 跳转到发布菜谱页面
    toRecipeHandler() {
      this.$router.push({path:'/send/recipe'})
    },
    // 跳转到发布动态页面
    toDynomicHandler() {
      this.$router.push({path:'/send/dynomic'})
    }
  }
}
</script>

<style scoped>
.contain {
  width: 990px;
  margin: auto;
  box-sizing: border-box;
}
.top {
  width: 100%;
  height: 40px;
  background-color: #ff8244;
}
.logo {
  width: 30%;
  height: 40px;
  background-color: lightblue;
  float: left;
}
.nav {
  width: 50%;
  height: 40px;
  float: left;
}
/* 登录后的头像显示 */
.login {
  width: 20%;
  height: 40px;
  margin-left: 80%;
  position: relative;
}
.avatar_base {
  position: absolute;
  right: 1em;
}
.login_avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
}
.login_avatar > img {
  display: block;
  width: 40px;
  height: 40px;
}
/* 未登录时的状态 */
.no_login {
  width: 20%;
  height: 40px;
  margin-left: 80%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: #ffffff;
}
.no_login span {
    margin-left: .2em;
    margin-right: .2em;
    cursor: pointer;
}
</style>


<style>
html, body {
  width: 100%;
  padding: 0;
  margin: 0;
  font-size: 14px;
  background-color: #fae8c8;
}
#app {
  position: relative;
}
p {
  margin: 0;
  padding: 0;
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
