'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
const browserSync = require('browser-sync').create();

sass.compiler = require('node-sass');

gulp.task('sass', function () {
  return gulp.src('./src/assets/styles/pages/*.scss')
    .pipe(sourcemaps.init())
      .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./dist/assets/styles'))
    .pipe(browserSync.stream());
});

gulp.task('sass:watch', function () {
  browserSync.init({
    server: {
      baseDir: './'
    }
  });
  gulp.watch('./src/assets/styles/**/*.scss', gulp.series('sass'));
  gulp.watch('./*.html').on('change', browserSync.reload);
});