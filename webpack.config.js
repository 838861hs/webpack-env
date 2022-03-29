const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: path.join(__dirname, "/src", "index.js"),
  devServer: {
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
      template: path.join(__dirname, "./src", "index.html"),
    }),
  ],
};
