/**
 * @file index module
 * @author HUI
 * @date 2017/7/20
 */

import {
   FETCHTOPICSHOTSUCCESS, FETCHTOPICSINFOSUCCESS,FETCHTOPICSLATESTSUCCESS,FETCHSITESTATESUCCESS
} from "../mutation-types";
import topics from '../../service/topics'
import site from '../../service/site'

const state = {
  topics: [],
  hot: [],
  latest:[],
  state:{}
};

const getters = {
  topics: state => state.topics,
  hot: state => state.hot,
  latest: state => state.latest,
  state: state => state.state
};

const actions = {
  fetchSiteState({commit,state}){
    site.fetch_siteState((err, data) => {
      if (!err) {
        commit(FETCHSITESTATESUCCESS, data)
      }
    })
  },

  fetchTopicsInfo({commit, state},node_name) {
    topics.fetch_topicsInfo(node_name,(err, data) => {
      if (!err) {
        commit(FETCHTOPICSINFOSUCCESS, data)
      }
    })
  },
  fetchTopicsHot({commit, state}) {
    topics.fetch_topicsHot((err, data) => {
      if (!err) {
        commit(FETCHTOPICSHOTSUCCESS, data)
      }
    })
  },
  fetchTopicsLatest({commit, state}) {
    topics.fetch_topicsLatest((err, data) => {
      if (!err) {
        commit(FETCHTOPICSLATESTSUCCESS, data)
      }
    })
  }
};

const mutations = {
  [FETCHTOPICSINFOSUCCESS](state, data) {
    state.topics = (state.topics).concat(data)
  },
  [FETCHTOPICSHOTSUCCESS](state, data) {
      state.hot = data.slice(0,6)
  },
  [FETCHSITESTATESUCCESS](state,data){
    state.state = data
  },
  [FETCHTOPICSLATESTSUCCESS](state,data){
      state.latest = data.slice(0,6)
  }
};

export default {
  state,
  getters,
  actions,
  mutations
}


