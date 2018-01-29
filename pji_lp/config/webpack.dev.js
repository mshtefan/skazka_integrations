var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig = require('./webpack.common.js');
var fs = require('fs');

module.exports = webpackMerge(commonConfig, {
  devtool: 'cheap-module-eval-source-map',

  devServer: {
    historyApiFallback: true,
    stats: 'minimal'
  }
}); 