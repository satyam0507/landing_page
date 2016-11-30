'use strict';

var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var sass = require('gulp-sass');
var runSequence = require('run-sequence');
var autoprefixer = require('gulp-autoprefixer');

var configPath = require('./config/init.json');

gulp.task('nodemon', function () {
    nodemon({
        script: 'server.js',
        ext:'js'
    });
});



gulp.task('sass', function () {
    return gulp.src(configPath.scssPath + configPath.scssFile)
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest(configPath.cssPath));
});

gulp.task('sass:watch', function () {
    gulp.watch(configPath.scssPath + '*.scss', ['sass']);
});

gulp.task('js', () => {
    return gulp.src(configPath.esJsPath + configPath.esJsFile)
        .pipe(gulp.dest(configPath.jsPath));
});

gulp.task('default', function () {
    runSequence(
        ['sass', 'js'],
        'sass:watch',
        'nodemon'
    )
})