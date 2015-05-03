'use strict';

var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var ts = require('gulp-typescript');
var ngAnnotate = require('gulp-ng-annotate');
var concat = require('gulp-concat');

gulp.task('default', function () {
    return gulp.src('src/**/*.ts')
        .pipe(sourcemaps.init())
        .pipe(ts({sourceRoot: '.'}))
        .pipe(ngAnnotate())
        .pipe(concat('bundle.js'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist'));
});
