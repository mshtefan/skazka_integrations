var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var classPrfx = require('postcss-class-prefix');
var rupture = require('rupture');
var jeet = require('jeet');
var nib = require('nib');
var path = require('path');
var fs = require('fs');

module.exports = {
  entry: "./src/app",

  resolve: {
    alias: {
      '@templates': path.resolve(__dirname, '..', 'src', 'templates'),
      '@assets': path.resolve(__dirname, '..', 'assets'),
    }
  },

  module: {
    rules: [{
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'es2015']
          }
        }
      },
      {
        test: /\.html$/,
        loader: './cssRename-loader!html-loader'
      },
      {
        test: /\.(png|jpe?g|gif|svg|otf|woff|woff2|ttf|eot|ico)$/,
        loader: 'url-loader'
      },
      {
        test: /\.css$/,
        use: [{
          loader: "style-loader"
        }, {
          loader: "css-loader"
        }, {
          loader: "postcss-loader",
          options: {
            ident: 'postcss',
            plugins: (loader) => [
              require('postcss-class-prefix')('__sailplay-')
            ]
          }
        }]
      },
      {
        test: /\.styl$/,
        use: [{
          loader: "style-loader"
        }, {
          loader: "css-loader"
        }, {
          loader: "postcss-loader",
          options: {
            sourceMap: true,
            ident: 'postcss',
            plugins: (loader) => [
              require('precss'),
              require('postcss-class-prefix')('__sailplay-')
            ]
          }
        }, {
          loader: "stylus-loader",
        }]
      }
    ]
  },

  output: {
    path: __dirname + "/../dist",
    filename: "app.bundle.js"
  },

  plugins: [
    new webpack.LoaderOptionsPlugin({
      test: /\.styl$/,
      options: {
        stylus: {
          use: [nib(), jeet(), rupture()]
        }
      }
    }),
    new HtmlWebpackPlugin({
      template: 'index.html'
    })
  ]
};