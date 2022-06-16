const path = require('path')

module.exports = {
	publicPath: './',
	configureWebpack: {
		resolve: {
			alias: {
				assets: "@/assets",
				components: "@/components",
				views: "@/views",
				api: "@/api"
			}
		}
	},
	devServer: {
		port: 7777,
		open: true
	}
};
