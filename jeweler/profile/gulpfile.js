(function () {

  'use strict';

  var gulp = require('gulp');
  var path = require('path');
  var server = require('gulp-connect');
  var webpack = require('webpack');

  var WEBPACK_CONFIG = require('./webpack.config');

  gulp.task('connect', function () {

    server.server({
      port: 3000
    });

  });

  gulp.task('watch', function () {
    gulp.watch(__dirname + '/src/**/*', ['build']);
  });
  
  gulp.task('build', function (callback) {

    let bundler = webpack(WEBPACK_CONFIG);

    bundler.run(callback);

  });

  gulp.task('build.javascript', ['javascript.concat', 'javascript.ngAnnotate']);

  gulp.task('javascript.concat', ['build.templates'], function () {
    return gulp.src([

        // Libs
        __dirname + '/node_modules/jquery/dist/jquery.min.js',
        __dirname + '/lib/js/vendor/modernizr-2.6.2-respond-1.1.0.min.js',
        __dirname + '/lib/js/plugins/slick.min.js',
        __dirname + '/lib/js/plugins/jquery.bpopup.min.js',
        __dirname + '/lib/js/plugins/prettyCheckable.min.js',
        __dirname + '/lib/js/plugins/selectize.min.js',
        __dirname + '/lib/js/plugins/jquery.mask.min.js',

        // Sailplay HUB
        __dirname + '/node_modules/sailplay-hub/sailplay.hub.js',
        __dirname + '/node_modules/sailplay-hub-actions/sailplay.hub.actions.js',

        // Angular Modules
        __dirname + '/node_modules/angular/angular.min.js',
        __dirname + '/node_modules/angular-i18n/angular-locale_ru-ru.js',
        __dirname + '/node_modules/angular-cookie/angular-cookie.min.js',
        __dirname + '/node_modules/angular-utils-pagination/dirPagination.js',

        // Configs
        //__dirname + '/config/local.js',
        __dirname + '/config/locale.ru.js',

        // Application
        __dirname + '/src/js/**/*.js'
      ])
      .pipe(concat('sailplay.widgets.js'))
      .pipe(gulp.dest(__dirname + '/dist/js/'));
  });

  gulp.task('javascript.ngAnnotate', ['javascript.concat'], function () {
    return gulp.src(__dirname + '/dist/sailplay.widgets.js')
      .pipe(ngAnnotate({
        add: true
      }))
      .pipe(gulp.dest(__dirname + '/dist/'));
  });


  gulp.task('build.templates', function () {
    return gulp.src(__dirname + '/src/html/**/*.html')
      .pipe(minifyHtml({
        empty: true,
        spare: true,
        quotes: true
      }))
      .pipe(ngHtml2Js({
        moduleName: "templates",
        prefix: "/html/"
      }))
      .pipe(concat("html.min.js"))
      .pipe(gulp.dest("./src/js/"));
  });


  gulp.task('build.less', function () {
    return gulp.src(__dirname + '/src/less/*.less')
      .pipe(less({
        paths: [path.join(__dirname, 'less', 'includes')]
      }))
      .pipe(gulp.dest(__dirname + '/dist/css'));
  });

  gulp.task('build.fonts', function () {
    return gulp.src(__dirname + '/src/font/**/*')
      .pipe(gulp.dest(__dirname + '/dist/font'));
  });

  gulp.task('build.img', function () {
    return gulp.src(__dirname + '/src/img/**/*')
      .pipe(gulp.dest(__dirname + '/dist/img'));
  });

  gulp.task('build.docs', [], function () {
    var gulpDocs = require('gulp-ngdocs');
    return gulp.src(__dirname + '/src/js/sailplay/**/*.js')
      .pipe(gulpDocs.process({
        html5Mode: false,
        scripts: ['https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.5.5/angular-animate.min.js', 'https://cdnjs.cloudflare.com/ajax/libs/marked/0.3.5/marked.min.js'],
        loadDefaults: {
          angularAnimate: false,
          marked: false
        }
      }))
      .pipe(gulp.dest('./docs'));
  });

  gulp.task('default', ['connect', 'watch', 'build']);
  
}());