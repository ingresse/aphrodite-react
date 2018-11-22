"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* Packages */

/* Icon */
var IconArrowDownCircle = function IconArrowDownCircle(props) {
  return _react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: props.size,
    height: props.size,
    viewBox: "0 0 30 30"
  }, _react.default.createElement("defs", null, _react.default.createElement("path", {
    id: "a",
    d: "M3.953 3.953c5.272-5.27 13.82-5.27 19.092 0 5.273 5.274 5.273 13.82 0 19.091-5.271 5.275-13.82 5.275-19.09 0-5.273-5.27-5.273-13.82-.002-19.09z"
  }), _react.default.createElement("mask", {
    id: "b",
    width: "30",
    height: "30",
    x: "-1.5",
    y: "-1.5"
  }, _react.default.createElement("path", {
    fill: "#fff",
    d: "M-1.5-1.5h30v30h-30z",
    id: "path8"
  }), _react.default.createElement("use", {
    xlinkHref: "#a"
  }))), _react.default.createElement("g", {
    fill: "none",
    fillRule: "evenodd",
    stroke: props.color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    transform: "matrix(-1 0 0 1 28.5 1.5)"
  }, _react.default.createElement("use", {
    strokeWidth: "3",
    mask: "url(#b)",
    xlinkHref: "#a",
    id: "use14"
  }), _react.default.createElement("path", {
    strokeWidth: "1.5",
    d: "m 9.006001,12.255031 4.495,4.495 4.493,-4.495"
  })));
};
/* Exporting Component */


var _default = IconArrowDownCircle;
exports.default = _default;