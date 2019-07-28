'use strict';

const { src, dest, task } = require('gulp');

const del = require('del');
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

task('build', () => src(['src/*.js', 'src/manifest.json', 'src/icon.png'])
  .pipe(dest('dist')));

task('clean', () => del('dist'));
