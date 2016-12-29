var webpack = require('webpack');
var config = require('./webpack.config');
var WebpackDevServer = require('webpack-dev-server');

config.entry.unshift('webpack-dev-server/client?http://localhost:8080/',
                     'webpack/hot/dev-server');

var compiler = webpack(config);

var server = new WebpackDevServer(compiler, {
  hot: true,
  publicPath: '/dist/'
});

server.listen(8080, 'localhost');
