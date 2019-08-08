"use strict";

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* Packages */

/* Icon Itself */
var IconDelete = function IconDelete(props) {
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
    id: "Icon-/-30-/-Delete",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, _react.default.createElement("path", {
    id: "Combined-Shape",
    fill: color,
    d: "M15,0 C23.2842712,-1.52179594e-15 30,6.71572875 30,15 C30,23.2842712 23.2842712,30 15,30 C6.71572875,30 1.01453063e-15,23.2842712 0,15 C-1.01453063e-15,6.71572875 6.71572875,1.52179594e-15 15,0 Z M24.25,18 C24.6642136,18 25,17.6642136 25,17.25 L25,13.75 C25,13.3357864 24.6642136,13 24.25,13 L5.75,13 C5.33578644,13 5,13.3357864 5,13.75 L5,17.25 C5,17.6642136 5.33578644,18 5.75,18 L24.25,18 Z"
  })));
};
/* Exporting */


var _default = IconDelete;
exports.default = _default;