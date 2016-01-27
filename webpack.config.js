var webpack = require('webpack');

var config = {
  entry: {
    bundle: './js/src/bundle.js'
  },

  output: {
    path: './js',
    filename: '[name].js',
    chunkFilename: '[id].js',
    sourceMapFilename: '[name].js.map'
  }
};

if (process.env.NODE_ENV === 'production') {
  var uglify = new webpack.optimize.UglifyJsPlugin({minimize: true});
  config.plugins = [uglify];
  config.devtool = 'source-map';
}

module.exports = config;
