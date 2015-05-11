// include gulp
var gulp = require('gulp');
 
// include plug-ins
var connect      = require('gulp-connect');
var browserify   = require('browserify');
var transform    = require('vinyl-transform');
var changed      = require('gulp-changed');
var concat       = require('gulp-concat');
var stripDebug   = require('gulp-strip-debug');
var uglify       = require('gulp-uglify');
var rename       = require('gulp-rename');

var browserified = transform(function(filename) {
  var b = browserify(filename);
  return b.bundle();
});

// JS concat, strip debugging code and minify
gulp.task('minify', function() {
var jsPath = {jsSrc:['./app/scripts/app.js','./app/scripts/**/*.js'], jsDest:'./app/build'};
  gulp.src(jsPath.jsSrc)
    .pipe(browserified)
    .pipe(concat('ngscripts.js'))
    //.pipe(stripDebug())
    //.pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest(jsPath.jsDest))
    .pipe(connect.reload());
});

gulp.task('connect', connect.server({
  root: ['app'],
  port: 8000,
  livereload: true
}));

gulp.task('watch', function() {
  gulp.watch('./app/scripts/**/*.js', ['minify']);
});

gulp.task('build', ['minify']);

// default gulp task server
gulp.task('server', ['build', 'connect', 'watch']);





