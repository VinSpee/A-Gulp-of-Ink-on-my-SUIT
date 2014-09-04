var gulp = require('gulp');

gulp.task('watch', function() {
  var paths = require('../config/paths');

  gulp.watch(paths.source.styles,  ['styles']);
  gulp.watch(paths.source.images,  ['images']);
  gulp.watch(paths.source.views,   ['views']);

});
