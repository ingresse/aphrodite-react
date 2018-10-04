"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _buttonStyles = require("./buttonStyles.constants");

Object.keys(_buttonStyles).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _buttonStyles[key];
    }
  });
});