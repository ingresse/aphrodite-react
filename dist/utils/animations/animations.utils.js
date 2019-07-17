"use strict";

exports.__esModule = true;
exports.default = void 0;

var _core = require("@emotion/core");

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n        from {\n            transform: rotate(0deg);\n        }\n\n        to {\n            transform: rotate(360deg);\n        }\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

/**
 * Animations Utils
 */
var spin = function spin(speed, effect, loop) {
  if (speed === void 0) {
    speed = '0.75s';
  }

  if (effect === void 0) {
    effect = 'linear';
  }

  if (loop === void 0) {
    loop = 'infinite';
  }

  var animation = (0, _core.keyframes)(_templateObject());
  return (
    /*#__PURE__*/
    (0, _core.css)("animation:", animation, " ", speed, " ", effect, " ", loop, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy91dGlscy9hbmltYXRpb25zL2FuaW1hdGlvbnMudXRpbHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUJjIiwiZmlsZSI6Ii4uLy4uLy4uL3NyYy91dGlscy9hbmltYXRpb25zL2FuaW1hdGlvbnMudXRpbHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBDb3JlIFBhY2thZ2VzICovXG5pbXBvcnQgeyBjc3MsIGtleWZyYW1lcyB9IGZyb20gJ0BlbW90aW9uL2NvcmUnO1xuXG4vKipcbiAqIEFuaW1hdGlvbnMgVXRpbHNcbiAqL1xuY29uc3Qgc3BpbiA9IChzcGVlZCA9ICcwLjc1cycsIGVmZmVjdCA9ICdsaW5lYXInLCBsb29wID0gJ2luZmluaXRlJykgPT4ge1xuICAgIGNvbnN0IGFuaW1hdGlvbiA9IGtleWZyYW1lc2BcbiAgICAgICAgZnJvbSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRvIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgICAgIH1cbiAgICBgO1xuXG4gICAgcmV0dXJuIGNzc2BcbiAgICAgICAgYW5pbWF0aW9uOiAke2FuaW1hdGlvbn0gJHtzcGVlZH0gJHtlZmZlY3R9ICR7bG9vcH07XG4gICAgYDtcbn07XG5cbi8qIE1hcHBpbmcgKi9cbmNvbnN0IGFuaW1hdGlvbnMgPSB7XG4gICAgc3Bpbixcbn07XG5cbi8qIEV4cG9ydGluZyAqL1xuZXhwb3J0IGRlZmF1bHQgYW5pbWF0aW9ucztcbiJdfQ== */"))
  );
};
/* Mapping */


var animations = {
  spin: spin
};
/* Exporting */

var _default = animations;
exports.default = _default;