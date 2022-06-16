import router, {
	routes
} from '@/router'
export default {
	namespaced: true,
	state: () => ({
		counter: 11
	}),
	mutations: {
		increment(state) {
			state.counter++
		}
	},
	actions: {

	},
	getters: {

	}
}
