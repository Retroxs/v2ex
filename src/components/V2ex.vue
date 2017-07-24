<template>
  <div class="v2">
    <div id="Top">
      <div class="content">
        <div style="padding-top: 6px;">
          <table cellpadding="0" cellspacing="0" border="0" width="100%">
            <tbody>
            <tr>
              <td width="110" align="left">
                  <router-link :to="{path:`/v2ex`}">
                  <img src="//v2ex.assets.uxengine.net/site/logo@2x.png?m=1346064962"
                       border="0" align="default" alt="V2EX"
                       width="94" height="30">
                  </router-link>
              </td>
              <td width="110" align="left">
                阅读版
              </td>
              <td width="auto" align="left">
                <!--<div id="Search">-->
                <!--<form action="https://www.google.com" onsubmit="return dispatch()" target="_blank">-->
                <!--<input type="text" maxlength="40" name="q" id="q" value="">-->
                <!--</form>-->
                <!--</div>-->
              </td>
              <td width="570" align="right" style="padding-top: 2px;">
                <!--<a>首页</a>&nbsp;&nbsp;&nbsp;-->
                <!--<a>注册</a>&nbsp;&nbsp;&nbsp;-->
                <!--<a>登录</a>-->
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div id="Wrapper">
      <div class="content">
        <div id="Leftbar"></div>
        <div id="Rightbar">
          <div class="sep20"></div>
          <div class="box">
            <div class="cell">
              <strong>V2EX = way to explore</strong>
              <div class="sep5"></div>
              <span style="color: #ccc">V2EX 是一个关于分享和探索的地方</span>
            </div>
          </div>
          <div class="sep20"></div>
          <div class="box">
            <div class="cell">
              今日热议主题
            </div>
            <div v-for="hot in hots">
              <div class="cell">
                <table cellpadding="0" cellspacing="0" border="0" width="100%">
                  <tbody>
                  <tr>
                    <td width="24" valign="middle" align="center">
                      <img :src="hot.member.avatar_mini" class="avatar" border="0"
                           align="default" style="max-width: 24px; max-height: 24px;">
                    </td>
                    <td width="10"></td>
                    <td width="auto" valign="middle">
                <span class="item_hot_topic_title">
                  <router-link :to="{path:`/v2ex/t/${hot.id}`}">
               {{hot.title}}
                  </router-link>
                </span>
                    </td>
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div class="sep20"></div>
          <div class="box">
            <div class="cell">
              今日最新主题
            </div>
            <div v-for="latest in latests">
              <div class="cell">
                <table cellpadding="0" cellspacing="0" border="0" width="100%">
                  <tbody>
                  <tr>
                    <td width="24" valign="middle" align="center">
                      <img :src="latest.member.avatar_normal" class="avatar" border="0"
                           align="default" style="max-width: 24px; max-height: 24px;">
                    </td>
                    <td width="10"></td>
                    <td width="auto" valign="middle">
                <span class="item_hot_topic_title">
                  <router-link :to="{path:`/v2ex/t/${latest.id}`}">
               {{latest.title}}
                  </router-link>
                </span>
                    </td>
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div class="sep20"></div>
          <div class="box">
            <div class="cell">音乐盒</div>
            <div class="cell" style="padding: 0">
              <!--<iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width=270 height=52-->
              <!--src="//music.163.com/outchain/player?type=3&id=908139563&auto=1&height=32">-->
              <!--</iframe>-->
            </div>

          </div>
          <div class="sep20"></div>
          <div class="box">
            <div class="cell">社区运行状态</div>
            <div class="cell">
              <table cellpadding="5" cellspacing="0" border="0" width="100%">
                <tbody>
                <tr>
                  <td width="50" align="right"><span class="gray">注册会员</span></td>
                  <td width="auto" align="left"><strong>{{state.member_max}}</strong></td>
                </tr>
                <tr>
                  <td width="50" align="right"><span class="gray">主题</span></td>
                  <td width="auto" align="left"><strong>{{state.topic_max}}</strong></td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div id="Main">
          <div class="sep20"></div>
          <router-view></router-view>
          <div class="sep20"></div>
          <div class="box">
            节点列表
          </div>
        </div>
      </div>
      <div class="sep20"></div>
    </div>
    <div id="Button">
      根据V2ex提供的接口进行数据更新 @2017-2017
    </div>
  </div>
</template>
<script>
  import {mapGetters, mapActions, mapMutations} from 'vuex'

  export default {
    computed: {
      ...mapGetters({
        hots: 'hot',
        latests: 'latest',
        state: 'state'
      })
    },
    methods: {
      ...mapActions({
        fetchTopicsHot: 'fetchTopicsHot',
        fetchTopicsLatest: 'fetchTopicsLatest',
        fetchSiteState: 'fetchSiteState'
      })
    },
    created() {
      this.fetchTopicsHot();
      this.fetchTopicsLatest();
      this.fetchSiteState()
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
