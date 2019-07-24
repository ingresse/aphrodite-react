"use strict";

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* Packages */

/* Icon Itself */
var IconLock = function IconLock(props) {
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
    id: "aph-icon-lock-group",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, _react.default.createElement("rect", {
    id: "aph-icon-lock-rect",
    stroke: color,
    strokeWidth: "2",
    x: "8",
    y: "14",
    width: "14",
    height: "10",
    rx: "1"
  }), _react.default.createElement("path", {
    id: "aph-icon-lock-path",
    fill: color,
    d: "M9,13 L9,11 C9,7.6862915 11.6862915,5 15,5 C18.3137085,5 21,7.6862915 21,11 L21,13 L19,13 L19,11 C19,8.790861 17.209139,7 15,7 C12.790861,7 11,8.790861 11,11 L11,13 L9,13 Z"
  })));
};
/* Exporting */


var _default = IconLock;
exports.default = _default;