cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "ionplug.Ionplug",
      "file": "plugins/ionplug/www/Ionplug.js",
      "pluginId": "ionplug",
      "clobbers": [
        "Ionplug"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-add-swift-support": "2.0.2",
    "cordova-plugin-whitelist": "1.3.3",
    "ionplug": "0.0.1"
  };
});