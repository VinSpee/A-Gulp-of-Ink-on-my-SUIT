var gulp = require('gulp');

gulp.task('inline', function(){
  var plumber = require('gulp-plumber');
  var inlineCSS = require('gulp-inline-css');

  return gulp.src('./build/*.html')
    .pipe(plumber({
      errorHandler: handleErrors
    }))
    .pipe(inlineCSS())
    .pipe(gulp.dest('build/'));
});

