var gulp = require('gulp'),
    nodemon = require('gulp-nodemon'),
    gutil = require('gulp-util'),
    cp = require('child_process'),
    del = require('del'),
    rename = require('gulp-rename'),
    webpack = require('webpack-stream'),
    webpackConfig = require('./webpack.config.js'),
    less = require('gulp-less'),
    LessAutoprefix = require('less-plugin-autoprefix'),
    autoprefix = new LessAutoprefix({ browsers: ['last 2 versions'] });

/**************
 * Build Tasks
 */

/* ---------- JS --------- */
gulp.task('js:build', function(){
  return gulp.src('./app/app.js')
  .pipe(webpack(webpackConfig))
  .on('error', function handleError() {
    this.emit('end'); // Recover from errors
  })
  .pipe(gulp.dest('./'));
});
/* ---------- Styles --------- */
gulp.task('css:build', function(){
  gutil.log('-- copy vendor css --');
  gulp.src('./app/css/config/*.css').pipe(gulp.dest('./public/css'));
  
  gutil.log('-- compile Less and autoprefix --');
  return gulp.src('./app/css/*.less')
  .pipe(less({plugins: [autoprefix]}))
  .pipe(gulp.dest('./public/css'));
});
/****************
 * Watcher Tasks
 */

gulp.task('watch:js', function() {
  return gulp.watch('./app/**/*.js', ['js:build']);
});

gulp.task('watch:css', function() {
  return gulp.watch('./app/css/**/*.less', ['css:build']);
});

/***********************
 * Servers
 *    WebServer
 *    DataBase (Mocks) Server
 */
gulp.task('db:restore', function() {
  return gulp.src('./data/restore.json')
    .pipe(rename('db.json'))
    .pipe(gulp.dest('./data'));
});

gulp.task('mw:start', ['db:restore'], function(done) {
  cp.exec('node_modules/.bin/json-server --watch ./data/db.json --port 3011', {stdio: 'inherit'})
    .on('close', done);
});

gulp.task('serve:node', function(done) {
  nodemon({
    exec: './node_modules/.bin/babel-node ./server.js',
    watch: ['server.js'],
    ext: 'js html'
  });
});

/************
 * Main tasks
 *
 */

gulp.task('serve', ['serve:node', 'mw:start']);
gulp.task('watch', ['build', 'watch:js', 'watch:css']);
gulp.task('build', ['js:build', 'css:build']);
gulp.task('default', ['build', 'serve']);
