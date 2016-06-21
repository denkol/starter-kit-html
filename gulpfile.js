var gulp         = require('gulp');
var plumber      = require('gulp-plumber');
var rename       = require('gulp-rename');
var concat       = require('gulp-concat');
var uglify       = require('gulp-uglify');
var cssmin       = require('gulp-cssmin');
var imagemin     = require('gulp-imagemin');
var sass         = require('gulp-sass');
var browserSync  = require('browser-sync');
var csslint      = require('gulp-csslint'); //csslint

var postcss      = require('gulp-postcss'); //PostCSS
var csswring     = require('csswring');
var autoprefixer = require('autoprefixer'); //Autoprefixer
var cssnext      = require('cssnext');
var precss       = require('precss');

//Based project directory
var baseDir = "./src";

gulp.task('browser-sync', function() {
  browserSync({
    notify: false,
    server: {
      baseDir: baseDir
    }
  });
});

gulp.task('bs-reload', function () {
  browserSync.reload();
});

gulp.task('images', function() {
  return gulp.src(baseDir + '/img/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest(baseDir + '/img/'))
});

gulp.task('csslint', function() {
  return gulp.src(baseDir + '/css/style.css') 
    .pipe(csslint('csslintrc.json'))
    .pipe(csslint.reporter());
});

gulp.task('postcss', ['csslint'], function(){
  var processors = [
    autoprefixer 
  ];
  return gulp.src(baseDir + '/css/*.css')
    .pipe(postcss(processors))
    .pipe(gulp.dest(baseDir + '/css/'))
});

gulp.task('styles', function(){
  gulp.src([baseDir + '/sass/**/*.sass'])
    .pipe(plumber({
      errorHandler: function (error) {
        console.log(error.message);
        this.emit('end');
    }}))
    
    .pipe(sass({outputStyle: 'expanded'}))
    .pipe(gulp.dest(baseDir + '/css/'))
    .pipe(rename({suffix: '.min'}))
    .pipe(cssmin())
    .pipe(gulp.dest(baseDir + '/css/'))
    .pipe(browserSync.reload({stream:true}))
});

gulp.task('scripts', function(){
  return gulp.src(baseDir + '/js/libs/**/*.js')
    .pipe(plumber({
      errorHandler: function (error) {
        console.log(error.message);
        this.emit('end');
    }}))
    .pipe(concat('libs.js'))
    .pipe(gulp.dest(baseDir + '/js/'))
    .pipe(uglify())
    .pipe(gulp.dest(baseDir + '/js/'))
    .pipe(browserSync.reload({stream:true}))
});

gulp.task('default', ['browser-sync'], function(){
  gulp.watch(baseDir + "/sass/**/*.sass", ['styles']);
  gulp.watch(baseDir + "/css/**/*.css", ['postcss']);
  gulp.watch(baseDir + "/js/libs/**/*.js", ['scripts']);
  gulp.watch(baseDir + "/*.html", ['bs-reload']);
});