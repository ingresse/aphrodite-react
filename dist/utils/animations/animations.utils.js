"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _core = require("@emotion/core");

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n        from {\n            transform: rotate(0deg);\n        }\n\n        to {\n            transform: rotate(360deg);\n        }\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/**
 * Animations Utils
 */
var spin = function spin() {
  var speed = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '0.75s';
  var animation = (0, _core.keyframes)(_templateObject());
  return (
    /*#__PURE__*/
    (0, _core.css)("animation:", animation, " ", speed, " linear infinite;" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy91dGlscy9hbmltYXRpb25zL2FuaW1hdGlvbnMudXRpbHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUJjIiwiZmlsZSI6Ii4uLy4uLy4uL3NyYy91dGlscy9hbmltYXRpb25zL2FuaW1hdGlvbnMudXRpbHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBDb3JlIFBhY2thZ2VzICovXG5pbXBvcnQgeyBjc3MsIGtleWZyYW1lcyB9IGZyb20gJ0BlbW90aW9uL2NvcmUnO1xuXG4vKipcbiAqIEFuaW1hdGlvbnMgVXRpbHNcbiAqL1xuY29uc3Qgc3BpbiA9IChzcGVlZCA9ICcwLjc1cycpID0+IHtcbiAgICBjb25zdCBhbmltYXRpb24gPSBrZXlmcmFtZXNgXG4gICAgICAgIGZyb20ge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgICAgIH1cblxuICAgICAgICB0byB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAgICAgICB9XG4gICAgYDtcblxuICAgIHJldHVybiBjc3NgXG4gICAgICAgIGFuaW1hdGlvbjogJHthbmltYXRpb259ICR7c3BlZWR9IGxpbmVhciBpbmZpbml0ZTtcbiAgICBgO1xufTtcblxuLyogTWFwcGluZyAqL1xuY29uc3QgYW5pbWF0aW9ucyA9IHtcbiAgICBzcGluLFxufTtcblxuLyogRXhwb3J0aW5nICovXG5leHBvcnQgZGVmYXVsdCBhbmltYXRpb25zO1xuIl19 */"))
  );
};
/* Mapping */


var animations = {
  spin: spin
};
/* Exporting */

var _default = animations;
exports.default = _default;