import express from 'express';
import path from 'path';
import webpack from 'webpack';
import config from './webpack.config.js';
import historyApiFallback from 'connect-history-api-fallback';
import run from './run.js';
import build from './build.js';

var browserSync = require('browser-sync');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');

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

    const compiler = webpack(config);

    await browserSync({
      server: {
        baseDir: path.resolve(__dirname, '../build'),

        middleware: [
          webpackDevMiddleware(compiler, {
            // From where we serve index.html
            contentBase: path.resolve(__dirname, '../build/'),
            publicPath: '/build/',
            filename: 'bundle.js',
            // Webpack Dev server does not take the source's stats.
            stats: config.stats,
          }),

          historyApiFallback(),

          // bundler should be the same as above
          webpackHotMiddleware(compiler)
        ]
      },

      // no need to watch '*.js' here, webpack will take care of it for us,
      // including full page reloads if HMR won't work
      files: [
        path.resolve(__dirname, '../src/**/*.scss'),
        path.resolve(__dirname, '../src/*.html'),
      ]
    });
  }
};

export default server;
