cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-android-sensor-listeners.registry",
      "file": "plugins/cordova-plugin-android-sensor-listeners/www/registry.js",
      "pluginId": "cordova-plugin-android-sensor-listeners",
      "runs": true
    },
    {
      "id": "cordova-plugin-android-sensor-listeners.sensors",
      "file": "plugins/cordova-plugin-android-sensor-listeners/www/sensors.js",
      "pluginId": "cordova-plugin-android-sensor-listeners",
      "clobbers": [
        "sensors"
      ]
    },
    {
      "id": "cordova-plugin-geolocation.geolocation",
      "file": "plugins/cordova-plugin-geolocation/www/android/geolocation.js",
      "pluginId": "cordova-plugin-geolocation",
      "clobbers": [
        "navigator.geolocation"
      ]
    },
    {
      "id": "cordova-plugin-geolocation.PositionError",
      "file": "plugins/cordova-plugin-geolocation/www/PositionError.js",
      "pluginId": "cordova-plugin-geolocation",
      "runs": true
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-whitelist": "1.3.4",
    "cordova-plugin-android-sensor-listeners": "0.1.0",
    "cordova-plugin-geolocation": "4.0.2"
  };
});