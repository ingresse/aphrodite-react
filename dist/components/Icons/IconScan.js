"use strict";

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* Packages */

/* Icon Itself */
var IconScan = function IconScan(props) {
  /**
   * Inherit props
   */
  var size = props.size,
      width = props.width,
      height = props.height,
      color = props.color;
  /**
   * Render
   */

  return _react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width || size,
    height: height || size,
    viewBox: "0 0 30 30"
  }, _react.default.createElement("g", {
    id: "aph-icon-group-scan",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd",
    strokeLinecap: "round"
  }, _react.default.createElement("polyline", {
    id: "aph-icon-polyline-one-scan",
    stroke: color,
    strokeWidth: "2",
    strokeLinejoin: "round",
    points: "20 5 25 5 25 10"
  }), _react.default.createElement("polyline", {
    id: "aph-icon-polyline-two-scan",
    stroke: color,
    strokeWidth: "2",
    strokeLinejoin: "round",
    points: "5 20 10 20 10 25",
    transform: "translate(7.500000, 22.500000) rotate(-180.000000) translate(-7.500000, -22.500000)"
  }), _react.default.createElement("polyline", {
    id: "aph-icon-polyline-tree-scan",
    stroke: color,
    strokeWidth: "2",
    strokeLinejoin: "round",
    points: "5 5 10 5 10 10",
    transform: "translate(7.500000, 7.500000) rotate(-90.000000) translate(-7.500000, -7.500000)"
  }), _react.default.createElement("polyline", {
    id: "aph-icon-polyline-four-scan",
    stroke: color,
    strokeWidth: "2",
    strokeLinejoin: "round",
    points: "20 20 25 20 25 25",
    transform: "translate(22.500000, 22.500000) rotate(-270.000000) translate(-22.500000, -22.500000)"
  }), _react.default.createElement("path", {
    id: "aph-icon-path-scan",
    d: "M3,15 L27,15",
    stroke: color,
    strokeWidth: "2"
  })));
};
/* Exporting */


var _default = IconScan;
exports.default = _default;