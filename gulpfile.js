var gulp = require('gulp');
var plumber = require('gulp-plumber');
var rename = require('gulp-rename');
var autoPrefixer = require('gulp-autoprefixer');
//if node version is lower than v.0.1.2
require('es6-promise').polyfill();
var cssComb = require('gulp-csscomb');
var cmq = require('gulp-merge-media-queries');
var cleanCss = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var minifyHtml = require('gulp-minify-html');
var inlineimg = require('gulp-inline-image-html');
var inlinesource = require('gulp-inline-source');

gulp.task('html',function(){
    gulp.src(['src/index.html'])
        .pipe(plumber({
            handleError: function (err) {
                console.log(err);
                this.emit('end');
            }
        }))
        .pipe(inlinesource())
        // .pipe(inlineimg('./'))
        .pipe(minifyHtml())
        .pipe(gulp.dest('./'))
});

gulp.task('default',function(){
    gulp.watch('src/index.html',['html']);
});
