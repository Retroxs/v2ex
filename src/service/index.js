/**
 * @file Describe the file
 * @author HUI
 * @date 2017/7/20
 */

import {fetchHot} from '../resource';

export default {

  fetch_hot: callback => {
    fetchHot.get().then(
      data => callback(null,data.body),
      err => callback(err)
    ).catch(err => callback('网络异常'))
  }

}
