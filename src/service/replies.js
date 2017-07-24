/**
 * @file Describe the file
 * @author HUI
 * @date 2017/7/21
 */
import {fetchReplies} from '../resource';

export default {

  /**
   * 获取会员信息
   * @param callback
   */
  fetch_replies: callback => {
    fetchReplies.get().then(
      data => callback(null, data.body),
      err => callback(err)
    ).catch(err => callback("网络异常"))
  },

}
