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
  body {
    margin: 0;
    padding: 0;
  }
  a{
    color: #000;
    text-decoration: none;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
