"use strict";

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* Packages */

/* Icon Itself */
var IconExternalTicket = function IconExternalTicket(props) {
  var _React$createElement;

  /**
   * Inherit props
   */
  var size = props.size,
      width = props.width,
      height = props.height,
      color = props.color;
  /**
   * Render
   */

  return _react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width || size,
    height: height || size,
    viewBox: "0 0 30 30"
  }, _react.default.createElement("g", {
    id: "aph-icon-external-ticket-group",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, _react.default.createElement("g", {
    id: "aph-icon-external-ticket-subgroup",
    transform: "translate(15.000000, 15.500000) rotate(-270.000000) translate(-15.000000, -15.500000) translate(4.000000, 4.500000)",
    stroke: color,
    strokeWidth: "2.3"
  }, _react.default.createElement("path", (_React$createElement = {
    id: "aph-icon-external-ticket-path-one",
    d: "M1.5,2 L19.5,2 C20.0522847,2 20.5,2.44771525 20.5,3 L20.5,7 C17.8333333,7 16.5,8 16.5,10 C16.5,12 17.8333333,13 20.5,13 L20.5,17 C20.5,17.5522847 20.0522847,18 19.5,18 L5.5,18"
  }, _React$createElement["id"] = "Rectangle", _React$createElement.transform = "translate(11.000000, 10.000000) rotate(-90.000000) translate(-11.000000, -10.000000)", _React$createElement)), _react.default.createElement("path", {
    id: "aph-icon-external-ticket-path-two",
    d: "M0,21.5 L22,14.5"
  }))));
};
/* Exporting */


var _default = IconExternalTicket;
exports.default = _default;