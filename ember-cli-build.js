/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');


module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    // Add options here
  });
 
	app.import(app.bowerDirectory + '/dropzone/dist/basic.css');
	app.import(app.bowerDirectory + '/dropzone/dist/dropzone.css');
	app.import(app.bowerDirectory + '/dropzone/dist/dropzone.js');

  return app.toTree();
};
