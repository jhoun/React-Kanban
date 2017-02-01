const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const nodemon = require('gulp-nodemon');

gulp.task('sass', () => {
  return gulp.src('./sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public/css'))
})

gulp.task('browserSync', () => {
  browserSync.init(['./public'], {
    server: {
      baseDir: './public'
    }
  })
})

gulp.task('watch',['browserSync'], () => {
  gulp.watch('./sass/*.scss', ['sass'])
})

gulp.task('start', function () {
  nodemon({
    script: 'server.js'
  , ext: 'js html'
  , env: { 'NODE_ENV': 'development' }
  })
})


gulp.task('default',['sass', 'watch', 'start']);