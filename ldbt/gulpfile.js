(function(){

  'use strict';

  var gulp = require('gulp');
  var concat = require('gulp-concat');
  var ngAnnotate = require('gulp-ng-annotate');
  var less = require('gulp-less');
  var path = require('path');
  var ngHtml2Js = require("gulp-ng-html2js");
  var minifyHtml = require("gulp-minify-html");


  gulp.task('watch', function(){
    gulp.watch(__dirname + '/src/js/**/*.js', ['build.javascript']);
    gulp.watch(__dirname + '/src/html/**/*.html', ['build.javascript']);
    gulp.watch(__dirname + '/src/less/**/*.less', ['build.less']);
    gulp.watch(__dirname + '/src/font/**/*', ['build.fonts']);
    gulp.watch(__dirname + '/src/img/**/*', ['build.img']);
  });

  gulp.task('build.javascript', [ 'javascript.concat', 'javascript.ngAnnotate' ]);

  gulp.task('javascript.concat',['build.templates'], function() {
    return gulp.src(__dirname + '/src/js/**/*.js')
      .pipe(concat('ldbt.sailplay.js'))
      .pipe(gulp.dest(__dirname + '/dist/'));
  });

  gulp.task('javascript.ngAnnotate',[ 'javascript.concat' ], function () {
    return gulp.src(__dirname + '/dist/ldbt.sailplay.js')
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
        moduleName: "htmlTemplates",
        prefix: "/html/"
      }))
      .pipe(concat("html.min.js"))
      .pipe(gulp.dest("./src/js/"));
  });


  gulp.task('build.less', function () {
    return gulp.src(__dirname + '/src/less/ldbt.sailplay.less')
      .pipe(less({
        paths: [ path.join(__dirname, 'less', 'includes') ]
      }))
      .pipe(gulp.dest(__dirname + '/dist/'));
  });

  gulp.task('build.fonts', function () {
    return gulp.src(__dirname + '/src/font/**/*')
      .pipe(gulp.dest(__dirname + '/dist/font'));
  });

  gulp.task('build.img', function () {
    return gulp.src(__dirname + '/src/img/**/*')
      .pipe(gulp.dest(__dirname + '/dist/img'));
  });

  gulp.task('default', ['watch', 'build.javascript', 'build.less', 'build.fonts', 'build.img']);

  gulp.task('build', ['build.javascript', 'build.less', 'build.fonts', 'build.img']);

}());