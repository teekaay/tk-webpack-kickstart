var webpack = require('webpack');
var baseConfig = require('./webpack.base.config');
var path = require('path');

var devConfig = {
  entry: [
    './src/index.js',
    'webpack/hot/dev-server'
  ],
  devtool: 'eval',
  cache: true,
  debug: true,
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    hot: true,
    historyApiFallback: true,
    watchOptions: {
      aggregateTimeout: 3000,
      poll: 1000
    }
  }
};

module.exports = Object.assign({}, baseConfig, devConfig);
