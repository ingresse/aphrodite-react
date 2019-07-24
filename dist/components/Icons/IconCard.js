"use strict";

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* Packages */

/* Icon Itself */
var IconCard = function IconCard(props) {
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
    id: "Icon-/-30-/-Card-/-Ocean",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, _react.default.createElement("rect", {
    id: "Rectangle",
    stroke: color,
    strokeWidth: "2",
    x: "3",
    y: "7",
    width: "24",
    height: "16",
    rx: "0.5"
  }), _react.default.createElement("rect", {
    id: "Rectangle",
    fill: color,
    x: "3",
    y: "11",
    width: "24",
    height: "2"
  }), _react.default.createElement("rect", {
    id: "Rectangle-Copy-4",
    fill: "#EF3C3E",
    x: "20",
    y: "16",
    width: "5",
    height: "2"
  })));
};
/* Exporting */


var _default = IconCard;
exports.default = _default;