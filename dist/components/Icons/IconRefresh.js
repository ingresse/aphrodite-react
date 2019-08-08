"use strict";

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* Packages */

/* Icon Itself */
var IconRefresh = function IconRefresh(props) {
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
    id: "Icon-/-30-/-Refresh-/-Ocean",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, _react.default.createElement("g", {
    id: "Group",
    transform: "translate(1.500000, 6.000000)"
  }, _react.default.createElement("path", {
    id: "Path-4-Copy-3",
    fill: color,
    transform: "translate(21.649747, 10.449747) rotate(-315.000000) translate(-21.649747, -10.449747) ",
    d: "M19.0247475,13.9497475 C18.5414983,13.9497475 18.1497475,13.5579966 18.1497475,13.0747475 L18.1497475,7.82474747 C18.1497475,7.34149831 18.5414983,6.94974747 19.0247475,6.94974747 L24.2747475,6.94974747 C24.7579966,6.94974747 25.1497475,7.34149831 25.1497475,7.82474747 C25.1497475,8.30799662 24.7579966,8.69974747 24.2747475,8.69974747 L20.7747475,8.69974747 C20.2914983,8.69974747 19.8997475,9.09149831 19.8997475,9.57474747 L19.8997475,13.0747475 C19.8997475,13.5579966 19.5079966,13.9497475 19.0247475,13.9497475 Z"
  }), _react.default.createElement("path", {
    id: "Path-4-Copy-4",
    fill: color,
    transform: "translate(5.349747, 7.449747) rotate(-135.000000) translate(-5.349747, -7.449747) ",
    d: "M2.72474747,10.9497475 C2.24149831,10.9497475 1.84974747,10.5579966 1.84974747,10.0747475 L1.84974747,4.82474747 C1.84974747,4.34149831 2.24149831,3.94974747 2.72474747,3.94974747 L7.97474747,3.94974747 C8.45799662,3.94974747 8.84974747,4.34149831 8.84974747,4.82474747 C8.84974747,5.30799662 8.45799662,5.69974747 7.97474747,5.69974747 L4.47474747,5.69974747 C3.99149831,5.69974747 3.59974747,6.09149831 3.59974747,6.57474747 L3.59974747,10.0747475 C3.59974747,10.5579966 3.20799662,10.9497475 2.72474747,10.9497475 Z"
  }), _react.default.createElement("path", {
    id: "Oval",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M20,2.63083009 C18.4097668,1.00521174 16.2144208,0 13.789779,0 C8.93531811,0 5,4.02943725 5,9"
  }), _react.default.createElement("path", {
    id: "Oval-Copy",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    transform: "translate(14.500000, 13.500000) rotate(-180.000000) translate(-14.500000, -13.500000) ",
    d: "M22,11.6308301 C20.4097668,10.0052117 18.2144208,9 15.789779,9 C10.9353181,9 7,13.0294373 7,18"
  }))));
};
/* Exporting */


var _default = IconRefresh;
exports.default = _default;