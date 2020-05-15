<template>
    <div class="recipe">
        <div class="search">
            <el-input placeholder="请输入内容" v-model="searchText" class="input-with-select">
                <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
        </div>
        <div class="re_top">
          <div class="top_left">
            <span>所有菜谱</span>
          </div>
        </div>
        <div class="re_content">
          <ul class="re_items">
            <li class="re_item" v-for="item in 20" :key="item">
              <div class="re_img">
                <img src="../../../public/images/test.jpg" alt="error">
              </div>
              <div class="re_autor">
                <p class="re_name">菜谱名字</p>
                <p class="re_user">作者</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
</template>

<script>
export default {
    name: 'MyRecipe',
    data () {
        return {
            searchText: ''
        }
    }
}
</script>

<style scoped>
.search {
    width: 50%;
    height: 50px;
    margin: 1em 0 0 50%;
}
.recipe {
  width: 100%;
}
.re_top {
  width: 100%;
  height: 50px;
  border-bottom: 1px solid grey;
}
.top_left {
  font-size: 2em;
  color: #ff8244;
  cursor: pointer;
}
/* 内容 */
.re_content {
  width: 100%;
  margin-top: 1em;
}
.re_items {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.re_item {
  width: 240px;
  margin-top: 1em;
}
.re_img {
  width: 240px;
  height: 240px;
  overflow: hidden;
  border-radius: 5px;
  cursor: pointer;
}
.re_img > img {
  display: block;
  width: 240px;
  height: 240px;
}
.re_img > img:hover {
  transform: scale(1.1);
  transition-property: transform;
  transition-duration: 1s;
}
.re_autor {
  width: 100%;
  text-align: center;
}
.re_name {
  font-size: 1.4em;
  margin-top: .5em;
  cursor: pointer;
}
.re_name:hover {
  color: red;
}
.re_user {
  font-size: .8em;
  color: #999999;
  margin-top: .5em;
}
</style>
