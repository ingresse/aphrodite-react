"use strict";

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* Packages */

/* Icon Itself */
var IconMinus = function IconMinus(props) {
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
    id: "aph-icon-group-minus",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, _react.default.createElement("rect", {
    id: "aph-icon-rect-minus",
    fill: color,
    rx: "2.5",
    x: "12.5",
    y: "5",
    width: "5",
    height: "20",
    transform: "translate(15.000000, 15.000000) rotate(-270.000000) translate(-15.000000, -15.000000) "
  })));
};
/* Exporting */


var _default = IconMinus;
exports.default = _default;