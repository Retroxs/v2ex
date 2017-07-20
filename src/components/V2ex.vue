<template>
  <div class="v2">
    V2ex简版
    <!--{{ article.item }}-->
    <!--<button @click="add_item">增加</button>-->
    <!--<button @click="delete_item">删除</button>-->
    <ol style="text-align: left">
      <li class="article" v-for="item in article.item">
        <h3>{{item.title}} 「{{item.node.title}}」</h3>
        <div class="content">{{item.content}}</div>
      </li>
    </ol>
  </div>
</template>
<script>
  import {mapGetters, mapActions, mapMutations} from 'vuex'
  export default {
    data() {
      return {
        msg: "v2ex"
      }
    },
    computed: {
      ...mapGetters({article: '_index_article'})
    },
    methods: {
      ...mapActions({
        add_item: '_index_addItem',
        delete_item:'_index_deleteItem',
      })
    },
    created(){
      this.add_item()
    }
  }
</script>

<style>
  .v2 {
    width: 1000px;
    margin:0 auto;
  }
  .article {
    margin-bottom: 20px;
  }
  .content {
    background: #f2f2f2;
    height: 50px;
    overflow: hidden;
  }
</style>
