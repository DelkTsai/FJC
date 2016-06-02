var webpack = require('webpack');
var path = require('path');
var fs = require('fs');
var ExtractTextPlugin1 = require("extract-text-webpack-plugin");
var ExtractTextPlugin2 = require("extract-text-webpack-plugin-webpack-2");
var config = require('../config').default;
var publicPath = config.publicPath+'FJCurry/pc/';

module.exports = {
    //插件项
    plugins: [
        //生成独立样式文件
        new ExtractTextPlugin1("css/[name].bundle.css"),
        //生成独立html文件
        new ExtractTextPlugin2("html/[name].html")
    ],
    //devtool: 'source-map', 
    //页面入口文件配置
    entry: getEntry(),
    //入口文件输出配置
    output: {
        filename: 'js/[name].bundle.js',
        chunkFilename: 'js/[name].js',
        publicPath: publicPath
    },
    module: {
        //加载器配置
        loaders: [{
            test: /\.css$/,
            loader: 'style-loader!css-loader'
        }, {
            test: /\.scss$/,
            loader: ExtractTextPlugin1.extract('style-loader', 'css-loader!sass-loader!postcss-loader')
        }, {
            test: /\.(png|jpg|gif)$/,
            loader: 'url-loader?limit=8192&name=images/[name].[ext]?[hash]'
        }, {
            test: /\.(html)$/,
            loader: ExtractTextPlugin2.extract('html?attrs=img:src img:data-original')
        }, {
            test:/\.(js)$/,
            exclude: /(node_modules)/,
            include: [
                path.join(__dirname,'./src/lib/js/')
            ],
            loader: 'babel',
            query: {
              presets: ['es2015','stage-0'],
              plugins: ['transform-runtime']
            }
        }]
    },
    //其它解决方案配置
    resolve: {
        root: '', //绝对路径
        extensions: ['', '.js', '.json', '.scss'],
        alias: config.alias
    },
    externals: config.global
};

function getEntry() {
    var jsPath = path.resolve('src');
    var dirs = fs.readdirSync(jsPath);
    var matchs = [],
        files = {};
    dirs.forEach(function(item) {
        matchs = item.match(/(.+)\.js$/);
        if (matchs) {
            files[matchs[1]] = path.resolve('src', item);
        }
    });
    return files;
}