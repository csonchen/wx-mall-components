const gulp = require('gulp');
const pug = require('gulp-pug');
const stylus = require('gulp-stylus');
const rename = require('gulp-rename');
const jsmin = require('gulp-uglify-es').default;
const jsonmin = require('gulp-jsonminify');
const cssmin = require('gulp-clean-css');
const imagemin = require('gulp-imagemin');
const del = require('del');

const doWxss = (srcPath, remainPath, distPath) => {
  return gulp.src([srcPath, remainPath])
      .pipe(stylus({
        'include css': true
      }))
      .pipe(cssmin())
      .pipe(rename({
        extname: '.wxss'
      }))
      .pipe(gulp.dest(distPath))
}

const doCopy = (srcPath, distPath, ext) => {
  return gulp.src(`${srcPath}/*.${ext}`)
      .pipe(gulp.dest(distPath))
}

const doWxml = (srcPath, remainPath, distPath) => {
  return gulp.src([srcPath, remainPath])
      .pipe(pug({
        pretty: true
      }))
      .pipe(wxmlmin({
        removeComments: true,
        keepClosingSlash: true,
        caseSensitive: true
      }))
      .pipe(rename({
        extname: '.wxml'
      }))
      .pipe(gulp.dest(distPath))
}

const doJson = (srcPath, distPath) => {
  return gulp.src(srcPath)
      .pipe(jsonmin())
      .pipe(gulp.dest(distPath))
}

const doJs = (srcPath, distPath) => {
  return gulp.src(srcPath)
      .pipe(jsmin())
      .pipe(gulp.dest(distPath))
}

const doImage = (srcPath, distPath) => {
  return gulp.src(srcPath)
      .pipe(imagemin())
      .pipe(gulp.dest(distPath))
}

const doClean = (cleanPath) => {
  return del([cleanPath], {
    force: true
  })
}

module.exports = {
  doWxss,
  doWxml,
  doJson,
  doJs,
  doClean,
  doImage,
  doCopy,
}

