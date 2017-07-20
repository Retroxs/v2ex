/**
 * @file index module
 * @author HUI
 * @date 2017/7/20
 */

import {
  ADD_ITEM,
  DELETE_ITEM
} from "../mutation-types";
import hot from '../../service/index'

const state = {
  article:{
    name: "the new article",
    Date: "2017-01-01",
    number: 0,
    item:[]
  }
};

const getters = {
  _index_article: state => state.article
};

const actions = {
  _index_addItem({commit,state}){
    hot.fetch_hot((err,data) =>{
      if(!err){
        commit(ADD_ITEM,data)
      }
    })
  },
  _index_deleteItem({commit,state}){
    commit(DELETE_ITEM)
  }
};

const mutations = {
  [ADD_ITEM](state,data){
    state.article.item = data;
  },
  [DELETE_ITEM](state){
    state.article.number --;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
}


