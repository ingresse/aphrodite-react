"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* Packages */

/* Icon */
var IconCheck = function IconCheck(props) {
  return _react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    width: props.size,
    height: props.size,
    viewBox: "0 0 30 30"
  }, _react.default.createElement("defs", null, _react.default.createElement("path", {
    id: "a",
    d: "M27.5 14c0 7.457-6.043 13.5-13.5 13.5S.5 21.457.5 14C.5 6.545 6.543.5 14 .5S27.5 6.545 27.5 14z"
  }), _react.default.createElement("mask", {
    id: "b",
    width: "30",
    height: "30",
    x: "-1.5",
    y: "-1.5"
  }, _react.default.createElement("path", {
    fill: "#fff",
    d: "M-1-1h30v30H-1z"
  }), _react.default.createElement("use", {
    xlinkHref: "#a"
  }))), _react.default.createElement("g", {
    fill: "none",
    fillRule: "evenodd",
    stroke: props.color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    transform: "translate(1 1)"
  }, _react.default.createElement("use", {
    strokeWidth: "3",
    mask: "url(#b)",
    xlinkHref: "#a"
  }), _react.default.createElement("path", {
    strokeWidth: "1.5",
    d: "M7.808 14.149l4.291 3.994 8.821-8.554"
  })));
};
/* Exporting */


var _default = IconCheck;
exports.default = _default;