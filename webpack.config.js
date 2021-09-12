const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: path.resolve(
    __dirname,
    "./src/index.tsx"
  ) /* entry-point(s) to start app bundling process */,
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js"],
  } /* configure how modules are resolved */,
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      } /* rules to process .ts, .tsx, .js, .jsx files */,
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      } /* rules to process .scss, .sass files */,
    ],
  } /* determines how different module types will be treated */,
  output: {
    path: path.resolve(__dirname, "./build"),
    filename: "bundle.js",
  } /* where to output your bundle */,
  mode: "development" /* for built-in optimizations -> 'none' | 'development' | 'production' */,
  devtool: "cheap-module-source-map" /* how source maps are generated */,
  devServer: {
    open: true, // opens the app when you run "npm start"
  } /* options for webpack-dev-server */,
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./src/index.html"),
    }) /* simplifies the creation of HTML files to serve your webpack bundles */,
  ],
};
