"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* Packages */

/* Icon */
var IconCheck = function IconCheck(props) {
  return _react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: props.size,
    height: props.size,
    viewBox: "0 0 13 11"
  }, _react.default.createElement("g", {
    fill: props.color,
    fillRule: "evenodd"
  }, _react.default.createElement("path", {
    d: "M3.291 3.462L6.54 6.71a.998.998 0 0 1-.009 1.418L5.13 9.528a1.008 1.008 0 0 1-1.42.009L.463 6.291a.998.998 0 0 1 .01-1.42l1.4-1.4a1.008 1.008 0 0 1 1.42-.009z"
  }), _react.default.createElement("path", {
    d: "M11.893 2.115c.394.394.4 1.028.01 1.417l-6.37 6.37a.997.997 0 0 1-1.418-.01l-1.401-1.4a1.002 1.002 0 0 1-.01-1.418l6.37-6.37a.997.997 0 0 1 1.418.01l1.4 1.4z"
  })));
};
/* Exporting */


var _default = IconCheck;
exports.default = _default;