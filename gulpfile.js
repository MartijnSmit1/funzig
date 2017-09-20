
// Require
var gulp            = require('gulp');
var browserSync     = require('browser-sync');
var reload          = browserSync.reload;
var uglify          = require('gulp-uglify');
var rename          = require('gulp-rename');
var plumber         = require('gulp-plumber');
var sass            = require('gulp-sass');
var autoprefixer    = require('gulp-autoprefixer');



// HTML
gulp.task('html', function(){
    gulp.src('app/**/*.html')
    .pipe(reload({stream:true}));
});



// PHP
gulp.task('php', function(){
    gulp.src('app/**/*.php')
    .pipe(reload({stream:true}));
});



// Sass
gulp.task('sass', function(){
    gulp.src('app/sass/**/main.sass')
    .pipe(plumber())
    .pipe(sass().on('error', sass.logError))
    .pipe(rename({suffix: '.min'}))
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('app/css/'))
    .pipe(reload({stream:true}));
});



// JS
gulp.task('js', function(){
    gulp.src(['app/js/**/*js', '!app/js/**/*.min.js'])
    .pipe(plumber())
    .pipe(rename({suffix: '.min'}))
    // .pipe(uglify())
    .pipe(gulp.dest('app/js/'))
    .pipe(reload({stream:true}));
});



// Watch
gulp.task('watch', function(){
    gulp.watch('app/js/**/*.js', ['js'])
    gulp.watch('app/sass/**/*.sass', ['sass'])
    gulp.watch('app/**/*.html', ['html'])
    gulp.watch('app/**/*.php', ['php']);
});



// BrowserSync
gulp.task('browser-sync', function() {
    browserSync.init({

        // Main dir
        proxy: "localhost/funzig/app/"
    });
});



// Default
gulp.task('default', ['browser-sync', 'watch', 'html', 'sass', 'js']);