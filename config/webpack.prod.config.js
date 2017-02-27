const path = require('path')
const webpack = require('webpack')
const basePath = path.join(__dirname, '..');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const options = {
  devtool: 'source-map',
	entry: [
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
    // Merge all duplicate modules
    new webpack.optimize.DedupePlugin(),
    // new webpack.optimize.UglifyJsPlugin({
    //   mangle: false,
    //   compress: {
    //       warnings: false
    //   }
    // }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new HtmlWebpackPlugin({
      title: 'Card Manager PROD',
      template: path.join(basePath, 'src', 'template', 'index.html'),
      filename: 'index.html',
      inject: 'body'
    })
  ]
};

module.exports = require('./webpack.base.config')(options);
