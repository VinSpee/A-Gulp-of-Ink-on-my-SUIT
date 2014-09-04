var gulp = require('gulp');

gulp.task('build', function(cb){
	var seq  = require('run-sequence');
	seq(
		'clean',
		['images', 'styles', 'views'],
		'watch',
		cb
	);
});
