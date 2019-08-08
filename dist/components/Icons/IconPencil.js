"use strict";

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* Packages */

/* Icon */
var IconPencil = function IconPencil(props) {
  var color = props.color,
      size = props.size;
  return _react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 30 30",
    width: size,
    height: size
  }, _react.default.createElement("g", {
    id: "aph-icon-polygon-group",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, _react.default.createElement("path", {
    id: "aph-icon-path-refresh",
    stroke: color,
    strokeWidth: "2",
    transform: "translate(13.427922, 16.427922) rotate(-315.000000) translate(-13.427922, -16.427922)",
    d: "M9.92792206,3.92792206 L16.9279221,3.92792206 C18.0324916,3.92792206 18.9279221,4.82335256 18.9279221,5.92792206 L18.9279221,20.0888985 C18.9279221,20.4844205 18.8106482,20.8710621 18.5909276,21.1999397 L13.8436734,28.3056257 C13.6902707,28.5352389 13.3797749,28.5970196 13.1501618,28.4436168 C13.0955478,28.4071297 13.0486578,28.3602397 13.0121707,28.3056257 L8.26491652,21.1999397 C8.04519592,20.8710621 7.92792206,20.4844205 7.92792206,20.0888985 L7.92792206,5.92792206 C7.92792206,4.82335256 8.82335256,3.92792206 9.92792206,3.92792206 Z"
  }), _react.default.createElement("polygon", {
    id: "aph-icon-polygon-refresh",
    fill: color,
    transform: "translate(5.999679, 23.856166) rotate(-315.000000) translate(-5.999679, -23.856166)",
    points: "8.67125147 21.8612882 5.9996786 25.8510429 3.32810572 21.8612882"
  })));
};
/* Exporting */


var _default = IconPencil;
exports.default = _default;