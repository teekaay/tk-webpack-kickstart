var webpack = require('webpack');
var baseConfig = require('./webpack.base.config');

var productionConfig = {
  entry: [
    './src/index.js'
  ],
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(true),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': 'production'
    })
  ]
};

module.exports = Object.assign({}, baseConfig, productionConfig);
