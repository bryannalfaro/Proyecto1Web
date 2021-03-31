const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.css$/i,
        use:[MiniCssExtractPlugin.loader, 'css-loader',{
          loader: 'postcss-loader',
          options: {
            postcssOptions: {
              plugins: [
                ['postcss-preset-env'],
              ],
            },
          },
        }],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use:[
          {
            loader: 'file-loader',
          },
        ],
      },
      {
        test: /\.(jsx?)$/,
        use: ['babel-loader', 'eslint-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  devServer: {
    contentBase: './dist',
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
  },
  plugins: [new HtmlWebpackPlugin({
    template: './public/index.html',
  }), new MiniCssExtractPlugin()],
}
