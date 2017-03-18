var webpack = require('webpack');
var path = require("path");

var PATHS = {
  app: path.join(__dirname, 'app/main.js'),
  build: path.join(__dirname, 'dist'),
};

module.exports = {
  entry: {
    app: [
      PATHS.app
    ]
  },
  output: {
    path: PATHS.build,
    filename: "[name].js"
  },
  cache: false,
  devtool: 'source-map',

  resolve: {
    extensions: ['.webpack.js', '.web.js', '.js']
  }

};
