const webpack = require('webpack');
const config = require('./webpack.config.js');
const WebpackDevServer = require('webpack-dev-server');
const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 8080;
const PROXY_PORT = (process.env.PORT || 8080) + 1;

const app = express();
app.get('/*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './public/index.html'));
});
app.listen(PROXY_PORT, () => {
  console.log('Server running on port ' + PROXY_PORT);
});

let bundleStart = null;
const compiler = webpack(config);

compiler.plugin('compile', () => {
  console.log('Bundling...');
  bundleStart = Date.now();
});

compiler.plugin('done', () => {
  console.log('Bundled in ' + (Date.now() - bundleStart) + 'ms!');
  console.log('DEV server listening at ' + PORT);
});

const bundler = new WebpackDevServer(compiler, {
  proxy: {
    '*': `http://localhost:${PROXY_PORT}`,
  },
  publicPath: '/build/',
  hot: true,
  quiet: false,
  stats: {
    colors: true,
    chunks: false,
  },
});

bundler.listen(PORT, 'localhost', () => {
  console.log('Bundling project, please wait...');
});
