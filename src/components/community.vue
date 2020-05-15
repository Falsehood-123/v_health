<template>
    <div class="foods">
        <div class="top">
          <div class="top_left">
            <span>社区</span>
          </div>
          <div class="top_right">
            <span>>>></span>
          </div>
        </div>
        <div class="content">
          <ul class="items">
            <li class="item" v-for="i in 10" :key="i">
              <div class="autor">
                  <!-- 用户头像，点击直接跳转到该用户主页 -->
                  <div class="avatar">
                      <img src="../../public/images/avatar.jpg" alt="error">
                  </div>
                  <div class="detail">
                      <div class="base">
                            <p class="name">用户名</p>
                            <span class="time">2小时前</span>
                      </div>
                  </div>
              </div>
              <!-- 动态内容，点击跳转到该动态详情 -->
              <div class="dynomic">
                  <div class="title">
                      <p>这是一段动态的标题</p>
                  </div>
                  <div class="describe">
                    <p>这是一段动态描述</p>
                  </div>
                  <div class="dy_content">
                      <ul class="dy_items">
                          <li class="dy_item" v-for="item in 4" :key="item">
                              <img src="../../public/images/photo.jpg" alt="error">
                          </li>
                      </ul>
                      <div class="dy_tip">
                          <span>0</span>
                          <span>个喜欢，</span>
                          <span>0</span>
                          <span>个收藏</span>
                      </div>
                  </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
</template>

<script>
export default {
    name: 'MyCommunity',
    data () {
        return {

        }
    }
}
</script>

<style scoped>
.foods {
  width: 100%;
}
.top {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid grey;
}
.top_left {
  font-size: 2em;
  color: #ff8244;
  cursor: pointer;
}
.top_right {
  font-size: .8em;
  color: gray;
  cursor: pointer;
}
/* 内容 */
.content {
  width: 100%;
  margin-top: 1em;
}
.items {
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.item {
    width: 460px;
    margin-bottom: 1em;
}
.autor {
  width: 460px;
  height: 50px;
}
.avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
  display: inline-block;
  cursor: pointer;
}
.avatar > img {
    display: block;
    width: 50px;
    height: 50px;
}
.detail {
    width: 400px;
    height: 50px;
    margin-left: .5em;
    float: right;
    position: relative;
}
.base {
    width: 100%;
    height: 40px;
    margin: 5px 0;
}
.name {
    width: 200px;
    overflow: hidden;
}
.time {
    font-size: .8em;
    color: gray;
}
.dynomic {
    width: 460px;
    margin-top: 1em;
    color: grey;
    cursor: pointer;
}
.title {
  font-weight: bold;
}
.dy_content {
    width: 100%;
}
.dy_items {
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}
.dy_item {
    width: 100px;
    height: 100px;
    margin: 1em 0;
}
.dy_item > img {
    display: block;
    width: 100px;
    height: 100px;
}
.dy_tip {
    font-size: 12px;
}
</style>
