const webpack = require('webpack');
const config = require('./webpack.config');
const WebpackDevServer = require('webpack-dev-server');
const port = process.env.PORT || 8080;

config.entry.unshift('webpack-dev-server/client?http://localhost:8080/');

var compiler = webpack(config);
var server = new WebpackDevServer(compiler, {
  hot: true,
  inline: true,
  publicPath: '/dist/'
});

server.listen(port, 'localhost');
