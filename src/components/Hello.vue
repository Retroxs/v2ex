<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Links</h2>
    <ul>
      <li><a href="http://ifuncc.com" target="_blank">主页</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">社区</a></li>
      <li><a href="https://gitter.im/vuejs/vue" target="_blank">聊天室</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Github</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to my Blog'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
