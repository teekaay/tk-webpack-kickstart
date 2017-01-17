var webpack = require('webpack');
var config = require('./webpack.config');

var WebpackDevServer = require('webpack-dev-server');

var port = process.env.PORT || 8080;
var staticRoot = __dirname;

config.entry.unshift('webpack-dev-server/client?http://localhost:8080/',
                     'webpack/hot/dev-server');

var compiler = webpack(config);
var server = new WebpackDevServer(compiler, {
  hot: true,
  inline: true,
  publicPath: '/dist/'
});

server.listen(port, 'localhost');
