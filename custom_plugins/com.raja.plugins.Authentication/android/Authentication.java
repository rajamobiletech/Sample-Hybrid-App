package com.raja.plugins;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;

public class Authentication extends CordovaPlugin {


    @Override
    public boolean execute(String action, JSONArray args,
                           final CallbackContext callbackContext) throws JSONException {

        final String username = args.getString(0);
        final String password = args.getString(1);

        final String deviceId = args.getString(2);
        final String deviceName = args.getString(3);


        cordova.getThreadPool().execute(new Runnable() {
            @Override
            public void run() {

                if(username.equals("admin") && password.equals("admin")) {
                    callbackContext.success();
                } else {
                    callbackContext.error();
                }
            }
        });


        return true;
    }
}
