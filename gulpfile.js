var dest = './www';
var src = './src';

var gulp = require('gulp');
var jshint = require('gulp-jshint');
var karma = require('karma');

var sass          = require('gulp-sass');
var autoprefixer  = require('gulp-autoprefixer');
var sourcemaps    = require('gulp-sourcemaps');
var browserSync   = require('browser-sync');

var uglify        = require('gulp-uglify');

var changed       = require('gulp-changed');
var imagemin      = require('gulp-imagemin');

gulp.task('lint', function() {
  gulp
    .src(['gulpfile.js', src + '/javascript/*.js', 'spec/*_spec.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('karma', function() {
  karma.server.start({
    configFile: process.cwd() + '/karma.conf.js',
    singleRun: true
  });
});

gulp.task('browserSync', function () {
  browserSync({
    server: {
      baseDir: dest
    }
  });
});

gulp.task('sass', function () {
  gulp
    .src(src + '/scss/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(sourcemaps.write())
    .pipe(autoprefixer({ browsers: ['last 2 version']}))
    .pipe(gulp.dest(dest + '/css'))
    .pipe(browserSync.reload({stream:true}));
});

gulp.task('uglify', function () {
  gulp
    .src(src + '/javascript')
    .pipe(uglify())
    .pipe(gulp.dest(dest + '/js'))
    .pipe(browserSync.reload({stream:true}));
});

gulp.task('images', function () {
  gulp
    .src(src + '/images/*')
    .pipe(changed(dest + '/img'))
    .pipe(imagemin())
    .pipe(gulp.dest(dest + '/img'))
    .pipe(browserSync.reload({stream:true}));
});

// default
// gulp.task('default', function() {
//   gulp.watch(['src/javascript/*.js', 'spec/*_spec.js'], function() {
//     gulp.run('lint', 'karma');
    // gulp.watch(['src/javascript/*.js', 'spec/*_spec.js'], ['lint', 'karma']);

  // });
// });

// gulp.task('default', ['browserSync'], function() {
//   gulp.watch(src + '/scss/**/*.scss', ['sass']);
//   gulp.watch(config.images.src, ['images']);
//   gulp.watch(config.markup.src, ['markup']);
  // gulp.watch(['src/javascript/*.js', 'spec/*_spec.js'], ['lint', 'karma', browserSync.reload]);
// });
