var gulp = require('gulp');

gulp.task('styles', function() {
	var handleErrors = require('../util/handleErrors');
	var paths        = require('../config/paths');
	var autoprefixer = require('gulp-autoprefixer');
	var dedupe       = require('rework-deduplicate');
	var ease         = require('rework-plugin-ease');
	var imprt        = require('rework-npm');
	var inherit      = require('rework-inherit');
	var myth         = require('myth');
	var namespace    = require('rework-namespace');
	var plumber      = require('gulp-plumber');
	var rename       = require('gulp-rename');
	var rework       = require('gulp-rework');
	var suit         = require('rework-suit');

	var ns = '';
	return gulp.src(paths.source.main_style)
		.pipe(plumber(handleErrors))
		.pipe(rework(
			suit({
				path: [
					'./app/styles',
					'node_modules',
				]
			}),
			inherit(),
			myth(),
			ease(),
			dedupe(),
			namespace(ns),
			{sourcemap: true})
		)
		.pipe(gulp.dest(paths.dest.styles));
});
