var gulp = require('gulp'),
    nodemon = require('gulp-nodemon'),
    gutil = require('gulp-util'),
    less = require('gulp-less'),
    LessAutoprefix = require('less-plugin-autoprefix'),
    autoprefix = new LessAutoprefix({ browsers: ['last 2 versions'] });

gulp.task('watch:css', function() {
  return gulp.watch('./src/css/**/*', ['css:build']);
});

gulp.task('css:build', function(){
  gutil.log('-- copy vendor css --');
  gulp.src('./src/css/config/*.css').pipe(gulp.dest('./public/css'));
  
  gutil.log('-- compile Less and autoprefix --');
  return gulp.src('./src/css/*.less')
  .pipe(less({plugins: [autoprefix]}))
  .pipe(gulp.dest('./public/css'));
});

/**
 * Node Server (Express)
 */

gulp.task('serve:node', function(done) {
  nodemon({
    exec: './node_modules/.bin/babel-node ./server.js',
    watch: ['server.js'],
    ext: 'js html'
  });
});

/**
 * Main tasks
 */

gulp.task('serve', ['serve:node']);
gulp.task('watch', ['build', 'watch:css']);
gulp.task('build', ['css:build']);
gulp.task('default', ['serve']);
