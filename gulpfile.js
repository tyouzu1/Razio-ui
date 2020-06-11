const gulp = require('gulp');
const del = require('del') //删除文件
const util = require('gulp-util') //log
const jsonlint = require('gulp-jsonlint') //jsonlint
const combiner = require('stream-combiner2') //组合管理pipe
const jsonminify = require('gulp-jsonminify2') //压缩JSON
const htmlmin = require('gulp-htmlmin') //压缩html
const sass = require('gulp-sass') //编译sass
const autoprefixer = require('gulp-autoprefixer') //css兼容
const cleanCss = require('gulp-clean-css') //压缩css
const stripDebug = require('gulp-strip-debug') //去除console
const babel = require('gulp-babel') //兼容 ES
const uglify = require('gulp-uglify') //压缩 js
const runSequence = require('run-sequence') //并行队列
const rename = require('gulp-rename')

const colors = util.colors
const testPath = 'example/assets/lib/razio-ui/dist'

function handleError(error) {
  util.log(colors.red('error:'))
  util.log('filName: ', colors.red(error.fileName))
  util.log('lineNumber: ', colors.red(error.lineNumber))
  util.log('message:', colors.red(error.message))
  util.log('plugin: ', colors.red(error.plugin))
}

gulp.task('clean', function () {
  return del(['./dist/**'])
})

gulp.task('cleanDev', function () {
  return del([testPath + '/**'])
})

gulp.task('watch', function () {
  gulp.watch('./src/**/*.json', 'json')
  gulp.watch('./src/**/*.js', 'scripts')
  gulp.watch('./src/**/*.wxss', 'wxss')
  gulp.watch('./src/**/*.scss', 'wxss')
  gulp.watch('./src/**/*.wxml', 'templates')
  gulp.watch('./src/assets/**', 'assets')
})

/**
 * jsonlint
 */
gulp.task('jsonlint', function () {
  var combined = combiner.obj([
    gulp.src(['./src/**/*.json']),
    jsonlint(),
    jsonlint.reporter(),
    jsonlint.failAfterError()
  ])
  combined.on('error', handleError)
})

/**
 * jsonminify
 */
gulp.task('jsonBuild', ['jsonlint'], function () {
  return gulp.src('./src/**/*.json')
    .pipe(jsonminify())
    .pipe(gulp.dest('./dist'))
})

/**
 * Copy assets to dist
 */
gulp.task('assets', function () {
  return gulp.src('./src/assets/**')
    .pipe(gulp.dest('./dist/assets'))
})

gulp.task('templatesBuild', function () {
  return gulp.src('./src/**/*.wxml')
    .pipe(htmlmin({
      collapseWhitespace: true, // 压缩HTML
      removeComments: true, // 清除HTML注释
      keepClosingSlash: true, // Keep the trailing slash on singleton elements
    }))
    .pipe(gulp.dest('./dist'))
})

/**
 * 编译 压缩 css
 */
gulp.task('wxssBuild', function () {
  var combined = combiner.obj([
    gulp.src(['./src/**/*.{wxss,scss}']),
    sass().on('error', sass.logError),
    autoprefixer(['iOS >= 8', 'Android >= 4.1']),
    cleanCss(),
    rename((path) => path.extname = '.wxss'),
    gulp.dest('./dist')
  ])
  combined.on('error', handleError)
})

/**
 * 剔除console 压缩 js
 */
gulp.task('scriptsBuild', function () {
    var combined = combiner.obj([
      gulp.src(['./src/**/*.js']),
      stripDebug(),
      babel(),
      uglify({
        compress: true, // 压缩
      }),
      gulp.dest('./dist')
    ]);
  
    combined.on('error', handleError);
})

gulp.task('buildTask', [
  'jsonBuild',
  'assets',
  'templatesBuild',
  'wxssBuild',
  'scriptsBuild'
])

gulp.task('build', ['clean'], function () {
  runSequence('buildTask')
})

gulp.task('watch', function () {
  gulp.watch('./src/**/*.json', ['json'])
  gulp.watch('./src/assets/**', ['assetsDev'])
  gulp.watch('./src/**/*.wxml', ['templatesDev'])
  gulp.watch('./src/**/*.wxss', ['wxssDev'])
  gulp.watch('./src/**/*.scss', ['wxssDev'])
  gulp.watch('./src/**/*.js', ['scriptsDev'])
})

gulp.task('jsonlint', () => {
  var combined = combiner.obj([
    gulp.src(['./src/**/*.json']),
    jsonlint(),
    jsonlint.reporter(),
    jsonlint.failAfterError()
  ]);

  combined.on('error', handleError);
});

gulp.task('jsonDev', ['jsonlint'], () => {
  return gulp.src('./src/**/*.json')
    .pipe(jsonminify())
    .pipe(gulp.dest(testPath))
});

gulp.task('assetsDev', () => {
  return gulp.src(['./src/assets/**', "!./src/assets/**/*.scss"])
    .pipe(gulp.dest(testPath + '/assets'))
});

gulp.task('templatesDev', () => {
  return gulp.src('./src/**/*.wxml')
    .pipe(htmlmin({
      collapseWhitespace: true, // 压缩HTML
      removeComments: true, // 清除HTML注释
      keepClosingSlash: true, // Keep the trailing slash on singleton elements
    }))
    .pipe(gulp.dest(testPath))
});

gulp.task('wxssDev', () => {
  var combined = combiner.obj([
    gulp.src(['./src/**/*.{wxss,scss}']),
    sass().on('error', sass.logError),
    autoprefixer([
      'iOS >= 8',
      'Android >= 4.1'
    ]),
    cleanCss(),
    rename((path) => path.extname = '.wxss'),
    gulp.dest(testPath)
  ]);

  combined.on('error', handleError);
});

gulp.task('scriptsDev', function () {
  var combined = combiner.obj([
    gulp.src(['./src/**/*.js']),
    babel(),
    uglify(),
    gulp.dest(testPath)
  ]);

  combined.on('error', handleError);
});

gulp.task('dev', [
  'jsonDev',
  'assetsDev',
  'templatesDev',
  'wxssDev',
  'scriptsDev'
]);

gulp.task('default', ['cleanDev', 'watch'], () => {
  runSequence('dev');
});