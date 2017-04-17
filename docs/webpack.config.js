var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './client.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'source-map',
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      use: 'babel-loader',
      exclude: '/node_modules/'
    }]
  },
  plugins: [
    new webpack.NamedModulesPlugin()
  ]
};
