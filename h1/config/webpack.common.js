var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var classPrfx = require('postcss-class-prefix');
var rupture = require('rupture');
var jeet = require('jeet');
var nib = require('nib');
var path = require('path');
var fs = require('fs');

const appPath = path.resolve(__dirname, '..', 'src')

module.exports = {
  entry: "./src/app",

  resolve: {
    alias: {
      '@templates': path.resolve(appPath, 'templates'),
      'assets': path.resolve(appPath, 'assets')
    }
  },

  module: {
    rules: [{
      test: /[\/\\]node_modules[\/\\]@claviska[\/\\]jquery-dropdown[\/\\]index\.js$/,
      loader: "import-loader?this=>window"
    },
      {
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
          loader: "style-loader?paths=node_modules/@claviska/jquery-dropdown/"
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
          use: [nib(), jeet(), rupture()],
          preferPathResolver: 'webpack'
        }
      }
    }),
    new HtmlWebpackPlugin({
      template: 'index.html'
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    })
  ]
};