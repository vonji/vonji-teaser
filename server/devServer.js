const webpack = require('webpack');
const config = require('./../webpack.config.js');
const WebpackDevServer = require('webpack-dev-server');

module.exports = (PORT, backend) => {
  const PROXY_PORT = PORT - 1;
  backend(PROXY_PORT);

  let bundleStart = null;
  const compiler = webpack(config);

  compiler.plugin('compile', () => {
    console.log('Bundling...');
    bundleStart = Date.now();
  });

  compiler.plugin('done', () => {
    console.log('Bundled in ' + (Date.now() - bundleStart) + 'ms!');
    console.log('DEV server listening at ' + PORT);
    console.log('DEV server forwarding * at ' + PROXY_PORT);
  });

  const bundler = new WebpackDevServer(compiler, {
    proxy: {
      '*': `http://localhost:${PROXY_PORT}`,
    },
    publicPath: '/build/',
    hot: true,
    quiet: false,
    noInfo: true,
    stats: {
      colors: true,
    },
  });

  bundler.listen(PORT, 'localhost', () => {
    console.log('Bundling project, please wait...');
  });
};
