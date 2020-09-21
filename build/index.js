const gulp = require('gulp');
const path = require('path');
const { doClean, doWxss, doWxml, doImage, doJson, doJs } = require('./task');

const bundlePath = path.resolve(__dirname, '../bundle');
const srcPath = path.resolve(__dirname, '../src');

module.exports = {
  build: gulp.series(
    doClean(`${bundlePath}/**/*`),
    gulp.parallel(
      doWxss(
        `${srcPath}/*.styl`,
        `!${srcPath}/_*.styl`,
        bundlePath
      ),
      doWxml(
        `${srcPath}/*.pug`,
        `!${srcPath}/_*.pug`,
        bundlePath
      ),
      doImage(
        `${srcPath}/*.png`,
        bundlePath
      ),
      doJson(
        `${srcPath}/*.json`,
        bundlePath
      ),
      doJs(
        `${srcPath}/*.js`,
        bundlePath
      )
    )
  )
}