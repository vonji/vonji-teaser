import path from "path";
import webpack from 'webpack';

const DEBUG = !process.argv.includes('--release');
const VERBOSE = process.argv.includes('--verbose');

const GLOBALS = {
  'process.env.NODE_ENV': DEBUG ? '"development"' : '"production"',
  __DEV__: !DEBUG,
};

const wpConfig = {
  entry: {
    app: [
      path.resolve(__dirname, "../src/app.js"),
      ...(DEBUG ? [] : []),
    ],
  },

  output: {
    filename: "bundle.js",
    publicPath: '/build/',
    path: path.resolve(__dirname, "../build/"),
  },

  module: {
    loaders: [
      {
        test: /\.*jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          cacheDirectory: !DEBUG,
          babelrc: false,
          presets: [ 'react', 'es2015', 'stage-0' ],
        },
      },
      {
        test: /\.scss$/,
        loaders: [
          'style',
          `css?${DEBUG ? 'sourceMap' : ''}`,
          `sass?${DEBUG ? 'sourceMap' : ''}`,
        ],
      },
      {
        test: /\.css$/,
        loaders: [
          'style',
          `css?${DEBUG ? 'sourceMap' : ''}`,
        ],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)$/,
        loader: 'url-loader',
        query: {
          name: DEBUG ? '[path][name].[ext]?[hash]' : '[hash].[ext]',
          limit: 10000,
        },
      },
      {
        test: /\.(eot|ttf|wav|mp3)$/,
        loader: 'file-loader',
        query: {
          name: DEBUG ? '[path][name].[ext]?[hash]' : '[hash].[ext]',
        },
      },
    ],
  },

  target: 'web',

  devtool: DEBUG ? 'cheap-module-eval-source-map' : '',

  resolve: {
    root: path.resolve(__dirname, '../src'),
    moduleDirectories: ['node_modules'],
    extensions: ['', '.webpack.js', '.web.js', '.js', '.jsx', '.json'],
  },

  historyApiFallback: !DEBUG,

  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({ ...GLOBALS, 'process.env.BROWSER': true }),
    new webpack.HotModuleReplacementPlugin(),

    ...(DEBUG ? [] : [
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          screw_ie8: true,
          warnings: VERBOSE,
        },
      }),
      new webpack.optimize.AggressiveMergingPlugin(),
    ]),
  ],

  cache: !DEBUG,

  stats: {
    colors: true,
    reasons: !DEBUG,
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
