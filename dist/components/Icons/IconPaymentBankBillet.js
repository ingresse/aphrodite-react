"use strict";

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* Packages */

/* Icon Itself */
var IconPaymentBankBillet = function IconPaymentBankBillet(props) {
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
    id: "aph-icon-defs-rect-payment-bank-billet",
    x: "0",
    y: "4",
    width: "30",
    height: "22.5",
    rx: "2"
  })), _react.default.createElement("g", {
    id: "aph-icon-group-payment-bank-billet",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, _react.default.createElement("mask", {
    id: "mask-2",
    fill: "#FFFFFF"
  }, _react.default.createElement("use", {
    xlinkHref: "#aph-icon-defs-rect-payment-bank-billet"
  })), _react.default.createElement("use", {
    id: "Fundo",
    fill: "#F8F8F8",
    xlinkHref: "#aph-icon-defs-rect-payment-bank-billet"
  }), _react.default.createElement("path", {
    fill: "#000000",
    mask: "url(#mask-2)",
    d: "M12.7692308,4 L14.3076923,4 L14.3076923,26.5 L12.7692308,26.5 L12.7692308,4 Z M17.2307692,4 L18.7692308,4 L18.7692308,26.5 L17.2307692,26.5 L17.2307692,4 Z M21.6923077,4 L25.5384615,4 L25.5384615,26.5 L21.6923077,26.5 L21.6923077,4 Z M4.46153846,4 L9.84615385,4 L9.84615385,26.5 L4.46153846,26.5 L4.46153846,4 Z M0,4 L1.53846154,4 L1.53846154,26.5 L0,26.5 L0,4 Z M28.4615385,4 L30,4 L30,26.5 L28.4615385,26.5 L28.4615385,4 Z"
  })));
};
/* Exporting */


var _default = IconPaymentBankBillet;
exports.default = _default;