const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: './src/index.js',
    demo: './demo/demo.jsx',
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
      },
    ],
  },
  output: {
    filename: '[name].js',
    path: `${__dirname}/`,
    publicPath: '/',
    library: 'st-react-accordion',
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `${__dirname}/demo/demo.html`,
      filename: 'pages/index.html',
    }),
  ],
  devServer: {
    contentBase: './pages',
  },
};
