/**
 * @file Describe the file
 * @author HUI
 * @date 2017/7/20
 */

import Vue from 'vue';
import VueResource from 'vue-resource';
import config from '../config';

const API_ROOT = config.apiHost;
Vue.use(VueResource);

//site
export const fetchSiteState = Vue.resource(`${API_ROOT}/site/stats.json`);//取网站状态
export const fetchSiteInfo = Vue.resource(`${API_ROOT}/site/info.json`); //取网站信息

//Node
export const fetchNodeInfo = Vue.resource(`${API_ROOT}/nodes/show.json`); //取节点信息
export const fetchNodeAll = Vue.resource(`${API_ROOT}/nodes/all.json`); //取所有节点

//Topic
export const fetchTopicsLatest = Vue.resource(`${API_ROOT}/topics/latest.json`); //取最新主题
export const fetchTopicsHot = Vue.resource(`${API_ROOT}/topics/hot.json`); //取最热主题
export const fetchTopicsInfo = Vue.resource(`${API_ROOT}/topics/show.json`); //取主题信息

//Replies
export const fetchReplies = Vue.resource(`${API_ROOT}/replies/show.json`); //取主题回复

//Members
export const fetchMemberInfo = Vue.resource(`${API_ROOT}/members/show.json`); //取用户信息
