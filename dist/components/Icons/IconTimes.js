"use strict";

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* Packages */

/* Icon Itself */
var IconTimes = function IconTimes(props) {
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
    id: "aph-icon-times-group",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, _react.default.createElement("g", {
    id: "aph-icon-times-subgroup",
    transform: "translate(9.000000, 9.000000)",
    stroke: color,
    strokeWidth: "4"
  }, _react.default.createElement("path", {
    id: "aph-icon-times-path-one",
    d: "M0,12 L12,0 L0,12 Z",
    transform: "translate(6.000000, 6.000000) rotate(-90.000000) translate(-6.000000, -6.000000)"
  }), _react.default.createElement("path", {
    id: "aph-icon-times-path-two",
    d: "M0,12 L12,0 L0,12 Z",
    transform: "translate(6.000000, 6.000000) rotate(-180.000000) translate(-6.000000, -6.000000)"
  }))));
};
/* Exporting */


var _default = IconTimes;
exports.default = _default;