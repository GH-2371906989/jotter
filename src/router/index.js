import Vue from 'vue'
import VueRouter from 'vue-router'
import {
	setInit
} from '@/utils/auth'
Vue.use(VueRouter)

import Layout from '@/layout'
//component: () => import('../views/About.vue')
export const routes = [{
		path: '/',
		component: Layout,
		redirect: '/home',
		children: [{
			path: '/home',
			name: 'menu',
			component: () => import('views/Home')
		}]
	},{
		path: '/jotter',
		component: Layout,
		redirect: '/jotter',
		children: [{
			path: '/jotter',
			name: 'menu',
			component: () => import('views/Jotter')
		}]
	},
	{
		path: '/login',
		name: 'login',
		component: () => import('views/login')
	}
]
setInit("false")
const createRouter = () => new VueRouter({
	mode: 'history',
	base: process.env.VUE_APP_BASE_URL,
	routes
})

const router = createRouter()

export function resetRouter() {
	const newRouter = new Router({
		mode: 'history',
		base: process.env.BASE_URL,
		scrollBehavior: () => ({
			y: 0
		}),
		routes
	})
	router.matcher = newRouter.matcher // reset router
}

export default router
