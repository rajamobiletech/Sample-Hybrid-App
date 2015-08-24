define(["ember", "jquery"], function (Ember, $) {

  "use strict";
  /*globals document:false, window:false */

  var app = Ember.Application.create({
  });
  app.Router = Ember.Router.extend({enableLogging:true});
  app.Router.map(function () {
    this.resource('home', {path:'/' });
  });

  window.App = app;

  return app;
});
