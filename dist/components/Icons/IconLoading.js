"use strict";

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* Packages */

/**
 * Icon
 * By Sam Herbert (@sherb), for everyone. More @ http://goo.gl/7AJzbL
 */
var IconLoading = function IconLoading(props) {
  /**
   * Inherit props
   */
  var color = props.color,
      width = props.width,
      height = props.height,
      size = props.size;
  /**
   * Render
   */

  return _react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 120 30",
    width: width || size || 120,
    height: height || size || 30,
    fill: color
  }, _react.default.createElement("circle", {
    cx: "15",
    cy: "15",
    r: "15"
  }, _react.default.createElement("animate", {
    attributeName: "r",
    from: "15",
    to: "15",
    begin: "0s",
    dur: "0.8s",
    values: "15;9;15",
    calcMode: "linear",
    repeatCount: "indefinite"
  }), _react.default.createElement("animate", {
    attributeName: "fill-opacity",
    from: "1",
    to: "1",
    begin: "0s",
    dur: "0.8s",
    values: "1;.5;1",
    calcMode: "linear",
    repeatCount: "indefinite"
  })), _react.default.createElement("circle", {
    cx: "60",
    cy: "15",
    r: "9",
    fillOpacity: "0.3"
  }, _react.default.createElement("animate", {
    attributeName: "r",
    from: "9",
    to: "9",
    begin: "0s",
    dur: "0.8s",
    values: "9;15;9",
    calcMode: "linear",
    repeatCount: "indefinite"
  }), _react.default.createElement("animate", {
    attributeName: "fill-opacity",
    from: "0.5",
    to: "0.5",
    begin: "0s",
    dur: "0.8s",
    values: ".5;1;.5",
    calcMode: "linear",
    repeatCount: "indefinite"
  })), _react.default.createElement("circle", {
    cx: "105",
    cy: "15",
    r: "15"
  }, _react.default.createElement("animate", {
    attributeName: "r",
    from: "15",
    to: "15",
    begin: "0s",
    dur: "0.8s",
    values: "15;9;15",
    calcMode: "linear",
    repeatCount: "indefinite"
  }), _react.default.createElement("animate", {
    attributeName: "fill-opacity",
    from: "1",
    to: "1",
    begin: "0s",
    dur: "0.8s",
    values: "1;.5;1",
    calcMode: "linear",
    repeatCount: "indefinite"
  })));
};
/* Exporting */


var _default = IconLoading;
exports.default = _default;