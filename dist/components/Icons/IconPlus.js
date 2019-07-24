"use strict";

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* Packages */

/* Icon Itself */
var IconPlus = function IconPlus(props) {
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
    id: "aph-icon-group-plus",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, _react.default.createElement("path", {
    id: "aph-icon-path-plus",
    fill: color,
    d: "M17.5,12.5 L22.5,12.5 C23.8807119,12.5 25,13.6192881 25,15 C25,16.3807119 23.8807119,17.5 22.5,17.5 L17.5,17.5 L17.5,22.5 C17.5,23.8807119 16.3807119,25 15,25 C13.6192881,25 12.5,23.8807119 12.5,22.5 L12.5,17.5 L7.5,17.5 C6.11928813,17.5 5,16.3807119 5,15 C5,13.6192881 6.11928813,12.5 7.5,12.5 L12.5,12.5 L12.5,7.5 C12.5,6.11928813 13.6192881,5 15,5 C16.3807119,5 17.5,6.11928813 17.5,7.5 L17.5,12.5 Z"
  })));
};
/* Exporting */


var _default = IconPlus;
exports.default = _default;