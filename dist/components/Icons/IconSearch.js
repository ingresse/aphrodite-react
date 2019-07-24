"use strict";

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* Core Packages */

/* Icon Itself */
function IconSearch(props) {
  /**
   * Inherit props
   */
  var size = props.size,
      color = props.color;
  /**
   * Render
   */

  return _react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 30 30"
  }, _react.default.createElement("g", {
    id: "IconSearchGroup",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, _react.default.createElement("circle", {
    id: "IconSearchCircle",
    stroke: color,
    strokeWidth: "3.5",
    cx: "12.5",
    cy: "12.9",
    r: "6"
  }), _react.default.createElement("path", {
    d: "M17.5,17.9 L23,23.4",
    id: "IconSearchLiner",
    stroke: color,
    strokeWidth: "3.5"
  })));
}
/* Exporting Icon */


var _default = IconSearch;
exports.default = _default;