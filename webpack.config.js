const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: ["@babel/polyfill", path.resolve(__dirname, 'src/index')],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  devServer: {
    port: 9000,
    proxy: {
        '/api/**': { target: 'http://localhost:3001', secure: false}
    }
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname,'src', 'index.html'),
      filename: 'index.html'
    })
  ],
  stats:"minimal"
};