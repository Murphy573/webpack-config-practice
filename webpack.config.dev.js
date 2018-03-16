const path = require('path'),
webpack = require('webpack'),
htmlWebpackPlugin = require('html-webpack-plugin');

const ExtractTextPlugin = require("extract-text-webpack-plugin");

const process = {
	env: {
		NODE_ENV: 'development-not'
	}
};

const extractSass = new ExtractTextPlugin({
	//filename: "[name].[contenthash].css",
	filename: "bundle.min.css",
	disable: process.env.NODE_ENV === "development"
});

module.exports = {
	entry: {
		webpack_entry: './src/webpack_entry.js',
		main_index: './src/index.ts',
		//tree_index: './src/tree/tree_index.ts',
		//rx_index: './src/ES6/rxjs/rx_index.js',
		//css_index: './src/styles/specials/sp-1.scss'
		//vendors: ['jquery', 'rxjs', 'moment', 'md5'],
		vendor1: [ 'jquery', 'rxjs' ],
		vendor2: [ 'moment', 'md5' ]
	},
	devtool: 'inline-source-map',
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/
			},
			{
				test: /\.scss$/,
				use: extractSass.extract({
					use: [ "css-loader", "sass-loader" ],
					// 在开发环境使用 style-loader
					fallback: "style-loader"
				})
			},
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel-loader',
			}
		],
	},
	resolve: {
		extensions: [ ".tsx", ".ts", ".js" ]
	},
	output: {//输出
		filename: '[name].js',//输出文件名
		//filename: '[chunkhash].js'
		path: path.resolve(__dirname, './built'),//输出路径
		chunkFilename: './require/[name].js' // 设置require.ensure 文件名
		//chunkFilename: './require/[chunkhash].js'
	},
	plugins: [
		extractSass,
		new webpack.optimize.CommonsChunkPlugin({
			names: [ 'vendor1', 'vendor2', 'manifest' ], // 公共代码的chunk名为'vendors'
			filename: '[name].bundle.js', // 生成后的文件名，虽说用了[name]，但实际上就是'vendors.bundle.js'了
			//minChunks: 3, // 设定要有3个chunk（即3个页面）加载的js模块才会被纳入公共代码
			//minChunks: Infinity,
		}),
		new htmlWebpackPlugin({
			filename: "index.html",
			template: "./src/index.html",
			inject: true,//js的注入标签
		})
	]
};