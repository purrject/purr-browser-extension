'use strict';

const { src, task } = require('gulp');

const eslint = require('gulp-eslint');
const karma = require('karma');

task('lint', () => src('src/*.js')
  .pipe(eslint())
  .pipe(eslint.format())
  .pipe(eslint.failAfterError()));

task('test', (done) => new karma.Server({
  configFile: __dirname + '/karma.conf.js',
  singleRun: true,
  browsers: [process.env.BROWSER || 'Firefox']
}, done).start());
