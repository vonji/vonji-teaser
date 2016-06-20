const webpack = require('webpack');
const path = require('path');

const isProduction = process.env.NODE_ENV === 'production';
console.log('Webpack bundles for production : ' + isProduction);

let app = [];
let plugins = [];
let devtool = [];

if (!isProduction) {
  app = app.concat([
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:8080',
  ]);
  plugins = plugins.concat([
    new webpack.HotModuleReplacementPlugin(),
  ]);
  devtool = ['source-map'];
} else {
  plugins = plugins.concat([
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin(),
  ]);
}

console.log(app, plugins);

app.push('./src/main.js');

module.exports = {
  devtool,

  entry: { app },

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

  plugins,
};
