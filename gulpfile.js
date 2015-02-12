var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var stylus = require('gulp-stylus');

gulp.task('scripts', function () {
	gulp.src('src/*.js')
		.pipe(concat('all.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('dist/js'));
});

// Get and render recursive stylus files
gulp.task('stylus', function () {
	gulp.src('src/styl/**/*.styl')
		.pipe(stylus())
		.pipe(gulp.dest('dist/css'));
});