"use strict";

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* Packages */

/* Icon Itself */
var IconPaymentMoney = function IconPaymentMoney(props) {
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
    id: "Pagamento-/-Dinheiro",
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
    fill: "#59B47D",
    xlinkHref: "#path-1"
  }), _react.default.createElement("g", {
    id: "Dinheiro",
    mask: "url(#mask-2)",
    fill: "#FFFFFF"
  }, _react.default.createElement("g", {
    transform: "translate(7.500000, 7.500000)"
  }, _react.default.createElement("path", {
    d: "M7.5,0 C3.36441039,0 0,3.36441039 0,7.5 C0,11.6352844 3.36441039,15 7.5,15 C11.6352844,15 15,11.6352844 15,7.5 C15,3.36441039 11.6352844,0 7.5,0 Z M7.5,13.75 C4.0538025,13.75 1.25,10.9461975 1.25,7.5 C1.25,4.0538025 4.0538025,1.25 7.5,1.25 C10.9461975,1.25 13.75,4.0538025 13.75,7.5 C13.75,10.9461975 10.9461975,13.75 7.5,13.75 Z",
    id: "Shape",
    fillRule: "nonzero"
  }), _react.default.createElement("polygon", {
    id: "Path",
    fillRule: "evenodd",
    points: "8.125 2.8125 6.875 2.8125 6.875 4.375 5 4.375 5 8.125 8.75 8.125 8.75 9.375 5 9.375 5 10.625 6.875 10.625 6.875 12.1875 8.125 12.1875 8.125 10.625 10 10.625 10 6.875 6.25 6.875 6.25 5.625 10 5.625 10 4.375 8.125 4.375"
  })))));
};
/* Exporting */


var _default = IconPaymentMoney;
exports.default = _default;