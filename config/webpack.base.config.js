const path = require('path')
const webpack = require('webpack')
const basePath = path.join(__dirname, '..');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = (options) => ({
	entry: options.entry,
	output: options.output,
	plugins: options.plugins.concat([
		new ExtractTextPlugin({
			filename: 'style.css',
			allChunks: true
		}),
		new webpack.optimize.OccurrenceOrderPlugin(),
		new webpack.NoEmitOnErrorsPlugin()
	]),
	module: {
		rules: [
			{
				test: /\.js$/,
				use: ['babel-loader'],
				exclude: /node_modules/
			},
			{
				test: /\.scss$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: ['css-loader', 'sass-loader']
				})
			},
			{
				test: /\.css$/,
				use: options.cssLoaders
			},
			{
				test: /\.(jpe|jpg|woff|woff2|eot|ttf|svg|png)(\?.*$|$)/,
				use: 'file-loader'
			}
		]
	},
	resolve: {
		modules: ['src', 'bower_components', 'node_modules']
	},
	devtool: options.devtool,
	target: 'web',
	stats: false
});
