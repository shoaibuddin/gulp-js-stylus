var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var stylus = require('gulp-stylus');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
var minifyCSS = require('gulp-minify-css');

// Scripts task to compile JS files
gulp.task('scripts', function () {
	gulp.src('src/js/*.js')
		.pipe(concat('all.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('dist/js'));
});

// Stylus and minifyCSS task to compile stylus files into CSS
gulp.task('stylus', function () {
  gulp.src('src/styl/**/*.styl')
    .pipe(stylus())
    //.pipe(minifyCSS({keepBreaks:true}))
    .pipe(minifyCSS())
    .pipe(gulp.dest('dist/css'));
});

// minify-css task to compile stylus files into CSS
gulp.task('minify-css', function() {
  gulp.src('dist/css/*.css')
    //.pipe(minifyCSS({keepBreaks:true}))
    .pipe(minifyCSS())
    .pipe(gulp.dest('./dist/css'))
});

// Stylus task to compile stylus files into CSS
gulp.task('imgminify', function () {
	gulp.src('src/images/*')
		.pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant({ quality: '20-50', speed: 4 })]
        }))
		.pipe(gulp.dest('dist/images'));
});

// Gulp Watch
gulp.task('watch', ['scripts','stylus','imgminify'], function() {
  gulp.watch('./**/*.styl', ['stylus']);
  gulp.watch('./**/*.js', ['scripts']);
  gulp.watch('./**/*', ['imgminify']);
});