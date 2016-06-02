/*
 *  配置参数
 */
exports.default = {
	//文件别名配置
	alias: {

	},
	//全局引入模块配置
	global: {
		'jquery': 'window.jQuery',
		'hiido_stat': 'window.hiido_stat',
		'hiido_init_type': 'window.hiido_init_type',
		'hiido_init_changci': 'window.hiido_init_changci',
		'yymobile': 'window.YYMobile'
	},
	//端口
	port: 3000,
	//静态资源地址
	publicPath: 'http://res.cont.yy.com/',
	//项目输出地址
	outputPath: 'E:/SVN Data/webdragon/big-idol/cont/branches/develop/cont-web/src/main/webapp/static/'
}