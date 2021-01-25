const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const webpack = require('webpack');

module.exports = {
  entry: { index: path.resolve(__dirname, "src/js/index.js") },
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath:'',
  },
  module: {
    rules: [
      {
        test: /\.filename$/,
        use: ["loader-b", "loader-a"]
      },
      {
        test: /\.(sc|c|sa)ss$/,
        use: [MiniCssExtractPlugin.loader,'css-loader',"sass-loader",],
      },
      {
        test: /\.(png|jpe?g|gif|pdf|jpg)$/i,
        loader: 'file-loader',
        options: {
            name:'[path][name].[ext]',
        },
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
    ]
  },
  plugins: [
    new webpack.DefinePlugin({}),
    new MiniCssExtractPlugin({ filename: '[name].css' }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
     filename: 'index.html',
      template: path.resolve(__dirname, "src", "index.html")
    }),
    new HtmlWebpackPlugin({
      filename: 'estimate.html',
      template: path.resolve(__dirname, "src", "estimate.html")
    }),
    new HtmlWebpackPlugin({
      filename: 'service.html',
      template: path.resolve(__dirname, "src", "service.html")
    }),
    new HtmlWebpackPlugin({
      filename: 'introduction.html',
      template: path.resolve(__dirname, "src", "introduction.html")
    }),
    new HtmlWebpackPlugin({
      filename: 'access.html',
      template: path.resolve(__dirname, "src", "access.html"),
      minify:false,
    }),
   
    new webpack.ProvidePlugin({
      $:"jquery",
      jQuery: 'jquery'
    }),
    new BundleAnalyzerPlugin(),
  ],

  optimization: {
    splitChunks: { chunks: "all" }
  },

};