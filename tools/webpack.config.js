import path from "path";
import webpack from 'webpack';
import merge from 'webpack-merge';

const PROD = process.argv.includes('--release');
const VERBOSE = process.argv.includes('--verbose');

const GLOBALS = {
  'process.env.NODE_ENV': PROD ? '"production"' : '"development"',
  __DEV__: !PROD,
};

const wpConfig = {
  entry: path.resolve(__dirname, "../src/app.js"),

  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "../build/"),
  },

  module: {
    loaders: [
      {
        test: /\.*jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          babelrc: false,
          presets: [
            'react',
            'es2015',
            'stage-0',
          ],
        },
      },
      {
        test: /\.scss$/,
        loaders: [
          "style",
          `css?${PROD ? '' : 'sourceMap'}`,
          `sass?${PROD ? '' : 'sourceMap'}`,
        ],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)$/,
        loader: 'url-loader',
        query: {
          name: PROD ? '[hash].[ext]' : '[path][name].[ext]?[hash]',
          limit: 10000,
        },
      },
      {
        test: /\.(eot|ttf|wav|mp3)$/,
        loader: 'file-loader',
        query: {
          name: PROD ? '[hash].[ext]' : '[path][name].[ext]?[hash]',
        },
      },
    ],
  },

  target: 'web',

  devtool: PROD ? '' : 'cheap-module-eval-source-map',

  resolve: {
    root: path.resolve(__dirname, '../src'),
    moduleDirectories: ['node_modules'],
    extensions: ['', '.webpack.js', '.web.js', '.js', '.jsx', '.json'],
  },

  historyApiFallback: !PROD,

  plugins: [
    new webpack.DefinePlugin({ ...GLOBALS, 'process.env.BROWSER': true }),

    ...PROD ? [
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          screw_ie8: true,
          warnings: VERBOSE,
        },
      }),
      new webpack.optimize.AggressiveMergingPlugin(),
    ] : [],
  ],

  cache: !PROD,
  debug: !PROD,

  stats: {
    colors: true,
    reasons: !PROD,
    hash: VERBOSE,
    version: VERBOSE,
    timings: true,
    chunks: VERBOSE,
    chunkModules: VERBOSE,
    cached: VERBOSE,
    cachedAssets: VERBOSE,
  },
};

export default wpConfig;
