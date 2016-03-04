'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var bourbon = require('bourbon').includePaths;
var neat = require('bourbon-neat').includePaths;

gulp.task('sass', function () {
  return gulp.src('./assets/sass/**/*')
    .pipe(sass({
      includePaths: [bourbon, neat],
    }))
    .pipe(gulp.dest('./assets/css'));
});

gulp.task('watch', function() {
  gulp.watch('./assets/sass/**/*', ['sass']);
});

gulp.task('default', ['sass', 'watch']);
