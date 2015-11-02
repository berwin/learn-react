var gulp = require('gulp');
var webpack = require("webpack");
var webpackConfig = require('./webpack.config.js');

gulp.task('webpack', function () {
  webpack(webpackConfig, function () {
    console.log('webpack start!!')
  });
});

gulp.task('watch', function () {
  gulp.watch(['src/app/**'], ['webpack']);
});

gulp.task('default', ['webpack', 'watch']);