var gulp = require('gulp');

gulp.task('minify', function(){
	var csso         = require('gulp-csso');
	var filter       = require('gulp-filter');
	var handleErrors = require('../util/handleErrors');
	var imagemin     = require('gulp-imagemin');
	var minifyHTML   = require('gulp-minify-html');
	var paths        = require('../config/paths');
	var processHTML  = require('gulp-processhtml');
	var rename       = require('gulp-rename');
	var size         = require('gulp-size');
	var plumber      = require('gulp-plumber');

	var images  = filter('**/*.{svg,png,gif,jpg,jpeg}');
	var pages   = filter('**/*.html');
	var styles  = filter('**/*.css');
	return gulp.src('./build/**')
		.pipe(plumber({
			errorHandler: handleErrors
		}))
		.pipe(styles)
		.pipe(csso())
		.pipe(rename('main.min.css'))
		.pipe(gulp.dest(paths.dest.styles))
		.pipe(size())
		.pipe(styles.restore())
		.pipe(images)
		.pipe(imagemin())
		.pipe(size())
		.pipe(images.restore())
		.pipe(pages)
		.pipe(minifyHTML({ empty: false }))
		.pipe(gulp.dest(paths.dest.app))
		.pipe(size())
		.pipe(pages.restore());
});
