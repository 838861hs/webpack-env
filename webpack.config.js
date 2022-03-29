const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackHarddiskPlugin = require("html-webpack-harddisk-plugin");

module.exports = {
  mode: "development",
  entry: path.join(__dirname, "/src", "index.js"),
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
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      contentBase: "./dist",
      alwaysWriteToDisk: true,
      template: path.join(__dirname, "./src", "index.html"),
    }),
    new HtmlWebpackHarddiskPlugin(),
  ],
};
