'use strict';

const { src, task } = require('gulp');

const eslint = require('gulp-eslint');

task('lint', () => src('src/*.js')
  .pipe(eslint())
  .pipe(eslint.format())
  .pipe(eslint.failAfterError()));

