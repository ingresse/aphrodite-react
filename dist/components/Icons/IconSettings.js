"use strict";

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* Packages */

/* Icon Itself */
var IconSettings = function IconSettings(props) {
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
    id: "aph-icon-group-settings",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, _react.default.createElement("path", {
    id: "aph-icon-path-settings",
    fill: color,
    d: "M21,22 L21,21.5 C21,20.9477153 21.4477153,20.5 22,20.5 C22.5522847,20.5 23,20.9477153 23,21.5 L23,22 L24,22 C24.5522847,22 25,22.4477153 25,23 C25,23.5522847 24.5522847,24 24,24 L23,24 L23,24.5 C23,25.0522847 22.5522847,25.5 22,25.5 C21.4477153,25.5 21,25.0522847 21,24.5 L21,24 L6,24 C5.44771525,24 5,23.5522847 5,23 C5,22.4477153 5.44771525,22 6,22 L21,22 Z M14,14 L14,13.5 C14,12.9477153 14.4477153,12.5 15,12.5 C15.5522847,12.5 16,12.9477153 16,13.5 L16,14 L24,14 C24.5522847,14 25,14.4477153 25,15 C25,15.5522847 24.5522847,16 24,16 L16,16 L16,16.5 C16,17.0522847 15.5522847,17.5 15,17.5 C14.4477153,17.5 14,17.0522847 14,16.5 L14,16 L6,16 C5.44771525,16 5,15.5522847 5,15 C5,14.4477153 5.44771525,14 6,14 L14,14 Z M7,6 L7,5.5 C7,4.94771525 7.44771525,4.5 8,4.5 C8.55228475,4.5 9,4.94771525 9,5.5 L9,6 L24,6 C24.5522847,6 25,6.44771525 25,7 C25,7.55228475 24.5522847,8 24,8 L9,8 L9,8.5 C9,9.05228475 8.55228475,9.5 8,9.5 C7.44771525,9.5 7,9.05228475 7,8.5 L7,8 L6,8 C5.44771525,8 5,7.55228475 5,7 C5,6.44771525 5.44771525,6 6,6 L7,6 Z"
  })));
};
/* Exporting */


var _default = IconSettings;
exports.default = _default;