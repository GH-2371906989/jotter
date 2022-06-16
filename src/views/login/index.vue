<template>
	<div class="loginbody">
		<div class="login">
			<div class="mylogin" align="center">
				<h4>登录</h4>
				<el-form :model="loginForm" :rules="loginRules" ref="loginForm" label-width="0px">
					<el-form-item label="" prop="user" style="margin-top:10px;">
						<el-row>
							<el-col :span='2'>
								<span class="el-icon-s-custom"></span>
							</el-col>
							<el-col :span='22'>
								<el-input class="inps" placeholder='账号' v-model="loginForm.user">
								</el-input>
							</el-col>
						</el-row>
					</el-form-item>
					<el-form-item label="" prop="password">
						<el-row>
							<el-col :span='2'>
								<span class="el-icon-lock"></span>
							</el-col>
							<el-col :span='22'>
								<el-input class="inps" type="password" placeholder='密码' v-model="loginForm.password">
								</el-input>
							</el-col>
						</el-row>
					</el-form-item>
					<el-form-item style="margin-top:55px;">
						<el-button type="primary" round class="submitBtn" @click="submitForm">登录
						</el-button>
					</el-form-item>
					<div class="unlogin">
						<router-link :to="{ path: '/forgetpwd'}">
							忘记密码?
						</router-link>
						|
						<router-link :to="{path: '/register'}">
							<a href="register.vue" target="_blank" align="right">注册新账号</a>
						</router-link>
					</div>
				</el-form>
			</div>
		</div>
	</div>
</template>

<script>
	import {
		mapMutations
	} from "vuex";
	import {setToken} from '@/utils/auth'
	export default {
		name: "Login",
		data: function() {
			return {
				loginForm: {
					user: '',
					password: ''
				},
				loginRules: {
					user: [{
						required: true,
						message: "请输入账号",
						trigger: "blur"
					}],
					password: [{
						required: true,
						message: "请输入密码",
						trigger: "blur"
					}]
				}
			}
		},

		methods: {
			...mapMutations(['changeLogin']),
			submitForm() {
				this.$refs.loginForm.validate(valid => {
					if (valid) {
						let self = this;
						
						this.jApi.login(JSON.stringify(this.loginForm))
						.then((res) => {
							console.log(res)
							if(res.data.code == 200){
								setToken(res.data.data.Token)
								this.$router.push('/') 
								this.$message.success(res.data.message)
							}
						})
					}else{
						return false
					}
				})

			},
		}
	}
</script>

<style>
	.loginbody {
		overflow: scroll;
		overflow-y: hidden;
		overflow-x: hidden;
	}

	.login {
		width: 100vw;
		padding: 0;
		margin: 0;
		height: 100vh;
		font-size: 16px;
		background-position: left top;
		background-color: #242645;
		color: #fff;
		font-family: "Source Sans Pro";
		position: relative;
		background-image: url('http://152.136.163.72:8080/img/login.jpeg');
		background-repeat: no-repeat;
		background-size: 100% 100%;
	}

	.mylogin {
		width: 240px;
		height: 280px;
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		margin: auto;
		padding: 50px 40px 40px 40px;
		box-shadow: -15px 15px 15px rgba(6, 17, 47, 0.7);
		opacity: 1;
		background: linear-gradient(230deg,
				rgba(53, 57, 74, 0) 0%,
				rgb(0, 0, 0) 100%);
	}

	.inps input {
		border: none;
		color: #fff;
		background-color: transparent;
		font-size: 12px;
	}

	.submitBtn {
		background-color: transparent;
		color: #39f;
		width: 200px;
	}
</style>
