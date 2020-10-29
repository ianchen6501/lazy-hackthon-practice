var gulp = require('gulp');
var sass = require('gulp-sass');
var { src, dest, series, parallel} = require ('gulp');
var uglify = require('gulp-uglify');
var cleanCSS = require('gulp-clean-css'); //css 壓縮
var rename = require('gulp-rename') 
sass.compiler = require('node-sass');

function compileJS(cb) {
  return src('src/*.js')
  .pipe(uglify())
  .pipe(rename({extname: '.min.js'}))
  .pipe(dest('dist'))
  cb()
}

function SASS() {
  return src('scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(dest('./css'));
}

function minifyCSS(cb) {
  return  gulp.src('css/*.css')
  .pipe(cleanCSS({compatibility: 'ie8'}))
  .pipe(gulp.dest('clean-css'));
}

function defaultTask(cb) {
  // place code for your default task here
  cb();
}


exports.default = defaultTask
exports.SASS = SASS
exports.minifyCSS = minifyCSS
exports.compileCSS = series(SASS, minifyCSS)
exports.compileJS = compileJS
