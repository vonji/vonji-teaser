const backend = require('./backend');
const PROD = process.env.NODE_ENV === 'production';
const PORT = process.env.PORT || 8080;

if (PROD) {
  backend(PORT);
} else {
  const webpack = require('webpack');
  const config = require('./webpack.config.js');
  const WebpackDevServer = require('webpack-dev-server');

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
      "*": "http://localhost:" + (PORT + 1),
    },
    publicPath: '/build/',
    hot: true,
    quiet: false,
    stats: {
      colors: true,
      chunks: false,
    },
  });

  backend(PORT + 1);

  bundler.listen(PORT, 'localhost', () => {
    console.log('Bundling project, please wait...');
  });
}
