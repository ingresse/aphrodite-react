"use strict";

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* Packages */

/* Icon Itself */
var IconUnlock = function IconUnlock(props) {
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
    id: "aph-icon-group-unlock",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, _react.default.createElement("rect", {
    id: "aph-icon-rect-unlock",
    stroke: color,
    strokeWidth: "2",
    x: "8",
    y: "14",
    width: "14",
    height: "10",
    rx: "1"
  }), _react.default.createElement("path", {
    id: "aph-icon-path-unlock",
    fill: color,
    d: "M21,10 C21,10.5522847 20.5522847,11 20,11 C19.4477153,11 19,10.5522847 19,10 C19,8.34314575 17.6568542,7 16,7 L15,7 C12.790861,7 11,8.790861 11,11 L11,13 L9,13 L9,11 C9,7.6862915 11.6862915,5 15,5 L16,5 C18.7614237,5 21,7.23857625 21,10 Z"
  })));
};
/* Exporting */


var _default = IconUnlock;
exports.default = _default;