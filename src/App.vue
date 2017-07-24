<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
  import store from './vuex/store'
  export default {
    name: 'app',
    store
  }
</script>

<style>
  html {
    background-color: #e2e2e2;
  }
  body {
    margin: 0;
    padding: 0;
  }
  a{
    color: #000;
    text-decoration: none;
  }
  h1{
    font-size: 24px;
    font-weight: 500;
    line-height: 150%;
    margin: 0px 0px 10px 0px;
    padding: 0px;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
