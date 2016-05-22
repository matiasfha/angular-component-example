var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var path    = require('path')
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	devtool: 'sourcemaps',
	entry: [
		'./src/app.js'
	],
	output: {
		filename : '[name].bundle.js',
		path: path.resolve('./dist')
	},
	module: {
		loaders: [
			{ test: /\.js$/, exclude: [/app\/lib/, /node_modules/], loader: 'ng-annotate!babel' },
			{ test: /\.html$/, loader: 'html' },
			{
				test: /\.css$/,
				loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=2&localIdentName=[name]__[local]___[hash:base64:5]!autoprefixer-loader?{browsers:["last 2 version", "ie >= 10"]}', {
          publicPath: '../'
        })
			}
		]
	},
	plugins: [
		new ExtractTextPlugin('style.css', { allChunks: true }),
		new HtmlWebpackPlugin({
			template: 'index.html',
			inject: 'body',
			hash: true
		})
	]
}
