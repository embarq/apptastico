var gulp = require('gulp');
var sass = require('gulp-sass');
var wait = require('gulp-wait');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync');

gulp.task('default',['sass', 'sync'], function() {
	gulp.watch(["components/*.html", "*.html"], browserSync.reload);
	gulp.watch("styles/**/*.scss", ["sass"]);
});

gulp.task('sass', function() {
	gulp.src('styles/index.scss')
		.pipe(wait(200))
		.pipe(sass())
		.pipe(gulp.dest('styles/'))
		.pipe(browserSync.reload({stream: true}));
});

gulp.task('sync', function() {
	browserSync({
		server: {
			baseDir: "./"
		},
		notify: false
	});
});