"use strict";

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* Packages */

/* Icon */
var IconArrowDown = function IconArrowDown(props) {
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
  }, _react.default.createElement("g", {
    id: "aph-icon-arrow-down-group",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, _react.default.createElement("polyline", {
    id: "aph-icon-arrow-down-polyline",
    stroke: color,
    strokeWidth: "2",
    points: "10 12 15 17.7142857 20 12"
  })));
};
/* Exporting Component */


var _default = IconArrowDown;
exports.default = _default;