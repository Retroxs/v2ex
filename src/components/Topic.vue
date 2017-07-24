<template>
  <div>
    <div class="box" style="border-bottom: 0px;">
      <div class="header">
        <div class="fr">
          <router-link :to="{path:`/v2ex/m/${topic.member.username}`}">
          <img :src="topic.member.avatar_large" class="avatar" border="0" align="default">
          </router-link>
        </div>
        <router-link :to="{path:`/v2ex`}">V2EX</router-link>
        <span class="chevron">&nbsp;›&nbsp;</span>
        {{topic.node.title}}
        <div class="sep10"></div>
        <h1>{{topic.title}}</h1>
        <router-link :to="{path:`/v2ex/m/${topic.member.username}`}">
        <small class="gray">{{topic.member.username}}</small>
        </router-link>
      </div>
      <div class="cell">
        <div class="topic_content" v-html="topic.content_rendered">
        </div>
      </div>
    </div>
    <div class="sep20"></div>
    <div class="box">
      <div class="cell">
        <span class="gray">{{topic.replies}} 回复 &nbsp;
          <!--<strong class="snow">|</strong> &nbsp;直到 2017-07-24 10:44:20 +08:00-->
        </span>
      </div>
      <div  class="cell" v-for="replay in replies">
        <table cellpadding="0" cellspacing="0" border="0" width="100%">
          <tbody>
          <tr>
            <td width="48" valign="top" align="center">
              <router-link :to="{path:`/v2ex/m/${replay.member.username}`}">
              <img :src="replay.member.avatar_normal" class="avatar"

              border="0" align="default">
              </router-link>
            </td>
            <td width="10" valign="top"></td>
            <td width="auto" valign="top" align="left">
              <!--<div class="fr"> &nbsp; &nbsp; <span class="no">1</span></div>-->
              <div class="sep3"></div>
              <router-link :to="{path:`/v2ex/m/${replay.member.username}`}">
              <strong>
                {{replay.member.username}}
              </strong>
              </router-link>&nbsp; &nbsp;
              <div class="sep5"></div>
              <div class="reply_content" v-html="replay.content_rendered">
              </div>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
  import {mapGetters, mapActions, mapMutations} from 'vuex'

  export default {
    computed: {
      ...mapGetters({
        topic: 'topic',
        replies:'replies'
      })
    },
    methods: {
      ...mapActions({
        fetchTopicsInfoById: 'fetchTopicsInfoById',
        fetchReplies: 'fetchReplies'
      }),
      fetchData(){
        this.fetchTopicsInfoById(this.$route.params.id);
        this.fetchReplies(this.$route.params.id);
      }
    },
    created() {
      this.fetchData();
    },
    watch : {
      '$route':'fetchData'
    }

  }
</script>

<style>
  .header {
    padding: 10px;
    font-size: 14px;
    line-height: 120%;
    text-align: left;
    border-bottom: 1px solid #e2e2e2;
    overflow: auto;
  }

  .header .fr {
    float: right;
    text-align: right;
  }

  .header .chevron {
    font-weight: 500;
  }

  .topic_content {
    font-size: 14px;
    line-height: 1.6;
    color: #000;
    word-wrap: break-word;
  }

  .topic_content img, .reply_content img {
    max-width: 100% !important;
  }
</style>
