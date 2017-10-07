// # Optimization hints:
//
// https://engineering.bitnami.com/articles/optimizing-your-webpack-builds.html
// http://engineering.invisionapp.com/post/optimizing-webpack/

require('dotenv').config();

const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const DotenvPlugin = require('webpack-dotenv-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

// Configuration
const package = require('./package.json');
const DEBUG = process.env.NODE_ENV !== 'production';
const ip = process.env.APP_IP || '0.0.0.0';
const port = (+process.env.APP_PORT) || 3001;
const cssLoaderConfig = 'css-loader?importLoaders=1!postcss-loader';

const config = {
    entry: {
      app: [path.resolve('./src/app/index.js')],
      vendor: [
        'react',
        'react-dom'
      ]
    },
    output: {
      path: path.join(__dirname, 'public'),
      filename: '[name].[hash].js'
    },
    resolve: {
      modules: ['app', 'node_modules'],
    },
    devtool: DEBUG ? 'eval' : false,
    cache: true,
    module: {
      rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: [
              { loader: 'react-hot-loader' },
              {
                loader: 'babel-loader',
                options: {
                  babelrc: false,
                  presets: package.babel.presets,
                  cacheDirectory: true,
                },
              },
            ]
          },
        { test: /\.css$/, loader: DEBUG ? `style-loader!${cssLoaderConfig}` : ExtractTextPlugin.extract({ fallback: 'style-loader', use: cssLoaderConfig }) },
        { test: /\.png$/, loader: 'url-loader?prefix=images/&limit=8000&mimetype=image/png' },
        { test: /\.jpg$/, loader: 'url-loader?prefix=images/&limit=8000&mimetype=image/jpeg' },
        { test: /\.svg$/, loader: 'url-loader' },
        { test: /\.woff$/, loader: 'url-loader?prefix=fonts/&limit=8000&mimetype=application/font-woff' },
        { test: /\.ttf$/, loader: 'file-loader?prefix=fonts/' },
        { test: /\.eot$/, loader: 'file-loader?prefix=fonts/' },
        { test: /\.hbs$/, loader: 'handlebars-loader' }
      ],
    },
    plugins: [
      new webpack.NoEmitOnErrorsPlugin(),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': `'${process.env.NODE_ENV}'`
      }),
      new DotenvPlugin({
        sample: './.env.example',
        path: './.env'
      }),
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: path.resolve(__dirname, 'src', 'index.hbs'),
        inject: false,
        alwaysWriteToDisk: true,
        path: !DEBUG ? '/public' : ''
      }),
      new HtmlWebpackHarddiskPlugin(),
      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        filename: '[name].[hash].js',
        minChunks: Infinity
      }),
      new webpack.NamedModulesPlugin(),
      new CleanWebpackPlugin(['public'], {
        allowExternal: true
      }),
      new CopyWebpackPlugin([
        { from: path.resolve(__dirname, 'src/static'), to: 'static' }
      ])
    ],
};


if (DEBUG) {
  config.entry.app.unshift(
    `webpack-dev-server/client?http://${ip}:${port}/`,
    'webpack/hot/only-dev-server'
  );

  config.plugins = config.plugins.concat([
    new webpack.HotModuleReplacementPlugin()
  ]);
} else {
  config.plugins = config.plugins.concat([
    new ExtractTextPlugin('app.[hash].css'),
    new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } })
  ]);
}

module.exports = config;
