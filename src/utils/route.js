import Layout from '@/layout/index'
import store from '../store'
import methods from '../utils/commonUtil'

export function filterAsyncRoutes(userRouter, isChildren) {
  for (let j = 0; j < userRouter.length; j++) {
    const item = userRouter[j]
    // 是 children 时去掉 path 开头的 /
    if (true === isChildren && item.path.startsWith('/')) {
      item.path = item.path.slice(1)
    }
    // 处理 alwaysShow
    item.alwaysShow = item.alwaysShow === true && !!item.children && item.children.length > 0
    // 处理图标没有配置使用默认
    if (!item.meta.icon) {
      item.meta.icon = 'tab'
    }
    if (item.noCache === false) {
      item.meta.noCache = false
    }
    if (!!item.children && item.children.length > 0) {
      filterAsyncRoutes(item.children, true)
    }
    // 处理component
    if (item.component === 'Layout') {
      item.component = resolve => require([`@/layout/index`], resolve)
    } else {
      const tenantCode = store.getters.tenantCode
      const path = item.component+'/'+tenantCode+'/index';
      let realPath =  methods.methods.isInAllVue(path)
      item.component = resolve => require([`@/views/${realPath}`], resolve)
    }
  }
  return userRouter

}

export default {}
