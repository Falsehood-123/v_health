<template>
    <div class="foods">
        <div class="top">
          <div class="top_left">
            <span>食材</span>
          </div>
          <div class="top_right">
            <span>>>></span>
          </div>
        </div>
        <div class="content">
          <ul class="items">
            <li class="item" v-for="item in 12" :key="item">
              <div class="img">
                <img src="../../public/images/food.jpg" alt="error">
              </div>
              <div class="autor">
                <p class="name">菜名</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
</template>

<script>
export default {
    name: 'MyFoods',
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
  width: 150px;
  margin-bottom: 1em;
}
.item:hover {
  color: red;
}
.img {
    width: 150px;
    height: 150px;
    overflow: hidden;
    border-radius: 5px;
    cursor: pointer;
}
.img > img {
    display: block;
    width: 150px;
    height: 150px;
}
.autor {
    width: 100%;
    text-align: center;
}
</style>
