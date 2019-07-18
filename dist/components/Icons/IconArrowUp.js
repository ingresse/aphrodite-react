"use strict";

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* Packages */

/* Icon */
var IconArrowUp = function IconArrowUp(props) {
  var color = props.color,
      size = props.size,
      styles = props.styles;
  return _react.default.createElement("svg", {
    style: styles,
    width: size,
    height: size,
    viewBox: "0 0 30 30",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg"
  }, _react.default.createElement("path", {
    id: "aph-icon-arrow-up-path",
    fill: "none",
    fillRule: "evenodd",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M20 17.714L15 12l-5 5.714"
  }));
};
/* Exporting Component */


var _default = IconArrowUp;
exports.default = _default;