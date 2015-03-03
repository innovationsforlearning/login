var gulp   = require('gulp');
var jshint = require('gulp-jshint');
var karma = require('karma');


// tasks
gulp.task('lint', function() {
  return gulp
    .src(['gulpfile.js', 'src/javascript/*.js', 'spec/*_spec.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('karma', function() {
  karma.server.start({
    configFile: process.cwd() + '/karma.conf.js',
    singleRun: true
  });
});

// default
gulp.task('default', ['lint'], function() {
  gulp.watch(['src/javascript/*.js', 'spec/*_spec.js'], function() {
    gulp.run('lint', 'karma');
  });
});
