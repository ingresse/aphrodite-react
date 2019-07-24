"use strict";

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* Packages */

/* Icon Itself */
var IconPaymentVisa = function IconPaymentVisa(props) {
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
    id: "Pagamento-/-Visa",
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
    fill: "#F3F2F2",
    xlinkHref: "#path-1"
  }), _react.default.createElement("g", {
    id: "Visa",
    mask: "url(#mask-2)"
  }, _react.default.createElement("g", {
    transform: "translate(3.000000, 11.500000)"
  }, _react.default.createElement("polygon", {
    id: "Path",
    fill: "#293688",
    fillRule: "evenodd",
    points: "8.07027008 7.32904018 9.20044321 0.15890625 11.0301731 0.15890625 9.90006233 7.32904018"
  }), _react.default.createElement("path", {
    d: "M16.4139058,0.344263393 C16.0512881,0.198950893 15.4831787,0.0433258929 14.7737119,0.0433258929 C12.9653601,0.0433258929 11.6915859,1.01604911 11.6806163,2.40964286 C11.6705817,3.4396875 12.589903,4.01424107 13.2844114,4.3575 C13.9966205,4.70825893 14.2361427,4.93332589 14.2326524,5.24678571 C14.2282271,5.72738839 13.663608,5.94709821 13.1375069,5.94709821 C12.4052285,5.94683036 12.0159972,5.83834821 11.4149792,5.57075893 L11.1791967,5.45651786 L10.922223,7.06165179 C11.349723,7.261875 12.140277,7.43551339 12.9609349,7.44428571 C14.8842175,7.44381696 16.1333102,6.48314732 16.1473338,4.99453125 C16.1543144,4.17897321 15.666669,3.55828125 14.6109141,3.04640625 C13.9711911,2.71513393 13.5794044,2.49388393 13.5836427,2.15765625 C13.5836427,1.85973214 13.9154709,1.54104911 14.631669,1.54104911 C15.2300693,1.53100446 15.663615,1.67035714 16.0015512,1.81566964 L16.1652839,1.89837054 L16.4139058,0.344263393 L16.4139058,0.344263393 Z",
    id: "Path",
    fill: "#293688",
    fillRule: "evenodd"
  }), _react.default.createElement("path", {
    d: "M19.5335526,0.15890625 C19.0951454,0.15890625 18.7784003,0.302745536 18.5857479,0.769553571 L15.8739681,7.32930804 L17.8112742,7.32930804 L18.1879155,6.23055804 L20.5025485,6.23055804 L20.7175762,7.32930804 L22.4398546,7.32930804 L20.9331025,0.159107143 L19.533615,0.159107143 L19.5335526,0.15890625 L19.5335526,0.15890625 Z M18.7019252,4.79584821 C18.8530679,4.38294643 19.4307133,2.79180804 19.4307133,2.79180804 C19.4202424,2.810625 19.581108,2.37689732 19.6734765,2.10776786 L19.7973199,2.72564732 C19.7973199,2.72564732 20.1473476,4.43725446 20.220831,4.79604911 L18.7019252,4.79604911 L18.7019252,4.79584821 Z",
    id: "Shape",
    fill: "#293688",
    fillRule: "nonzero"
  }), _react.default.createElement("path", {
    d: "M4.73347645,5.07395089 L4.57229917,4.09098214 C4.2383518,2.94515625 3.20191828,1.70537946 2.04051939,1.08421875 L3.65715374,7.32904018 L5.59489612,7.32904018 L8.50094875,0.15890625 L6.56364266,0.15890625 L4.73347645,5.07395089 Z",
    id: "Path",
    fill: "#293688",
    fillRule: "evenodd"
  }), _react.default.createElement("path", {
    d: "M0.0512950139,0.15890625 L0.0512950139,0.2746875 C2.34729224,0.867991071 3.94130194,2.36792411 4.5723615,4.09104911 L3.90889197,0.770825893 C3.79813712,0.317075893 3.46250693,0.174709821 3.06536011,0.158973214 L0.0512950139,0.15890625 L0.0512950139,0.15890625 Z",
    id: "Path",
    fill: "#F7981D",
    fillRule: "evenodd"
  })))));
};
/* Exporting */


var _default = IconPaymentVisa;
exports.default = _default;