'use strict';

var gulp = require('gulp');
var postcss = require('gulp-postcss');
var cssmin = require('gulp-cssmin');
var salad = require('postcss-salad')(require('./salad.config.json'));

gulp.task('compile', function () {
  return gulp.src('./src/*.css')
    .pipe(postcss([salad]))
    .pipe(cssmin())
    .pipe(gulp.dest('./lib'));
});

gulp.task('copyfont', function () {
  return gulp.src('./src/fonts/**')
    .pipe(cssmin())
    .pipe(gulp.dest('./lib/fonts'));
});


gulp.task('build', gulp.series(['compile', 'copyfont'], function (done) { done() }));
gulp.task('watch', function () {
  gulp.watch('./src/*.css', gulp.series(['compile'], function () {

  }));
});
