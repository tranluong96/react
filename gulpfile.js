var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var changed = require('gulp-changed');
// -----------------------------------
var concat = require('gulp-concat');
var babel = require('gulp-babel');
var eslint = require('gulp-eslint');
var notify = require('gulp-notify');
var newer = require('gulp-newer');
var sourcemaps = require('gulp-sourcemaps');
var babelify = require('babelify');
var browserify = require('browserify');


// compile scss -> css 
var SCSS_SRC = './src/assets/scss/**/*.scss';
var SCSS_DEST = './src/assets/css';

gulp.task('compile_scss', function(){
  return gulp.src(SCSS_SRC)
    .pipe(sass().on('error',sass.logError))
    .pipe(minifyCSS())
    .pipe(rename({suffix:'.min'}))
    .pipe(changed(SCSS_DEST))
    .pipe(gulp.dest(SCSS_DEST))
});



gulp.task('default', [ 'watch_scss' ]);

// compile jsx->csss

var onError = function(){
    notify.onError({
        title: "Error",
        message: "<%= error %>"
    })(err);
    this.emit('end');
};
var jsFiles = {
    "js"    : './src/assets/js/**/*.js',
    "jsx"   : './src/assets/jsx/**/*.jsx'
}

var buildPaths = {
    "jsx"   : './src/assets/js',
    "js"    : './dist'
}

gulp.task('jsx', function(){
    return gulp.src(jsFiles.jsx)
        .pipe(babel())
        .pipe(gulp.dest(buildPaths.jsx))
});

gulp.task('scripts', ['jsx'], function(){
    return gulp.src(jsFiles.js)
        .pipe(sourcemaps.init())
        .pipe(concat('app.min.js'))
        .pipe(babel())
        .pipe(uglify())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(buildPaths.js))
});

gulp.task('default', ['scripts'], function() {});

gulp.task('watch', function(){
    gulp.watch(jsFiles.js, ['scripts']).on('change', function(e){
        console.log('file '+e.path + ' modified');
    });
    gulp.watch(jsFiles.jsx, ['scripts'], function(){
        console.log('file '+e.path+' modified');
    });
        gulp.watch(SCSS_SRC,['compile_scss']);
})