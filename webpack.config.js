const path = require('path');

module.exports = {
  entry: './src/index.js',
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  module: {
    rules: [
      {
        use: ['babel-loader'],
        exclude: /node_modules/,
      }
    ]
  },
  output: {
    filename: 'index.js',
    path: __dirname + '/',
    publicPath: '/',
    library: 'st-react-accordion',
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },
  devServer: {
    contentBase: './'
  }
};