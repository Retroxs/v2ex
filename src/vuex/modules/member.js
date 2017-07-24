/**
 * @file Describe the file
 * @author HUI
 * @date 2017/7/24
 */
import {FETCHMEMBERINFOSUCCESS} from "../mutation-types";
import member from '../../service/members'

const state = {
  member:{}
};

const getters = {
  member: state => state.member,
};

const actions = {

  fetchMemberInfo({commit, state},name) {
    member.fetch_memberInfo(name,(err, data) => {
      if (!err) {
        commit(FETCHMEMBERINFOSUCCESS, data)
      }
    })
  },
};

const mutations = {
  [FETCHMEMBERINFOSUCCESS](state, data) {
    state.member = data
  }
};

export default {
  state,
  getters,
  actions,
  mutations
}
