/**
 * @file Describe the file
 * @author HUI
 * @date 2017/7/24
 */
import {FETCHTOPICSINFOSUCCESS,FETCHREPLIESSUCCESS} from "../mutation-types";
import topics from '../../service/topics'
import replies from '../../service/replies'

const state = {
  topic: [],
  replies:[]
};

const getters = {
  topic: state => state.topic,
  replies: state => state.replies
};

const actions = {

  fetchTopicsInfoById({commit, state},id) {
    topics.fetch_topicsInfoById(id,(err, data) => {
      if (!err) {
        commit(FETCHTOPICSINFOSUCCESS, data)
      }
    })
  },

  fetchReplies({commit, state},id){
    replies.fetch_replies(id,(err, data) => {
      if (!err) {
        commit(FETCHREPLIESSUCCESS, data)
      }
    })
  }
};

const mutations = {
  [FETCHTOPICSINFOSUCCESS](state, data) {
    state.topic = data
  },
  [FETCHREPLIESSUCCESS](state, data) {
    state.replies = data
  }
};

export default {
  state,
  getters,
  actions,
  mutations
}
