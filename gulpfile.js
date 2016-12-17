var gulp = require('gulp');
var less = require('gulp-less');
var plumber = require('gulp-plumber');
var watch = require('gulp-watch');

gulp.task('styles', function() {
    gulp.src('less/*.less')
        .pipe(plumber())
        .pipe(less())
        .pipe(gulp.dest('css/'));
});

gulp.task('watch', function() {
    gulp.watch('less/**/*.less', ['styles']);
});