const { join } = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");
const basicConfig = require("./webpack.base.config");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const resolve = dir => join(__dirname, "..", dir);

module.exports = merge(basicConfig, {
  mode: "development",
  entry: {
    app: "./src/main.js"
  },
  devtool: "inline-source-map",
  devServer: {
    contentBase: resolve("dist"),
    compress: false,
    hot: true,
    inline: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "src/index.html",
      inject: true,
      title: "vuetify-datetime-picker Demo"
    })
  ]
});
