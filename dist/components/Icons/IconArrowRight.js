"use strict";

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* Packages */

/* Icon */
var IconArrowRight = function IconArrowRight(props) {
  var color = props.color,
      size = props.size,
      styles = props.styles;
  return _react.default.createElement("svg", {
    style: styles,
    width: size,
    height: size,
    viewBox: "0 0 30 30",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg"
  }, _react.default.createElement("path", {
    id: "aph-icon-arrow-right-path",
    fill: "none",
    fillRule: "evenodd",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "4",
    d: "M13 22l8-7-8-7"
  }));
};
/* Exporting Component */


var _default = IconArrowRight;
exports.default = _default;