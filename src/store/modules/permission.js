import router, {routes} from '@/router'
import {
	getMenus,
	setInit
} from '@/utils/auth'

const state = {
	routes: [],
	asyncRoutes: []
}

const mutations = {
	SET_ROUTES: (state, asyncRoutes) => {
		if (asyncRoutes) {
			state.routes = routes.concat(asyncRoutes)
		} else {
			state.routes = routes
		}
	}
}

const actions = {
	generateRoutes({commit}) {
		return new Promise(resolve => {
			const menus = [{
				path: '/admin',
				name: 'Admin',
				component: () => import('views/Home'),
				children: [{
					path: '/sys-authority/list',
					name: 'Authority',
					component: () => import('views/Jotter')
				}]
			}];
			commit('SET_ROUTES', menus)
			// const userRouter = filterAsyncRoutes(menus)
			// console.log(userRouter)
			router.addRoutes(menus)
			setInit("true")
			resolve()
		})
	}
}

export default {
	namespaced: true,
	state,
	mutations,
	actions
}
