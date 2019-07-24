"use strict";

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* Packages */

/* Icon */
var IconArrowUp = function IconArrowUp(props) {
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
    id: "aph-icon-arrow-up-group",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, _react.default.createElement("polyline", {
    id: "aph-icon-arrow-up-polyline",
    stroke: color,
    strokeWidth: "2",
    transform: "translate(15.000000, 14.857143) rotate(-180.000000) translate(-15.000000, -14.857143)",
    points: "10 12 15 17.7142857 20 12"
  })));
};
/* Exporting Component */


var _default = IconArrowUp;
exports.default = _default;