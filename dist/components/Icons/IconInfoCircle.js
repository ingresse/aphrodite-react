"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* Packages */

/* Icon */
var IconInfoCircle = function IconInfoCircle(props) {
  return _react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: props.size,
    height: props.size,
    viewBox: "0 0 30 30"
  }, _react.default.createElement("defs", null, _react.default.createElement("path", {
    id: "a",
    d: "M27 13.499c0 7.457-6.046 13.5-13.5 13.5-7.458 0-13.5-6.043-13.5-13.5C0 6.044 6.042 0 13.5 0 20.954 0 27 6.044 27 13.499z"
  }), _react.default.createElement("mask", {
    id: "b",
    width: "30",
    height: "29.999",
    x: "-1.5",
    y: "-1.5"
  }, _react.default.createElement("path", {
    fill: "#fff",
    d: "M-1.5-1.5h30v29.999h-30z"
  }), _react.default.createElement("use", {
    xlinkHref: "#a"
  }))), _react.default.createElement("g", {
    fill: "none",
    fillRule: "evenodd",
    transform: "translate(1.5 1.5)"
  }, _react.default.createElement("use", {
    stroke: props.color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "3",
    mask: "url(#b)",
    xlinkHref: "#a"
  }), _react.default.createElement("g", {
    transform: "matrix(1 0 0 -1 12 20)"
  }, _react.default.createElement("path", {
    stroke: props.color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1.5",
    d: "M1.5.5v8"
  }), _react.default.createElement("circle", {
    cx: "1.5",
    cy: "12",
    r: "1",
    fill: props.color
  }))));
};
/* Exporting Component */


var _default = IconInfoCircle;
exports.default = _default;