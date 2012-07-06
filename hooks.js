var path = require('path');
var eejs = require("ep_etherpad-lite/node/eejs");

exports.eejsBlock_embedPopup = function (hook_name, args, cb) {
  args.content = args.content + eejs.require("ep_sociallinks/templates/embedButtons.html");
  return cb();
};

exports.eejsBlock_scripts = function (hook_name, args, cb) {
  args.content = args.content + eejs.require("ep_sociallinks/templates/scripts.html", {}, module);
  return cb();
};

