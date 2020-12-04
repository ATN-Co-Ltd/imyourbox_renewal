const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    entry: { index: path.resolve(__dirname, "js", "index.js") },
    output: {
        path: path.resolve(__dirname, "dist")
      },
      plugins: [
        new HtmlWebpackPlugin({
          template: path.resolve(__dirname, "index.html")
        })
      ],
      module: {
        rules: [
          {
            test: /\.filename$/,
            use: ["loader-b", "loader-a"]
          },
          {
            test: /\.(sc|c|sa)ss$/,
            use: ['style-loader','css-loader',"sass-loader",],
          },
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: ["babel-loader"]
          },
          {
            test: /\.(png|jpe?g|gif)$/i,
            use: [
              {
                loader: 'file-loader',
              },
            ],
          },
        ]
      },
  };