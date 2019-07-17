"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _layout = require("./layout.reducer");

Object.keys(_layout).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _layout[key];
    }
  });
});