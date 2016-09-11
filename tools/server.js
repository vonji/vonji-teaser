import express from 'express';
import path from 'path';
import webpack from 'webpack';
import config from './webpack.config.js';
import run from './run.js';
import build from './build.js';

const PROD = process.argv.includes('--release');

const server = async () => {
  if (PROD) {

    await run(build);

    const app = express();
    const PORT = 3000;
    app.use('/build', express.static(path.resolve(__dirname, '../build')));
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, '../build/index.html'));
    });
    await app.listen(PORT, () => {
      console.log('Server running on port ' + PORT);
    });

  } else {

    const historyApiFallback = require('connect-history-api-fallback');
    const WebpackDevServer = require('webpack-dev-server');

    const compiler = webpack(config);

    const server = new WebpackDevServer(compiler, {
      contentBase: path.resolve(__dirname, '../public/'),
      publicPath: config.output.publicPath,
      stats: config.stats,
    });

    server.listen(3000, () => {
      console.log('DEV server started');
    });

  }
};

export default server;
