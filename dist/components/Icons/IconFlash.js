"use strict";

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* Packages */

/* Icon Itself */
var IconFlash = function IconFlash(props) {
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
    id: "aph-icon-flash-group",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd",
    strokeLinejoin: "round"
  }, _react.default.createElement("polygon", {
    id: "aph-icon-flash-polygon",
    stroke: color,
    strokeWidth: "2",
    points: "17 5 9 17 15 17 13 25 21 13 15 13"
  })));
};
/* Exporting */


var _default = IconFlash;
exports.default = _default;