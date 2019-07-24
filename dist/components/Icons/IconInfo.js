"use strict";

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* Packages */

/* Icon Itself */
var IconInfo = function IconInfo(props) {
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
    viewBox: "0 0 20 20"
  }, _react.default.createElement("g", {
    id: "aph-icon-info-group",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, _react.default.createElement("path", {
    id: "aph-icon-info-path",
    fill: color,
    d: "M10,3.25 C10.9664983,3.25 11.75,4.03350169 11.75,5 C11.75,5.96649831 10.9664983,6.75 10,6.75 C9.03350169,6.75 8.25,5.96649831 8.25,5 C8.25,4.03350169 9.03350169,3.25 10,3.25 Z M8.6875,8.75 L11.3125,8.75 C11.5541246,8.75 11.75,8.94587542 11.75,9.1875 L11.75,16.3125 C11.75,16.5541246 11.5541246,16.75 11.3125,16.75 L8.6875,16.75 C8.44587542,16.75 8.25,16.5541246 8.25,16.3125 L8.25,9.1875 C8.25,8.94587542 8.44587542,8.75 8.6875,8.75 Z"
  })));
};
/* Exporting */


var _default = IconInfo;
exports.default = _default;