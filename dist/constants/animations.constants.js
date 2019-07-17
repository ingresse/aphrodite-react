"use strict";

exports.__esModule = true;
exports.ANIMATIONS = void 0;

var _core = require("@emotion/core");

function _templateObject2() {
  var data = _taggedTemplateLiteralLoose(["\n    0% {\n        transform: scaleY(0.1);\n    }\n\n    25% {\n        transform: scaleY(1);\n    }\n\n    50% {\n        transform: scaleY(0.95);\n    }\n\n    100% {\n        transform: scaleY(1);\n    }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n    0% {\n        opacity  : 0;\n        transform: translate3d(0, 75%, 0);\n    }\n    100% {\n        opacity  : 1;\n        transform: none;\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

/* Animation Fade In Up */
var fadeInUp = (0, _core.keyframes)(_templateObject());
/* Animation Pull Up */

var pullUp = (0, _core.keyframes)(_templateObject2());
var ANIMATIONS = {
  FADE_IN_UP: {
    animation: fadeInUp + " 0.75s ease"
  },
  PULL_UP: {
    willChange: 'transform-origin',
    animation: pullUp + " 0.75s ease",
    transformOrigin: '50% 100%'
  }
};
exports.ANIMATIONS = ANIMATIONS;