const gulp = require('../../src/node_modules/gulp')
const sass = require('../../src/node_modules/gulp-sass')

module.exports = function styles() {
    return gulp.src('src/styles/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('build/css'))
}