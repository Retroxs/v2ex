<template>
  <div class="box">
    <div class="cell">
      <table cellpadding="0" cellspacing="0" border="0" width="100%">
        <tbody><tr>
          <td width="73" valign="top" align="center">
            <img :src="member.avatar_large" class="avatar" border="0" align="default"><div class="sep10"></div></td>
          <td width="10"></td>
          <td width="auto" valign="top" align="left">
            <div class="fr">
            </div>
            <h1 style="margin-bottom: 5px;">{{member.username}}</h1>
            <span class="bigger"></span>
            <div class="sep10"></div>
            <span class="gray">V2EX 第 {{member.id}} 号会员</span>

          </td>
        </tr>
        </tbody></table>
      <div class="sep5"></div>
    </div>
  </div>
</template>

<script>
  import {mapActions,mapGetters,mapMutations} from 'vuex'
  export default {
    data(){
      return {
        msg:"会员"
      }
    },
    computed:{
      ...mapGetters({
        member:'member'
      })
    },
    methods:{
      ...mapActions({
        fetchMemberInfo:'fetchMemberInfo'
      })
    },
    created(){
      this.fetchMemberInfo(this.$route.params.name)
    }
  }
</script>
