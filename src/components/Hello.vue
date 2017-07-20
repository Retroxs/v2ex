<template>
  <div class="hello">
    <img src="../assets/logo.png" style="width: 30%;">
    <h1>{{ msg }}</h1>
    <h2>Links</h2>
    <ul>
      <li><a href="http://ifuncc.com" target="_blank">主页</a></li>
      <li><a href="http://ifuncc.com" target="_blank">社区</a></li>
      <li><a href="http://ifuncc.com" target="_blank">聊天室</a></li>
      <li><a href="http://ifuncc.com" target="_blank">Github</a></li>
    </ul>
    <iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width=330 height=86 src="//music.163.com/outchain/player?type=2&id=458583093&auto=1&height=66"></iframe>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to my Blog',
      tip: '(正在建设...)'
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
