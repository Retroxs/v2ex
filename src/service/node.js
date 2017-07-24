/**
 * @file Describe the file
 * @author HUI
 * @date 2017/7/21
 */
import {fetchNodeAll,fetchNodeInfo} from '../resource';

export default {

  /**
   * 获取所有节点
   * @param callback
   */
  fetch_nodeAll: callback => {
    fetchNodeAll.get().then(
      data => callback(null, data.body),
      err => callback(err)
    ).catch(err => callback('网络异常'))
  },

  /**
   * 获取节点信息
   * @param callback
   */
  fetch_nodeInfo: callback => {
    fetchNodeInfo.get().then(
      data => callback(null,data.body),
      err => callback(err)
    ).catch(err => callback("网络异常"))
  }
}
