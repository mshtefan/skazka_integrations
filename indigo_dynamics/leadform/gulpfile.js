var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');
var LessAutoprefix = require('less-plugin-autoprefix');
var autoprefix = new LessAutoprefix({ browsers: ['last 2 versions'] });
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

gulp.task('compress', function() {
  return gulp.src(__dirname + '/js/common.js')
    .pipe(uglify())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest(__dirname + '/js'));
});

gulp.task('less', function () {
  return gulp.src(__dirname + '/less/main.less')
    .pipe(less({
      paths: [path.join(__dirname, 'less', 'includes')]
    }))
    .pipe(less({
      plugins: [autoprefix]
    }))
    .pipe(gulp.dest( __dirname + '/css'));
});

gulp.task('build', ['less', 'compress']);