const gulp = require('gulp')
const plumber = require('gulp-plumber')
pug = require('gulp-pug'),
pugLinter = require('gulp-pug-linter'),
bemValidator = require('gulp-html-bem-validator'),

function pug2html(cb) {
    return gulp.src('../../src/pages/*.pug')
        .pipe(plumber())
        .pipe(pugLinter({reporter: 'default'}))
        .pipe(pug())
        .pipe(bemValidator())
        .pipe(gulp.dest('../../build'))
}

//exports.pug2html = pug2html
module.exports = pug2html;