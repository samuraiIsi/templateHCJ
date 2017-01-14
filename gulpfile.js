var gulp = require('gulp'),
	sass = require('gulp-ruby-sass'),
	uglify = require('gulp-uglify'),
	modernizr = require('gulp-modernizr');
	loading = require('gulp-load-plugins')();

gulp.task('scripts', function(){
	return gulp.src('src/app/**/*.js')
	.pipe(uglify())
	.pipe(gulp.dest('build/js'));  
});
// src/theme/scss/**/**/*.scss' 
gulp.task('styles', function(){
	return sass('src/theme/scss/**/**/**/*.scss', {style: 'compressed'})
	.pipe(gulp.dest('css/'));

});

gulp.task('modernizr', function() {
	var settings = { 
    "options" : [
      "setClasses",
      "addTest",
      "html5printshiv",
      "testProp",
      "fnBind"
    ]
  };
  gulp.src('src/app/**/*.js')
    .pipe(modernizr('modernizr.js', settings))
    .pipe(uglify())
    .pipe(gulp.dest("build/"))
});

gulp.task('watch', function(){
	gulp.watch('src/app/**/*.js', ['scripts']);
	gulp.watch('src/theme/scss/**/**/**/*.scss', ['styles']); // L5.3
});

gulp.task('serve', function() {
    loading.connect.server({
        port: 8044,
        root: './'
    });
});

gulp.task('default', ['scripts', 'styles', 'modernizr', 'watch', 'serve']);