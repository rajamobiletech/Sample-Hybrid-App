require.config({
    config: {
        text: {
            useXhr: function(url, protocol, hostname, port) {
                return true;
            }
        }
    },
    paths: {
        //Path mappings for module names not found directly under baseUrl
        jquery: 'libs/jquery-1.9.1.min',
        handlebars: 'libs/handlebars-1.0.0-rc.4',
        ember: 'libs/ember-1.0.0-rc.6',
        Q: "libs/q/q",
        underscore: "libs/underscore-min",
        text: 'libs/text-loader-plugin'
    },
    shim: {
        // Configure the dependencies, exports, and custom initialization for older lib
        'ember': {
            deps: ['jquery', 'handlebars'],
            exports: 'Ember'
        },
        underscore: {
            exports: "_"
        },
        handlebars: {
            exports: "Handlebars"
        }
    }
});
var onDeviceReady = function() {
    require(["app", 'text!templates/main.tpl','ember', "home-controller"],
        function(app, mainTemplate, Ember) {
            app.ApplicationController = Ember.Controller.extend({
            });
            app.ApplicationView = Ember.View.extend({
                template: Ember.Handlebars.compile(mainTemplate),
                templateName: "application",
                didInsertElement: function() {
                    var controller = this.controller;
                    console.log("onDeviceReady - ember application - didInsertElement");
                }
            });
        }, function(err) {
            console.error(err);
        });
};


// This is an event that fires when PhoneGap is fully loaded.
document.addEventListener("deviceready", onDeviceReady, false);