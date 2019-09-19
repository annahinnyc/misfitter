var path = require('path');
const CompressionPlugin = require('compression-webpack-plugin');
var SRC_DIR = path.join(__dirname, '/client');
var DIST_DIR = path.join(__dirname, '/public');

module.exports = {
  entry: ["./client/index.jsx"],
  output: {
    path: __dirname + "/dist",
    publicPath: "/dist",
    chunkFilename: "[name].bundle.js",
    filename: "bundle.js"
  },
  module : {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      }
    ]
  },
  plugins: [
    new CompressionPlugin({
      filename: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.(js|css|html)$/,
      threshold: 8192,
      minRatio: 0.8
    }),
  ],
  resolve: {
    extensions: ["*", ".js", ".jsx"]
  }
};
