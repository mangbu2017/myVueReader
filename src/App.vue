<template>
  <div id="app">
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
// import vueRouter from 'vue-router';
// console.log(vueRouter);
import ajax from './js/api';

export default {
  name: 'App',
  beforeCreate(){
    // 之前无法打印获取到的数据 是因为函数使用错误
    // ajax.getReviews('51060c88bb1c67cf28000035', 'update', 0, 20).then((res) => {
    //   console.log(res)
    // })
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center; */
  color: #000;
  font-size: 0.8rem;
}

html {
    font-size: 20px;
}

body, ul, li {
    padding: 0;
    margin: 0;
}

li {
    list-style: none;
}

a {
    text-decoration: none;
    color: #000;
}

/* 这里我们是为了覆盖或者修改mint-ui的样式 */
.mint-cell-wrapper {
  font-size: 13px;
  background-size: 0px;
}
.mint-cell {
  min-height: 30px;
}
.mint-header-title {
  font-weight: 900;
  font-size: .8rem;
}
.mint-header-button.is-right {
    display: flex;
    align-items: center;
}
.mint-cell {
  overflow: visible;
}
.mint-tab-item-label {
  font-size: .8rem;
}

.mint-navbar {
  background-color: #F1F1F1;
}

.mint-tab-item {
  margin: 0 45px;
}

.mint-cell:last-child {
  background-position-x: 10px;
  background-position-y: bottom;
}

/* .mint-header.is-fixed {
    top: 0;
    right: none;
    left: none;
    position: fixed;
    z-index: 1;
    width: 100vh;
} */

</style>
