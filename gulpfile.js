var gulp = require('gulp');
var webpack = require("webpack");
var webpackConfig = require('./webpack.config.js');
var connect = require('gulp-connect');

gulp.task('webpack', function () {
  webpack(webpackConfig, function () {
    console.log('webpack start!!')
  });
});

gulp.task('connect', function() {
  connect.server({
    root: './src',
    port: 1995
  });
});

gulp.task('watch', function () {
  gulp.watch(['src/app/**'], ['webpack']);
});

gulp.task('default', ['connect', 'webpack', 'watch']);