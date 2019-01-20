import axios from './api'

/* 将所有接口统一起来便于维护
 * 如果项目很大可以将 url 独立成文件，接口分成不同的模块
 */

// 单独导出
// data为json即可，在拦截器中会根据type的不同，进行格式转换
export const login = (data) => {
  return axios({
    url: '/merchant/login',
    method: 'post',
    type: 'form-data',
    data
  })
}

// 默认全部导出
export default {
  login
}