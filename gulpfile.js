var gulp = require('gulp');
var sass = require('gulp-sass');
var { src, dest, series, parallel} = require ('gulp');
var uglify = require('gulp-uglify');
var cleanCSS = require('gulp-clean-css'); //css 壓縮
var rename = require('gulp-rename');
var spritesmith = require('gulp.spritesmith');
sass.compiler = require('node-sass');

function compileJS(cb) {
  return src('src/*.js')
  .pipe(uglify())
  .pipe(rename({extname: '.min.js'}))
  .pipe(dest('dist/j  s'))
  cb()
}

function SASS() {
  return src('scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(dest('./dist/css'));
}

function minifyCSS(cb) {
  return  gulp.src('./dist/css/*.css')
  .pipe(cleanCSS({compatibility: 'ie8'}))
  .pipe(gulp.dest('./dist/clean-css'));
}

function defaultTask(cb) {
  // place code for your default task here
  cb();
}

function spritePng() {
  var spriteData = gulp.src('./image/*.png')
  .pipe(spritesmith({
    imgName: 'sprite.png',
    cssName: 'sprite_png.css'
  }));
  return spriteData.pipe(gulp.dest('./smith_sprite'));
}

function spriteJpg() {
  var spriteData = gulp.src('./image/*.jpg')
  .pipe(spritesmith({
    imgName: 'sprite.jpg',
    cssName: 'sprite_jpg.css'
  }));
  return spriteData.pipe(gulp.dest('./smith_sprite'));
}


exports.default = defaultTask
exports.SASS = SASS
exports.minifyCSS = minifyCSS
exports.compileCSS = series(SASS, minifyCSS)
exports.compileJS = compileJS
exports.spritePng = spritePng
exports.spriteJpg = spriteJpg
exports.sprite = series(spritePng, spriteJpg)
