/**
 * @file Describe the file
 * @author HUI
 * @date 2017/7/21
 */

import {fetchTopicsLatest,fetchTopicsHot,fetchTopicsInfo} from '../resource';

export default {
  /**
   * 获取最新主题
   * @param callback
   */
  fetch_topicsLatest: callback => {
    fetchTopicsLatest.get().then(
      data => callback(null, data.body),
      err => callback(err)
    ).catch(err => callback("网络异常"))
  },

  /**
   *  获取热议主题
   * @param callback
   */
  fetch_topicsHot: callback => {
    fetchTopicsHot.get().then(
      data => callback(null,data.body),
      err => callback(err)
    ).catch(err => callback("网络异常"))
  },

  /**
   * 获取主题信息 BY node_name
   * @param callback
   */
  fetch_topicsInfoByNode: (name,callback) => {
    fetchTopicsInfo.get({node_name:name}).then(
      data => callback(null,data.body),
      err => callback(err)
    ).catch(err => callback("网络异常"))
  },

  /**
   * 获取主题信息 BY id
   * @param callback
   */
  fetch_topicsInfoById: (id,callback) => {
    fetchTopicsInfo.get({id:id}).then(
      data => callback(null,(data.body)[0]),
      err => callback(err)
    ).catch(err => callback("网络异常"))
  }


}
