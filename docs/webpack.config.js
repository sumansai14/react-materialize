var path = require('path');
var webpack = require('webpack');
var PATH = path.resolve(__dirname, 'dist');

module.exports = {
  entry: [
    'webpack-hot-middleware/client',
    './client.js'
  ],
  output: {
    filename: 'bundle.js',
    path: PATH,
    publicPath: PATH
  },
  devtool: 'inline-source-map',
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      use: 'babel-loader',
      exclude: 'node_modules/'
    }]
  },
  plugins: [
    new webpack.NamedModulesPlugin()
  ]
};
