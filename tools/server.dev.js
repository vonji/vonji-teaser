import path from 'path';
import webpack from 'webpack';
import config from './webpack.config.js';

const PROD = process.argv.includes('--release');

const server = async () => {
  const PORT = 3000;

  const historyApiFallback = require('connect-history-api-fallback');
  const WebpackDevServer = require('webpack-dev-server');

  const compiler = webpack(config);

  const server = new WebpackDevServer(compiler, {
    contentBase: path.resolve(__dirname, '../public/'),
    publicPath: config.output.publicPath,
    stats: config.stats,
  });

  server.listen(PORT, () => {
    console.log('DEV server started on port ' + PORT);
  });
};

export default server;
