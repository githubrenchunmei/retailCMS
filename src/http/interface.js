import axios from './api'

/* 将所有接口统一起来便于维护
 * 如果项目很大可以将 url 独立成文件，接口分成不同的模块
 */

// data为json即可，在拦截器中会根据type的不同，进行格式转换
const login = (data) => {
  return axios({
    url: '/merchant/login',
    method: 'post',
    type: 'form-data',
    data
  })
}
const getOrderAllCount = (data) => {
  return axios({
    url: '/merchant_order/getOrderAllCount',
    method: 'post',
    type: 'json-data',
    data
  })
}
const merchantIndex = (data) => {
  return axios({
    url: '/merchant/merchant_index',
    method: 'post',
    type: 'json-data',
    data
  })
}
const changePassword = (data) => {
  return axios({
    url: '/merchant/change_password',
    method: 'post',
    type: 'form-data',
    data
  })
}
const uploadFile = (data) => {
  return axios({
    url: '/merchant/upload_file',
    method: 'post',
    type: 'file',
    data
  })
}
const getMerchantLoginInfoList = (data) => {
  return axios({
    url: '/merchant/get_merchant_login_info_list',
    method: 'post',
    type: 'form-data',
    data
  })
}
const queryGoodsTypeTree = (data) => {
  return axios({
    url: '/merchantGoodsType/query_goods_type_tree',
    method: 'post',
    type: 'form-data',
    data
  })
}
const queryBrandList = (data) => {
  return axios({
    url: '/merchant_goods_brand/query_list',
    method: 'post',
    type: 'form-data',
    data
  })
}
const merchantGoodsListPage = (data) => {
  return axios({
    url: '/merchantGoods/merchant_goods_list_page',
    method: 'post',
    type: 'json-data',
    data
  })
}
const merchantGoodsPull = (data) => {
  return axios({
    url: '/merchantGoods/merchant_goods_pull',
    method: 'post',
    type: 'json-data',
    data
  })
}
const merchantGoodsPut = (data) => {
  return axios({
    url: '/merchantGoods/merchant_goods_put',
    method: 'post',
    type: 'json-data',
    data
  })
}
const deleteBatch = (data) => {
  return axios({
    url: '/merchantGoods/delete_batch',
    method: 'post',
    type: 'json-data',
    data
  })
}
// 默认全部导出
export default {
  changePassword,
  deleteBatch,
  getMerchantLoginInfoList,
  getOrderAllCount,
  login,
  merchantIndex,
  merchantGoodsPull,
  merchantGoodsPut,
  merchantGoodsListPage,
  queryBrandList,
  queryGoodsTypeTree,
  uploadFile
}
