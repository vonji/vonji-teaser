var path = require("path");
module.exports = {
  devtool: 'source-map',
  entry: {
    app: ["./src/main.js"],
  },
  output: {
    path: path.resolve(__dirname, "build"),
    publicPath: "/assets/",
    filename: "bundle.js",
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
};
