"use strict";

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* Packages */

/* Icon Itself */
var IconPaymentOthers = function IconPaymentOthers(props) {
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
    id: "Pagamento-/-Outros",
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
    fill: "#6798E5",
    xlinkHref: "#path-1"
  }), _react.default.createElement("g", {
    id: "Outros",
    mask: "url(#mask-2)",
    fill: "#FFFFFF",
    fillRule: "nonzero"
  }, _react.default.createElement("g", {
    transform: "translate(8.500000, 8.500000)",
    id: "Shape"
  }, _react.default.createElement("path", {
    d: "M7.0414022,0 L5.95806886,0 C2.62687174,0.277241768 0,3.08227604 0,6.49257507 C0,9.90287409 2.62687174,12.7077758 5.95806886,12.9850176 L7.0414022,12.9850176 C10.3728638,12.708041 13,9.90313929 13,6.49257507 C13,3.08201084 10.3728638,0.276976574 7.0414022,0 Z M7.0414022,3.27943458 C8.57647707,3.53877691 9.74973553,4.8807013 9.74973553,6.49257507 C9.74973553,8.10444883 8.57647707,9.44637322 7.0414022,9.70571555 L7.0414022,8.59316866 C7.9743754,8.35093016 8.6664022,7.50236619 8.6664022,6.49230991 C8.6664022,5.48212101 7.9743754,4.63355704 7.0414022,4.39131854 L7.0414022,3.27943458 Z M6.49973553,7.57873695 L5.95806886,7.57873695 L5.95806886,11.8959387 C3.22487384,11.6221443 1.08333333,9.30357579 1.08333333,6.49257507 C1.08333333,3.68157434 3.22487384,1.3628733 5.95806886,1.08921142 L5.95806886,5.40641319 L6.49973553,5.40641319 C7.09720866,5.40641319 7.58306886,5.89354192 7.58306886,6.49257507 C7.58306886,7.09160821 7.09720866,7.57873695 6.49973553,7.57873695 Z M7.0414022,11.8959387 L7.0414022,10.799435 C9.17553711,10.530944 10.8330689,8.70401233 10.8330689,6.49257507 C10.8330689,4.2811378 9.17553711,2.45420612 7.0414022,2.18558257 L7.0414022,1.08921142 C9.77486165,1.3626081 11.9166667,3.68130915 11.9166667,6.49257507 C11.9166667,9.30384098 9.77486165,11.6224094 7.0414022,11.8959387 Z"
  })))));
};
/* Exporting */


var _default = IconPaymentOthers;
exports.default = _default;