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

export const fetchHot = Vue.resource(`${API_ROOT}/topics/latest.json`);
