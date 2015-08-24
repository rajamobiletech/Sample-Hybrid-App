define(["Q", "bridge/cordova"], function(Q, cordova) {
  "use strict";
  /* global console:true */

  var configCache = {};

  // Call native service and authendicate user
  var authenticate = function(ccoId, password) {
    var deffered = Q.defer();
    var success = function(message) {
      deffered.resolve(message);
    };
    var fail = function(error) {
      console.error(error);
      deffered.reject(error);
    };
    console.log("native services - authenticate");
    cordova().exec(success, fail, "NativeAuthentication", "authenticate", [ccoId, password,device.uuid,device.model]);
    return deffered.promise;
  };

  // Call native serivce and enable / disable toggle indicator for ios network activity.
  var toggleIndicator = function(value) {
    var deferred = Q.defer();
    var success = function(message) {
      deferred.resolve(message);
    };
    cordova().exec(success,null,"NetworkActivityIndicator","toggleIndicator",[value]);
    return deferred.promise;
  };


  return {
    authenticate: authenticate,
    toggleIndicator:toggleIndicator
  };
});
