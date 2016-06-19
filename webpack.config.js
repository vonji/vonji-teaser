const webpack = require('webpack');
const path = require('path');

module.exports = {
  devtool: 'source-map',

  entry: {
    app: [
      // For hot style updates
      'webpack/hot/dev-server',
      // The script refreshing the browser on none hot updates
      'webpack-dev-server/client?http://localhost:8080',
      './src/main.js',
    ],
  },

  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/build/',
    filename: 'bundle.js',
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react', 'stage-0'],
        },
      },
      {
        test: /\.(png|svg)$/,
        loader: 'file',
      },
      {
        test: /\.css/,
        loader: 'style!css',
      },
      {
        test: /\.(sass|scss)$/,
        loader: 'style!css!sass',
      },
    ],
  },

  plugins: [new webpack.HotModuleReplacementPlugin()],
};
