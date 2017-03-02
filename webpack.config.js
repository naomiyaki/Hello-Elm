var path = require('path');

module.exports = {
  entry: './src/manifest.js',

  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'manifest.js'
  },

  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.elm']
  },

  module: {
    loaders: [
      {
        test: /\.html$/,
        exclude: /node_modules/,
        loader: 'file-loader?name=[name].[ext]'
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: 'file-loader?name=[name].[ext]'
      },
      {
        test: /\.elm$/,
        exclude: [/elm-stuff/, /node_modules/],
        loader: 'elm-webpack-loader'
      }
    ],

    noParse: /\.elm$/
  },

  devServer: {
    contentBase: path.resolve(__dirname, './'),
    stats: 'errors-only'
  }
}
