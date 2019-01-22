"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* Packages */

/* Icon */
var IconArrowUpCircle = function IconArrowUpCircle(props) {
  return _react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: props.size,
    height: props.size,
    viewBox: "0 0 30 30"
  }, _react.default.createElement("defs", null, _react.default.createElement("path", {
    d: "M3.953 3.953c5.272-5.27 13.82-5.27 19.092 0 5.273 5.274 5.273 13.82 0 19.091-5.271 5.275-13.82 5.275-19.09 0-5.273-5.27-5.273-13.82-.002-19.09z",
    id: "a"
  }), _react.default.createElement("mask", {
    y: "-1.5",
    x: "-1.5",
    height: "30",
    width: "30",
    id: "b"
  }, _react.default.createElement("path", {
    id: "path8",
    d: "M-1.5-1.5h30v30h-30z",
    fill: "#fff"
  }), _react.default.createElement("use", {
    id: "use10",
    xlinkHref: "#a"
  }))), _react.default.createElement("g", {
    transform: "matrix(-1 0 0 1 28.5 1.5)",
    strokeLinejoin: "round",
    strokeLinecap: "round",
    stroke: props.color,
    fillRule: "evenodd",
    fill: "none"
  }, _react.default.createElement("use", {
    strokeWidth: "2",
    xlinkHref: "#a",
    mask: "url(#b)"
  }), _react.default.createElement("path", {
    strokeWidth: "1.5",
    d: "m 17.993999,15.743696 -4.495,-4.495 -4.4929997,4.495"
  })));
};
/* Exporting Component */


var _default = IconArrowUpCircle;
exports.default = _default;