const ExtractTextPlugin = require('extract-text-webpack-plugin')
const path = require('path')

module.exports = {
  entry: [
    'babel-polyfill',
    './src/client',
  ],

  output: {
    path: path.join(__dirname, 'dist', 'public', 'assets'),
    filename: 'bundle.js',
  },

  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, use: 'babel-loader' },
      { test: /\.css$/, use: ExtractTextPlugin.extract('css-loader') },
      { test: /learn\.json$/, use: 'file-loader?name=[name].[ext]' },
    ],
  },

  plugins: [
    new ExtractTextPlugin('styles.css'),
  ],
}
