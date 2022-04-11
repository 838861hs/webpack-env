const webpack = require("webpack");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackHarddiskPlugin = require("html-webpack-harddisk-plugin");

module.exports = {
  mode: "development",
  entry: {
    javascript: path.join(__dirname, "/src", "index.js"),
  },
  devServer: {
    watchFiles: ["src/*", "dist"],
    hot: true,
    open: true,
  },
  stats: {
    children: false,
  },
  output: {
    // path: path.join(__dirname, "/dist"),
    path: `${__dirname}/dist`,
    filename: "test.js",
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        loader: "html-loader",
      },
      // sassのコンパイル設定
      {
        test: /\.(sa|sc|c)ss$/i, // 対象にするファイルを指定
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      contentBase: "./dist",
      alwaysWriteToDisk: true,
      template: path.join(__dirname, "./src", "index.html"),
    }),
    new HtmlWebpackHarddiskPlugin(),
    new MiniCssExtractPlugin({
      filename: "style.css",
    }),
  ],
};
