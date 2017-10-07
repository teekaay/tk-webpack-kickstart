/* eslint-disable */
require('dotenv').config();

const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');

const ip = process.env.APP_IP || '0.0.0.0';
const port = (+process.env.APP_PORT) || 3001;

const devServer = new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  host: ip,
  stats: false,
  historyApiFallback: true,
  contentBase: 'public',
  compress: true,
  headers: {
    'Access-Control-Allow-Origin': '*'
  }
});

devServer.listen(port, ip, function (err) {
  if (err) {
    return console.log(err)
  }

  console.log(`Listening at http://${ip}:${port}`)
});
