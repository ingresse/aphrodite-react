"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* Packagesl */

/* Icon */
var IconCheckThin = function IconCheckThin(props) {
  return _react.default.createElement("svg", {
    viewBox: "0 0 15 15",
    width: props.size,
    height: props.size,
    xmlns: "http://www.w3.org/2000/svg"
  }, _react.default.createElement("path", {
    d: "m1.5 7.7646715 3.92708969 3.7353285 8.07291031-8",
    fill: "none",
    stroke: props.color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1.8"
  }));
};
/* Exporting */


var _default = IconCheckThin;
exports.default = _default;