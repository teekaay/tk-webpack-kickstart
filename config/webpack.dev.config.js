const webpack = require('webpack');
const baseConfig = require('./webpack.base.config');

const devConfig = {
  entry: [
    './src/index.js',
    'webpack/hot/dev-server'
  ],
  cache: true,
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};

module.exports = Object.assign({}, baseConfig, devConfig);
