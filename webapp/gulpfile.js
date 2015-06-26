'use strict';

var gulp = require('gulp');
var syrup = require('syrup');

syrup.gulp.init(
  gulp,
   { compressJs: false, sourceMaps: false },
  // any instances of %TITLE% which exist in index.html will be replaced with the corresponding
  // value
  { '%TITLE%': 'Sample Web Application' },
  { build: '../public' }
);
