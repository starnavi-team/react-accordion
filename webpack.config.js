const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
  entry: {
    index: './demo/demo.jsx',
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
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[hash:5].[ext]',
              outputPath: 'icons/',
            },
          },
          {
            loader: 'img-loader',
          },
        ],
      },
    ],
  },
  output: {
    filename: '[name].js',
    path: `${__dirname}/dist`,
    publicPath: '/dist',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `${__dirname}/demo/demo.html`,
      filename: '../index.html',
    }),
    new MiniCssExtractPlugin({
      filename: devMode ? '[name].css' : '[name].[hash].css',
    }),
  ],
  devServer: {
    contentBase: './dist',
  },
};
