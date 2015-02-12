var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var stylus = require('gulp-stylus');

// Scripts task to compile JS files
gulp.task('scripts', function () {
	gulp.src('src/js/*.js')
		.pipe(concat('all.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('dist/js'));
});

// Stylus task to compile stylus files into CSS
gulp.task('stylus', function () {
	gulp.src('src/styl/**/*.styl')
		.pipe(stylus())
		.pipe(gulp.dest('dist/css'));
});

// Gulp Watch
gulp.task('watch', ['scripts','stylus'], function() {
  gulp.watch('./**/*.styl', ['stylus']);
  gulp.watch('./**/*.js', ['scripts']);
});