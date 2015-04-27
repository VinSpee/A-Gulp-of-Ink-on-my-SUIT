var gulp = require('gulp');

gulp.task('styles', function() {
	var handleErrors = require('../util/handleErrors');
	var paths = require('../config/paths');
	var autoprefixer = require('gulp-autoprefixer');
	var plumber = require('gulp-plumber');
	var rename = require('gulp-rename');
	var postcss = require('gulp-postcss');
	var sourcemaps = require('gulp-sourcemaps');
	var postcss = require('gulp-postcss');
	var autoprefixer = require('gulp-autoprefixer');
	var calc = require('postcss-calc');
	var colorFunction = require('postcss-color-function');
	var customMedia = require('postcss-custom-media');
	var customProperties = require('postcss-custom-properties');
	var customSelectors = require('postcss-custom-selectors');
	var fontVariant = require('postcss-font-variant');
	var inline = require('postcss-import');
	var nested = require('postcss-nested');
	var simpleVars = require('postcss-simple-vars');

	return gulp.src(paths.source.main_style)
		.pipe(plumber(handleErrors))
		.pipe(sourcemaps.init())
		.pipe(postcss([
			inline({
				path: ['app/styles']
			}),
			customProperties(),
			calc(),
			simpleVars(),
			customSelectors(),
			nested,
			customMedia(),
			colorFunction(),
			fontVariant()
		]))
		.pipe(autoprefixer())
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest(paths.dest.styles));
});
