'use strict';

/**
 * This loader inject some common stuff into each scss files in webpack building.
 *
 */

var path = require('path');
var utils = require('loader-utils');

module.exports = function (source) {
  this.cacheable();

  var config = utils.getLoaderConfig(this, 'injectCommonScssLoader');

  var injectStatements = config.files.map((filePath) => {
    if (/^\.\//.test(filePath)) {
      return `@import '${path.resolve(filePath)}';`;
    } else {
      return `@import '${filePath}';`;
    }
  });

  var finalScss = `${injectStatements.join('\n')}
${source}`

  return finalScss;
}
