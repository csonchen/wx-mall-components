const gulp = require('gulp');
const pug = require('gulp-pug');
const stylus = require('gulp-stylus');
const rename = require('gulp-rename');

// 输出文件目录
const distPath = 'dist'
// 源文件目录
const pugFiles = 'src/**/*.pug'
const stylusFiles = 'src/**/*.stylus'
const jsFiles = 'src/**/*.js'
const jsonFiles = 'src/**/*.json'


// 源文件处理函数
function doPug(path, distPath) {
  return gulp.src(path)
    .pipe(pug())
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
 

// 创建任务
gulp.task('pug', function() {
  return doPug(pugFiles, distPath)
})

gulp.task('stylus', function() {
  return doStylus(stylusFiles, distPath)
})

gulp.task('js', function() {
  return doJS(jsFiles, distPath)
})

gulp.task('json', function() {
  return doJSON(jsonFiles, distPath)
})

gulp.task('watch', gulp.series(
  gulp.parallel('pug', 'stylus', 'js', 'json'),
  () => {
    gulp.watch(pugFiles, gulp.parallel('pug')),
    gulp.watch(stylusFiles, gulp.parallel('stylus')),
    gulp.watch(jsFiles, gulp.parallel('js')),
    gulp.watch(jsonFiles, gulp.parallel('json'))
  }
))

gulp.task('default', gulp.parallel(
  'pug',
  'stylus',
  'js',
  'json'
))