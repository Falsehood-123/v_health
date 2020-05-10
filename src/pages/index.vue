<template>
  <div id="index">
    <div class="contain">
      <div class="top">
        <div class="logo">
          
        </div>
        <div class="login">
          <span>登录</span>
          <span>|</span>
          <span>注册</span>
        </div>
      </div>
      <div class="nav_base">
        <div class="logo_base">

        </div>
        <div class="nav">
          <ul class="nav_items">
            <li>首页</li>
            <li>菜谱</li>
            <li>食材</li>
            <li>健康</li>
            <li>社区</li>
          </ul>
        </div>
        <div class="search">
          <el-input placeholder="请输入内容" v-model="searchText" class="input-with-select">
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </div>
      </div>
      <div class="banner">
        <el-carousel>
          <el-carousel-item v-for="(item, index) in banners" :key="index">
            <div class="img_base">
              <img :src="item" alt="error">
            </div>
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      searchText: '',
      banners: [
        {url: requier('../../public/images/bing.jpg')},
        {url: requier('../../public/images/boluo.jpg')},
        {url: requier('../../public/images/chun.jpg')},
        {url: requier('../../public/images/kuihua.jpg')},
        {url: requier('../../public/images/mom.jpg')},
        {url: requier('../../public/images/yeli.jpg')}
      ]
    }
  }
}
</script>

<style scoped>
.contain {
  width: 100%;
  padding-left: 10%;
  padding-right: 10%;
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
.login {
  width: 70%;
  height: 40px;
  margin-left: 30%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: #ffffff;
}
.login span {
    margin-left: .2em;
    margin-right: .2em;
    cursor: pointer;
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
.nav {
  width: 40%;
  height: 80px;
  float: left;
}
.nav_items {
  width: 100%;
  height: 80px;
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 1.5em;
}
.nav_items > li {
  margin-right: 1em;
  cursor: pointer;
}
.search {
  width: 30%;
  margin-left: 70%;
  height: 80px;
  line-height: 80px;
}
/* banner */
.img_base > img {
  display: block;
}
/* / */
</style>
