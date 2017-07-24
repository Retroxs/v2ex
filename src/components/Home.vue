<template>
  <div class="box">
    <div class="inner"
         style="background-color: #fff; border-top-left-radius: 3px; border-top-right-radius: 3px;" id="Tabs">
      <a class="tab">技术</a>
      <a class="tab_current">创意</a>
      <a class="tab">好玩</a>
      <a class="tab">Apple</a>
      <a class="tab">酷工作</a>
      <a class="tab">交易</a>
      <a class="tab">城市</a>
      <a class="tab">问与答</a>
      <a class="tab">最热</a>
      <a class="tab">全部</a>
      <a class="tab">R2</a>
    </div>
    <div class="cell" style="background-color: #f9f9f9; padding: 10px 10px 10px 20px;font-size: 12px;">
      <!--<div class="fr">-->
      <!--<a href="/new/create" style="float: right;">发布我的新作品</a>-->
      <!--</div>-->
      <a>分享创造</a> &nbsp; &nbsp;
      <a>设计</a> &nbsp; &nbsp;
      <a>奇思妙想</a>
    </div>
    <div class="cell item" v-for="topics in topics">
      <table cellpadding="0" cellspacing="0" border="0" width="100%">
        <tbody>
        <tr>
          <td width="48" valign="top" align="center">
            <img :src="topics.member.avatar_normal" class="avatar" border="0" align="default">
          </td>
          <td width="10"></td>

          <td width="auto" valign="middle">
            <span class="item_title">
              <router-link :to="{path:`/v2ex/t/${topics.id}`}">{{topics.title}}</router-link></span>
            <div class="sep5"></div>
            <span class="small fade">
              <el-tag type="gray">{{topics.node.title}}</el-tag> &nbsp;•&nbsp;
                      <strong>{{topics.member.username}}</strong>
                    </span>
          </td>

          <td width="70" align="right" valign="middle">
            <span class="tag">{{topics.replies}}</span>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
  import {mapGetters, mapActions, mapMutations} from 'vuex'

  export default {
    data() {
      return {
        radio: "技术"
      }
    },
    computed: {
      ...mapGetters({
        topics: 'topics',
      })
    },
    methods: {
      ...mapActions({
        fetchTopicsInfoByNode: 'fetchTopicsInfoByNode',
      })
    },
    created() {
      this.fetchTopicsInfoByNode("apple");
      this.fetchTopicsInfoByNode("programmer");
      this.fetchTopicsInfoByNode("python");
    }
  }
</script>

<style>
  .Top {
    text-align: center;
    background-color: #fff;
    height: 44px;
    font-size: 15px;
    font-weight: 500;
    background-size: 44px 44px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.22);
    padding: 0px 20px 0px 20px;
  }

  #Top .content {
    min-width: 600px;
    max-width: 1100px;
    margin: 0 auto;
  }

  #Wrapper {
    text-align: center;
    background-color: #e2e2e2;
  }

  #Wrapper .content {
    min-width: 600px;
    max-width: 1100px;
    margin: 0 auto;
  }

  #Main {
    width: auto;
    margin: 0px 310px 0px 20px;
  }

  #Main .inner {
    padding: 10px;
    font-size: 12px;
    line-height: 150%;
    text-align: left;
  }

  #Main .inner a {
    display: inline-block;
    font-size: 13px;
    line-height: 13px;
    padding: 5px 8px 5px 8px;
    margin-right: 5px;
    border-radius: 3px;
    color: #555;
  }

  #Wrapper .content #Main .box {
    background-color: #fff;
    border-radius: 3px;
    box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.1);
    border-bottom: 1px solid #e2e2e2;
  }

  #Leftbar {
    width: 0px;
    float: left;
  }

  #Rightbar {
    width: 270px;
    float: right;
    margin-right: 20px;
    font-size: 12px;
  }

  .sep20 {
    height: 20px;
  }

  .sep5 {
    height: 5px;
  }

  .cell {
    padding: 10px;
    line-height: 120%;
    text-align: left;
    border-bottom: 1px solid #e2e2e2;
  }

  #Rightbar .cell {
    background-color: #fff;
  }

  .item {
    background-position: 0 bottom;
    background-repeat: repeat-x;
  }

  .tag {
    line-height: 12px;
    font-weight: bold;
    color: white;
    background-color: #aab0c6;
    display: inline-block;
    padding: 2px 10px 2px 10px;
    -moz-border-radius: 12px;
    -webkit-border-radius: 12px;
    border-radius: 12px;
    text-decoration: none;
    margin-right: 5px;
  }
</style>
