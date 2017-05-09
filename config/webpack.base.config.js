const path = require('path');

module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: path.join(process.cwd(), 'dist'),
    filename: 'bundle.js',
    publicPath: path.join(process.cwd(), 'dist')
  },
  devtool: 'source-maps',
  cache: true,
  module: {
    rules: [
      {
        test: /\.js$/,
        loaders: ['react-hot-loader', 'babel-loader'],
        exclude: [/node_modules/]
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.less$/,
        loader: 'style-loader!css-loader!less-loader'
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff'
      },
      {
        test: /\.(ttf|otf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?|(jpg|gif)$/,
        loader: 'file-loader'
      }  
    ]
  },
  plugins: [
    
  ]
};
