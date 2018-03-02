<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
// import vueRouter from 'vue-router';
// console.log(vueRouter);
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
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

/* 这里我们是为了覆盖mint-ui的样式 */
.mint-cell-wrapper {
  font-size: 13px;
}
.mint-cell {
  min-height: 30px;
}
</style>
