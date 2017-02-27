const path = require('path')
const webpack = require('webpack')
const basePath = path.join(__dirname, '..');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const options = {
	devtool: 'inline-source-map',
	entry: [
		'webpack-hot-middleware/client?reload=true',
		path.join(basePath, 'src', 'js', 'index.js')
	],
	output: {
		path: path.join(basePath, 'public'),
		filename: 'bundle.js'
	},
	cssLoaders: [
		'style-loader',
		'css-loader',
		'sass-loader'
	],
	plugins: [
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify('development')
			}
		}),
		new HtmlWebpackPlugin({
			title: 'Card Manager DEV',
			template: path.join(basePath, 'src', 'template', 'index.html'),
			filename: 'index.html',
			inject: 'body'
		}),
		new webpack.HotModuleReplacementPlugin()
  ]
};

module.exports = require('./webpack.base.config')(options);
