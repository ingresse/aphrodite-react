"use strict";

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* Packages */

/* Icon Itself */
var IconPaymentMastercard = function IconPaymentMastercard(props) {
  /**
   * Inherit props
   */
  var size = props.size,
      width = props.width,
      height = props.height;
  /**
   * Render
   */

  return _react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    width: width || size,
    height: height || size,
    viewBox: "0 0 30 30"
  }, _react.default.createElement("defs", null, _react.default.createElement("rect", {
    id: "path-1",
    x: "0",
    y: "4",
    width: "30",
    height: "22.5",
    rx: "2"
  })), _react.default.createElement("g", {
    id: "Pagamento-/-Master",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, _react.default.createElement("mask", {
    id: "mask-2",
    fill: "white"
  }, _react.default.createElement("use", {
    xlinkHref: "#path-1"
  })), _react.default.createElement("use", {
    id: "Fundo",
    fill: "#2D2D2D",
    xlinkHref: "#path-1"
  }), _react.default.createElement("g", {
    id: "Master",
    mask: "url(#mask-2)"
  }, _react.default.createElement("g", {
    transform: "translate(3.500000, 8.500000)"
  }, _react.default.createElement("ellipse", {
    id: "Oval",
    fill: "#EE0005",
    cx: "6.93714953",
    cy: "6.74795455",
    rx: "6.93714953",
    ry: "6.74795455"
  }), _react.default.createElement("ellipse", {
    id: "Oval",
    fill: "#F9A000",
    cx: "15.5560164",
    cy: "6.74795455",
    rx: "6.93714953",
    ry: "6.74795455"
  }), _react.default.createElement("path", {
    d: "M8.61897196,6.74785227 C8.61897196,8.89046591 9.64577103,10.799642 11.2466355,12.0357102 C12.8474474,10.7995909 13.8742991,8.89046591 13.8742991,6.74785227 C13.8742991,4.60523864 12.8475,2.6960625 11.2466355,1.45999432 C9.6458236,2.69616477 8.61897196,4.60528977 8.61897196,6.74785227 Z",
    id: "Path",
    fill: "#FF6300"
  })))));
};
/* Exporting */


var _default = IconPaymentMastercard;
exports.default = _default;