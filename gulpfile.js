var dest  = './www';
var src   = './src';
var test  = './spec';

var autoprefixer  = require('gulp-autoprefixer');
var browserSync   = require('browser-sync');
var changed       = require('gulp-changed');
var concat        = require('gulp-concat');
var gulp          = require('gulp');
var imagemin      = require('gulp-imagemin');
var jshint        = require('gulp-jshint');
var karma         = require('karma');
var minifycss     = require('gulp-minify-css');
var rename        = require('gulp-rename');
var sass          = require('gulp-sass');
var sourcemaps    = require('gulp-sourcemaps');
var uglify        = require('gulp-uglify');

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

gulp.task('serve', function () {
  browserSync({
    // proxy: "localhost:4000/www/"
    server: {
      baseDir: dest
    },
    port: 3333,
    files: [
      src + '/scss/**/*.scss',
      src + '/javascript/**/*.js',
      src + '/html/**'
    ]
  });
});

gulp.task('markup', function () {
  gulp
    .src(src + '/html/**/*.html')
    .pipe(gulp.dest(dest + '/'))
    .pipe(browserSync.reload({stream:true}));
});

gulp.task('styles', function () {
  gulp
    .src(src + '/scss/index.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({ style: 'expanded' }))
    .pipe(sourcemaps.write())
    .pipe(autoprefixer({ browsers: ['last 2 version']}))
    .pipe(gulp.dest(dest + '/css'))
    .pipe(rename({ suffix: '.min'}))
    .pipe(minifycss())
    .pipe(gulp.dest(dest + '/css'))
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

gulp.task('scripts', function () {
  gulp
    .src(src + '/javascript/**/*.js')
    .pipe(concat('main.js'))
    .pipe(gulp.dest(dest + '/js'))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest(dest + '/js'))
    .pipe(browserSync.reload({stream:true}));
});

gulp.task('watch', ['serve'], function() {
  gulp.watch(src + '/scss/**', ['styles']);
  gulp.watch(src + '/images/*', ['images']);
  gulp.watch(src + '/javascript/**/*.js', ['scripts']);
  gulp.watch([src + '/javascript/**/*.js', test + '/*_spec.js'], ['lint']);
  gulp.watch(src + '/html/**', ['markup']);
});

gulp.task('default', ['styles', 'images', 'scripts', 'markup', 'watch']);
