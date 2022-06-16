<template>
	<div class="home">
			<el-carousel indicator-position="outside">
				<el-carousel-item v-for="item in img" :key="item">
				    <el-image   :src="item"></el-image>
				</el-carousel-item>
			</el-carousel>
			<el-table :data="jotterList" style="width: 100%">
				    <el-table-column  type="index">    </el-table-column>
				<el-table-column label="ID" prop="id"></el-table-column>
				<el-table-column label="笔记名" prop="name"></el-table-column>
				<el-table-column label="地址" prop="url"></el-table-column>
				<el-table-column label="操作">
					<template slot-scope="scope">
						<el-button size="mini" v-if="scope.row.url != ''">
							<el-link :href="scope.row.url">跳转</el-link>
						</el-button>
						<el-button size="mini" @click="downloadUrl(scope.row)" type="danger"
						v-if="scope.row.downloadURL != ''">
							下载pdf
						</el-button>
						<el-button size="mini" type="danger" @click="delectUrl(scope.row)">删除</el-button>
					</template>
				</el-table-column>
			</el-table>
		</el-card>
		<el-card class="box-card">
			<el-input
			  placeholder="可以不写"  v-model="fileData.filename" 
			  @input="fileData.savename = fileData.filename"
			  maxlength="10" clearable>
			  <template slot="prepend">文件保存的文件夹:</template>
			</el-input>
			<el-input
			  placeholder="必写"  v-model="fileData.savename" 
			  @input="fileData.filename = fileData.savename"
			  maxlength="10" clearable>
			  <template slot="prepend">数据库文件名:</template>
			</el-input>
			<el-upload class="upload-demo" 
				ref="upload" 
				:data="fileData"
				action="http://localhost:9999/drools/uploadService"
				:on-success="handleAvatarSuccess"
				:file-list="fileList" 
				:auto-upload="false">
				<el-button slot="trigger" size="small" type="primary">
					选取文件
				</el-button>
				<el-button style="margin-left: 10px;" size="small" type="success" 
				@click="submitUpload">
					上传到服务器
				</el-button>
				<div slot="tip" class="el-upload__tip">只能上传pdf/html文件</div>
			</el-upload>
		</el-card>
	</div>
</template>

<script>
	import { mapState,mapGetters } from 'vuex'
	export default {
		name: 'Jotter',
		data() {
			return {
				img:["http://152.136.163.72:8080/img/%E6%95%B0%E6%8D%AE%E5%BA%93%E6%A0%BC%E5%BC%8F.png",
					"http://152.136.163.72:8080/img/%E6%9C%8D%E5%8A%A1%E5%99%A8%E6%A0%BC%E5%BC%8F.png"],
				jotterList: [],
				fileList:[],
				fileData:{
					filename:"",
					savename:""
				}
			}
		},
		mounted() {
			this.jApi.getJotters()
				.then(data => {
					if(data.data.code == 200){
						this.jotterList = data.data.data.JotterList
					}
				})
		},
		methods: {
			downloadUrl(jotter) {
				window.location.href = jotter.downloadURL
			},
			delectUrl(jotter){
				this.jApi.delectJotters(jotter.id)
					.then(res=>{
						this.jotterList = res.data
					})
			},
			submitUpload() {
				this.$refs.upload.submit();
			},
			handleAvatarSuccess(res){
				this.jotterList = res ;
			}
		},
		computed:{
			...mapGetters(["getcounter","getname","getpassword"])
		}
	}
</script>
