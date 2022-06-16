<template>
	<el-container style="height: 100vh; border: 1px solid #eee">
		<el-aside width="200px" style="background-color: rgb(238, 241, 246)">
			<el-menu :default-active="this.$router.path" class="el-menu-vertical-demo" background-color="#545c64"
				text-color="#fff" active-text-color="#ffd04b" unique-opened router>
				<el-submenu :index="num+''" v-for="(menu,num) in menuList">
					<template slot="title">
						<i :class="menu.icon"></i>
						<span>{{menu.title}}</span>
					</template>
					<el-menu-item :index="item.path" v-for="item in menu.children">
						<template slot="title">
							<i :class="item.icon"></i>
							<span>{{item.title}}</span>
						</template>
					</el-menu-item>
				</el-submenu>
			</el-menu>
		</el-aside>
		<el-main>
			<router-view :key="key" />
		</el-main>
	</el-container>
</template>

<script>
	import ResizeMixin from './mixin/ResizeHandler'
	export default {
		name: 'Layout',
		data() {
			return {
				menuList: [{
						name: 'SysManga', //对应index
						title: '系统管理',
						icon: 'el-icon-s-operation',
						path: '', //router-link跳转路由
						children: [{
								name: 'SysUser',
								title: '用户管理',
								icon: 'el-icon-s-custom',
								path: '/sys/user',
								children: []
							},
							{
								name: 'SysRole',
								title: '角色管理',
								icon: 'el-icon-s-custom',
								path: '/sys/role',
								children: []
							},
							{
								name: 'SysMenu',
								title: '菜单管理',
								icon: 'el-icon-s-custom',
								path: '/sys/menu',
								children: []
							}

						]
					},
					{
						name: 'SysTools',
						title: '系统工具',
						icon: 'el-icon-s-tools',
						path: '',
						children: [{
							name: 'SysDictm',
							title: '笔记本',
							icon: 'el-icon-s-order',
							path: '/jotter',
							children: []
						}]
					},
				]
			}
		},
		components: {

		},
		mixins: [ResizeMixin],
		computed: {
			key() {
				return this.$route.path
			}
		},
		methods: {}
	}
</script>

<style scoped>
</style>
