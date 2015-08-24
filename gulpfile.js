var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var minifyCss = require('gulp-minify-css');

gulp.task('compile-juiced', function() {
  gulp.src('./sass/juiced.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
        cascade: false
    }))
    .pipe(minifyCss())
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('watch-juiced', function() {
  gulp.watch('./sass/*.scss', ['compile-juiced']);
});

gulp.task('default', ['compile-juiced', 'watch-juiced']);
gulp.task('watch', ['compile-juiced', 'watch-juiced']);
