const gulp = require('gulp');
const pug = require('gulp-pug');
const stylus = require('gulp-stylus');
const rename = require('gulp-rename');

// 输出文件目录
const distPath = 'dist'
// 源文件目录
const pugFiles = 'src/**/*.pug'
const stylusFiles = 'src/**/*.styl'
const jsFiles = 'src/**/*.js'
const jsonFiles = 'src/**/*.json'
const imgFiles = 'src/**/*.?(png|jpg|gif)'


// 源文件处理函数
function doPug(path, distPath) {
  return gulp.src(path)
    .pipe(pug({
      pretty: true
    }))
    .pipe(rename({
      extname: '.wxml'
    }))
    .pipe(gulp.dest(distPath))
}

function doStylus(path, distPath) {
  return gulp.src(path)
    .pipe(stylus({
      'include css': true
    }))
    .pipe(rename({
      extname: '.wxss'
    }))
    .pipe(gulp.dest(distPath))
}

function doJS(path, distPath) {
  return gulp.src(path)
    .pipe(gulp.dest(distPath))
}

function doJSON(path, distPath) {
  return gulp.src(path)
    .pipe(gulp.dest(distPath))
}
 
function doImg(path, distPath) {
  return gulp.src(path)
    .pipe(gulp.dest(distPath))
}

// 创建任务
gulp.task('pug', function() {
  return doPug(pugFiles, distPath)
})

gulp.task('stylus', function() {
  return doStylus(stylusFiles, distPath)
})

gulp.task('[copy js]', function() {
  return doJS(jsFiles, distPath)
})

gulp.task('[copy json]', function() {
  return doJSON(jsonFiles, distPath)
})

gulp.task('[copy img]', function() {
  return doImg(imgFiles, distPath)
})

gulp.task('watch', gulp.series(
  gulp.parallel('pug', 'stylus', '[copy js]', '[copy json]', '[copy img]'),
  () => {
    gulp.watch(pugFiles, gulp.parallel('pug')),
    gulp.watch(stylusFiles, gulp.parallel('stylus')),
    gulp.watch(jsFiles, gulp.parallel('[copy js]')),
    gulp.watch(jsonFiles, gulp.parallel('[copy json]')),
    gulp.watch(imgFiles, gulp.parallel('[copy img]'))
  }
))

gulp.task('default', gulp.parallel(
  'pug',
  'stylus',
  '[copy js]',
  '[copy json]',
  '[copy img]',
))