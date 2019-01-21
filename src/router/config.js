// index页下主导航及相应子导航配置
const nav = [
  {
    name: 'system',
    desc: '首页',
    children: [
      {
        name: 'systemIndex',
        desc: '系统首页',
        path: '/system/index',
        component: resolve => { require(['@/views/system/index'], resolve) }
      },
      {
        name: 'accountSettings',
        desc: '账户设置',
        path: '/system/account',
        component: resolve => { require(['@/views/system/account'], resolve) }
      }
    ]
  },
  {
    name: 'goods',
    desc: '商品',
    children: [
      {
        name: 'systemIndex',
        desc: '商品列表',
        path: '/goods/list'
      },
      {
        name: 'addGoods',
        desc: '添加商品',
        path: '/goods/add'
      }
    ]
  }
]
function getPathConfig (nav) {
  let tempAry = []
  for (let item of nav) {
    tempAry.push(...item.children)
  }
  return tempAry
}
const pathConfig = getPathConfig(nav)

export {
  nav,
  pathConfig
}
