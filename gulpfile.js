const gulp = require('gulp'),
      pug  = require('gulp-pug'),
      sass = require('gulp-sass'),
      autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function() {
    gulp.src('./scss/*.scss')
    .pipe(sass({
        ouputStyle:'comporessed'
    }))
    .pipe(gulp.dest('./css'))
});

gulp.task('pug', function() {
    gulp.src('./jade/**/*.pug')
        .pipe(pug({
            pretty : true
        }))
        .pipe(gulp.dest('./'))
});

gulp.task('default', function() {
    gulp.watch('./scss/**/*.scss',['sass']);
    gulp.watch('./jade/**/*.pug', ['pug']);
});