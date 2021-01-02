const merge = require('webpack-merge');
const webpackConfig = require('./webpack.config.js');
// const HtmlWebPackPlugin = require("html-webpack-plugin");

// const htmlWebpackPlugin = new HtmlWebPackPlugin({
//   template: "./src/client/index.html",
//   filename: "./index.html"
// });

// module.exports = merge(webpackConfig, {
//   mode: 'development',
//   devServer: {
//     historyApiFallback: true,
//     inline: true,
//     open: true,
//     host: 'localhost',
//     port: 8080,
//     proxy: {
//       '/api/**': {
//         target: 'http://localhost:3000',
//         secure: false,
//         logLevel: 'debug'
//       }
//     },
//   }
// })

const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path')

const htmlWebpackPlugin = new HtmlWebPackPlugin({
  template: "./src/client/index.html",
  filename: "./index.html"
});
 module.exports = {
  mode: 'development',
  entry: "./src/client/index.js",
  output: {
    path: path.resolve('dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    inline: true,
    open: true,
    host: 'localhost',
    port: 8080,
    proxy: {
      '/api/**': {
        target: 'http://localhost:3000',
        secure: false,
        logLevel: 'debug'
      }
    },
  },
  plugins: [htmlWebpackPlugin]
}; 