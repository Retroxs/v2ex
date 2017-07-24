/**
 * @file Describe the file
 * @author HUI
 * @date 2017/7/21
 */

import {fetchSiteInfo,fetchSiteState} from '../resource';

export default {

  /**
   * 获取网站信息
   * @param callback
   */
  fetch_siteInfo: callback => {
    fetchSiteInfo.get().then(
      data => callback(null, data.body),
      err => callback(err)
    ).catch(err => callback("网络异常"))
  },

  /**
   *  获取网站状态
   * @param callback
   */
  fetch_siteState: callback => {
    fetchSiteState.get().then(
      data => callback(null,data.body),
      err => callback(err)
    ).catch(err => callback("网络异常"))
  }

}
