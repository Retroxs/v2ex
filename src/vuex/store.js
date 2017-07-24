/**
 * @file Describe the file
 * @author HUI
 * @date 2017/7/20
 */
import Vue from 'vue';
import Vuex from 'vuex';
import index from './modules';
import topic from './modules/topic';

Vue.use(Vuex);

export default new Vuex.Store({
  modules:{
    index,
    topic
  }
})
