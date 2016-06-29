var gulp = require('gulp');
var sass = require('gulp-sass');
var wait = require('gulp-wait');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync');

gulp.task('default',['sass', 'sync'], function() {
	gulp.watch("./*.html", browserSync.reload);
	gulp.watch("./styles/sass/**/*.scss", "sass");
});

gulp.task('sass', function() {
	gulp.src('./styles/index.scss')
	.pipe(sourcemaps.init())
	.pipe(wait(200))
	.pipe(sass())
	.pipe(sourcemaps.write())
	.pipe(gulp.dest('./styles/'))
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