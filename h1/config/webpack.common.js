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
      '@lib': path.resolve(appPath, '..', 'lib'),
      '@templates': path.resolve(appPath, 'templates'),
      'assets': path.resolve(appPath, 'assets'),
      'maskedinput': path.resolve(appPath, '..', 'node_modules', 'jquery.maskedinput', 'src', 'jquery.maskedinput.js')
    }
  },

  module: {
    rules: [{
        test: /[\/\\]node_modules[\/\\]jquery\.maskedinput[\/\\]src[\/\\]jquery\.maskedinput\.js$/,
        loader: "imports-loader?define=>false&this=>window"
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'es2015'],
            plugins: ['transform-object-rest-spread']
          }
        }
      },
      {
        test: /[\/\\]node_modules[\/\\]owl.carousel[\/\\]dist[\/\\]owl.carousel\.js$/,
        loader: "imports-loader?jQuery=jquery"
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
          use: [nib(), jeet(), rupture()],
          preferPathResolver: 'webpack'
        }
      }
    }),
    new HtmlWebpackPlugin({
      template: 'index.html'
    }),
    new webpack.ProvidePlugin({
      jQuery: "jquery"
    })
  ]
};