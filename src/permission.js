import router from '@/router'
import {Message} from 'element-ui'

import store from './store'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import watermark from '@/utils/watermark'
import {getInit, getToken} from '@/utils/auth'

const whiteList = ['/login', '/auth-redirect','/weComLogin'] 

router.beforeEach( async (to, from, next) => {
	NProgress.start()
	const hasInit = getInit()
	const hasToken = getToken()
	if (hasToken) {
		if (to.path === '/') {
			Message.warning('无需重复登录，为您跳转至首页')
			next()
		} else {
			// 需要动态组装路由
			if (hasInit == null ||	hasInit == 'false') {
				await store.dispatch('permission/generateRoutes')
				next()
				
			}else{
				next()
			}
			
		}
	}else{
		watermark.remove()
		console.log(to.path)
		if (whiteList.indexOf(to.path) !== -1) {
		  next()
		} else {
		  Message.warning('请先登录')
		  next('/login')
		  NProgress.done()
		}
	}

})

router.afterEach(() => {
	watermark.set('store.getters.username' + "-" + 'store.getters.usercode');
	NProgress.done()
})
