"use strict";

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* Packages */

/* Icon */
var IconPencil = function IconPencil(props) {
  return _react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 15 15",
    width: props.size,
    height: props.size
  }, _react.default.createElement("g", {
    fill: "none",
    fillRule: "evenodd",
    stroke: "none",
    strokeWidth: "1",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, _react.default.createElement("path", {
    stroke: props.color,
    strokeWidth: "1.1375",
    d: "M11.1597456,1 L1.98241676,10.1758698 L1,14 L4.82364385,13.0161242 L14,3.83976805 L11.1597456,1 L11.1597456,1 Z M1.98241676,10.2750842 L4.6676806,12.8927224 L1.98241676,10.2750842 Z"
  })));
};
/* Exporting */


var _default = IconPencil;
exports.default = _default;