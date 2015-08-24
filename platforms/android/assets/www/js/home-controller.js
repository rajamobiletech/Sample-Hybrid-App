define(['text!templates/home.tpl', "ember", "app", "jquery", "Q", "native-services"], function (homeTemplate, Ember, app, $, Q, nativeServices) {
  //"use strict";
  /*global Ember: true */
  app.HomeController = Ember.ObjectController.extend({
    login: function() {
      var self = this;
      console.log("login button pressed");
      nativeServices.authenticate(self.userId, self.password)
      .then(function() {
        console.log("Login successful");
      })
      .fail(function() {
        console.log("Login failure");
      })
    }
  });

  app.HomeView = Ember.View.extend({
    template: Ember.Handlebars.compile(homeTemplate),
    templateName: "home",
    parentView: {},

    didInsertElement: function () {
      console.log("HomeController - didInsertElement");
    }
  });

  app.HomeRoute = Ember.Route.extend({
    setupController: function(controller) {
      console.log("HomeController - setupController");
    }
  });
  return app;
});
