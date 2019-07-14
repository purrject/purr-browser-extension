// Karma configuration
// Generated on Fri Dec 23 2016 14:42:44 GMT+0100 (CET)

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['mocha', 'chai', 'sinon'],
    files: [
      'src/test/common.js',
      {pattern: 'src/test/*Spec.js'},
      {pattern: 'src/*.js'}
    ],
    exclude: [],
    reporters: ['dots'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    singleRun: true,
    concurrency: Infinity
  });
};
