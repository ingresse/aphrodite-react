"use strict";

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* Packages */

/* Icon Itself */
var IconPaymentFreepass = function IconPaymentFreepass(props) {
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
    id: "Pagamento-/-Cortesia",
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
    fill: "#F882B8",
    xlinkHref: "#path-1"
  }), _react.default.createElement("g", {
    id: "gift-box",
    mask: "url(#mask-2)",
    fill: "#FFFFFF",
    fillRule: "nonzero"
  }, _react.default.createElement("g", {
    transform: "translate(8.000000, 8.000000)",
    id: "Shape"
  }, _react.default.createElement("path", {
    d: "M12.4166667,0.5 L9.70833333,0.5 C9.00228881,0.5 8.40177409,0.953063948 8.17815144,1.58333333 L5.82184856,1.58333333 C5.59822591,0.953063948 4.99771119,0.5 4.29166667,0.5 L1.58333333,0.5 L1.58333333,3.75 L0.5,3.75 L0.5,7.27083333 L1.58333333,7.27083333 L1.58333333,13.5 L12.4166667,13.5 L12.4166667,7.27083333 L13.5,7.27083333 L13.5,3.75 L12.4166667,3.75 L12.4166667,0.5 Z M4.83333333,12.4166667 L2.66666667,12.4166667 L2.66666667,7.27083333 L4.83333333,7.27083333 L4.83333333,12.4166667 Z M4.83333333,6.1875 L1.58333333,6.1875 L1.58333333,4.83333333 L4.83333333,4.83333333 L4.83333333,6.1875 Z M4.83333333,2.66666667 L4.83333333,3.75 L2.66666667,3.75 L2.66666667,1.58333333 L4.29166667,1.58333333 C4.59040325,1.58333333 4.83333333,1.82626342 4.83333333,2.125 L4.83333333,2.66666667 Z M8.08333333,7.27083333 L8.08333333,12.4166667 L5.91666667,12.4166667 L5.91666667,4.83333333 L8.08333333,4.83333333 L8.08333333,7.27083333 Z M8.08333333,3.75 L5.91666667,3.75 L5.91666667,2.66666667 L8.08333333,2.66666667 L8.08333333,3.75 Z M9.16666667,2.66666667 L9.16666667,2.125 C9.16666667,1.82626342 9.40959675,1.58333333 9.70833333,1.58333333 L11.3333333,1.58333333 L11.3333333,3.75 L9.16666667,3.75 L9.16666667,2.66666667 Z M11.3333333,12.4166667 L9.16666667,12.4166667 L9.16666667,7.27083333 L11.3333333,7.27083333 L11.3333333,12.4166667 Z M12.4166667,6.1875 L9.16666667,6.1875 L9.16666667,4.83333333 L12.4166667,4.83333333 L12.4166667,6.1875 Z"
  })))));
};
/* Exporting */


var _default = IconPaymentFreepass;
exports.default = _default;