var webpack = require('webpack');
var baseConfig = require('./webpack.base.config');

var productionConfig = {
  entry: ['./src/index.js'],
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(true),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
	warnings: false
      },
      comments: false,
      beautify: false
    }),
    new webpack.DefinePlugin({
      'process.env': {
	NODE_ENV: JSON.stringify('production')	      
      }   
    })
  ]
};

module.exports = Object.assign({}, baseConfig, productionConfig);
