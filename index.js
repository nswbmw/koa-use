'use strict';

module.exports = function (app) {
  var use = app.use.bind(app);
  app.use = function (fn) {
    return Array.isArray(fn) ? (fn.forEach(use), app) : use(fn);
  };
  return app;
};