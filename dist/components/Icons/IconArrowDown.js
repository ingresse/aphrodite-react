"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* Packages */

/* Icon */
var IconArrowDown = function IconArrowDown(props) {
  var color = props.color,
      size = props.size;
  return _react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 30 30"
  }, _react.default.createElement("path", {
    fill: "none",
    fillRule: "evenodd",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M10 12l5 5.714L20 12"
  }));
};
/* Exporting Component */


var _default = IconArrowDown;
exports.default = _default;