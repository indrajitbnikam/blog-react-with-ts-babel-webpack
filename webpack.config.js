const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: path.resolve(__dirname, "./src/index.tsx"),
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, "./build"),
    filename: "bundle.js",
  },
  mode: "development",
  devtool: "cheap-module-source-map",
  devServer: {
    open: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./src/index.html"),
    }),
  ],
};
