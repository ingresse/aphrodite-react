"use strict";

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* Packages */

/* Icon */
var IconCheckThin = function IconCheckThin(props) {
  var color = props.color,
      size = props.size;
  return _react.default.createElement("svg", {
    viewBox: "0 0 20 16",
    width: size,
    height: size,
    xmlns: "http://www.w3.org/2000/svg"
  }, _react.default.createElement("g", {
    id: "IconCheckThinWrapper",
    stroke: "none",
    strokeWidth: "1",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    fill: "none",
    fillRule: "evenodd"
  }, _react.default.createElement("g", {
    id: "IconCheckThinWrapperGroup",
    transform: "translate(-5.000000, -7.000000)",
    stroke: color,
    strokeWidth: "4"
  }, _react.default.createElement("polyline", {
    id: "Path",
    points: "7.5 14 13.5 21 23 9"
  }))));
};
/* Exporting */


var _default = IconCheckThin;
exports.default = _default;