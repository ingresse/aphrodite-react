"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* Core Packages */

/* Icon Itself */
var IconLoaderDonut = function IconLoaderDonut(props) {
  var color = props.color,
      size = props.size;
  return _react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "".concat(size, "px"),
    height: "".concat(size, "px"),
    viewBox: "0 0 20 20"
  }, _react.default.createElement("path", {
    fill: "none",
    fillRule: "evenodd",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "4",
    d: "M9.5 17.5A7.5 7.5 0 1 0 2 10"
  }));
};
/* Icon Default Props */


IconLoaderDonut.defaultProps = {
  color: 'white',
  size: 20
};
/* Icon Properties Types */

IconLoaderDonut.propTypes = {
  color: _propTypes.default.string,
  size: _propTypes.default.number
};
/* Exporting */

var _default = IconLoaderDonut;
exports.default = _default;