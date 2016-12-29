var webpack = require('webpack');

module.exports = {
  entry: ['./src/index.js', 'webpack/hot/dev-server'],
  output: {
    path: __dirname + '/public',
    filename: 'bundle.js',
    publicPath: __dirname + '/public'
  },
  devtool: 'eval-source-map',
  cache: true,
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['react-hot', 'babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.less$/,
        loader: 'style-loader!css-loader!less-loader'
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};
