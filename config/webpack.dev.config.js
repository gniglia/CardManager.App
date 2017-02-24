const path = require('path')
const webpack = require('webpack')
const basePath = path.join(__dirname, '..');

const options = {
	devtool: 'inline-source-map',
	entry: [
		'webpack-hot-middleware/client?reload=true',
		path.join(basePath, 'src', 'js', 'index.js')
	],
	output: {
		path: path.join(basePath, 'public'),
		filename: 'bundle.js',
		publicPath: '/public/'
	},
	cssLoaders: [
		'style-loader',
		'css-loader',
		'sass-loader'
	],
	plugins: [
		new webpack.HotModuleReplacementPlugin()
  ],
	resolve: {
    modulesDirectories: ['src', 'node_modules']
  }
};

module.exports = require('./webpack.base.config')(options);
