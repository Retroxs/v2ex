/**
 * @file Describe the file
 * @author HUI
 * @date 2017/7/21
 */
import {fetchMemberInfo} from '../resource';

export default {

  /**
   * 获取会员信息
   * @param callback
   */
  fetch_memberInfo: (name,callback)=> {
    fetchMemberInfo.get({username:name}).then(
      data => callback(null, data.body),
      err => callback(err)
    ).catch(err => callback("网络异常"))
  },

}
